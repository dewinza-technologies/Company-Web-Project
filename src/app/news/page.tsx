"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Search, 
  ArrowRight, 
  Clock, 
  Share2, 
  TrendingUp
} from "lucide-react";

export default function NewsPage() {
  const [mounted, setMounted] = useState(false);
  const [filter, setFilter] = useState("All");

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const categories = ["All", "AI & RAG", "SaaS Trends", "Engineering", "Company"];

  const articles = [
    {
      id: 1,
      category: "AI & RAG",
      title: "The Shift from LLMs to Autonomous AI Agents in 2026",
      excerpt: "How businesses are moving beyond simple chatbots to agents that execute complex multi-step workflows.",
      date: "Oct 12, 2026",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200",
      featured: true
    },
    {
      id: 2,
      category: "Engineering",
      title: "Optimizing Next.js 15 for Sub-100ms Global Latency",
      excerpt: "A deep dive into edge runtime and server component optimization strategies for enterprise apps.",
      date: "Oct 08, 2026",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800",
      featured: false
    },
    {
      id: 3,
      category: "SaaS Trends",
      title: "The Death of One-Size-Fits-All SaaS Dashboards",
      excerpt: "Why the future of software lies in hyper-personalized, AI-generated user interfaces.",
      date: "Sep 28, 2026",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1551288049-bbbda5366391?q=80&w=800",
      featured: false
    }
  ];

  return (
    <main className="bg-white text-[#0A0A0A] min-h-screen selection:bg-[#3D5AFE] selection:text-white font-sans overflow-x-hidden">
      
      {/* --- SECTION 1: PAGE TITLE & SEARCH --- */}
      <section className="pt-40 pb-12 border-b border-zinc-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-[#3D5AFE] mb-4"
            >
              <TrendingUp size={16} />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Dewinza Intelligence</span>
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85] text-zinc-900">
              The <span className="text-[#3D5AFE] not-italic">Feed.</span>
            </h1>
          </div>
          
          <div className="w-full md:w-96 relative">
            <input 
              type="text" 
              placeholder="Search intelligence..." 
              className="w-full bg-zinc-50 border border-zinc-200 py-4 px-6 pr-12 rounded-full outline-none focus:border-[#3D5AFE] transition-all font-bold placeholder:text-zinc-300" 
            />
            <Search className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
          </div>
        </div>
      </section>

      {/* --- SECTION 2: CATEGORY FILTER BAR --- */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center gap-8 py-6 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                filter === cat ? "text-[#3D5AFE]" : "text-zinc-400 hover:text-zinc-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </nav>

      {/* --- SECTION 3: CONTENT FEED --- */}
      <section className="py-24 px-6 lg:px-10 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Featured Highlight */}
          <div className="mb-32">
            {articles.filter(a => a.featured).map((post) => (
              <Link href={`/news/${post.id}`} key={post.id} className="group grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-7 overflow-hidden rounded-[2.5rem] aspect-video shadow-2xl shadow-zinc-200/50">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                  />
                </div>
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="bg-[#3D5AFE] text-white text-[9px] font-black uppercase px-4 py-1.5 rounded-full tracking-widest">{post.category}</span>
                    <span className="text-zinc-400 text-[10px] font-bold uppercase flex items-center gap-2"><Clock size={14}/> {post.readTime} Read</span>
                  </div>
                  <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase italic leading-[0.9] mb-8 group-hover:text-[#3D5AFE] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-zinc-500 text-xl font-medium leading-relaxed mb-10 italic">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 font-black uppercase text-[11px] tracking-[0.3em] text-[#3D5AFE]">
                    Open Report <ArrowRight size={16} className="group-hover:translate-x-3 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Analysis Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
            {articles.filter(a => !a.featured).map((post) => (
              <Link href={`/news/${post.id}`} key={post.id} className="group flex flex-col">
                <div className="overflow-hidden rounded-[2rem] aspect-[4/3] mb-10 bg-zinc-50 border border-zinc-100">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" 
                  />
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[#3D5AFE] text-[10px] font-black uppercase tracking-widest">{post.category}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-200" />
                  <span className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">{post.date}</span>
                </div>
                <h3 className="text-2xl font-black tracking-tighter uppercase italic leading-tight mb-6 group-hover:text-[#3D5AFE] transition-colors">
                  {post.title}
                </h3>
                <p className="text-zinc-500 text-base font-medium leading-relaxed mb-8 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex items-center justify-between pt-8 border-t border-zinc-100">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Analysis / {post.readTime}</span>
                  <div className="p-2 rounded-full hover:bg-zinc-50 transition-colors">
                    <Share2 size={16} className="text-zinc-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 4: KINETIC NEWSLETTER --- */}
      <section className="py-40 bg-[#0A0A0A] text-white px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-[#3D5AFE]/5 blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-6xl md:text-[90px] font-black italic tracking-tighter uppercase mb-8 leading-[0.8]">
            Get the <br /> <span className="text-[#3D5AFE] not-italic">Intelligence.</span>
          </h2>
          <p className="text-zinc-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-16">
            Technical deep dives delivered to your terminal bi-weekly.
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="IDENTIFY EMAIL PIPELINE..." 
              className="flex-1 bg-white/5 border border-white/10 py-6 px-10 rounded-full outline-none focus:border-[#3D5AFE] transition-all font-black text-xs uppercase tracking-widest"
            />
            <button className="bg-[#3D5AFE] text-white px-12 py-6 rounded-full font-black uppercase text-[11px] tracking-[0.3em] hover:bg-white hover:text-black transition-all shadow-2xl shadow-[#3D5AFE]/20">
              Subscribe
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}