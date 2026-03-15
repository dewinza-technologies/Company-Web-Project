"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  Gavel, 
  ShieldAlert, 
  Cpu, 
  Globe, 
  Terminal, 
  ChevronRight,
  Handshake
} from "lucide-react";

export default function TermsOfService() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const sections = [
    { id: "acceptance", title: "01. Acceptance of Terms" },
    { id: "licensing", title: "02. Software Licensing" },
    { id: "prohibited", title: "03. Prohibited Execution" },
    { id: "liability", title: "04. Limitation of Liability" },
    { id: "termination", title: "05. Service Termination" },
    { id: "jurisdiction", title: "06. Legal Jurisdiction" },
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
      <section className="pt-40 pb-20 border-b border-zinc-100 bg-zinc-50/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-[#3D5AFE] mb-6"
          >
            <Gavel size={18} />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Governance // Service Level Agreement</span>
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-none mb-6">
            Terms of <br /> <span className="text-[#3D5AFE] not-italic text-outline">Service.</span>
          </h1>
          <p className="text-zinc-400 font-bold uppercase tracking-widest text-[10px]">
            Deventa Tech Framework // Version 2026.R2
          </p>
        </div>
      </section>

      {/* --- TERMS TERMINAL --- */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* NAVIGATION SIDEBAR */}
          <aside className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              <nav className="flex flex-col gap-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="group flex items-center justify-between py-4 px-6 border border-zinc-100 rounded-2xl hover:bg-zinc-50 hover:border-[#3D5AFE] transition-all"
                  >
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 group-hover:text-[#3D5AFE]">
                      {section.title}
                    </span>
                    <ChevronRight size={14} className="text-zinc-200 group-hover:text-[#3D5AFE] transition-transform group-hover:translate-x-1" />
                  </button>
                ))}
              </nav>

              <div className="p-8 bg-zinc-900 rounded-[2.5rem] relative overflow-hidden">
                <div className="relative z-10">
                  <Handshake className="text-[#3D5AFE] mb-6" size={28} />
                  <h4 className="text-white text-lg font-black uppercase italic mb-2">Mutual Trust.</h4>
                  <p className="text-zinc-500 text-[10px] font-bold uppercase leading-relaxed tracking-wider">
                    By accessing the Deventa API or platform, you agree to operate within our ethical engineering guidelines.
                  </p>
                </div>
                <div className="absolute bottom-[-20%] right-[-10%] opacity-10">
                   <Terminal size={150} className="text-white" />
                </div>
              </div>
            </div>
          </aside>

          {/* MAIN SCROLLABLE CONTENT */}
          <div className="lg:col-span-8 bg-white border border-zinc-100 rounded-[3rem] p-8 md:p-16 h-[750px] overflow-y-auto custom-terms-scroll shadow-2xl shadow-zinc-200/50">
            <div className="space-y-24">
              
              {/* SECTION 1 */}
              <div id="acceptance" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 bg-[#3D5AFE] rounded-xl flex items-center justify-center text-white">
                    <Globe size={18} />
                  </div>
                  <h2 className="text-3xl font-black uppercase italic tracking-tighter">01. Acceptance</h2>
                </div>
                <p className="text-zinc-600 font-medium leading-loose text-lg">
                  Accessing or utilizing the Deventa technical infrastructure constitutes a binding legal agreement. These terms apply to all visitors, developers, and entities who interact with our services.
                </p>
              </div>

              {/* SECTION 2 */}
              <div id="licensing" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 bg-[#3D5AFE] rounded-xl flex items-center justify-center text-white">
                    <Cpu size={18} />
                  </div>
                  <h2 className="text-3xl font-black uppercase italic tracking-tighter">02. Licensing</h2>
                </div>
                <div className="space-y-6">
                  <p className="text-zinc-600 font-medium leading-loose">
                    Unless otherwise stated in a specific Project Agreement, all custom code, neural weights, and architectural designs provided by Deventa remain the intellectual property of Deventa Tech until full project reconciliation is achieved.
                  </p>
                  <div className="p-6 bg-zinc-50 rounded-2xl border-l-4 border-[#3D5AFE]">
                    <p className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-2">Internal Protocol:</p>
                    <p className="text-sm font-bold text-zinc-800 italic">"Usage of our proprietary 'Deventa-Core' libraries is granted under a limited, non-transferable license for the duration of the service term."</p>
                  </div>
                </div>
              </div>

              {/* SECTION 3 */}
              <div id="prohibited" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 bg-[#3D5AFE] rounded-xl flex items-center justify-center text-white">
                    <ShieldAlert size={18} />
                  </div>
                  <h2 className="text-3xl font-black uppercase italic tracking-tighter">03. Prohibited Usage</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Reverse engineering AI agents",
                    "Automated scraping of assets",
                    "Redistribution of core logic",
                    "Unauthorized API stress-testing"
                  ].map((text, i) => (
                    <div key={i} className="p-5 border border-zinc-100 rounded-2xl flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION 4 */}
              <div id="liability" className="scroll-mt-32 pb-20">
                <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-8">04. Liability Limits</h2>
                <p className="text-zinc-600 font-medium leading-loose">
                  Deventa provides technology "as is." While we maintain a 99.9% uptime target for our deployed ecosystems, we are not liable for business interruptions caused by third-party cloud provider failures or upstream LLM provider outages.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-20 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row justify-between items-center gap-8">
           <p className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400">Questions regarding these protocols?</p>
           <button className="bg-[#3D5AFE] text-white px-10 py-5 rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-black transition-all">
             Legal Inquiry Terminal
           </button>
        </div>
      </section>

      <style jsx global>{`
        .custom-terms-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .custom-terms-scroll::-webkit-scrollbar-track {
          background: #fafafa;
        }
        .custom-terms-scroll::-webkit-scrollbar-thumb {
          background: #3D5AFE;
          border-radius: 20px;
        }
      `}</style>

    </main>
  );
}