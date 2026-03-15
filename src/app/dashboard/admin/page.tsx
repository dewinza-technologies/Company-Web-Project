"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, Users, Briefcase, ShieldCheck, BarChart3, 
  Bell, Search, Settings, LogOut, ChevronRight, TrendingUp, 
  Cpu, Activity, Globe, Zap, FileText, MoreHorizontal, ArrowUpRight
} from "lucide-react";

export default function AdminDashboard() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    /** * THE ARCHITECTURE:
     * h-screen + overflow-hidden on the wrapper LOCKS the browser window.
     * The Sidebar and Main-Content become side-by-side siblings.
     */
    <div className="h-screen w-full flex overflow-hidden bg-[#FBFBFB] font-sans text-[#0A0A0A] selection:bg-[#3D5AFE] selection:text-white">
      
      {/* --- SIDEBAR: THE LOCKED MASTER COLUMN --- */}
      <aside className="w-80 bg-white border-r border-zinc-200 hidden xl:flex flex-col h-full z-[100] flex-shrink-0">
        <div className="p-10">
          <h2 className="text-2xl font-[1000] uppercase italic tracking-tighter">
            Deventa <span className="text-[#3D5AFE]">.</span>
          </h2>
          <p className="text-[8px] font-black uppercase tracking-[0.5em] text-zinc-400 mt-2">Executive Node</p>
        </div>

        <nav className="flex-1 px-6 space-y-1 overflow-y-auto custom-scrollbar">
          <p className="px-4 text-[9px] font-black text-zinc-300 uppercase tracking-[0.2em] mb-4">Core Systems</p>
          {[
            { name: "Global Overview", icon: <LayoutDashboard size={18} />, active: true },
            { name: "Workforce", icon: <Users size={18} /> },
            { name: "Talent Pipelines", icon: <Briefcase size={18} /> },
            { name: "Financial Audit", icon: <BarChart3 size={18} /> },
          ].map((item, i) => (
            <button key={i} className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${item.active ? "bg-[#3D5AFE] text-white shadow-xl shadow-[#3D5AFE]/20" : "text-zinc-400 hover:bg-zinc-50 hover:text-zinc-900"}`}>
              {item.icon} {item.name}
            </button>
          ))}
          
          <div className="pt-8 opacity-50"><hr className="border-zinc-100 mx-4" /></div>
          
          <p className="px-4 text-[9px] font-black text-zinc-300 uppercase tracking-[0.2em] my-6">Infrastructure</p>
          {[
            { name: "Node Health", icon: <Cpu size={18} /> },
            { name: "Security Logs", icon: <ShieldCheck size={18} /> },
            { name: "Settings", icon: <Settings size={18} /> },
          ].map((item, i) => (
            <button key={i} className="w-full flex items-center gap-4 px-4 py-4 rounded-2xl text-[10px] font-black text-zinc-400 uppercase tracking-widest hover:bg-zinc-50 hover:text-zinc-900 transition-all">
              {item.icon} {item.name}
            </button>
          ))}
        </nav>

        <div className="p-8 border-t border-zinc-100 mt-auto">
          <button className="flex items-center gap-4 text-red-500 text-[10px] font-black uppercase tracking-widest px-4 hover:scale-105 transition-transform">
            <LogOut size={16} /> Terminate session
          </button>
        </div>
      </aside>

      {/* --- MAIN INTERFACE: THE INDEPENDENT SCROLL AREA --- */}
      <div className="flex-1 h-full flex flex-col min-w-0 overflow-hidden">
        
        {/* STICKY HEADER: This stays at the top of the right side ONLY */}
        <header className="h-24 bg-white/80 backdrop-blur-md border-b border-zinc-100 z-[50] px-8 lg:px-12 flex justify-between items-center flex-shrink-0">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-black uppercase italic tracking-tighter">Command <span className="text-[#3D5AFE]">Center</span></h1>
            <div className="hidden md:flex items-center gap-3 text-zinc-400">
              <Globe size={14} />
              <span className="text-[9px] font-black uppercase tracking-widest italic">Node: Asia-1 (Delhi)</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
             <div className="relative hidden sm:block">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-300" size={14} />
               <input type="text" placeholder="QUERY..." className="bg-zinc-50 border border-zinc-100 rounded-full py-2.5 pl-10 pr-6 text-[9px] font-bold uppercase tracking-widest w-48 focus:border-[#3D5AFE] outline-none" />
             </div>
             <div className="flex items-center gap-4">
               <div className="text-right hidden sm:block">
                 <p className="text-[10px] font-black uppercase">Root_Admin</p>
                 <p className="text-[8px] font-bold text-[#3D5AFE] uppercase">Online</p>
               </div>
               <div className="w-12 h-12 bg-[#3D5AFE] rounded-xl flex items-center justify-center text-white font-black italic shadow-lg shadow-[#3D5AFE]/30">A</div>
             </div>
          </div>
        </header>

        {/* SCROLLABLE CONTENT BODY */}
        <main className="flex-1 overflow-y-auto p-8 lg:p-12 space-y-12 bg-[#FBFBFB] custom-scrollbar">
          
          {/* SECTION 1: KPI GRID */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Quarterly Revenue", value: "$4.2M", trend: "+14%", icon: <TrendingUp className="text-green-500" /> },
              { label: "Talent ROI", value: "88%", trend: "+5%", icon: <Zap className="text-yellow-500" /> },
              { label: "System Health", value: "99.9%", trend: "Stable", icon: <Activity className="text-[#3D5AFE]" /> },
              { label: "Active Nodes", value: "1,248", trend: "+12", icon: <Cpu className="text-purple-500" /> },
            ].map((kpi, i) => (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} key={i} className="bg-white border border-zinc-100 p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-zinc-50 rounded-2xl">{kpi.icon}</div>
                  <span className="text-[8px] font-black px-2 py-1 bg-zinc-50 text-zinc-400 rounded-lg">{kpi.trend}</span>
                </div>
                <p className="text-zinc-400 text-[9px] font-black uppercase tracking-widest mb-1">{kpi.label}</p>
                <h3 className="text-3xl font-[1000] uppercase italic tracking-tighter">{kpi.value}</h3>
              </motion.div>
            ))}
          </section>

          {/* SECTION 2: ANALYTICS & MONITORING */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 bg-white border border-zinc-100 rounded-[3.5rem] p-10 shadow-sm relative overflow-hidden min-h-[450px]">
               <div className="flex justify-between items-start mb-12">
                  <div>
                    <h3 className="text-2xl font-black uppercase italic tracking-tighter">Inflow Metrics</h3>
                    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-1">Application Volume History</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#3D5AFE]" />
                    <div className="w-2 h-2 rounded-full bg-zinc-100" />
                  </div>
               </div>
               {/* Animated Chart Simulation */}
               <div className="h-64 flex items-end gap-2 mb-10">
                  {[40, 70, 45, 90, 65, 80, 50, 95, 60, 85, 90, 100].map((h, i) => (
                    <motion.div initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: i * 0.05 }} key={i} className="flex-1 bg-gradient-to-t from-[#3D5AFE] to-[#3D5AFE]/40 rounded-t-lg" />
                  ))}
               </div>
               <div className="grid grid-cols-3 gap-8 pt-10 border-t border-zinc-50">
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Response Time</p>
                    <p className="text-xl font-black italic mt-1 text-[#3D5AFE]">1.2h</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Hires Q1</p>
                    <p className="text-xl font-black italic mt-1">42</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Success Rate</p>
                    <p className="text-xl font-black italic mt-1">94%</p>
                  </div>
               </div>
            </div>

            <div className="lg:col-span-4 bg-[#0A0A0A] rounded-[3.5rem] p-10 text-white flex flex-col justify-between shadow-2xl shadow-[#3D5AFE]/20">
               <div>
                  <h3 className="text-xl font-black uppercase italic tracking-tighter mb-6">System Status</h3>
                  <p className="text-zinc-500 text-[10px] leading-relaxed italic mb-8">Deventa Global Edge Network is operating at peak capacity.</p>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between text-[9px] font-black uppercase tracking-widest mb-2"><span>Compute</span><span>92%</span></div>
                      <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden"><div className="h-full w-[92%] bg-[#3D5AFE]" /></div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[9px] font-black uppercase tracking-widest mb-2"><span>Memory</span><span>64%</span></div>
                      <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden"><div className="h-full w-[64%] bg-green-500" /></div>
                    </div>
                  </div>
               </div>
               <button className="w-full mt-10 py-5 bg-white text-black font-[1000] uppercase tracking-widest text-[9px] rounded-2xl hover:bg-[#3D5AFE] hover:text-white transition-all">
                  Run Diagnostic Audit
               </button>
            </div>
          </section>

          {/* SECTION 3: DATA TERMINAL TABLE */}
          <section className="bg-white border border-zinc-100 rounded-[3.5rem] shadow-sm overflow-hidden mb-12">
             <div className="p-10 flex justify-between items-center border-b border-zinc-50">
                <h3 className="text-2xl font-black uppercase italic tracking-tighter">Talent Terminal</h3>
                <button className="flex items-center gap-2 px-6 py-3 border border-zinc-100 rounded-full text-[9px] font-black uppercase tracking-widest hover:bg-zinc-50 transition-all">
                  <FileText size={14} /> Export Logs
                </button>
             </div>
             <table className="w-full text-left">
                <thead className="bg-zinc-50/50 text-zinc-400">
                  <tr>
                    <th className="px-10 py-6 text-[9px] font-black uppercase tracking-widest">Candidate Node</th>
                    <th className="px-10 py-6 text-[9px] font-black uppercase tracking-widest text-right">Operation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-50">
                  {[1, 2, 3, 4, 5, 6, 7].map((row) => (
                    <tr key={row} className="hover:bg-zinc-50/50 transition-all cursor-pointer group">
                      <td className="px-10 py-8">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-zinc-100 border border-zinc-200 rounded-xl flex items-center justify-center font-black text-[10px] text-zinc-400 group-hover:bg-[#3D5AFE] group-hover:text-white transition-colors">{row}</div>
                          <div>
                            <p className="text-[11px] font-black uppercase italic">Talent_Protocol_00{row}</p>
                            <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-tight italic">Status: Verifying Credentials</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-10 py-8 text-right">
                        <button className="p-2 text-zinc-300 group-hover:text-[#3D5AFE] transition-colors"><MoreHorizontal /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
             </table>
          </section>

        </main>
      </div>
    </div>
  );
}