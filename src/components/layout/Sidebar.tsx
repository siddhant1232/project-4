import React from 'react';
import { Link } from 'react-router-dom';
import {
  LayoutDashboard,
  Receipt,
  BarChart3,
  Target,
  Settings,
  UserCircle,
  LogOut,
  Wallet,
} from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: Wallet, label: 'Budget Tracker', path: '/budget' },
  { icon: Receipt, label: 'Transactions', path: '/transactions' },
  { icon: BarChart3, label: 'Reports', path: '/reports' },
  { icon: Target, label: 'Goals', path: '/goals' },
  { icon: Settings, label: 'Settings', path: '/settings' },
  { icon: UserCircle, label: 'Profile', path: '/profile' },
];

export default function Sidebar() {
  const handleLogout = () => {
    // const handleLogout = () => {
    //   window.location.href.newElement = '/signin';
    // };
    window.location.href = '/signin';
  };

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-gray-900 text-white p-4 transition-all duration-300">
      <div className="flex flex-col h-full">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-indigo-400">FineTrack</h1>
        </div>
        
        <nav className="flex-1">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-all duration-200 hover:translate-x-1"
                >
                  <item.icon className="h-5 w-5 text-indigo-400" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors text-red-400 hover:text-red-300"
        >
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}