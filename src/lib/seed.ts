import { db } from './db'
import { students, courses } from './schema'

export async function seedDatabase() {
    // Check if data exists
    const existingStudents = await db.select().from(students).limit(1)
    if (existingStudents.length > 0) return { message: 'Database already seeded' }

    // Seed Courses
    const newCourses = [
        { title: 'Introduction to Computer Science', code: 'CS101', capacity: 100 },
        { title: 'Advanced Calculus', code: 'MATH202', capacity: 60 },
        { title: 'Business Ethics', code: 'BUS305', capacity: 80 },
        { title: 'Modern European History', code: 'HIST150', capacity: 120 },
        { title: 'Principles of Marketing', code: 'MKT101', capacity: 90 },
    ]
    
    await db.insert(courses).values(newCourses)

    // Seed Students
    const names = ['Emma Thompson', 'Liam Johnson', 'Olivia Smith', 'Noah Williams', 'Ava Brown', 'James Jones', 'Sophia Garcia', 'Lucas Miller']
    const majors = ['Computer Science', 'Business Admin', 'Mechanical Engineering', 'Law', 'Physics']
    
    const newStudents = names.map((name, i) => ({
        name,
        email: `${name.toLowerCase().replace(' ', '.')}${i}@uni.edu`,
        studentId: `S-2026-${(i + 1).toString().padStart(3, '0')}`,
        course: majors[Math.floor(Math.random() * majors.length)],
        enrolledAt: new Date(Date.now() - Math.floor(Math.random() * 10000000000)), // Random time in past
        status: 'Active'
    }))

    await db.insert(students).values(newStudents)

    return { message: 'Database seeded successfully' }
}
