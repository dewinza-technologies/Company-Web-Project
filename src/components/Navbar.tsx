"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Added to track current page
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current URL path

  const navLinks = [
    { name: 'Services', href: '/services' }, // Updated from #services
    { name: 'Company', href: '/company' },   // Updated from #about
    { name: 'Projects', href: '/projects' }, // Updated from #projects
    { name: 'Careers', href: '/careers' },   // Updated from #careers
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 dark:bg-[#020617]/95 backdrop-blur-md border-b border-zinc-100 dark:border-zinc-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Responsive Height: h-16 on mobile, h-24 on desktop */}
        <div className="flex justify-between items-center h-16 md:h-24">
          
          {/* THE MODIFIED LOGO SECTION */}
          <Link href="/" className="flex items-center shrink-0">
            {/* ICON BOX: Very small on mobile (w-8), larger on desktop (w-14) */}
            <div className="relative mr-2 md:mr-4 w-8 h-8 md:w-14 md:h-14 flex items-center justify-center">
              
              {/* UPPER EDGES (Indigo) */}
              <div className="absolute inset-0 border-t-[3px] md:border-t-[5px] border-l-[3px] md:border-l-[5px] border-[#3D5AFE] rotate-45 rounded-sm"></div>
              
              {/* DOWN EDGES (White/Foreground) */}
              <div className="absolute inset-0 border-b-[3px] md:border-b-[5px] border-r-[3px] md:border-r-[5px] border-zinc-200 dark:border-white rotate-45 rounded-sm"></div>

              {/* THE BOLD 'D': Scaled for mobile vs desktop */}
              <span className="relative z-10 font-black text-sm md:text-3xl text-foreground tracking-tighter">
                D
              </span>
            </div>

            {/* BRAND NAME: Scaled down for mobile */}
            <div className="flex flex-col justify-center -ml-0.5">
              <div className="overflow-hidden">
                <span className="text-base md:text-3xl font-black tracking-[-0.05em] text-foreground uppercase italic block leading-none">
                  eventa<span className="text-[#3D5AFE] not-italic ml-0.5 text-lg md:text-4xl">.</span>
                </span>
              </div>
              {/* ALWAYS BLUE UNDERLINE */}
              <div className="w-full h-[2px] md:h-[5px] bg-[#3D5AFE] mt-0.5 md:mt-1 rounded-full"></div>
            </div>
          </Link>

          {/* DESKTOP/TABLET NAV */}
          <div className="hidden md:flex items-center gap-4 lg:gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-[10px] lg:text-[12px] font-bold transition-colors uppercase tracking-[0.15em] lg:tracking-[0.25em] ${
                  pathname === link.href 
                    ? "text-[#3D5AFE]" 
                    : "text-slate-500 hover:text-[#3D5AFE]"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/login">
              <button className="border-2 border-foreground px-4 py-1.5 lg:px-8 lg:py-2.5 text-[10px] lg:text-[12px] font-black hover:bg-foreground hover:text-background transition-all uppercase tracking-widest">
                Login
              </button>
            </Link>
          </div>

          {/* MOBILE TOGGLE - Smaller icon */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground p-1">
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU - Clean & Small */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-[#020617] border-t border-zinc-100 dark:border-zinc-900 p-6 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)} 
              className={`block text-sm font-bold uppercase tracking-widest ${
                pathname === link.href ? "text-[#3D5AFE]" : "text-foreground/80"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/login" className="block pt-2" onClick={() => setIsOpen(false)}>
            <button className="w-full border-2 border-foreground py-2 font-black uppercase tracking-widest text-[10px]">
              Login
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;