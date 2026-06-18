import React, { useState } from "react";
import {
  LayoutDashboard,
  Users,
  UserPlus,
  CalendarDays,
  ClipboardCheck,
  Repeat2,
  DollarSign,
  Handshake,
  Megaphone,
  MessageSquare,
  Calendar,
  Award,
  FileText,
  Settings,
  ChevronDown,
  ChevronRight,
  BarChart3,
  ShieldCheck,
  Target,
  RefreshCcw,
  CreditCard,
  Mail,
  Plug,
  Smartphone,
  Presentation,
  BadgeDollarSign,
} from "lucide-react";

const Sidebar = ({ activeItem, setActiveItem }) => {
  // Section open / close states
  const [openSections, setOpenSections] = useState({
    core: true,
    business: true,
    engagement: true,
    admin: true,
    addons: true,
  });

  const toggleSection = (sectionName) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionName]: !prev[sectionName],
    }));
  };

  const sections = [
    {
      id: "core",
      title: "Members & Operations",
      items: [
        { name: "Member Management", icon: Users },
        { name: "Visitor Management", icon: UserPlus },
        { name: "Meeting Scheduler", icon: CalendarDays },
        { name: "Attendance Tracker", icon: ClipboardCheck },
        { name: "Referral Tracker", icon: Repeat2 },
        { name: "TYFCB Tracker", icon: DollarSign },
        { name: "One-to-One Tracker", icon: Handshake },
      ],
    },
    {
      id: "business",
      title: "Business & Performance",
      items: [
        { name: "Member Performance", icon: BarChart3 },
        { name: "Chapter Performance", icon: BarChart3 },
        { name: "Leadership Dashboard", icon: ShieldCheck },
        { name: "Renewals & Retention", icon: RefreshCcw },
        { name: "Goal Setting & Tracking", icon: Target },
      ],
    },
    {
      id: "engagement",
      title: "Engagement & Communication",
      items: [
        { name: "Announcements", icon: Megaphone },
        { name: "Chat & Messaging", icon: MessageSquare },
        { name: "Events & Trainings", icon: Calendar },
        { name: "Recognition & Badges", icon: Award },
      ],
    },
    {
      id: "admin",
      title: "Admin & Utility Modules",
      items: [
        { name: "Roles & Permissions", icon: ShieldCheck },
        { name: "Reports & Analytics", icon: FileText },
        { name: "Payment Tracker", icon: CreditCard },
        { name: "Email/SMS Integration", icon: Mail },
        { name: "API Integration", icon: Plug },
      ],
    },
    {
      id: "addons",
      title: "Optional Add-ons",
      items: [
        { name: "Mobile App Module", icon: Smartphone },
        { name: "BNI Slides Manager", icon: Presentation },
        { name: "Sponsor Management", icon: BadgeDollarSign },
      ],
    },
  ];

  return (
    <aside className="w-74 h-screen bg-white border-r border-gray-100 flex flex-col justify-between font-sans sticky top-0 bottom-0">
      {/* Top Section */}
      <div className="p-5 overflow-y-auto custom-scrollbar">
        {/* Brand Logo */}
        <div className="flex items-center gap-2 mb-6 px-2">
          <span className="text-3xl font-black text-blue-600 tracking-tight">
            BNI
          </span>
          <div>
            <p className="text-lg font-bold text-slate-800 leading-none">
              Connect
            </p>
            <p className="text-xs text-slate-400 mt-1">Management Portal</p>
          </div>
        </div>

        {/* Dashboard Button */}
        <button
          onClick={() => setActiveItem("Dashboard")}
          className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 mb-4
            ${
              activeItem === "Dashboard"
                ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            }`}
        >
          <LayoutDashboard
            className={`w-5 h-5 ${
              activeItem === "Dashboard" ? "text-white" : "text-slate-400"
            }`}
          />
          <span>Dashboard</span>
        </button>

        {/* Module Sections */}
        <nav className="space-y-4">
          {sections.map((section) => {
            const isOpen = openSections[section.id];

            return (
              <div key={section.id}>
                {/* Section Header */}
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between px-2 py-2 text-xs font-bold uppercase tracking-wide text-slate-400 hover:text-blue-600 transition-colors"
                >
                  <span>{section.title}</span>

                  {isOpen ? (
                    <ChevronDown className="w-4 h-4 cursor-pointer transition-all duration-300 hover:scale-[1.2]" />
                  ) : (
                    <ChevronRight className="w-4 h-4 cursor-pointer transition-all duration-300 hover:scale-[1.2]" />
                  )}
                </button>

                {/* Section Items */}
                {isOpen && (
                  <div className="mt-1 space-y-1.5">
                    {section.items.map((item) => {
                      const Icon = item.icon;
                      const isActive = activeItem === item.name;

                      return (
                        <button
                          key={item.name}
                          onClick={() => setActiveItem(item.name)}
                          className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 cursor-pointer transition-all duration-300 hover:scale-[1.04]
                            ${
                              isActive
                                ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                                : "text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                            }`}
                        >
                          <Icon
                            className={`w-4.5 h-4.5 ${
                              isActive ? "text-white" : "text-slate-400"
                            }`}
                          />
                          <span className="text-left">{item.name}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* Bottom Section: User Profile */}
      <div className="p-4 border-t border-gray-100">
        <button className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 transition-colors group">
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
              alt="Arun Kumar Profile"
              className="w-11 h-11 rounded-full object-cover border border-slate-200"
            />

            <div className="text-left">
              <p className="text-sm font-bold text-slate-800 tracking-wide">
                Arun Kumar
              </p>
              <p className="text-xs font-medium text-slate-400 mt-0.5">
                Chapter Secretary
              </p>
            </div>
          </div>

          <ChevronDown className="w-4 h-4 text-slate-500 group-hover:text-slate-700 transition-colors" />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
