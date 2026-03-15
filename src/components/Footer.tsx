"use client";
import React from 'react';
import Link from 'next/link';
import { Instagram, Linkedin, Twitter } from 'lucide-react'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { name: 'About Us', href: '/company' },
      { name: 'Projects', href: '/projects' }, 
      { name: 'Careers', href: '/careers' },
      { name: 'News', href: '/news' },
      { name: 'Contact', href: '/contact' },
    ],
    Services: [
      { name: 'AI & Automation', href: '/contact' }, // Points to contact for lead gen
      { name: 'Data Analysis', href: '/contact' },
      { name: 'Software Development', href: '/contact' },
      { name: 'Cloud Solutions', href: '/contact' },
      { name: 'IT Consulting', href: '/contact' },
      { name: 'Cybersecurity', href: '/contact' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
    ],
  };

  return (
    <footer className="bg-white dark:bg-[#020617] border-t border-zinc-100 dark:border-zinc-900 pt-20 pb-10 transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* BRANDING & TECH MISSION */}
          <div className="flex flex-col space-y-6">
            <Link href="/" className="flex items-center group">
              <div className="relative mr-3 w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 border-t-[3px] border-l-[3px] border-[#3D5AFE] rotate-45 rounded-sm transition-transform group-hover:scale-110"></div>
                <div className="absolute inset-0 border-b-[3px] border-r-[3px] border-zinc-200 dark:border-white rotate-45 rounded-sm transition-transform group-hover:scale-110"></div>
                <span className="relative z-10 font-black text-lg text-foreground tracking-tighter dark:text-white">D</span>
              </div>
              <div className="flex flex-col -ml-1">
                <span className="text-xl font-black tracking-[-0.05em] text-foreground uppercase italic leading-none dark:text-white">
                  EVENTA<span className="text-[#3D5AFE] not-italic ml-0.5">.</span>
                </span>
                <div className="w-full h-[3px] bg-[#3D5AFE] mt-1 rounded-full"></div>
              </div>
            </Link>
            <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed max-w-xs font-medium italic">
              "Developing autonomous AI systems, advanced neural architectures, and high-velocity data infrastructures for the next generation."
            </p>
          </div>

          {/* MAIN SECTIONS */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="flex flex-col space-y-8">
              <h4 className="text-sm font-[1000] uppercase tracking-[0.2em] text-foreground dark:text-white border-l-4 border-[#3D5AFE] pl-3">
                {title}
              </h4>
              <ul className="flex flex-col space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-[15px] font-semibold text-slate-500 dark:text-zinc-400 hover:text-[#3D5AFE] dark:hover:text-[#3D5AFE] transition-all duration-300 flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-[2px] bg-[#3D5AFE] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-zinc-100 dark:border-zinc-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest">
            © {currentYear} Deventa Technology. All rights reserved.
          </p>
          
          <div className="flex items-center gap-8">
            <Link href="https://linkedin.com" className="text-slate-400 hover:text-[#3D5AFE] transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} strokeWidth={2.5}/>
            </Link>
            <Link href="https://instagram.com" className="text-slate-400 hover:text-[#3D5AFE] transition-colors" aria-label="Instagram">
              <Instagram size={20} strokeWidth={2.5}/>
            </Link>
            <Link href="https://twitter.com" className="text-slate-400 hover:text-[#3D5AFE] transition-colors" aria-label="Twitter">
              <Twitter size={20} strokeWidth={2.5}/>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;