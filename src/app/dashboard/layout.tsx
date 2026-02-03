import Link from 'next/link';
import { LogOut } from 'lucide-react';
import { logout } from '@/app/actions/auth';
import SideNav from './sidenav';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col md:flex-row md:overflow-hidden bg-slate-50">
      {/* Sidebar */}
      <div className="w-full flex-none md:w-64 bg-slate-900 text-white p-4">
        <div className="flex h-full flex-col">
            {/* Logo / Brand */}
            <div className="mb-0">
                <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg">
                    <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center font-serif font-bold text-lg">
                        U
                    </div>
                    <div>
                        <p className="font-bold text-sm tracking-wide">UNIVERSITY</p>
                        <p className="text-xs text-slate-400 font-medium">ADMIN PORTAL</p>
                    </div>
                </div>
            </div>

            {/* Nav Links */}
            <SideNav />

            {/* Logout */}
            <form action={logout}>
                <button type="submit" className="w-full flex items-center gap-3 p-3 rounded-md hover:bg-red-900/40 text-red-300 hover:text-red-200 transition-colors mt-auto">
                    <LogOut size={20} />
                    <span>Sign Out</span>
                </button>
            </form>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow md:overflow-y-auto">
         {/* Top Header which is often useful in dashbords */}
         <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between sticky top-0 z-10 w-full">
            <h2 className="font-semibold text-gray-700">Academic Year 2026-2027</h2>
            <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                <span className="text-xs text-gray-500 font-medium uppercase">System Operational</span>
            </div>
         </div>
         <div className="p-6 md:p-12">
            {children}
         </div>
      </div>
    </div>
  );
}
