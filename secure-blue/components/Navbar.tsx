"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Terminal, Menu, X, ChevronDown, CornerDownRight } from 'lucide-react';
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

  const closeMenu = () => setIsOpen(false);

  // Updated Nav Configuration with all 12 specialized modules
  const navLinks = [
    { 
      name: 'PRODUCTS', 
      href: '/infrastructure',
      subGroups: [
        {
          title: 'CORE INFRASTRUCTURE',
          items: [
            { name: 'SECURE LeakStop', href: '/infrastructure/leakstop' },
            { name: 'EmberSense Fire Detection', href: '/infrastructure/early-fire-detection' }
          ]
        },
        {
          title: 'ATMOSPHERIC WATER',
          items: [
            { name: 'Air-2-Water Arrays', href: '/infrastructure/a2w-machines' },
            { name: 'A2W Graywater Unit', href: '/infrastructure/a2w-graywater' }
          ]
        },
        {
          title: 'CONSERVATION',
          items: [
            { name: 'Smart Irrigation Arrays', href: '/infrastructure/smart-irrigation' },
            { name: 'Irrigation Graywater', href: '/infrastructure/irrigation-graywater' }
          ]
        },
        {
          title: 'DATA & TELEMETRY',
          items: [
            { name: 'Ambient IAQ Nodes', href: '/infrastructure/iaq-sensors' },
            { name: 'Cold-Chain & RTD Probes', href: '/infrastructure/cold-chain-sensors' },
            { name: 'Ag. Weather Stations', href: '/infrastructure/ag-weather-stations' },
            { name: 'AI Spatial & Occupancy', href: '/infrastructure/ai-occupancy-sensors' },
            { name: 'Gas & Odor Detectors', href: '/infrastructure/gas-odor-detectors' },
            { name: 'Liquid Level & Distance', href: '/infrastructure/liquid-level-nodes' },
            { name: 'View Master Catalog →', href: '/infrastructure' }
          ]
        }
      ]
    },
    { 
      name: 'INDUSTRIES', 
      href: '#',
      subGroups: [
        {
          title: 'HOA & RESIDENTIAL',
          items: [
            { name: 'Sector Overview', href: '/industries/hoa' },
            { name: 'Executive Deck', href: '/presentations/hoa' }
          ]
        },
        {
          title: 'HOSPITALITY',
          items: [
            { name: 'Sector Overview', href: '/industries/hospitality' },
            { name: 'Executive Deck', href: '/presentations/hospitality' }
          ]
        },
        {
          title: 'AGRICULTURE',
          items: [
            { name: 'Sector Overview', href: '/industries/agriculture' },
            { name: 'Executive Deck', href: '/presentations/agriculture' }
          ]
        },
        {
          title: 'COMMERCIAL R.E.',
          items: [
            { name: 'Sector Overview', href: '/industries/real-estate' },
            { name: 'Executive Deck', href: '/presentations/real-estate' }
          ]
        },
        {
          title: 'MUNICIPALITY',
          items: [
            { name: 'Sector Overview', href: '/industries/municipality' },
            { name: 'Executive Deck', href: '/presentations/municipality' }
          ]
        }
      ]
    },
    { name: 'THE_OS', href: '/os' },
    { name: 'METHODOLOGY', href: '/methodology' },
    { name: 'MANAGED_SERVICES', href: '/managed-services' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
      scrolled ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" onClick={closeMenu} className="flex items-center gap-3 group">
          <div className="bg-blue-600 p-1.5 rounded-sm group-hover:bg-blue-500 transition-colors">
            <Terminal className="h-5 w-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tighter text-xl leading-none uppercase text-white">SECURE BLUE</span>
            <span className="text-[8px] font-mono text-zinc-500 tracking-[0.2em] uppercase leading-none mt-1">Industrial_Intelligence</span>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.subGroups ? (
                // Dropdown Trigger (Clickable Top-Level)
                <div className="flex items-center">
                  <Link 
                    href={link.href}
                    className={`pl-4 py-2 font-mono text-[10px] tracking-widest transition-colors hover:text-white ${
                      pathname.startsWith(link.href) && link.href !== '#' ? 'text-blue-400' : 'text-zinc-400'
                    }`}
                  >
                    {link.name}
                  </Link>
                  <div className="pr-4 py-2 cursor-pointer text-zinc-400 hover:text-white group-hover:text-white transition-colors">
                    <ChevronDown className="h-3 w-3 group-hover:rotate-180 transition-transform duration-200" />
                  </div>
                  
                  {/* Desktop Mega-Menu */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[520px] bg-zinc-950 border border-zinc-800 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col z-50 p-6 rounded-sm">
                    <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                      {link.subGroups.map((group) => (
                        <div key={group.title} className="flex flex-col">
                           <span className="text-[10px] font-mono font-bold text-zinc-300 tracking-widest mb-3 border-b border-zinc-900 pb-2">
                             {group.title}
                           </span>
                           <div className="flex flex-col gap-2">
                             {group.items.map((item) => (
                               <Link 
                                 key={item.name} 
                                 href={item.href}
                                 className={`flex items-center gap-2 text-xs font-mono tracking-wider transition-colors ${
                                   pathname === item.href 
                                   ? 'text-blue-400' 
                                   : item.name.includes('View Master Catalog') 
                                      ? 'text-emerald-400 hover:text-emerald-300 mt-2 border-t border-zinc-900 pt-2' 
                                      : 'text-zinc-500 hover:text-white'
                                 }`}
                               >
                                 {!item.name.includes('View Master') && <CornerDownRight className="h-3 w-3 text-zinc-700" />}
                                 {item.name}
                               </Link>
                             ))}
                           </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                // Standard Link
                <Link 
                  href={link.href}
                  className={`px-4 py-2 font-mono text-[10px] tracking-widest transition-colors flex items-center gap-2 hover:text-white ${
                    pathname === link.href ? 'text-blue-400' : 'text-zinc-400'
                  }`}
                >
                  {link.name}
                </Link>
              )}
            </div>
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
        <div className="lg:hidden fixed inset-0 top-[60px] bg-zinc-950 z-50 animate-in fade-in slide-in-from-top-4 duration-300 overflow-y-auto">
          <div className="flex flex-col p-8 gap-6 pb-24">
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col gap-4">
                {link.subGroups ? (
                  // Mobile Mega-Menu Group
                  <>
                    <Link 
                      href={link.href} 
                      onClick={closeMenu}
                      className="text-white font-mono text-sm tracking-widest border-b border-zinc-900 pb-2 flex items-center justify-between"
                    >
                      {link.name}
                      <ChevronDown className="h-4 w-4 text-zinc-600" />
                    </Link>
                    <div className="flex flex-col gap-6 pl-4 border-l border-zinc-900">
                      {link.subGroups.map((group) => (
                        <div key={group.title} className="flex flex-col gap-3">
                          <span className="text-[10px] font-mono text-zinc-400 tracking-widest">{group.title}</span>
                          {group.items.map((item) => (
                            <Link 
                              key={item.name} 
                              href={item.href}
                              onClick={closeMenu}
                              className={`flex items-center gap-2 uppercase font-mono text-xs tracking-widest transition-colors ${
                                pathname === item.href ? 'text-blue-400' : 'text-zinc-500 hover:text-white'
                              }`}
                            >
                              {!item.name.includes('View Master') && <CornerDownRight className="h-3 w-3 text-zinc-800" />}
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  // Mobile Standard Link
                  <Link 
                    href={link.href}
                    onClick={closeMenu}
                    className={`uppercase font-mono text-sm tracking-widest transition-colors ${
                      pathname === link.href ? 'text-blue-400' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-6 border-t border-zinc-900 mt-4">
               <Link href="/#contact" onClick={closeMenu}>
                  <Button className="w-full h-14 bg-blue-600 hover:bg-blue-500 rounded-none font-bold uppercase tracking-widest text-white transition-colors">
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