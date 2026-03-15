"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Code,
  ShieldCheck,
  Globe,
  Star,
  Users,
  Briefcase,
  Server,
  Send,
  TrendingUp,
  Zap,
  ArrowUpRight,
  Cpu,
  Layers,
  Cloud,
  Terminal,
  Search,
  PenTool,
  Rocket,
  Plus,
  Mail,
  X
} from "lucide-react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-white scroll-smooth">
      {/* --- SECTION 1: HERO (LOCKED) --- */}
      <section className="relative min-h-screen flex items-center justify-center bg-white pt-20 overflow-hidden border-b border-zinc-100">
        {/* Background Grids - Added pointer-events-none to ensure clicks pass through */}
        <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(#3D5AFE 2px, transparent 2px), linear-gradient(90deg, #3D5AFE 2px, transparent 2px)', backgroundSize: '100px 100px' }}>
        </div>
        <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)', backgroundSize: '25px 25px' }}>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-[3px] bg-[#3D5AFE]"></div>
                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400">Next-Gen Software Laboratory</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-[95px] font-[1000] tracking-[-0.05em] leading-[0.85] uppercase italic text-zinc-900">
                Engineering <br />
                <span className="text-[#3D5AFE] not-italic">The Digital</span> <br />
                Core<span className="text-[#3D5AFE]">.</span>
              </h1>
              <p className="max-w-xl text-lg md:text-xl text-slate-600 font-semibold leading-relaxed">
                Deventa delivers high-performance custom software, AI automation & innovation, strategic IT consulting for modern enterprises.
              </p>
              <div className="flex flex-wrap gap-5 pt-4">
                <Link href="/services" className="bg-zinc-900 text-white px-10 py-5 font-black uppercase tracking-widest text-xs hover:bg-[#3D5AFE] transition-all flex items-center group shadow-2xl">
                  Explore Services <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link href="/contact" className="border-2 border-zinc-200 px-10 py-5 font-black uppercase tracking-widest text-xs hover:border-zinc-900 transition-all text-zinc-900">
                  Contact Experts
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center">
                <div className="relative z-20 w-64 h-64 md:w-80 md:h-80 bg-white border border-zinc-100 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] flex items-center justify-center">
                  <div className="relative w-28 h-28 md:w-40 md:h-40 flex items-center justify-center">
                    <div className="absolute inset-0 border-t-[8px] border-l-[8px] border-[#3D5AFE] rotate-45 rounded-sm"></div>
                    <div className="absolute inset-0 border-b-[8px] border-r-[8px] border-zinc-200 rotate-45 rounded-sm"></div>
                    <span className="text-7xl md:text-[110px] font-black text-zinc-900 italic -rotate-6 select-none">D</span>
                  </div>
                </div>
                <div className="absolute top-4 -right-4 md:-right-8 bg-white border-l-4 border-[#3D5AFE] px-4 py-3 shadow-xl z-30">
                  <div className="flex items-center gap-3">
                    <Code className="text-[#3D5AFE]" size={18} />
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] font-black uppercase text-zinc-900">Software</span>
                      <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter text-left">Architecture</span>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-12 -left-4 md:-left-8 bg-zinc-900 px-4 py-3 shadow-xl z-30 text-left">
                  <div className="flex items-center gap-3">
                    <Server className="text-white" size={18} />
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] font-black uppercase text-white">Infrastructure</span>
                      <span className="text-[8px] font-bold text-[#3D5AFE] uppercase tracking-tighter text-left">Scale_Ready</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: GLOBAL IMPACT & BRAND BAR --- */}
      <section className="py-20 bg-zinc-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left border-b border-white/10 pb-16">
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-start gap-3 text-[#3D5AFE]">
                <Globe size={20} />
                <span className="text-[10px] font-black uppercase tracking-widest">Global Reach</span>
              </div>
              <h3 className="text-5xl font-black italic">12+ <span className="text-zinc-500 font-light">Countries</span></h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-start gap-3 text-[#3D5AFE]">
                <Briefcase size={20} />
                <span className="text-[10px] font-black uppercase tracking-widest">Industry Impact</span>
              </div>
              <h3 className="text-5xl font-black italic">150+ <span className="text-zinc-500 font-light">Success</span></h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-start gap-3 text-[#3D5AFE]">
                <Users size={20} />
                <span className="text-[10px] font-black uppercase tracking-widest">Retention</span>
              </div>
              <h3 className="text-5xl font-black italic">98% <span className="text-zinc-500 font-light">Partners</span></h3>
            </div>
          </div>

          <div className="pt-16 flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-30 grayscale">
            {['FINTECH', 'LOGISTICS', 'HEALTHCARE', 'E-COMMERCE', 'AI LABS'].map((brand, i) => (
              <span key={i} className="text-xl font-black italic tracking-tighter">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: INTELLIGENCE HUB --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-left">
          <div className="mb-16 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-[2px] bg-[#3D5AFE]"></div>
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400">Project Releases</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-[1000] uppercase italic text-zinc-900 tracking-tighter">
              Latest <span className="text-[#3D5AFE] not-italic">Insights.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { title: "Neural Finance Engine Launch", date: "MAR 2026", type: "AI SYSTEMS", link: "/insights/neural-finance" },
              { title: "Eco-Logistics Architecture", date: "FEB 2026", type: "AUTOMATION", link: "/insights/eco-logistics" },
              { title: "Quantum Security Protocol", date: "JAN 2026", type: "CYBERSEC", link: "/insights/quantum-security" }
            ].map((news, idx) => (
              <Link href={news.link} key={idx} className="group border border-zinc-100 p-8 hover:border-[#3D5AFE] transition-all bg-white block">
                <span className="text-[10px] font-black text-[#3D5AFE] tracking-widest uppercase mb-8 block">{news.type}</span>
                <h3 className="text-2xl font-black uppercase italic text-zinc-900 leading-tight mb-8 group-hover:text-[#3D5AFE] transition-colors text-left">{news.title}</h3>
                <ArrowUpRight size={20} className="text-zinc-200 group-hover:text-[#3D5AFE] transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 4: OUR WORKFLOW --- */}
      <section className="py-24 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-[2px] bg-[#3D5AFE]"></div>
                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400">How we work</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-[1000] uppercase italic text-zinc-900 tracking-tighter text-left">
                The Execution <br /> <span className="text-[#3D5AFE] not-italic">Blueprint.</span>
              </h2>
              <p className="text-slate-600 font-semibold text-lg text-left">We follow a rigorous engineering methodology to ensure every system is scalable, secure, and high-performance.</p>
            </div>

            <div className="space-y-6">
              {[
                { step: "01", title: "Strategic Discovery", desc: "We analyze your business bottlenecks and define the technical roadmap.", icon: <Search size={20} /> },
                { step: "02", title: "Precision Architecture", desc: "Design of the core infrastructure and neural logic layers.", icon: <PenTool size={20} /> },
                { step: "03", title: "Agile Development", desc: "Sprints-based coding with continuous integration and testing.", icon: <Code size={20} /> },
                { step: "04", title: "Global Deployment", desc: "Final launch with 24/7 monitoring and scale-ready support.", icon: <Rocket size={20} /> }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-6 bg-white border border-zinc-200 group hover:border-[#3D5AFE] transition-all">
                  <div className="text-2xl font-black text-zinc-200 group-hover:text-[#3D5AFE] transition-colors">{item.step}</div>
                  <div className="space-y-1 text-left">
                    <h4 className="font-black uppercase italic text-zinc-900 flex items-center gap-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wide text-left">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- TECHNOLOGY STACK MATRIX --- */}
      <section className="py-24 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-left">
          <div className="mb-20 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-[2px] bg-[#3D5AFE]"></div>
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400">The Stack</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-[1000] uppercase italic text-zinc-900 tracking-tighter text-left">Core <span className="text-[#3D5AFE] not-italic">Technologies.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-200 border border-zinc-200">
            {[
              { cat: "Frontend", tech: ["Next.js", "React", "Tailwind", "Three.js"], icon: <Layers size={24} /> },
              { cat: "Backend", tech: ["Node.js", "Python", "Go", "GraphQL"], icon: <Terminal size={24} /> },
              { cat: "Intelligence", tech: ["PyTorch", "TensorFlow", "OpenAI", "LangChain"], icon: <Cpu size={24} /> },
              { cat: "Cloud & DB", tech: ["AWS", "Supabase", "Docker", "PostgreSQL"], icon: <Cloud size={24} /> }
            ].map((stack, i) => (
              <div key={i} className="bg-white p-10 hover:bg-zinc-50 transition-colors text-left">
                <div className="text-[#3D5AFE] mb-8">{stack.icon}</div>
                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-6 text-left">{stack.cat}</h4>
                <ul className="space-y-3 text-left">
                  {stack.tech.map((t, idx) => (
                    <li key={idx} className="text-zinc-900 font-black uppercase italic text-sm flex items-center gap-2 text-left">
                      <div className="w-1.5 h-1.5 bg-[#3D5AFE] rounded-full"></div> {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CLIENT VALIDATION (REVIEWS) --- */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-left">
          <div className="text-center mb-20 space-y-4">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#3D5AFE]">Social Proof</span>
            <h2 className="text-4xl md:text-5xl font-[1000] uppercase italic text-zinc-900 tracking-tighter">Partner <span className="text-[#3D5AFE] not-italic">Feedback.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
            {[
              { name: "Marcus Thorne", role: "CTO, Global Logistics", text: "Deventa re-architected how our business handles data globally. Their AI automation saved us 4,000+ hours yearly." },
              { name: "Sarah Jenkins", role: "CEO, InnovateIQ", text: "The most professional dev team we've worked with. They don't just write code; they solve real business problems." }
            ].map((review, i) => (
              <div key={i} className="bg-white p-12 border border-zinc-200 relative text-left shadow-sm">
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-[#3D5AFE] text-[#3D5AFE]" />)}
                </div>
                <p className="text-xl text-slate-600 font-semibold italic mb-10 leading-relaxed text-left">"{review.text}"</p>
                <div className="text-left">
                  <p className="text-sm font-black uppercase tracking-widest text-zinc-900 text-left">{review.name}</p>
                  <p className="text-[10px] font-bold text-[#3D5AFE] uppercase tracking-widest text-left">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION: FAQ (Interactive) --- */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-left">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-[1000] uppercase italic text-zinc-900 tracking-tighter">Technical <span className="text-[#3D5AFE] not-italic">FAQ.</span></h2>
          </div>
          <div className="space-y-4 text-left">
            {[
              { q: "What is your typical project timeline?", a: "MVP development usually takes 4-8 weeks, while enterprise-grade systems range from 3-6 months depending on complexity." },
              { q: "Do you offer post-deployment support?", a: "Yes, we provide 24/7 technical monitoring and maintenance packages to ensure 99.9% uptime for all systems." },
              { q: "Can you integrate AI into existing legacy software?", a: "Absolutely. We specialize in building custom API layers that inject neural capabilities into older infrastructures." }
            ].map((faq, i) => (
              <div 
                key={i} 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className={`border border-zinc-100 p-8 transition-colors cursor-pointer group text-left ${openFaq === i ? 'bg-zinc-50 border-[#3D5AFE]' : 'bg-white hover:bg-zinc-50'}`}
              >
                <div className="flex justify-between items-center text-left">
                  <h4 className="font-black uppercase italic text-zinc-900 text-left">{faq.q}</h4>
                  <div className="text-[#3D5AFE]">
                    {openFaq === i ? <X size={18} /> : <Plus size={18} className="group-hover:rotate-45 transition-transform" />}
                  </div>
                </div>
                {openFaq === i && (
                  <p className="text-sm text-slate-500 font-bold leading-relaxed text-left mt-6 animate-in fade-in slide-in-from-top-2">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION: SUBSCRIBE --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="bg-zinc-900 p-10 md:p-20 relative overflow-hidden text-left">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Mail className="text-[#3D5AFE]" size={20} />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#3D5AFE]">Newsletter</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-[1000] uppercase italic text-white tracking-tighter">
                  Strategic <span className="text-[#3D5AFE] not-italic">Intelligence.</span>
                </h2>
                <p className="text-zinc-400 font-bold text-xs uppercase tracking-widest">Get technical reports on AI and Scale directly to your inbox.</p>
              </div>
              <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  required
                  type="email"
                  placeholder="BUSINESS EMAIL"
                  className="flex-1 bg-white/5 border border-white/10 px-6 py-4 text-xs font-black text-white focus:outline-none focus:border-[#3D5AFE]"
                />
                <button type="submit" className="bg-[#3D5AFE] text-white px-10 py-4 font-black uppercase tracking-widest text-xs hover:bg-white hover:text-zinc-900 transition-all">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: FINAL CALL TO ACTION --- */}
      <section className="py-32 bg-zinc-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col items-center text-center relative z-10">
          <TrendingUp className="text-[#3D5AFE] mb-8" size={48} />
          <h2 className="text-5xl md:text-8xl font-[1000] uppercase italic leading-[0.85] tracking-tighter mb-10 text-center">
            Ready to <br />
            <span className="text-[#3D5AFE] not-italic">Scale Up?</span>
          </h2>
          <p className="max-w-xl text-zinc-400 font-semibold text-lg mb-12 text-center">
            Join 150+ global enterprises using Deventa’s proprietary technology to lead their industries. Let's build your vision.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/contact" className="bg-[#3D5AFE] text-white px-12 py-6 font-black uppercase tracking-widest text-xs hover:bg-white hover:text-zinc-900 transition-all flex items-center group shadow-xl">
              Start Project <Send className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link href="/audit" className="border-2 border-white/20 px-12 py-6 font-black uppercase tracking-widest text-xs hover:border-white transition-all text-white">
              Book Tech Audit
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(white 1.5px, transparent 1.5px), linear-gradient(90deg, white 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }}>
        </div>
      </section>

    </main>
  );
}