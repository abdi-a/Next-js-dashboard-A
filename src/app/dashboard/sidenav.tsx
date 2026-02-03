'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, User } from 'lucide-react';
import clsx from 'clsx';

const links = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Profile', href: '/dashboard/profile', icon: User },
];

export default function SideNav() {
  const pathname = usePathname();

  return (
    <nav className="flex-grow space-y-2">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex items-center gap-3 p-3 rounded-md transition-colors',
              {
                'bg-slate-800 text-white': pathname === link.href,
                'hover:bg-slate-800 text-slate-300': pathname !== link.href,
              },
            )}
          >
            <LinkIcon size={20} />
            <span>{link.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
