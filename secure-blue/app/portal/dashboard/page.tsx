"use client";

import Link from 'next/link';
import { Droplets, LayoutGrid, ArrowUpRight } from 'lucide-react';

const authorizedApps = [
  {
    id: 'fairlakes-irrigation',
    name: 'Smart Irrigation Management',
    description: 'STREGA LoRaWAN Actuator Fleet',
    icon: Droplets,
    href: '/irrigation', 
    status: 'Operational',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30'
  },
  {
    id: 'fairlakes-leakstop',
    name: 'SECURE LeakStop',
    description: 'Mainline Water Conservation',
    icon: LayoutGrid,
    href: '#',
    status: 'Standby',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30'
  }
];

export default function ClientDashboard() {
  return (
    <div className="min-h-screen bg-zinc-950 pt-24 px-6 pb-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 border-b border-zinc-800 pb-6 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-mono text-white tracking-widest mb-2">FAIRLAKES GC</h1>
            <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">Active Deployments Overview</p>
          </div>
          <div className="text-right font-mono text-[10px] text-zinc-500">
            <p>TENANT ID: FLGC-8832</p>
            <p>LAST LOGIN: {new Date().toLocaleDateString()}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {authorizedApps.map((app) => {
            const Icon = app.icon;
            return (
              <Link key={app.id} href={app.href} className="group block">
                <div className="bg-zinc-900 border border-zinc-800 p-6 hover:border-zinc-600 transition-all h-full flex flex-col relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-0 group-hover:opacity-[0.02] blur-2xl transition-opacity rounded-full translate-x-1/2 -translate-y-1/2" />
                  
                  <div className="flex justify-between items-start mb-6">
                    <div className={`h-12 w-12 rounded-sm ${app.bgColor} ${app.borderColor} border flex items-center justify-center`}>
                      <Icon className={`h-6 w-6 ${app.color}`} />
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-zinc-600 group-hover:text-white transition-colors" />
                  </div>
                  
                  <h3 className="text-lg font-mono text-white mb-2">{app.name}</h3>
                  <p className="text-sm font-mono text-zinc-500 mb-8 flex-grow">{app.description}</p>
                  
                  <div className="flex items-center gap-2 pt-4 border-t border-zinc-800/50">
                    <span className="flex h-2 w-2 relative">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${app.status === 'Operational' ? 'bg-emerald-400' : 'bg-yellow-400'}`}></span>
                      <span className={`relative inline-flex rounded-full h-2 w-2 ${app.status === 'Operational' ? 'bg-emerald-500' : 'bg-yellow-500'}`}></span>
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                      {app.status}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}