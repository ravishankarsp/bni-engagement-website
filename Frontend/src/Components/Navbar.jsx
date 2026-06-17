import React from "react";
import { Menu, Bell, ChevronDown } from "lucide-react";

const Navbar = ({activeItem}) => {
  return (
    <header className="w-full h-20 bg-white border-b border-slate-100 flex items-center justify-between px-8 font-sans">
      {/* Left Section: Menu Toggle & Page Title */}
      <div className="flex items-center gap-5">
        {/* <button className="text-slate-500 hover:text-slate-800 transition-colors p-1 rounded-lg hover:bg-slate-50">
          <Menu className="w-6 h-6 stroke-[2]" />
        </button> */}
        <h1 className="text-2xl font-bold text-[#0A192F] tracking-tight">
          {activeItem}
        </h1>
      </div>

      {/* Right Section: Notification & Profile */}
      <div className="flex items-center gap-6">
        {/* Notification Bell with Badge */}
        <button className="relative p-2 text-[#829AB1] hover:text-slate-700 transition-colors rounded-full hover:bg-slate-50 cursor-pointer">
          <Bell className="w-6 h-6 stroke-[2]" />
          {/* Red Notification Badge */}
          <span className="absolute top-1 right-1 bg-[#FF3B30] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full border border-white">
            3
          </span>
        </button>

        {/* User Profile Dropdown */}
        <button className="flex items-center gap-2 p-1 rounded-xl hover:bg-slate-50 transition-colors group cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
            alt="User Avatar"
            className="w-10 h-10 rounded-full object-cover border border-slate-200"
          />
          <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
