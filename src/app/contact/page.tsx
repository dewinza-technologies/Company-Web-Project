"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link"; // FIXED: Added proper Next.js Link import
import { 
  Send, 
  Mail, 
  Clock, 
  Sparkles,
  ArrowRight,
  Target
} from "lucide-react";

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const [activeVector, setActiveVector] = useState("AI Automation");

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const techServices = [
    { label: "AI Automation", id: "ai" },
    { label: "SaaS Platform", id: "saas" },
    { label: "Mobile Ecosystem", id: "mobile" },
    { label: "Cloud Infra", id: "cloud" },
    { label: "FinTech Solution", id: "fin" },
    { label: "DevSecOps", id: "sec" }
  ];

  return (
    <main className="bg-white text-[#0A0A0A] min-h-screen selection:bg-[#3D5AFE] selection:text-white font-sans overflow-x-hidden">
      
      {/* --- REFINED BACKGROUND ACCENT (Top-Right Only) --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#3D5AFE]/5 rounded-full blur-[120px]" />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-16 px-6 lg:px-10 z-10 border-b border-zinc-100 bg-white/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-8"
          >
            <div className="px-3 py-1 bg-white border border-zinc-200 shadow-sm rounded-full flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Channel Open</span>
            </div>
          </motion.div>
          
          <h1 className="text-6xl md:text-[120px] font-black tracking-tighter leading-[0.85] uppercase italic text-zinc-900 mb-6">
            Initiate <br />
            <span className="text-[#3D5AFE] not-italic">Execution.</span>
          </h1>
          <p className="max-w-xl text-zinc-500 text-lg font-medium leading-relaxed italic">
            Engineering high-performance digital ecosystems and autonomous AI agents for the next era of business.
          </p>
        </div>
      </section>

      {/* --- MAIN CONTENT GRID --- */}
      <section className="relative z-10 py-32 px-6 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT: TECHNICAL SPECS */}
          <div className="lg:col-span-5 space-y-8">
            <div className="grid grid-cols-2 gap-4">
               <div className="p-6 bg-white border border-zinc-100 shadow-sm rounded-2xl">
                  <Mail className="text-[#3D5AFE] mb-4" size={20} />
                  <p className="text-[9px] font-black uppercase text-zinc-400 mb-1">Email</p>
                  <p className="text-sm font-bold truncate">hello@deventa.com</p>
               </div>
               <div className="p-6 bg-white border border-zinc-100 shadow-sm rounded-2xl">
                  <Clock className="text-[#3D5AFE] mb-4" size={20} />
                  <p className="text-[9px] font-black uppercase text-zinc-400 mb-1">Latency</p>
                  <p className="text-sm font-bold">&lt; 12 Hours</p>
               </div>
            </div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-12 bg-[#0A0A0A] text-white rounded-[2.5rem] relative overflow-hidden group shadow-2xl shadow-zinc-900/40"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8 text-[#3D5AFE]">
                  <Target size={22} />
                  <span className="text-[10px] font-black uppercase tracking-widest">The Dewinza Audit</span>
                </div>
                <h4 className="text-3xl font-bold italic uppercase tracking-tighter mb-6 leading-none">The Architecture <br/> of Discovery.</h4>
                <p className="text-zinc-400 text-sm leading-relaxed mb-10">
                  Every inquiry triggers a technical feasibility audit. We analyze your stack and identify RAG potential to ensure maximum performance.
                </p>
                <Link href="/services" className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-[#3D5AFE] hover:text-white transition-colors">
                  Our Method <ArrowRight size={14} />
                </Link>
              </div>
              <Sparkles className="absolute top-[-20px] right-[-20px] text-white/5 group-hover:text-[#3D5AFE]/15 transition-colors duration-700" size={200} />
            </motion.div>
          </div>

          {/* RIGHT: THE FORM (Clear Visibility) */}
          <div className="lg:col-span-7 bg-white border border-zinc-100 p-8 md:p-14 shadow-2xl shadow-zinc-200/50 rounded-[3rem]">
            <form className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-3 block">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-zinc-50 border border-zinc-200 p-6 rounded-2xl outline-none font-bold text-lg focus:bg-white focus:border-[#3D5AFE] transition-all" />
                </div>
                <div className="relative group">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-3 block">Email Address</label>
                  <input type="email" placeholder="john@company.com" className="w-full bg-zinc-50 border border-zinc-200 p-6 rounded-2xl outline-none font-bold text-lg focus:bg-white focus:border-[#3D5AFE] transition-all" />
                </div>
              </div>

              <div className="space-y-6">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 block">Select Service</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {techServices.map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => setActiveVector(service.label)}
                      className={`px-6 py-4 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border ${
                        activeVector === service.label 
                        ? "bg-[#3D5AFE] text-white border-[#3D5AFE] shadow-lg shadow-[#3D5AFE]/30" 
                        : "bg-zinc-50 text-zinc-400 border-zinc-100 hover:bg-zinc-100 hover:text-zinc-900"
                      }`}
                    >
                      {service.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 block">Project Brief</label>
                <textarea rows={5} placeholder="Describe the mission objective..." className="w-full bg-zinc-50 border border-zinc-200 p-8 focus:bg-white focus:border-[#3D5AFE] rounded-3xl outline-none font-bold transition-all resize-none" />
              </div>

              <motion.button 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full bg-[#3D5AFE] text-white py-8 rounded-full font-black uppercase tracking-[0.5em] text-[12px] flex items-center justify-center gap-4 hover:shadow-2xl transition-all"
              >
                Transmit Proposal <Send size={16} />
              </motion.button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}