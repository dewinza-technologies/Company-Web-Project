"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Lock, 
  FileText, 
  Eye, 
  Scale, 
  ChevronRight,
  ArrowRight
} from "lucide-react";

export default function PrivacyPolicy() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const sections = [
    { id: "data-collection", title: "01. Data Collection" },
    { id: "usage-protocol", title: "02. Usage Protocol" },
    { id: "neural-privacy", title: "03. Neural Privacy" },
    { id: "security-stack", title: "04. Security Stack" },
    { id: "user-rights", title: "05. Principal Rights" },
    { id: "retention", title: "06. Data Retention" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-white text-[#0A0A0A] min-h-screen selection:bg-[#3D5AFE] selection:text-white font-sans">
      
      {/* --- HERO HEADER --- */}
      <section className="pt-40 pb-20 border-b border-zinc-100 bg-[#FAFBFD]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-[#3D5AFE] mb-6"
          >
            <ShieldCheck size={18} />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Protocol: Security & Compliance</span>
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-none mb-6">
            Privacy <br /> <span className="text-[#3D5AFE] not-italic">Governance.</span>
          </h1>
          <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px]">
            Last Updated: March 2026 // Revision 4.0.1
          </p>
        </div>
      </section>

      {/* --- CONTENT TERMINAL --- */}
      <section className="py-24 px-6 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT: STICKY NAVIGATION */}
          <aside className="lg:col-span-4">
            <div className="sticky top-32 space-y-10">
              <div className="space-y-4">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Navigation Index</p>
                <nav className="flex flex-col gap-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className="group flex items-center justify-between text-left py-4 px-6 border border-zinc-100 rounded-2xl hover:bg-zinc-50 hover:border-[#3D5AFE] transition-all"
                    >
                      <span className="text-xs font-black uppercase tracking-widest text-zinc-500 group-hover:text-[#3D5AFE]">
                        {section.title}
                      </span>
                      <ChevronRight size={14} className="text-zinc-200 group-hover:text-[#3D5AFE] transition-transform group-hover:translate-x-1" />
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-8 bg-[#0A0A0A] text-white rounded-[2rem] shadow-xl">
                <Lock className="text-[#3D5AFE] mb-6" size={24} />
                <h4 className="text-lg font-black uppercase italic mb-4">Encryption Standard</h4>
                <p className="text-zinc-500 text-[11px] leading-relaxed mb-6 font-medium uppercase tracking-wider">
                  All platform interactions are governed by end-to-end AES-256 encryption protocols.
                </p>
                <div className="h-[1px] bg-white/10 w-full mb-6" />
                <button className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:text-[#3D5AFE] transition-colors">
                  Contact Compliance <ArrowRight size={12} />
                </button>
              </div>
            </div>
          </aside>

          {/* RIGHT: SCROLLABLE LEGAL CONTENT */}
          <div className="lg:col-span-8 bg-zinc-50/50 border border-zinc-100 rounded-[3rem] p-8 md:p-16 h-[800px] overflow-y-auto custom-scrollbar relative">
            <div className="prose prose-zinc max-w-none space-y-20">
              
              {/* SECTION 1 */}
              <div id="data-collection" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-zinc-200 shadow-sm">
                    <Eye size={20} className="text-[#3D5AFE]" />
                  </div>
                  <h2 className="text-3xl font-black uppercase italic tracking-tighter">01. Data Collection</h2>
                </div>
                <div className="space-y-6 text-zinc-600 font-medium leading-loose">
                  <p>
                    Deventa ("The Platform") collects technical metadata required for the operation of high-performance digital systems. This includes, but is not limited to, IP-based geolocation for edge-computing optimization, hardware specifications for software compatibility, and session duration for latency auditing.
                  </p>
                  <p className="bg-white p-6 rounded-2xl border border-zinc-100 italic text-sm">
                    "We do not engage in the sale of principal identity data to third-party advertising conglomerates. All data serves as engineering input for platform enhancement."
                  </p>
                </div>
              </div>

              {/* SECTION 2 */}
              <div id="usage-protocol" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-zinc-200 shadow-sm">
                    <Scale size={20} className="text-[#3D5AFE]" />
                  </div>
                  <h2 className="text-3xl font-black uppercase italic tracking-tighter">02. Usage Protocol</h2>
                </div>
                <ul className="space-y-4">
                  {["System Optimization", "Neural Architecture Training", "Identity Verification", "Threat Mitigation"].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 py-4 px-6 bg-white border border-zinc-100 rounded-xl text-xs font-black uppercase tracking-widest text-zinc-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3D5AFE]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* SECTION 3 */}
              <div id="neural-privacy" className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-zinc-200 shadow-sm">
                    <FileText size={20} className="text-[#3D5AFE]" />
                  </div>
                  <h2 className="text-3xl font-black uppercase italic tracking-tighter">03. Neural Privacy</h2>
                </div>
                <div className="space-y-6 text-zinc-600 font-medium leading-loose">
                  <p>
                    Our RAG (Retrieval-Augmented Generation) systems operate on a "State-Isolated" basis. Any proprietary code or business logic provided via the contact terminal is stored in an encrypted vector database that is inaccessible to generic model training pipelines.
                  </p>
                </div>
              </div>

              {/* SECTION 4 & 5 SUMMARY */}
              <div id="security-stack" className="scroll-mt-32">
                 <h3 className="text-xl font-black uppercase mb-6 italic">04. Security Architecture</h3>
                 <p className="text-zinc-500 text-sm leading-relaxed mb-10">
                   Our infrastructure is shielded by multi-layer firewalls, biometric-grade authentication for administrative access, and real-time anomaly detection powered by autonomous security agents.
                 </p>
              </div>

              <div id="user-rights" className="scroll-mt-32 pb-20">
                 <h3 className="text-xl font-black uppercase mb-6 italic">05. Principal Rights</h3>
                 <p className="text-zinc-500 text-sm leading-relaxed">
                   Under international data protection laws, you retain the right to "Total Erasure." Upon formal request, all active data clusters associated with your identity will be purged within 72 business hours.
                 </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- TAILOR-MADE CSS FOR THE SCROLLBAR --- */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f4f4f5;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e4e4e7;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #3D5AFE;
        }
      `}</style>

    </main>
  );
}