"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  UserCircle, 
  Lock, 
  ArrowRight, 
  Terminal, 
  Zap,
  ChevronLeft,
  Activity,
  Fingerprint
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [view, setView] = useState<"select" | "employee" | "admin">("select");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulated Authentication Delay
    setTimeout(() => {
      if (view === "admin") {
        router.push("/dashboard/admin");
      } else {
        router.push("/dashboard/employee");
      }
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-[#F8F9FA] text-[#0A0A0A] flex items-center justify-center p-6 relative overflow-hidden font-sans selection:bg-[#3D5AFE] selection:text-white">
      
      {/* --- BRIGHT THEME DECOR --- */}
      <div className="absolute inset-0 z-0 opacity-40">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#3D5AFE]/5 blur-[120px] rounded-full" />

      <div className="w-full max-w-[460px] relative z-10">
        <AnimatePresence mode="wait">
          
          {/* PHASE 1: SELECTION */}
          {view === "select" && (
            <motion.div 
              key="select"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-white border border-zinc-200 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-xl shadow-zinc-200/50">
                   <Fingerprint size={32} className="text-[#3D5AFE]" />
                </div>
                <h1 className="text-5xl font-[1000] uppercase italic tracking-tighter leading-none text-zinc-900">
                  Secure <br /> <span className="text-[#3D5AFE] not-italic">Gateway.</span>
                </h1>
                <p className="text-zinc-400 text-[9px] font-black uppercase tracking-[0.5em] mt-6 italic">Identity Verification Required</p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <button 
                  onClick={() => setView("employee")}
                  className="group bg-white border border-zinc-200 p-8 rounded-[2.5rem] flex items-center justify-between hover:border-[#3D5AFE] transition-all hover:shadow-2xl hover:shadow-[#3D5AFE]/10"
                >
                  <div className="text-left">
                    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-[#3D5AFE]">Standard Entry</p>
                    <h3 className="text-xl font-black uppercase italic text-zinc-800">Employee</h3>
                  </div>
                  <UserCircle size={28} className="text-zinc-300 group-hover:text-[#3D5AFE] transition-colors" />
                </button>

                <button 
                  onClick={() => setView("admin")}
                  className="group bg-[#0A0A0A] p-8 rounded-[2.5rem] flex items-center justify-between hover:bg-zinc-800 transition-all shadow-xl"
                >
                  <div className="text-left">
                    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Restricted Node</p>
                    <h3 className="text-xl font-black uppercase italic text-white">Administrator</h3>
                  </div>
                  <ShieldCheck size={28} className="text-zinc-600 group-hover:text-[#3D5AFE] transition-colors" />
                </button>
              </div>
            </motion.div>
          )}

          {/* PHASE 2: LOGIN FORM */}
          {(view === "employee" || view === "admin") && (
            <motion.div 
              key="auth"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              className="bg-white border border-zinc-200 p-10 md:p-14 rounded-[3.5rem] shadow-2xl shadow-zinc-200/60"
            >
              <button 
                onClick={() => setView("select")}
                className="text-zinc-400 hover:text-[#3D5AFE] flex items-center gap-2 text-[10px] font-black uppercase tracking-widest mb-12 transition-all"
              >
                <ChevronLeft size={14} /> Back to Entry
              </button>

              <div className="mb-10">
                <h2 className="text-4xl font-[1000] uppercase italic tracking-tighter text-zinc-900">
                  {view === "admin" ? "Root Access" : "Staff Portal"}
                </h2>
                <div className="flex items-center gap-3 mt-4">
                  <Activity size={14} className="text-[#3D5AFE]" />
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-400 italic">Protocol: Encrypted Session</span>
                </div>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[9px] font-black uppercase tracking-widest text-zinc-400 ml-2">User Identifier</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl py-5 px-6 outline-none focus:border-[#3D5AFE] focus:bg-white transition-all font-bold text-sm text-zinc-900 placeholder:text-zinc-300 uppercase"
                    placeholder="UID_001_DWZ"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] font-black uppercase tracking-widest text-zinc-400 ml-2">Security Key</label>
                  <div className="relative flex items-center">
                    <input 
                      required
                      type="password" 
                      className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl py-5 px-6 outline-none focus:border-[#3D5AFE] focus:bg-white transition-all font-bold text-sm text-zinc-900 placeholder:text-zinc-300"
                      placeholder="••••••••"
                    />
                    <Lock size={16} className="absolute right-6 text-zinc-300" />
                  </div>
                </div>

                <button 
                  disabled={isLoading}
                  className="w-full bg-[#3D5AFE] text-white py-6 rounded-2xl font-black uppercase tracking-[0.4em] text-[10px] flex items-center justify-center gap-4 hover:bg-[#0A0A0A] transition-all group disabled:opacity-50 shadow-lg shadow-[#3D5AFE]/20"
                >
                  {isLoading ? (
                    <span className="animate-pulse">Verifying...</span>
                  ) : (
                    <>Initialize <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></>
                  )}
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* --- FOOTER STATUS --- */}
      <div className="fixed bottom-8 left-8 flex items-center gap-4">
        <div className="w-2 h-2 rounded-full bg-[#3D5AFE] animate-pulse" />
        <p className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-400 italic">Auth Status: Ready</p>
      </div>

    </main>
  );
}