"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { 
  Upload, 
  Send, 
  User, 
  Mail, 
  Link as LinkIcon, 
  Briefcase, 
  CheckCircle2,
  Terminal,
  ArrowLeft
} from "lucide-react";
import Link from "next/link";

function ApplicationForm() {
  const searchParams = useSearchParams();
  const [mounted, setMounted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  // Pre-fills role from URL (e.g., ?role=AI%20Engineer)
  const roleFromQuery = searchParams.get("role") || "General Application";

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for API submission goes here
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-20 h-20 bg-[#3D5AFE] rounded-full flex items-center justify-center text-white mb-8"
        >
          <CheckCircle2 size={40} />
        </motion.div>
        <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-4">Transmission Received.</h2>
        <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px] max-w-sm leading-relaxed">
          Our talent lead will audit your credentials. If there is a neural match, we will initialize contact within 48 hours.
        </p>
        <Link href="/careers" className="mt-12 text-[#3D5AFE] font-black uppercase tracking-widest text-[10px] flex items-center gap-2 hover:gap-4 transition-all">
          <ArrowLeft size={14} /> Back to Pipelines
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white border border-zinc-100 p-8 md:p-16 rounded-[3rem] shadow-2xl shadow-zinc-200/50"
      >
        <form onSubmit={handleSubmit} className="space-y-12">
          
          {/* --- HEADER --- */}
          <div className="border-b border-zinc-100 pb-10">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#3D5AFE] mb-4">// Candidate Initialization</p>
            <h2 className="text-4xl font-black uppercase italic tracking-tighter">
              Applying for: <span className="text-[#3D5AFE] not-italic">{roleFromQuery}</span>
            </h2>
          </div>

          {/* --- FORM GRID --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                <User size={12} /> Full Name
              </label>
              <input required type="text" placeholder="ALAN TURING" className="w-full bg-zinc-50 border-b-2 border-zinc-200 py-4 outline-none focus:border-[#3D5AFE] transition-all font-bold uppercase text-sm" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                <Mail size={12} /> Email Address
              </label>
              <input required type="email" placeholder="ALAN@ENIGMA.COM" className="w-full bg-zinc-50 border-b-2 border-zinc-200 py-4 outline-none focus:border-[#3D5AFE] transition-all font-bold uppercase text-sm" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                <LinkIcon size={12} /> Portfolio / GitHub
              </label>
              <input required type="url" placeholder="HTTPS://GITHUB.COM/..." className="w-full bg-zinc-50 border-b-2 border-zinc-200 py-4 outline-none focus:border-[#3D5AFE] transition-all font-bold text-sm" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                <Briefcase size={12} /> Current Role
              </label>
              <input type="text" placeholder="SOFTWARE ARCHITECT" className="w-full bg-zinc-50 border-b-2 border-zinc-200 py-4 outline-none focus:border-[#3D5AFE] transition-all font-bold uppercase text-sm" />
            </div>
          </div>

          {/* --- FILE UPLOAD --- */}
          <div className="space-y-4">
            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">CV / Resume (PDF)</label>
            <div className="border-2 border-dashed border-zinc-200 rounded-[2rem] p-12 text-center hover:border-[#3D5AFE] transition-all cursor-pointer bg-zinc-50 group">
              <input type="file" className="hidden" id="cv-upload" accept=".pdf" />
              <label htmlFor="cv-upload" className="cursor-pointer">
                <Upload className="mx-auto text-zinc-300 group-hover:text-[#3D5AFE] mb-4 transition-colors" size={32} />
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Drop your blueprint here or click to browse</p>
              </label>
            </div>
          </div>

          {/* --- COVER NOTE --- */}
          <div className="space-y-4">
            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 flex items-center gap-2">
              <Terminal size={12} /> Why Deventa? (Brief)
            </label>
            <textarea rows={4} placeholder="TELL US ABOUT YOUR OBSESSION..." className="w-full bg-zinc-50 border-2 border-zinc-100 rounded-3xl p-6 outline-none focus:border-[#3D5AFE] transition-all font-bold uppercase text-sm resize-none" />
          </div>

          <button type="submit" className="w-full bg-[#3D5AFE] text-white py-8 rounded-full font-black uppercase tracking-[0.4em] text-xs flex items-center justify-center gap-4 hover:bg-black transition-all shadow-xl shadow-[#3D5AFE]/20 group">
            Transmit Application <Send size={16} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default function ApplyPage() {
  return (
    <main className="bg-[#FCFCFC] text-[#0A0A0A] min-h-screen pt-40 pb-20 px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#3D5AFE] blur-[150px] rounded-full" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#3D5AFE] blur-[150px] rounded-full opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <Suspense fallback={<div className="text-center font-black uppercase tracking-widest py-20">Loading Pipeline...</div>}>
          <ApplicationForm />
        </Suspense>
      </div>
    </main>
  );
}