import { useState } from "react"
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

const MemberShip =  ()=> {
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
const SummaryCard = () => {
    return (
        <>
            <div class="max-w-sm bg-white rounded-xl shadow-ms p-6 border border-gray-200">

                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-lg font-semibold text-gray-800">
                        Total Members
                    </h3>
                    <span class="text-2xl">👥</span>
                </div>

                <div class="mb-2">
                    <h2 class="text-3xl font-bold text-gray-900">
                        1,245
                    </h2>
                </div>

                <div class="flex items-center gap-2">
                    <span class="text-green-600 font-medium">
                        +12%
                    </span>
                    <span class="text-sm text-gray-500">
                        vs last month
                    </span>
                </div>

            </div>
        </>
    )
}

const FilterContainer = () => {
    return (
        <>
            <div class="w-full bg-[#f8fafc] pt-5">
                <div class=" gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-ms">
                    <div class="flex flex-wrap items-center justify-between gap-4 flex-1">
                        <div className="">
                            <div class="relative w-full max-w-xs">
                                <span class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                    <svg class="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                </span>
                                <input
                                    type="text"
                                    placeholder="Search "
                                    class="w-full pl-11 pr-4 py-3 bg-[#f1f5f9] text-slate-600 placeholder-slate-400 rounded-full focus:outline-none text-sm"
                                />
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div class="relative min-w-[140px]">
                                <select class="w-full appearance-none rounded-xl border border-gray-300 bg-white pl-3 pr-8 py-2.5 text-sm text-slate-700 font-medium focus:border-blue-500 focus:outline-none">
                                    <option>Last 30 Days</option>
                                </select>
                            </div>
                            <div class="relative min-w-[130px]">
                                <select class="w-full appearance-none rounded-xl border border-gray-300 bg-white pl-3 pr-8 py-2.5 text-sm text-slate-700 font-medium focus:border-blue-500 focus:outline-none">
                                    <option>All Status</option>
                                </select>
                            </div>
                            <div class="relative min-w-[120px]">
                                <select class="w-full appearance-none rounded-xl border border-gray-300 bg-white pl-3 pr-8 py-2.5 text-sm text-slate-700 font-medium focus:border-blue-500 focus:outline-none">
                                    <option>All Region</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Members = () => {
    const [currentPage, setCurrentPage] = useState(3);
    const productsData = [
        { id: '#KP267400', name: 'Cherry Delight', price: '$90.50', stock: '350 pcs', type: 'Dessert', status: 'Pending', img: 'https://images.unsplash.com/photo-1514517604298-cf80e0fb7f1e?w=80&auto=format&fit=crop&q=60' },
        { id: '#TL651535', name: 'Kiwi', price: '$12.00', stock: '650 kg', type: 'Fruits', status: 'Active', img: 'https://images.unsplash.com/photo-1560155016-bd4879ae8f21?w=80&auto=format&fit=crop&q=60' },
        { id: '#GB551535', name: 'Mango Magic', price: '$100.50', stock: '1200 pcs', type: 'Ice Cream', status: 'Inactive', img: 'https://images.unsplash.com/photo-1534706936960-85aa4b134f88?w=80&auto=format&fit=crop&q=60' },
        { id: '#ER651535', name: 'Joy Care', price: '$59.99', stock: '700 pcs', type: 'Care', status: 'On Sale', img: 'https://images.unsplash.com/photo-1608248597481-496100c8c836?w=80&auto=format&fit=crop&q=60' },
        { id: '#SD487441', name: 'Blueberry Bliss', price: '$150.90', stock: '100 lt', type: 'Dessert', status: 'Bouncing', img: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=80&auto=format&fit=crop&q=60' },
        { id: '#TL449003', name: 'Watermelon', price: '$10.99', stock: '23 lt', type: 'Juice', status: 'Pending', img: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=80&auto=format&fit=crop&q=60' },
        { id: '#KP651535', name: 'Trilogy', price: '$130.00', stock: '3000 pcs', type: 'Oil', status: 'Active', img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=80&auto=format&fit=crop&q=60' },
        { id: '#GB449003', name: 'Dryskin', price: '$40.70', stock: '400 pcs', type: 'Cream', status: 'Inactive', img: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=80&auto=format&fit=crop&q=60' },
        { id: '#SD449003', name: 'Olive Oil', price: '$35.50', stock: '200 lt', type: 'Oil', status: 'On Sale', img: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=80&auto=format&fit=crop&q=60' },
        { id: '#ER558612', name: 'Citrus Brust', price: '$9.99', stock: '1200 pcs', type: 'Flowers', status: 'Bouncing', img: 'https://images.unsplash.com/photo-1546386903-6c820e1cd15e?w=80&auto=format&fit=crop&q=60' },
    ];
    const getStatusStyle = (status) => {
        switch (status) {
            case 'Active':
                return 'bg-[#e6f7ed] text-[#22c55e]';
            case 'Pending':
                return 'bg-[#fef3c7] text-[#f59e0b]';
            case 'Inactive':
                return 'bg-[#fee2e2] text-[#ef4444]';
            case 'On Sale':
                return 'bg-[#dbeafe] text-[#3b82f6]';
            case 'Bouncing':
                return 'bg-[#f3e8ff] text-[#a855f7]';
            default:
                return 'bg-gray-100 text-gray-600';
        }
    };
    return (
        <div className="w-full pt-5 bg-gray-50 min-h-screen">
            {/* Table Container Wrapper */}
            <div className="bg-white rounded-[24px] shadow-ms border border-gray-200 overflow-hidden">

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        {/* Table Header */}
                        <thead>
                            <tr className="border-b border-gray-200">
                                {['Members', 'Attendence', 'Referrals Given', 'Referrals Received', '1 to 1 Meetings', 'Status', 'Performance'].map((header, index) => (
                                    <th key={index} className="px-6 py-4 text-[13px] font-medium text-slate-400 select-none">
                                        <div className="flex items-center gap-1">
                                            {header}
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody className="divide-y divide-gray-50">
                            {productsData.map((product, index) => (
                                <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                                    {/* Product Name with Image */}
                                    <td className="px-6 py-3.5">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={product.img}
                                                alt={product.name}
                                                className="w-10 h-10 rounded-full object-cover border border-gray-100 shadow-sm"
                                            />
                                            <span className="font-semibold text-slate-800 text-[14px]">
                                                {product.name}
                                            </span>
                                        </div>
                                    </td>

                                    {/* Product ID */}
                                    <td className="px-6 py-3.5 text-slate-400 font-medium text-[14px]">
                                        {product.id}
                                    </td>

                                    {/* Price */}
                                    <td className="px-6 py-3.5 text-slate-600 font-medium text-[14px]">
                                        {product.price}
                                    </td>

                                    {/* Stock */}
                                    <td className="px-6 py-3.5 text-slate-500 text-[14px]">
                                        {product.stock}
                                    </td>

                                    {/* Type */}
                                    <td className="px-6 py-3.5 text-slate-500 text-[14px]">
                                        {product.type}
                                    </td>

                                    {/* Status Badge */}
                                    <td className="px-6 py-3.5">
                                        <span className={`inline-flex items-center justify-center px-4 py-1 text-[12px] font-semibold tracking-wide min-w-[90px] text-center ${getStatusStyle(product.status)}`}>
                                            {product.status}
                                        </span>
                                    </td>

                                    {/* Action Dots */}
                                    <td className="px-6 py-3.5">
                                        <button class="cursor-pointer px-5 py-1 bg-white border border-slate-300 hover:border-slate-400 hover:bg-slate-50 active:bg-slate-100 text-slate-700 font-medium text-ms rounded-xl transition-colors duration-200 focus:outline-none">
                                            View
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* --- Pagination Footer --- */}
                <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100 text-[13px] text-slate-400 font-medium bg-white">
                    {/* Previous Button */}
                    <button className="flex items-center gap-1 hover:text-slate-600 transition-colors">
                        <span>&lt;</span> Previous
                    </button>

                    {/* Page Numbers */}
                    <div className="flex items-center gap-2">
                        {['01', '02'].map(p => (
                            <button key={p} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-50 text-slate-400">{p}</button>
                        ))}

                        {/* Active Page (03) */}
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm shadow-blue-200">
                            03
                        </button>

                        <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-50 text-slate-400">04</button>
                        <span className="px-1 text-slate-300">...</span>
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-50 text-slate-400">10</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-50 text-slate-400">11</button>
                    </div>

                    {/* Next Button */}
                    <button className="flex items-center gap-1 hover:text-slate-600 transition-colors text-slate-800">
                        Next <span>&gt;</span>
                    </button>
                </div>

            </div>
        </div>
    );
}
const Member_Performance = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <SummaryCard />
                <SummaryCard />
                <SummaryCard />
                <SummaryCard />
            </div>
            <FilterContainer />
            <Members />
            <MemberShip/>
        </>
    )
}

export default Member_Performance