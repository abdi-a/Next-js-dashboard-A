import { getUser } from "@/lib/dal";

export default async function DashboardPage() {
  const user = await getUser();

  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between border-b border-slate-200 pb-4">
        <h1 className="text-3xl font-bold text-slate-800">Dashboard</h1>
        <span className="text-slate-500">Welcome back, {user?.name}</span>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-medium text-slate-900">Total Users</h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">1,234</p>
            <p className="text-sm text-slate-500 mt-1">+12% from last month</p>
        </div>
        
        {/* Card 2 */}
         <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-medium text-slate-900">Active Sessions</h3>
            <p className="text-3xl font-bold text-emerald-600 mt-2">56</p>
            <p className="text-sm text-slate-500 mt-1">Currently online</p>
        </div>

        {/* Card 3 */}
         <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-medium text-slate-900">Security Score</h3>
            <p className="text-3xl font-bold text-indigo-600 mt-2">98%</p>
            <p className="text-sm text-slate-500 mt-1">System is secure</p>
        </div>
      </div>

      <div className="mt-8 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-medium text-slate-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
                      <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                          <span className="text-slate-700">New user sign up verified</span>
                      </div>
                      <span className="text-sm text-slate-400">2 mins ago</span>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
}
