"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  Code2,
  Smartphone,
  Database,
  Terminal,
  Activity,
  LucideIcon
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

  const capabilities: { icon: LucideIcon; title: string; desc: string }[] = [
    { icon: Bot, title: "AI Systems", desc: "LLM Orchestration, RAG, and autonomous agents." },
    { icon: Code2, title: "Web Apps", desc: "Performance-first React and Next.js ecosystems." },
    { icon: Smartphone, title: "Mobile Dev", desc: "Native-grade cross-platform mobile experiences." },
    { icon: Database, title: "Cloud Infra", desc: "Secure, auto-scaling edge-first infrastructure." }
  ];

  return (
    <main className="bg-[#FCFCFC] text-[#0A0A0A] min-h-screen selection:bg-[#3D5AFE] selection:text-white font-sans overflow-x-hidden">

      {/* --- SECTION 1: HERO --- */}
      <section className="relative pt-48 pb-32 border-b border-zinc-100 bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40" />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#3D5AFE]/5 rounded-full blur-[120px]"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-end">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#3D5AFE]/5 border border-[#3D5AFE]/20 mb-8">
                <Activity size={12} className="text-[#3D5AFE] animate-pulse" />
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#3D5AFE]">
                  Engineered Solutions 2026
                </span>
              </div>

              <h1 className="text-7xl md:text-[120px] font-black uppercase italic tracking-tighter leading-[0.8] text-zinc-900 mb-12">
                Digital <br />
                <span className="text-[#3D5AFE] not-italic">Impact.</span>
              </h1>
            </div>

            <div className="lg:col-span-4 hidden lg:block">
              <div className="p-8 border border-zinc-100 bg-zinc-50/50 relative">
                <Terminal size={40} className="text-[#3D5AFE]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: PROJECTS --- */}
      <section className="py-32 px-6 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto space-y-20">
          {projects.map((p, i) => (
            <div key={i}>
              <h3 className="text-3xl font-bold">{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 3: CAPABILITIES (FIXED) --- */}
      <section className="py-32 bg-[#0A0A0A] text-white px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <div key={i} className="bg-[#0A0A0A] p-12 hover:bg-[#3D5AFE] transition-all duration-700 group">
                <div className="w-12 h-12 flex items-center justify-center text-[#3D5AFE] mb-8 group-hover:text-white group-hover:scale-110 transition-all">
                  <Icon size={32} />
                </div>
                <h4 className="text-xl font-black uppercase italic tracking-tighter mb-4">
                  {cap.title}
                </h4>
                <p className="text-zinc-500 text-[11px] font-bold uppercase tracking-widest leading-loose group-hover:text-white/80">
                  {cap.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* --- SECTION 4: CTA --- */}
      <section className="py-48 bg-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter text-zinc-900 mb-12">
            Start Your <br />
            <span className="text-[#3D5AFE] not-italic">Project.</span>
          </h2>
          <Link href="/contact">
            <button className="bg-zinc-900 text-white px-16 py-8 font-black uppercase tracking-widest text-xs hover:bg-[#3D5AFE] transition-all flex items-center mx-auto">
              Request a Quote <ArrowUpRight className="ml-4" size={16} />
            </button>
          </Link>
        </div>
      </section>

    </main>
  );
}