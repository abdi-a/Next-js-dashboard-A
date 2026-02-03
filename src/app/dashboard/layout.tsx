import Link from 'next/link';
import { LayoutDashboard, User, LogOut } from 'lucide-react';
import { logout } from '@/app/actions/auth';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col md:flex-row md:overflow-hidden">
      {/* Sidebar */}
      <div className="w-full flex-none md:w-64 bg-slate-900 text-white p-4">
        <div className="flex h-full flex-col justify-between">
            {/* Logo / Brand */}
            <div className="mb-4">
                <div className="flex items-center gap-2 p-2 bg-slate-800 rounded-lg">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center font-bold">
                        S
                    </div>
                    <span className="font-bold text-lg">SecureDash</span>
                </div>
            </div>

            {/* Nav Links */}
            <nav className="flex-grow space-y-2">
                <Link href="/dashboard" className="flex items-center gap-3 p-3 rounded-md hover:bg-slate-800 transition-colors">
                    <LayoutDashboard size={20} />
                    <span>Dashboard</span>
                </Link>
                <Link href="/dashboard/profile" className="flex items-center gap-3 p-3 rounded-md hover:bg-slate-800 transition-colors">
                    <User size={20} />
                    <span>Profile</span>
                </Link>
            </nav>

            {/* Logout */}
            <form action={logout}>
                <button type="submit" className="w-full flex items-center gap-3 p-3 rounded-md hover:bg-red-900/50 text-red-300 hover:text-red-200 transition-colors">
                    <LogOut size={20} />
                    <span>Sign Out</span>
                </button>
            </form>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12 bg-slate-50">
        {children}
      </div>
    </div>
  );
}
