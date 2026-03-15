"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle2, Clock, Calendar, MessageSquare, FileCode, 
  Zap, Star, Bell, Search, LogOut, ChevronRight, Layers,
  MoreVertical, Target, Activity, Cpu
} from "lucide-react";

export default function EmployeeDashboard() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    // h-screen + overflow-hidden on the wrapper is the secret to a fixed sidebar
    <div className="h-screen w-full bg-[#F8F9FB] flex overflow-hidden font-sans text-[#0A0A0A] selection:bg-[#3D5AFE] selection:text-white">
      
      {/* --- SIDEBAR: FIXED & LOCKED --- */}
      <aside className="w-80 bg-white border-r border-zinc-200 hidden xl:flex flex-col h-full z-[100] flex-shrink-0">
        <div className="p-10">
          <h2 className="text-2xl font-[1000] uppercase italic tracking-tighter">
            Deventa <span className="text-[#3D5AFE]">.</span>
          </h2>
          <p className="text-[8px] font-black uppercase tracking-[0.5em] text-zinc-400 mt-2">Personal Node</p>
        </div>

        <nav className="flex-1 px-6 space-y-1 overflow-y-auto custom-scrollbar">
          <p className="px-4 text-[9px] font-black text-zinc-300 uppercase tracking-[0.2em] mb-4 italic">Core Terminal</p>
          {[
            { name: "My Missions", icon: <Target size={18} />, active: true },
            { name: "Project Hub", icon: <Layers size={18} /> },
            { name: "Team Sync", icon: <MessageSquare size={18} /> },
            { name: "Cloud Assets", icon: <FileCode size={18} /> },
          ].map((item, i) => (
            <button key={i} className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${item.active ? "bg-[#3D5AFE] text-white shadow-xl shadow-[#3D5AFE]/20" : "text-zinc-400 hover:bg-zinc-50 hover:text-zinc-900"}`}>
              {item.icon} {item.name}
            </button>
          ))}
        </nav>

        <div className="p-8 border-t border-zinc-100">
          <div className="bg-zinc-900 p-6 rounded-[2rem] text-white mb-6">
            <Cpu className="text-[#3D5AFE] mb-3" size={20} />
            <p className="text-[10px] font-black uppercase tracking-widest mb-1">Node Pulse</p>
            <p className="text-[8px] font-bold text-zinc-500 uppercase">Latency: 12ms</p>
          </div>
          <button className="flex items-center gap-4 text-zinc-400 text-[10px] font-black uppercase tracking-widest px-4 hover:text-red-500 transition-colors">
            <LogOut size={16} /> Terminate
          </button>
        </div>
      </aside>

      {/* --- MAIN INTERFACE: SCROLLABLE --- */}
      <main className="flex-1 h-full overflow-y-auto relative z-10 custom-scrollbar">
        
        {/* HEADER: STICKY BUT LOWER Z-INDEX THAN SIDEBAR */}
        <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-zinc-100 z-[50] px-8 lg:px-12 py-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
             <div className="w-1.5 h-1.5 rounded-full bg-[#3D5AFE] animate-ping" />
             <h1 className="text-xl font-black uppercase italic tracking-tighter">Mission: <span className="text-[#3D5AFE]">Active</span></h1>
          </div>

          <div className="flex items-center gap-6">
             <div className="hidden sm:flex items-center gap-4 px-6 py-2.5 bg-zinc-50 border border-zinc-100 rounded-full">
               <Activity size={14} className="text-[#3D5AFE]" />
               <span className="text-[9px] font-black uppercase tracking-widest">Efficiency 94.2%</span>
             </div>
             <button className="p-2.5 bg-zinc-50 rounded-full text-zinc-400 hover:text-[#3D5AFE] transition-all relative">
                <Bell size={20} />
                <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-[#3D5AFE] rounded-full" />
             </button>
             <div className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center text-white font-black italic">E</div>
          </div>
        </header>

        {/* CONTENT AREA */}
        <div className="p-8 lg:p-12 space-y-12">
          {/* Section 1: Stats */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "Missions Completed", value: "24/30", color: "text-green-500" },
              { label: "Hours Tracked", value: "162.5h", color: "text-[#3D5AFE]" },
              { label: "System Rank", value: "Elite", color: "text-orange-500" },
            ].map((stat, i) => (
              <div key={i} className="bg-white border border-zinc-100 p-10 rounded-[2.5rem] shadow-sm">
                <p className="text-zinc-400 text-[9px] font-black uppercase tracking-widest mb-2">{stat.label}</p>
                <h3 className={`text-4xl font-[1000] uppercase italic tracking-tighter ${stat.color}`}>{stat.value}</h3>
              </div>
            ))}
          </section>

          {/* Section 2: Task Tracker */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 bg-white border border-zinc-100 rounded-[3.5rem] p-12 shadow-sm">
               <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-12">Active Protocol</h3>
               <div className="space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="p-6 bg-zinc-50 border border-zinc-100 rounded-[2rem] flex justify-between items-center group hover:border-[#3D5AFE] transition-all cursor-pointer">
                       <div className="flex items-center gap-6">
                         <div className="w-8 h-8 rounded-xl border-2 border-zinc-200 group-hover:border-[#3D5AFE]" />
                         <div>
                            <h4 className="text-[12px] font-black uppercase italic tracking-tight">System Refactor Task_{i}</h4>
                            <p className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest mt-1">Due: Today</p>
                         </div>
                       </div>
                       <ChevronRight size={16} className="text-zinc-300 group-hover:text-[#3D5AFE]" />
                    </div>
                  ))}
               </div>
            </div>

            {/* Right Side: Velocity */}
            <div className="lg:col-span-4 bg-[#0A0A0A] rounded-[3.5rem] p-12 text-white shadow-2xl shadow-[#3D5AFE]/20 self-start">
               <h3 className="text-xl font-black uppercase italic tracking-tighter mb-10">Velocity</h3>
               <div className="space-y-8">
                  <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                     <div className="h-full w-[75%] bg-[#3D5AFE]" />
                  </div>
                  <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                     <div className="h-full w-[40%] bg-[#3D5AFE]" />
                  </div>
               </div>
               <button className="w-full mt-10 py-5 bg-white text-black font-[1000] uppercase tracking-widest text-[9px] rounded-2xl">
                 Expand View
               </button>
            </div>
          </section>
          
          {/* To test scrolling, I'm adding a huge spacing at the bottom */}
          <div className="h-[500px] flex items-center justify-center border-2 border-dashed border-zinc-100 rounded-[3.5rem]">
             <p className="text-zinc-300 font-black uppercase tracking-[1em] text-[10px]">End of Stream</p>
          </div>
        </div>
      </main>
    </div>
  );
}