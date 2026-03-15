"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Zap, 
  Quote, 
  ArrowUpRight, 
  ShieldCheck, 
  Brain, 
  Layers,
  Award,
  Activity,
  UserCheck,
  Target,
  Globe2,
  Cpu,
  Fingerprint
} from "lucide-react";

export default function Company() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const coreValues = [
    { icon: <ShieldCheck size={20} />, title: "Absolute Integrity", desc: "Ethical AI frameworks built on transparency." },
    { icon: <Brain size={20} />, title: "Neural Logic", desc: "Solving complex problems with cognitive computing." },
    { icon: <Layers size={20} />, title: "Scale Architecture", desc: "Systems designed for infinite horizontal growth." },
    { icon: <Award size={20} />, title: "Elite Craft", desc: "Zero-compromise engineering quality standards." },
  ];

  return (
    <main className="bg-[#FCFCFC] text-[#0A0A0A] min-h-screen selection:bg-[#3D5AFE] selection:text-white font-sans overflow-x-hidden">
      
      {/* --- SECTION 1: THE BRIGHT ARCHITECTURAL HERO --- */}
      <section className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden border-b border-zinc-100">
        {/* LIGHT BLUEPRINT GRID BACKGROUND */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse:80%_80%_at_50%_50%,#000_60%,transparent_100%)] opacity-40" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white via-transparent to-[#3D5AFE]/5" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 mb-10"
              >
                <div className="w-12 h-[2px] bg-[#3D5AFE]" />
                <span className="text-[10px] font-[900] uppercase tracking-[0.5em] text-[#3D5AFE]">Deventa Technology Lab</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-[120px] font-[1000] uppercase italic tracking-tighter leading-[0.8] mb-12 text-zinc-900"
              >
                The Future <br /> 
                <span className="text-[#3D5AFE] not-italic">Architected.</span>
              </motion.h1>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col md:flex-row gap-10 md:items-center"
              >
                <p className="text-zinc-500 text-lg md:text-xl max-w-sm font-bold leading-tight uppercase italic">
                   We engineer high-performance systems for the next era of industrial intelligence.
                </p>
                <div className="h-16 w-[1px] bg-zinc-200 hidden md:block" />
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Fingerprint size={16} className="text-[#3D5AFE]" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 text-nowrap">Identity Code: DW-2026</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe2 size={16} className="text-[#3D5AFE]" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 text-nowrap">Operational Status: GLOBAL</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Side: Floating Blueprint Data */}
            <div className="lg:col-span-4 relative">
               <motion.div 
                 initial={{ opacity: 0, x: 30 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 1 }}
                 className="p-10 border border-zinc-200 bg-white/70 backdrop-blur-xl shadow-2xl shadow-blue-500/5 relative"
               >
                  <div className="absolute top-0 right-0 p-4">
                    <Cpu size={24} className="text-[#3D5AFE] opacity-20" />
                  </div>
                  
                  <div className="space-y-8">
                    <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-zinc-900 flex items-center gap-2">
                      <Target size={14} className="text-[#3D5AFE]" /> System Parameters
                    </h3>
                    
                    <div className="space-y-5">
                      {[
                        { label: "AI Latency", val: "< 0.04ms" },
                        { label: "Success Rate", val: "99.98%" },
                        { label: "Deployment", val: "Edge-Ready" }
                      ].map((spec, i) => (
                        <div key={i} className="flex justify-between items-end border-b border-zinc-100 pb-2">
                          <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">{spec.label}</span>
                          <span className="text-sm font-black italic text-zinc-900">{spec.val}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4">
                        <div className="flex justify-between text-[8px] font-black uppercase tracking-widest text-zinc-400 mb-2">
                          <span>Processing</span>
                          <span>100%</span>
                        </div>
                        <div className="h-[2px] w-full bg-zinc-100 overflow-hidden">
                          <motion.div 
                            animate={{ width: ["0%", "100%", "0%"] }} 
                            transition={{ duration: 4, repeat: Infinity }}
                            className="h-full bg-[#3D5AFE]" 
                          />
                        </div>
                    </div>
                  </div>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: THE PHILOSOPHY (BENTO STYLE) --- */}
      <section className="py-32 px-6 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-zinc-900 p-12 md:p-20 text-white relative overflow-hidden group">
               <div className="relative z-10">
                  <span className="text-[#3D5AFE] font-black text-[10px] tracking-[0.4em] mb-8 block uppercase">01 / Our Mission</span>
                  <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none mb-10 text-nowrap">
                    To automate <br /> human potential.
                  </h2>
                  <p className="max-w-md text-zinc-400 font-medium text-lg leading-relaxed mb-12">
                    We bridge the gap between complex human intuition and binary precision, creating software that evolves alongside your business.
                  </p>
                  <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest hover:text-[#3D5AFE] transition-colors">
                    View Impact Report <ArrowUpRight size={14} />
                  </button>
               </div>
               <Activity className="absolute -bottom-10 -right-10 text-white/5 w-64 h-64 group-hover:text-[#3D5AFE]/10 transition-colors duration-700" />
            </div>

            <div className="bg-[#3D5AFE] p-12 text-white flex flex-col justify-between">
              <Zap size={40} className="mb-12" />
              <div>
                <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-4">Neural <br /> Velocity.</h3>
                <p className="text-white/70 text-sm font-bold uppercase tracking-widest leading-loose">
                  Deployment cycles reduced by 60% through proprietary AI-assisted dev pipelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: CORE VALUES --- */}
      <section className="py-32 px-6 lg:px-10 border-y border-zinc-100 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {coreValues.map((v, i) => (
              <div key={i} className="space-y-4">
                <div className="text-[#3D5AFE]">{v.icon}</div>
                <h4 className="text-lg font-black uppercase italic tracking-tighter text-zinc-900">{v.title}</h4>
                <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 4: EXECUTIVE COUNCIL (WITH IMAGES) --- */}
      <section className="py-32 bg-white px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-[1000] uppercase italic tracking-tighter text-zinc-900 mb-20">Executive Council.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {[
              { 
                name: "Abhishek Chaudhary", 
                role: "Co-Founder & Director", 
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000",
                philosophy: "Systemic integrity is the only metric that survives." 
              },
              { 
                name: "Narendra Jangir", 
                role: "Co-Founder & Director", 
                img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000",
                philosophy: "We build autonomous infrastructures for the 22nd century." 
              }
            ].map((f, i) => (
              <div key={i} className="group cursor-crosshair">
                <div className="aspect-[4/5] bg-zinc-100 mb-8 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img src={f.img} alt={f.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <Quote size={24} className="text-[#3D5AFE] mb-4 opacity-40" />
                <p className="text-xl font-bold italic text-zinc-800 mb-6 leading-tight">"{f.philosophy}"</p>
                <h4 className="text-3xl font-[1000] uppercase italic tracking-tighter">{f.name}</h4>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#3D5AFE]">{f.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 5: BOARD OF DIRECTORS (BLACK THEME) --- */}
      <section className="py-32 bg-[#0A0A0A] text-white px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-20 border-b border-white/10 pb-10">
            <h2 className="text-5xl font-[1000] uppercase italic tracking-tighter">The Board.</h2>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500">Global Governance</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Siddharth Mehta", role: "CEO", focus: "Strategy", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000" },
              { name: "Elena Rodriguez", role: "CTO", focus: "Innovation", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000" },
              { name: "Marcus Chen", role: "CFO", focus: "Capital", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000" }
            ].map((member, i) => (
              <div key={i} className="group">
                <div className="aspect-square bg-white/5 mb-8 overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <h4 className="text-2xl font-black uppercase italic tracking-tighter mb-1">{member.name}</h4>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#3D5AFE] mb-6">{member.role}</p>
                <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                   <UserCheck size={14} className="text-zinc-600" />
                   <span className="text-[9px] font-bold uppercase text-zinc-500 tracking-widest">{member.focus}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 6: FINAL DIRECTIVE --- */}
      <section className="py-40 bg-white text-center px-6">
        <div className="max-w-4xl mx-auto border border-zinc-200 p-12 md:p-24 relative group">
          <div className="absolute top-0 left-0 w-2 h-2 bg-[#3D5AFE]" />
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#3D5AFE]" />
          
          <h2 className="text-5xl md:text-8xl font-[1000] uppercase italic tracking-tighter text-zinc-900 mb-12">
            Initiate <br /> <span className="text-[#3D5AFE] not-italic">Partnership.</span>
          </h2>
          <Link href="/contact">
            <button className="bg-zinc-900 text-white px-12 py-6 font-black uppercase tracking-[0.3em] text-[10px] hover:bg-[#3D5AFE] transition-all flex items-center mx-auto shadow-xl">
              Begin Consultation <ArrowUpRight className="ml-3" size={16} />
            </button>
          </Link>
        </div>
      </section>

    </main>
  );
}