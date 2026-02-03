'use server'
 
import { z } from 'zod'
import { createSession, deleteSession } from '@/lib/session'
import { redirect } from 'next/navigation'
import { SignupFormSchema, LoginFormSchema } from '@/lib/definitions'
import { db } from '@/lib/db'
import { users, students } from '@/lib/schema'
import { eq } from 'drizzle-orm'
import bcrypt from 'bcryptjs'

export async function signup(prevState: any, formData: FormData) {
  // 1. Validate form fields
  const result = SignupFormSchema.safeParse(Object.fromEntries(formData))
 
  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    }
  }
 
  const { name, email, password } = result.data

  // 2. Check if user already exists
  // We explicitly check this to show a friendly error
  const existingUser = await db.select().from(users).where(eq(users.email, email)).get()
  
  if (existingUser) {
      return {
          errors: {
              email: ['An account with this email already exists.']
          }
      }
  }
  
  // 3. Hash the password
  const hashedPassword = await bcrypt.hash(password, 10)
 
  // 4. Save the user to the database
  const resultObj = await db
      .insert(users)
      .values({ name, email, password: hashedPassword })
      .returning({ insertedId: users.id })

  if (!resultObj || resultObj.length === 0) {
      return {
          message: 'An error occurred while creating your account.'
      }
  }
  
  const userId = resultObj[0].insertedId.toString()

  // 4.1 Create a Student Record automatically (Integration for "Real Data")
  // For this demo, every signup is treated as a student enrollment.
  const studentId = `S-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
  
  await db.insert(students).values({
      name: name,
      email: email,
      studentId: studentId,
      course: "General Studies", // Default assignment
      enrolledAt: new Date(),
      status: "Active"
  });

  // 5. Create user session
  await createSession(userId)
 
  // 6. Redirect to dashboard
  redirect('/dashboard')
}

export async function login(prevState: any, formData: FormData) {
  // 1. Validate form fields
  const result = LoginFormSchema.safeParse(Object.fromEntries(formData))
 
  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    }
  }
 
  const { email, password } = result.data

  // 2. Lookup user 
  const user = await db.select().from(users).where(eq(users.email, email)).get()
  
  if (!user) {
      // Security: Generic error message to prevent sniffing
      return {
          message: 'Invalid email or password.'
      }
  }

  // 3. Compare password
  const isMatch = await bcrypt.compare(password, user.password)

  if (!isMatch) {
       return {
          message: 'Invalid email or password.'
      }
  }
 
  // 4. Create session
  await createSession(user.id.toString())
 
  // 5. Redirect
  redirect('/dashboard')
}

export async function logout() {
  await deleteSession()
  redirect('/sign-in')
}
