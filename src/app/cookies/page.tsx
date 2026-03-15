"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  Cookie, 
  Info, 
  Settings, 
  ShieldCheck, 
  BarChart3, 
  MousePointer2,
  ChevronRight
} from "lucide-react";

export default function CookiePolicy() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const cookieTypes = [
    {
      title: "Essential Protocol",
      icon: <ShieldCheck size={18} />,
      desc: "Mandatory for system stability and secure authentication sessions.",
      cookies: ["session_id", "xsrf_token", "load_balancer"]
    },
    {
      title: "Performance Analytics",
      icon: <BarChart3 size={18} />,
      desc: "Used to monitor latency and optimize server-side rendering speeds.",
      cookies: ["_ga", "_gid", "latency_audit"]
    },
    {
      title: "Preference Logic",
      icon: <Settings size={18} />,
      desc: "Remembers your UI configurations and theme preferences.",
      cookies: ["ui_mode", "lang_pref"]
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-white text-[#0A0A0A] min-h-screen selection:bg-[#3D5AFE] selection:text-white font-sans overflow-x-hidden">
      
      {/* --- HEADER --- */}
      <section className="pt-40 pb-20 border-b border-zinc-100 bg-[#FAFBFD]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-[#3D5AFE] mb-6"
          >
            <Cookie size={18} />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Metadata Transparency // Cookie Policy</span>
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-none mb-6">
            Tracking <br /> <span className="text-[#3D5AFE] not-italic">Logic.</span>
          </h1>
          <p className="text-zinc-400 font-bold uppercase tracking-widest text-[10px]">
            Revision: Jan 2026 // Compliance ID: DEW-CK-09
          </p>
        </div>
      </section>

      {/* --- CONTENT TERMINAL --- */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* SIDEBAR NAVIGATION */}
          <aside className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              <nav className="flex flex-col gap-2">
                {["Overview", "Cookie Inventory", "User Control"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                    className="group flex items-center justify-between py-4 px-6 border border-zinc-100 rounded-2xl hover:bg-zinc-50 hover:border-[#3D5AFE] transition-all"
                  >
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 group-hover:text-[#3D5AFE]">
                      {item}
                    </span>
                    <ChevronRight size={14} className="text-zinc-200 group-hover:text-[#3D5AFE] transition-transform group-hover:translate-x-1" />
                  </button>
                ))}
              </nav>

              <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100">
                <Info className="text-[#3D5AFE] mb-4" size={24} />
                <h4 className="text-sm font-black uppercase mb-3">Opt-Out Terminal</h4>
                <p className="text-zinc-500 text-[11px] leading-relaxed font-medium">
                  You can manage your preference via your browser settings or our centralized privacy dashboard.
                </p>
              </div>
            </div>
          </aside>

          {/* SCROLLABLE CONTENT */}
          <div className="lg:col-span-8 bg-white border border-zinc-100 rounded-[3rem] p-8 md:p-16 h-[750px] overflow-y-auto custom-cookie-scroll shadow-2xl shadow-zinc-200/50">
            <div className="space-y-24">
              
              {/* SECTION: OVERVIEW */}
              <div id="overview" className="scroll-mt-32">
                <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-8">System Overview</h2>
                <p className="text-zinc-600 font-medium leading-loose text-lg mb-6">
                  Deventa utilizes "Cookies"—small data packets stored on your hardware—to ensure our high-velocity web architecture operates at peak performance. These packets allow us to maintain your session state and optimize resource delivery across our global edge network.
                </p>
              </div>

              {/* SECTION: INVENTORY */}
              <div id="cookie-inventory" className="scroll-mt-32">
                <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-10">Cookie Inventory</h2>
                <div className="space-y-6">
                  {cookieTypes.map((type, i) => (
                    <div key={i} className="p-8 bg-zinc-50 rounded-[2rem] border border-zinc-100 group hover:border-[#3D5AFE] transition-colors">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="text-[#3D5AFE]">{type.icon}</div>
                        <h3 className="font-black uppercase italic text-sm tracking-widest">{type.title}</h3>
                      </div>
                      <p className="text-zinc-500 text-sm mb-6 leading-relaxed italic">{type.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {type.cookies.map((c) => (
                          <span key={c} className="px-3 py-1 bg-white border border-zinc-200 rounded-md text-[9px] font-mono text-zinc-400">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION: CONTROL */}
              <div id="user-control" className="scroll-mt-32 pb-20">
                <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-8">User Control</h2>
                <div className="p-8 border-2 border-dashed border-zinc-100 rounded-[2rem]">
                  <p className="text-zinc-500 text-sm leading-relaxed italic mb-8">
                    To revoke consent for non-essential tracking, please utilize your browser's "Clear Cache" protocol or identify the "Do Not Track" (DNT) header in your system configuration.
                  </p>
                  <div className="flex items-center gap-3 text-[#3D5AFE]">
                    <MousePointer2 size={16} />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em]">Update Preferences Terminal</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .custom-cookie-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .custom-cookie-scroll::-webkit-scrollbar-track {
          background: #fafafa;
        }
        .custom-cookie-scroll::-webkit-scrollbar-thumb {
          background: #3D5AFE;
          border-radius: 20px;
        }
      `}</style>

    </main>
  );
}