"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { 
  ArrowUpRight, 
  Bot, 
  Code2, 
  Smartphone, 
  Database,
  Terminal,
  Activity
} from "lucide-react";

export default function Projects() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const projects = [
    {
      id: "01",
      title: "Cortex AI Agent",
      tag: "AI & Automation",
      desc: "An autonomous B2B sales agent that integrates with CRM systems to qualify leads and personalize outreach using RAG architectures.",
      stats: "70% Lead Conv.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200",
      tech: ["LangChain", "OpenAI", "Vector DB"],
      status: "Active Deployment"
    },
    {
      id: "02",
      title: "Neural Support Bot",
      tag: "AI Chatbots",
      desc: "Custom-trained support interface with sentiment analysis and instant multi-language resolution for global e-commerce.",
      stats: "92% CSAT Score",
      // Updated to a better chatbot/interface image
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?q=80&w=1200", 
      tech: ["Python", "PyTorch", "AWS Lambda"],
      status: "Operational"
    },
    {
      id: "03",
      title: "Omni-SaaS Dashboard",
      tag: "Web Ecosystem",
      desc: "High-performance ERP platform with real-time data visualization and multi-tenant cloud architecture.",
      stats: "0.4s Global Load",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
      tech: ["Next.js 14", "Tailwind", "PostgreSQL"],
      status: "Live"
    },
    {
      id: "04",
      title: "Zenith Mobile",
      tag: "App Development",
      desc: "Lifestyle mobile application featuring biometric tracking, AI health insights, and cross-platform synchronization.",
      stats: "1.2M Users",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200",
      tech: ["React Native", "Firebase", "Node.js"],
      status: "Scalable"
    }
  ];

  return (
    <main className="bg-[#FCFCFC] text-[#0A0A0A] min-h-screen selection:bg-[#3D5AFE] selection:text-white font-sans overflow-x-hidden">
      
      {/* --- SECTION 1: ENHANCED HERO --- */}
      <section className="relative pt-48 pb-32 border-b border-zinc-100 bg-white overflow-hidden">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40" />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3] 
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#3D5AFE]/5 rounded-full blur-[120px]" 
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end">
            <div className="lg:col-span-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 bg-[#3D5AFE]/5 border border-[#3D5AFE]/20 mb-8"
              >
                <Activity size={12} className="text-[#3D5AFE] animate-pulse" />
                <span className="text-[9px] font-[900] uppercase tracking-[0.3em] text-[#3D5AFE]">Engineered Solutions 2026</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-7xl md:text-[120px] font-[1000] uppercase italic tracking-tighter leading-[0.8] text-zinc-900 mb-12"
              >
                Digital <br /> <span className="text-[#3D5AFE] not-italic">Impact.</span>
              </motion.h1>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col md:flex-row gap-8 items-start md:items-center"
              >
                <p className="text-xl font-bold uppercase italic text-zinc-400 max-w-md border-l-4 border-[#3D5AFE] pl-6">
                  Transforming conceptual logic into high-performance AI agents and web ecosystems.
                </p>
                <div className="hidden md:block w-px h-16 bg-zinc-200" />
                <div className="flex gap-4">
                  <div className="text-center px-4">
                    <p className="text-[20px] font-black italic">42+</p>
                    <p className="text-[8px] font-black uppercase text-zinc-400">Deployments</p>
                  </div>
                  <div className="text-center px-4">
                    <p className="text-[20px] font-black italic">99%</p>
                    <p className="text-[8px] font-black uppercase text-zinc-400">Client Sat</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-4 hidden lg:block">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 border border-zinc-100 bg-zinc-50/50 backdrop-blur-sm relative group cursor-none"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                   <Terminal size={40} className="text-[#3D5AFE]" />
                </div>
                <p className="text-[10px] font-mono text-zinc-400 mb-4">// System Status</p>
                <p className="text-sm font-bold uppercase tracking-tight">AI Orchestration: <span className="text-[#3D5AFE]">Optimal</span></p>
                <div className="mt-6 flex gap-1">
                  {[1,2,3,4,5,6,7,8].map(i => (
                    <div key={i} className="h-8 w-1 bg-[#3D5AFE]/20 overflow-hidden relative">
                       <motion.div 
                        animate={{ y: [32, 0, 32] }} 
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                        className="absolute inset-0 bg-[#3D5AFE]" 
                       />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: PROJECTS WITH MAGNETIC HOVER --- */}
      <section className="py-32 px-6 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-48">
            {projects.map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-20 items-center`}
              >
                {/* Project Image - Scale & Parallax Hover */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="w-full lg:w-3/5 group cursor-pointer relative"
                >
                  <div className="absolute -inset-6 bg-[#3D5AFE]/5 opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10 blur-2xl rounded-full" />
                  <div className="aspect-video overflow-hidden border border-zinc-100 shadow-2xl relative">
                    <img 
                      src={p.image} 
                      alt={p.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s] ease-out group-hover:scale-110" 
                    />
                    {/* Status Badge */}
                    <div className="absolute bottom-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md border border-zinc-200">
                       <p className="text-[8px] font-black uppercase tracking-widest flex items-center gap-2">
                         <span className="w-1.5 h-1.5 rounded-full bg-[#3D5AFE] animate-ping" />
                         {p.status}
                       </p>
                    </div>
                  </div>
                </motion.div>

                {/* Project Info */}
                <div className="w-full lg:w-2/5">
                  <span className="text-[10px] font-[900] text-[#3D5AFE] tracking-[0.4em] uppercase mb-4 block">{p.tag}</span>
                  <h3 className="text-6xl font-[1000] uppercase italic tracking-tighter text-zinc-900 mb-8 leading-none">
                    {p.title.split(' ')[0]} <br /> 
                    <span className="text-zinc-300 group-hover:text-[#3D5AFE] transition-colors">{p.title.split(' ')[1]}</span>
                  </h3>
                  <p className="text-zinc-500 text-lg font-medium leading-relaxed mb-10 italic">
                    "{p.desc}"
                  </p>

                  <div className="grid grid-cols-2 gap-10 mb-12 border-y border-zinc-100 py-8">
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-widest text-zinc-400 mb-2">Primary Metric</p>
                      <p className="text-2xl font-black italic text-zinc-900">{p.stats}</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-widest text-zinc-400 mb-2">Core Tech</p>
                      <div className="flex flex-wrap gap-2">
                        {p.tech.map((t, idx) => (
                          <span key={idx} className="text-[8px] font-bold text-zinc-500 uppercase px-2 py-1 bg-zinc-100 border border-zinc-200">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Link href={`/projects/${p.id}`} className="group/btn inline-flex items-center gap-6">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] group-hover/btn:text-[#3D5AFE] transition-colors">Technical Architecture</span>
                    <div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center group-hover/btn:bg-[#3D5AFE] group-hover/btn:border-[#3D5AFE] transition-all">
                      <ArrowUpRight className="group-hover/btn:text-white transition-colors" size={18} />
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: TECH STACK GRID --- */}
      <section className="py-32 bg-[#0A0A0A] text-white px-6 lg:px-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/10 pb-12">
            <h2 className="text-5xl font-[1000] uppercase italic tracking-tighter leading-none">Engineering <br /> Core.</h2>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 mt-6 md:mt-0 italic">// Standards of delivery</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {[
              { icon: <Bot />, title: "AI Systems", desc: "LLM Orchestration, RAG, and autonomous agents." },
              { icon: <Code2 />, title: "Web Apps", desc: "Performance-first React and Next.js ecosystems." },
              { icon: <Smartphone />, title: "Mobile Dev", desc: "Native-grade cross-platform mobile experiences." },
              { icon: <Database />, title: "Cloud Infra", desc: "Secure, auto-scaling edge-first infrastructure." }
            ].map((cap, i) => (
              <div key={i} className="bg-[#0A0A0A] p-12 hover:bg-[#3D5AFE] transition-all duration-700 group">
                <div className="w-12 h-12 flex items-center justify-center text-[#3D5AFE] mb-8 group-hover:text-white group-hover:scale-110 transition-all">
                  {React.cloneElement(cap.icon as React.ReactElement, { size: 32 })}
                </div>
                <h4 className="text-xl font-black uppercase italic tracking-tighter mb-4">{cap.title}</h4>
                <p className="text-zinc-500 text-[11px] font-bold uppercase tracking-widest leading-loose group-hover:text-white/80">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 4: CONTACT CTA --- */}
      <section className="py-48 bg-white text-center px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div 
            whileInView={{ scale: [0.9, 1], opacity: [0, 1] }}
            className="border-2 border-zinc-900 p-12 md:p-24 shadow-[20px_20px_0px_0px_#3D5AFE] bg-white group hover:shadow-[30px_30px_0px_0px_#3D5AFE] transition-all duration-500"
          >
            <h2 className="text-5xl md:text-8xl font-[1000] uppercase italic tracking-tighter text-zinc-900 mb-12 leading-none">
              Start Your <br /> <span className="text-[#3D5AFE] not-italic">Project.</span>
            </h2>
            <Link href="/contact">
              <button className="bg-zinc-900 text-white px-16 py-8 font-black uppercase tracking-[0.3em] text-[10px] hover:bg-[#3D5AFE] transition-all flex items-center mx-auto group">
                 Request a Quote <ArrowUpRight className="ml-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={16} />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}