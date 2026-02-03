import { getUser } from "@/lib/dal"

export default async function ProfilePage() {
    const user = await getUser()

  return (
    <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-slate-800">User Profile</h1>
        
        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center text-2xl font-bold text-slate-500">
                    {user?.name?.charAt(0) || 'U'}
                </div>
                <div>
                    <h2 className="text-xl font-bold text-slate-900">{user?.name}</h2>
                    <p className="text-slate-500">{user?.email}</p>
                </div>
            </div>

            <div className="space-y-4">
                <div className="border-t border-slate-100 pt-4">
                    <p className="text-sm font-medium text-slate-500 mb-1">User ID</p>
                    <p className="text-slate-900 font-mono bg-slate-50 p-2 rounded text-sm">{user?.id}</p>
                </div>
                 <div className="border-t border-slate-100 pt-4">
                    <p className="text-sm font-medium text-slate-500 mb-1">Role</p>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Admin
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}
