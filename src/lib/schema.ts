import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  role: text('role').default('admin'), // 'admin' | 'faculty'
})

export const students = sqliteTable('students', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  studentId: text('student_id').notNull().unique(), // e.g., S-2026-001
  course: text('course').notNull(), // e.g., "Computer Science"
  status: text('status').notNull().default('Active'), // Active, Graduated, etc.
  enrolledAt: integer('enrolled_at', { mode: 'timestamp' }).notNull(),
})

export const courses = sqliteTable('courses', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  code: text('code').notNull(), // CS101
  capacity: integer('capacity').notNull(),
})

export type NewUser = typeof users.$inferInsert
export type User = typeof users.$inferSelect
export type Student = typeof students.$inferSelect
export type Course = typeof courses.$inferSelect
