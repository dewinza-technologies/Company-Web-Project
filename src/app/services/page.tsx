import React from "react";
import { 
  Cpu, 
  Layers, 
  Database, 
  Cloud, 
  ArrowRight, 
  CheckCircle2, 
  Component, 
  ShieldAlert,
  BarChart3,
  Network
} from "lucide-react";

export default function Services() {
  const serviceCategories = [
    {
      title: "Intelligent Systems",
      id: "ai-labs",
      icon: <Cpu className="text-[#3D5AFE]" size={32} />,
      description: "Custom neural networks and automation engines designed to eliminate manual bottlenecks.",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "LLM Fine-tuning"],
      color: "bg-blue-50"
    },
    {
      title: "Full-Stack Engineering",
      id: "software",
      icon: <Layers className="text-[#3D5AFE]" size={32} />,
      description: "High-performance web and mobile ecosystems built with modern, scalable architectures.",
      features: ["Next.js/React Ecosystems", "Go & Node.js Backends", "Microservices Architecture", "Cross-Platform Mobile"],
      color: "bg-zinc-50"
    },
    {
      title: "Cloud & Infrastructure",
      id: "cloud",
      icon: <Cloud className="text-[#3D5AFE]" size={32} />,
      description: "DevOps-driven cloud solutions focusing on 99.9% uptime and global low-latency delivery.",
      features: ["AWS/Azure Optimization", "Kubernetes Orchestration", "CI/CD Pipeline Automation", "Serverless Computing"],
      color: "bg-blue-50"
    },
    {
      title: "Data Architecture",
      id: "data",
      icon: <Database className="text-[#3D5AFE]" size={32} />,
      description: "Strategic data modeling and warehousing for enterprises handling massive scale.",
      features: ["PostgreSQL/NoSQL Design", "Real-time Data Streaming", "ETL Pipeline Engineering", "Data Security & Governance"],
      color: "bg-zinc-50"
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[3px] bg-[#3D5AFE]"></div>
            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400">Our Capabilities</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-[1000] uppercase italic tracking-tighter text-zinc-900 leading-[0.85] mb-8">
            Technical <br /> <span className="text-[#3D5AFE] not-italic">Solutions.</span>
          </h1>
          <p className="max-w-2xl text-xl text-slate-600 font-semibold leading-relaxed">
            We don't just build apps; we engineer proprietary systems that provide a competitive moat for your business.
          </p>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-200 border border-zinc-200">
            {serviceCategories.map((service, index) => (
              <div key={index} className="bg-white p-12 md:p-16 hover:bg-zinc-50 transition-all group">
                <div className="mb-10">{service.icon}</div>
                <h2 className="text-3xl font-black uppercase italic text-zinc-900 mb-6 tracking-tight">
                  {service.title}
                </h2>
                <p className="text-slate-500 font-bold text-sm uppercase tracking-wide mb-10 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-4 mb-12">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-zinc-900 font-black uppercase italic text-xs">
                      <CheckCircle2 size={16} className="text-[#3D5AFE]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#3D5AFE] group-hover:gap-4 transition-all">
                  Deep Dive <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TECH ADVISORY BANNER --- */}
      <section className="py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-[1000] uppercase italic tracking-tighter mb-8 leading-none">
                Strategic <br /> <span className="text-[#3D5AFE]">Consulting.</span>
              </h2>
              <p className="text-zinc-400 font-bold text-lg mb-10 uppercase tracking-tight">
                Not sure where to start? Our senior architects conduct full-stack audits to find your growth levers.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-2 border-[#3D5AFE] pl-6 py-2">
                  <h4 className="text-2xl font-black italic">01.</h4>
                  <p className="text-[10px] font-bold uppercase text-zinc-500 tracking-widest">Feasibility Studies</p>
                </div>
                <div className="border-l-2 border-[#3D5AFE] pl-6 py-2">
                  <h4 className="text-2xl font-black italic">02.</h4>
                  <p className="text-[10px] font-bold uppercase text-zinc-500 tracking-widest">Security Audits</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-[#3D5AFE]/10 border border-[#3D5AFE]/20 flex items-center justify-center relative">
                 <Network className="text-[#3D5AFE] animate-pulse" size={120} />
                 <div className="absolute top-0 right-0 p-8">
                    <ShieldAlert className="text-white/20" size={40} />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}