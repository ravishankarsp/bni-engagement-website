import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Megaphone, 
  MessageSquare, 
  Calendar, 
  Award, 
  FileText, 
  Settings, 
  ChevronDown 
} from 'lucide-react';

const Sidebar = () => {
  // Set 'Announcements' as the default active item based on the image
  const [activeItem, setActiveItem] = useState('Announcements');

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Members', icon: Users },
    { name: 'Announcements', icon: Megaphone },
    { name: 'Chat & Messaging', icon: MessageSquare },
    { name: 'Events & Trainings', icon: Calendar },
    { name: 'Recognition & Badges', icon: Award },
    { name: 'Reports', icon: FileText },
    { name: 'Settings', icon: Settings },
  ];

  return (
    <div className="w-66 h-screen bg-white border-r border-gray-100 flex flex-col justify-between font-sans selection:bg-blue-100">
      {/* Top Section: Logo & Navigation */}
      <div className="p-6">
        {/* Brand Logo */}
        <div className="flex items-center gap-2 mb-8 px-2">
          <span className="text-3xl font-black text-blue-600 tracking-tight">BNI</span>
          <span className="text-lg font-bold text-slate-800">Connect</span>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-1.5">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.name;

            return (
              <button
                key={item.name}
                onClick={() => setActiveItem(item.name)}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 sequential-all
                  ${isActive 
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-200' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Section: User Profile */}
      <div className="p-4 border-t border-gray-100">
        <button className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 transition-colors group">
          <div className="flex items-center gap-3">
            {/* Profile Avatar */}
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
              alt="Arun Kumar Profile"
              className="w-11 h-11 rounded-full object-cover border border-slate-200"
            />
            {/* User Details */}
            <div className="text-left">
              <p className="text-sm font-bold text-slate-800 tracking-wide">Arun Kumar</p>
              <p className="text-xs font-medium text-slate-400 mt-0.5">Chapter Secretary</p>
            </div>
          </div>
          {/* Dropdown Arrow */}
          <ChevronDown className="w-4 h-4 text-slate-500 group-hover:text-slate-700 transition-colors" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;