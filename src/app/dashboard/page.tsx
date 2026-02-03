import { getUser } from "@/lib/dal";
import { GraduationCap, Users, BookOpen, Clock } from "lucide-react";
import { db } from "@/lib/db";
import { students, courses, users } from "@/lib/schema";
import { count, desc } from "drizzle-orm";

export default async function DashboardPage() {
  const user = await getUser();

  // "Real Data" Fetching
  const studentCount = await db.select({ count: count() }).from(students).then(res => res[0].count);
  const courseCount = await db.select({ count: count() }).from(courses).then(res => res[0].count);
  const staffCount = await db.select({ count: count() }).from(users).then(res => res[0].count);
  
  const recentStudents = await db.select().from(students).orderBy(desc(students.enrolledAt)).limit(5);

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
        <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Admin Overview</h1>
            <p className="text-slate-500">Welcome back, <span className="font-semibold text-slate-800">{user?.name}</span>.</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-4">
        {/* Card 1 */}
        <div className="p-6 bg-white rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-slate-100">
            <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 rounded-lg text-blue-700">
                    <GraduationCap size={24} />
                </div>
                <div>
                   <p className="text-sm font-medium text-slate-500">Total Students</p>
                   <p className="text-2xl font-bold text-slate-900">{studentCount}</p>
                </div>
            </div>
        </div>
        
        {/* Card 2 */}
         <div className="p-6 bg-white rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-slate-100">
            <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-50 rounded-lg text-emerald-700">
                    <Users size={24} />
                </div>
                <div>
                   <p className="text-sm font-medium text-slate-500">Faculty Staff</p>
                   {/* We count users in DB as 'staff' for this demo */}
                   <p className="text-2xl font-bold text-slate-900">{staffCount}</p>
                </div>
            </div>
        </div>

        {/* Card 3 */}
         <div className="p-6 bg-white rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-slate-100">
            <div className="flex items-center gap-4">
                <div className="p-3 bg-indigo-50 rounded-lg text-indigo-700">
                    <BookOpen size={24} />
                </div>
                <div>
                   <p className="text-sm font-medium text-slate-500">Active Courses</p>
                   <p className="text-2xl font-bold text-slate-900">{courseCount}</p>
                </div>
            </div>
        </div>

           {/* Card 4 */}
         <div className="p-6 bg-white rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-slate-100">
            <div className="flex items-center gap-4">
                <div className="p-3 bg-amber-50 rounded-lg text-amber-700">
                    <Clock size={24} />
                </div>
                <div>
                   <p className="text-sm font-medium text-slate-500">Pending Apps</p>
                   {/* Mock logic for now as we don't have an 'apps' table yet */}
                   <p className="text-2xl font-bold text-slate-900">0</p>
                </div>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Enrollments */}
        <div className="bg-white rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-slate-100 overflow-hidden">
            <div className="p-6 border-b border-slate-50 flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900">Recent Enrollments</h3>
                <button className="text-sm text-blue-600 font-medium hover:text-blue-700">View All</button>
            </div>
            <div className="divide-y divide-slate-50">
                {recentStudents.length === 0 ? (
                    <div className="p-8 text-center text-slate-500">No students enrolled yet.</div>
                ) : (
                    recentStudents.map((student) => (
                        <div key={student.id} className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">
                                    {student.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-slate-900">{student.name}</p>
                                    <p className="text-xs text-slate-500">{student.course}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-xs font-mono text-slate-500">{student.studentId}</p>
                                <p className="text-xs text-slate-400">
                                    {new Date(student.enrolledAt).toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>

        {/* System Alerts / Notices */}
         <div className="bg-white rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-slate-100 overflow-hidden">
            <div className="p-6 border-b border-slate-50 flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900">Campus Alerts</h3>
                <button className="text-sm text-blue-600 font-medium hover:text-blue-700">History</button>
            </div>
            <div className="p-6 space-y-4">
                <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-lg">
                    <p className="text-sm font-bold text-amber-900">Maintenance Scheduled</p>
                    <p className="text-sm text-amber-800 mt-1">LMS Server maintenance schedule for this Saturday at 2:00 AM EST.</p>
                </div>
                 <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
                    <p className="text-sm font-bold text-blue-900">Exam Schedule Published</p>
                    <p className="text-sm text-blue-800 mt-1">Final exam schedule for Spring 2026 is now available for download.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
