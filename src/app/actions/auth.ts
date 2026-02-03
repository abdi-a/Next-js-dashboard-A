'use server'
 
import { z } from 'zod'
import { createSession, deleteSession } from '@/lib/session'
import { redirect } from 'next/navigation'
import { SignupFormSchema, LoginFormSchema } from '@/lib/definitions'
// import bcrypt from 'bcryptjs' // We'll uncomment this when we install types if needed, or use require for simplicity if types fail
const bcrypt = require('bcryptjs')

export async function signup(prevState: any, formData: FormData) {
  // 1. Validate form fields
  const result = SignupFormSchema.safeParse(Object.fromEntries(formData))
 
  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    }
  }
 
  // 2. Prepare data for insertion
  const { name, email, password } = result.data
  
  // 3. Hash the password
  // In a real app, strict salt rounds are recommended (e.g., 10)
  const hashedPassword = await bcrypt.hash(password, 10)
 
  // 4. Save the user to the database
  // MOCK: In a real app, assume we insert into a 'users' table
  // const user = await db.insert(users).values({ name, email, password: hashedPassword }).returning()
  
  // For this tutorial, we will Simulate a successful DB insertion by using a mock ID
  const mockUserId = '1' 

  // 5. Create user session
  await createSession(mockUserId)
 
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
  // MOCK: We'll pretend the user exists and the has matches if the email is 'user@example.com'
  // In real life: const user = await db.query.users.findFirst({ where: eq(users.email, email) })
  
  // Mock logic for tutorial:
  if (email !== 'user@example.com') {
      return {
          message: 'Invalid credentials. (Hint: Use user@example.com)'
      }
  }

  // 3. Compare password
  // In real life: const match = await bcrypt.compare(password, user.password)
  // For tutorial, we'll accept any password since we can't really check against a non-existent DB record's hash 
  // UNLESS we hardcode a hash. Let's hardcode a hash for 'password123' for better realism? 
  // Actually, simpler is better for the *Action* flow explanation.
  
  // Let's pretend it matched
  const isMatch = true 

  if (!isMatch) {
       return {
          message: 'Invalid credentials.'
      }
  }
 
  // 4. Create session
  await createSession('1') // Mock User ID
 
  // 5. Redirect
  redirect('/dashboard')
}

export async function logout() {
  await deleteSession()
  redirect('/sign-in')
}
