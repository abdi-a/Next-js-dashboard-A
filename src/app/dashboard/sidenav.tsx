'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, GraduationCap, BookOpen, Users, Settings, Bell } from 'lucide-react';
import clsx from 'clsx';

const academicLinks = [
  { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Students', href: '/dashboard/students', icon: GraduationCap },
  { name: 'Courses', href: '/dashboard/courses', icon: BookOpen },
  { name: 'Faculty', href: '/dashboard/faculty', icon: Users },
];

const sysLinks = [
  { name: 'Notifications', href: '/dashboard/notifications', icon: Bell },
  { name: 'System Settings', href: '/dashboard/settings', icon: Settings },
];

export default function SideNav() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-1 overflow-y-auto">
        <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 mt-0">Academic</p>
        <nav className="space-y-1">
        {academicLinks.map((link) => {
            const LinkIcon = link.icon;
            const isActive = pathname === link.href;
            return (
            <Link
                key={link.name}
                href={link.href}
                className={clsx(
                'flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-sm font-medium',
                {
                    'bg-blue-700 text-white shadow-sm': isActive,
                    'text-slate-400 hover:text-slate-100 hover:bg-slate-800': !isActive,
                },
                )}
            >
                <LinkIcon size={18} />
                <span>{link.name}</span>
            </Link>
            );
        })}
        </nav>

        <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 mt-6">Administration</p>
        <nav className="space-y-1">
        {sysLinks.map((link) => {
            const LinkIcon = link.icon;
            const isActive = pathname === link.href;
            return (
            <Link
                key={link.name}
                href={link.href}
                className={clsx(
                'flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-sm font-medium',
                {
                     'bg-blue-700 text-white shadow-sm': isActive,
                    'text-slate-400 hover:text-slate-100 hover:bg-slate-800': !isActive,
                },
                )}
            >
                <LinkIcon size={18} />
                <span>{link.name}</span>
            </Link>
            );
        })}
        </nav>
    </div>
  );
}
