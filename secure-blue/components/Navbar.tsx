"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Terminal, Menu, X, ChevronDown, 
  Cpu, Building2, ShieldCheck, Activity, 
  Settings, Zap, Globe 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper function to close the menu
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'INFRASTRUCTURE', href: '/#solutions' },
    { name: 'INDUSTRIES', href: '/industries' },
    { name: 'THE_OS', href: '/os' },
    { name: 'METHODOLOGY', href: '/methodology' },
    { name: 'MANAGED_SERVICES', href: '/managed-services' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
      scrolled ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" onClick={closeMenu} className="flex items-center gap-3 group">
          <div className="bg-blue-600 p-1.5 rounded-sm group-hover:bg-blue-500 transition-colors">
            <Terminal className="h-5 w-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tighter text-xl leading-none uppercase text-white">SECURE BLUE</span>
            <span className="text-[8px] font-mono text-zinc-500 tracking-[0.2em] uppercase leading-none mt-1">Next-Generation Infrastructure</span>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`px-4 py-2 font-mono text-[10px] tracking-widest transition-all flex items-center gap-2 hover:text-white ${
                pathname === link.href ? 'text-blue-400' : 'text-zinc-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="h-4 w-[1px] bg-zinc-800 mx-4" />
          
          <Link href="/#contact">
            <Button variant="outline" className="rounded-none border-blue-500/50 bg-blue-500/5 text-blue-400 font-mono text-[10px] tracking-widest hover:bg-blue-500 hover:text-white h-9 px-4 uppercase">
              Initiate_Audit
            </Button>
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button 
          className="lg:hidden text-zinc-400 hover:text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* MOBILE OVERLAY */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-zinc-950 z-50 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col p-8 gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={closeMenu} // CLOSE ON CLICK
                className="text-xl font-bold tracking-tighter flex items-center justify-between group"
              >
                <span className="text-zinc-400 group-hover:text-blue-400 transition-colors uppercase font-mono text-sm tracking-widest">{link.name}</span>
                <ChevronDown className="h-4 w-4 text-zinc-800 -rotate-90" />
              </Link>
            ))}
            <div className="pt-6 border-t border-zinc-900 mt-4">
               <Link href="/#contact" onClick={closeMenu}>
                  <Button className="w-full h-14 bg-blue-600 rounded-none font-bold uppercase tracking-widest text-white border border-blue-500">
                    Request Audit
                  </Button>
               </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}