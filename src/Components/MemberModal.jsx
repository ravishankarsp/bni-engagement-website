import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

// Mock data for Charts
const chartData = [
  { name: 'Dec', referrals: 10, tyfcb: 115000 },
  { name: 'Jan', referrals: 20, tyfcb: 85000 },
  { name: 'Feb', referrals: 12, tyfcb: 83000 },
  { name: 'Mar', referrals: 20, tyfcb: 122000 },
  { name: 'Apr', referrals: 18, tyfcb: 155000 },
  { name: 'May', referrals: 30, tyfcb: 170000 },
];

// Stats Card Component for clean reusability
const StatCard = ({ title, value, percentage, isCurrency }) => {
  return (
    <div className="bg-white p-5 rounded-[20px] border border-gray-100 shadow-sm flex flex-col justify-between">
      <div>
        <p className="text-slate-400 font-medium text-[13px] mb-2">{title}</p>
        <h3 className="text-2xl font-bold text-slate-800 tracking-tight">
          {isCurrency ? `₹${value.toLocaleString('en-IN')}` : value}
        </h3>
      </div>
      <div className="mt-4 flex items-center justify-between text-[11px]">
        <div className="flex items-center gap-1 text-emerald-500 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">
          <span>▲</span>
          <span>{percentage}%</span>
        </div>
        <span className="text-slate-400 font-medium">vs Apr 2024</span>
      </div>
    </div>
  );
};

export default function MemberShip () {
  return (
    <div className="absolute z-10 top-0 left-0 right-0 w-full h-full bg-black/20 flex items-center">
      <div className="max-w-7xl mx-auto space-y-6 bg-white px-10 py-8">
        
        {/* --- Top Filter Bar --- */}
        {/* <div className="flex justify-end items-center gap-3">
          <div className="relative">
            <select className="appearance-none bg-white border border-gray-200 text-slate-700 text-sm font-semibold pl-4 pr-10 py-2 rounded-xl focus:outline-none focus:border-blue-500 shadow-sm cursor-pointer">
              <option>May 2024</option>
            </select>
            <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-400 text-xs">▼</span>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-5 py-2 rounded-xl shadow-sm shadow-blue-100 transition-colors cursor-pointer">
            Export Report
          </button>
        </div> */}

        {/* --- Profile Header Section --- */}
        <div className="bg-white p-6 rounded-[22px] border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center gap-5">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" // Placeholder for Arun Kumar photo
            alt="Arun Kumar" 
            className="w-20 h-20 rounded-full object-cover border-2 border-slate-100 shadow-inner"
          />
          <div className="text-center sm:text-left flex-1 space-y-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 justify-center sm:justify-start">
              <h2 className="text-xl font-bold text-slate-800">Arun Kumar</h2>
              <span className="inline-block bg-emerald-50 text-emerald-600 font-semibold text-[11px] px-3 py-0.5 rounded-full mx-auto sm:mx-0 w-max">
                Active Member
              </span>
            </div>
            <p className="text-slate-400 font-medium text-sm">IT Services</p>
            <p className="text-slate-400 text-xs pt-1">Member Since: Jan 2023</p>
          </div>
        </div>

        {/* --- Stats Grid Section --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <StatCard title="Referrals Given" value={24} percentage={12} />
          <StatCard title="TYFCB (₹)" value={125000} percentage={18} isCurrency={true} />
          <StatCard title="One-to-Ones" value={12} percentage={9} />
          <StatCard title="Attendance" value="90%" percentage={5} />
          <StatCard title="Visitors Brought" value={5} percentage={25} />
        </div>

        {/* --- Charts Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Left Chart: Referrals Trend */}
          <div className="bg-white p-6 rounded-[22px] border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-sm font-bold text-slate-800">Referrals Trend</h4>
              <select className="text-xs font-semibold bg-slate-50 border-0 text-slate-500 rounded-lg px-2 py-1.5 cursor-pointer focus:outline-none">
                <option>Last 6 Months</option>
              </select>
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} domain={[0, 40]} />
                  <Line 
                    type="monotone" 
                    dataKey="referrals" 
                    stroke="#2563eb" 
                    strokeWidth={3} 
                    dot={{ r: 5, fill: '#2563eb', strokeWidth: 0 }}
                    activeDot={{ r: 7 }} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Right Chart: TYFCB Trend */}
          <div className="bg-white p-6 rounded-[22px] border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-sm font-bold text-slate-800">TYFCB Trend (₹)</h4>
              <select className="text-xs font-semibold bg-slate-50 border-0 text-slate-500 rounded-lg px-2 py-1.5 cursor-pointer focus:outline-none">
                <option>Last 6 Months</option>
              </select>
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }} barSize={18}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#94a3b8', fontSize: 12 }} 
                    tickFormatter={(v) => v >= 1000 ? `${v / 1000}K` : v}
                  />
                  <Bar dataKey="tyfcb" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}