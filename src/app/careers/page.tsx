"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowUpRight, 
  Zap, 
  Globe2, 
  ShieldCheck, 
  Sparkles,
  Terminal,
  Users,
  Cpu,
  Code2
} from "lucide-react";

export default function CareersPage() {
  const [mounted, setMounted] = useState(false);

  // Ensures Framer Motion and Client-side components hydrate correctly
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const openPositions = [
    {
      title: "AI Engineer (RAG Specialist)",
      type: "Full-Time",
      location: "Remote / Hybrid",
      stack: "Python, LangChain, OpenAI",
      id: "ai-01"
    },
    {
      title: "Senior Full-Stack Developer",
      type: "Full-Time",
      location: "Remote",
      stack: "Next.js, TypeScript, Go",
      id: "fs-02"
    },
    {
      title: "Product Designer (UI/UX)",
      type: "Contract / Full-Time",
      location: "Remote",
      stack: "Figma, Framer, Tailwind",
      id: "pd-03"
    },
    {
      title: "Backend Architect",
      type: "Full-Time",
      location: "On-site (Global)",
      stack: "Node.js, PostgreSQL, Redis",
      id: "ba-04"
    }
  ];

  const perks = [
    { icon: <Globe2 size={24} />, title: "Remote First", desc: "Work from anywhere in the world. Performance over presence." },
    { icon: <Zap size={24} />, title: "Ownership", desc: "Every engineer is a stakeholder. Lead your own product cycles." },
    { icon: <ShieldCheck size={24} />, title: "Health & Gear", desc: "Top-tier health coverage and a budget for your dream workstation." },
    { icon: <Sparkles size={24} />, title: "AI-First", desc: "Direct access to the latest LLM models and compute resources." }
  ];

  return (
    <main className="bg-[#FCFCFC] text-[#0A0A0A] min-h-screen selection:bg-[#3D5AFE] selection:text-white font-sans overflow-x-hidden">
      
      {/* --- SECTION 1: HERO --- */}
      <section className="relative pt-48 pb-32 border-b border-zinc-100 bg-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e2e2_1px,transparent_1px),linear-gradient(to_bottom,#e2e2e2_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 bg-[#3D5AFE]/5 border border-[#3D5AFE]/20 mb-8"
              >
                <Users size={12} className="text-[#3D5AFE]" />
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#3D5AFE]">Join the Neural Network</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-7xl md:text-[110px] font-black uppercase italic tracking-tighter leading-[0.8] text-zinc-900 mb-12"
              >
                Build the <br /> <span className="text-[#3D5AFE] not-italic">Intelligence.</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl font-bold uppercase italic text-zinc-400 max-w-xl border-l-4 border-[#3D5AFE] pl-6"
              >
                Join an elite group of architects building autonomous systems and high-scale SaaS platforms.
              </motion.p>
            </div>

            <div className="lg:col-span-4 relative group">
              <div className="p-10 border-2 border-zinc-900 bg-white relative z-10 shadow-[15px_15px_0px_0px_#0A0A0A]">
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-6">// Mission Protocol</p>
                <p className="text-sm font-bold italic leading-relaxed text-zinc-900">
                  "At Deventa, we don't just fill roles. We empower individuals to own entire systems."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: PERKS --- */}
      <section className="py-32 px-6 lg:px-10 bg-[#0A0A0A] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {perks.map((perk, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="text-[#3D5AFE] mb-6 group-hover:scale-110 transition-transform">{perk.icon}</div>
                <h4 className="text-lg font-black uppercase italic tracking-tighter mb-4">{perk.title}</h4>
                <p className="text-zinc-500 text-[11px] font-bold uppercase tracking-widest leading-loose">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: PIPELINES (JOBS) --- */}
      <section className="py-32 px-6 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 border-b border-zinc-100 pb-12 gap-8">
              <div>
                <h2 className="text-5xl font-black uppercase italic tracking-tighter text-zinc-900">Open Pipelines.</h2>
                <p className="text-zinc-400 text-[10px] font-black uppercase tracking-widest mt-2">Initialize your application transmission</p>
              </div>
              <div className="flex items-center gap-6">
                <Link href="/careers/apply?type=internship" className="px-6 py-3 border border-zinc-900 text-[10px] font-black uppercase tracking-widest hover:bg-[#3D5AFE] hover:text-white hover:border-[#3D5AFE] transition-all">
                  Internship Portal
                </Link>
                <span className="hidden md:block text-[9px] font-black uppercase tracking-[0.4em] text-zinc-300 italic">Total Slots: {openPositions.length}</span>
              </div>
          </div>

          <div className="space-y-4">
            {openPositions.map((job) => (
              <Link 
                key={job.id} 
                href={`/apply?role=${encodeURIComponent(job.title)}`}
                className="block"
              >
                <motion.div 
                  whileHover={{ x: 15 }}
                  className="group p-8 border border-zinc-100 hover:border-[#3D5AFE] hover:bg-zinc-50 transition-all flex flex-col md:flex-row justify-between items-center"
                >
                  <div className="flex flex-col md:flex-row gap-8 items-start md:items-center w-full">
                     <div className="w-14 h-14 bg-zinc-900 text-white flex items-center justify-center font-black italic group-hover:bg-[#3D5AFE] transition-colors flex-shrink-0">
                        {job.id.split('-')[0].toUpperCase()}
                     </div>
                     <div className="flex-1">
                        <h4 className="text-2xl font-black uppercase italic tracking-tighter text-zinc-900 group-hover:text-[#3D5AFE] transition-colors">{job.title}</h4>
                        <div className="flex items-center gap-4 mt-1">
                          <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{job.stack}</p>
                        </div>
                     </div>
                  </div>

                  <div className="flex gap-12 items-center mt-6 md:mt-0 w-full md:w-auto justify-between md:justify-end">
                     <div className="text-right">
                        <p className="text-[10px] font-black uppercase tracking-widest text-zinc-900">{job.location}</p>
                        <p className="text-[9px] font-bold text-zinc-400 uppercase">{job.type}</p>
                     </div>
                     <div className="flex items-center gap-3 text-[#3D5AFE] md:opacity-0 md:group-hover:opacity-100 transition-all">
                        <span className="text-[10px] font-black uppercase tracking-widest hidden sm:inline">Apply</span>
                        <ArrowUpRight size={20} />
                     </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 4: GENERAL APPLICATION --- */}
      <section className="py-40 bg-zinc-50 text-center px-6">
        <div className="max-w-3xl mx-auto">
           <Terminal className="mx-auto text-[#3D5AFE] mb-8" size={32} />
           <h2 className="text-5xl font-black uppercase italic tracking-tighter text-zinc-900 mb-8">Not seeing your role?</h2>
           <p className="text-zinc-500 font-bold uppercase italic text-sm mb-12">
             We are always looking for exceptional talent. If you have a specific skillset not listed, transmit your general application.
           </p>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
             <Link href="/apply" className="w-full sm:w-auto bg-[#3D5AFE] text-white px-12 py-6 font-black uppercase tracking-[0.3em] text-[10px] hover:bg-black transition-all shadow-xl shadow-[#3D5AFE]/20">
                General Application
             </Link>
             <Link href="/contact" className="w-full sm:w-auto bg-transparent border-2 border-zinc-900 text-zinc-900 px-12 py-6 font-black uppercase tracking-[0.3em] text-[10px] hover:bg-zinc-900 hover:text-white transition-all">
                Contact Talent Team
             </Link>
           </div>
        </div>
      </section>

    </main>
  );
}