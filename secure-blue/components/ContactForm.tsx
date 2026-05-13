"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle2, AlertTriangle, Loader2 } from 'lucide-react';

export default function ContactForm({ productName }: { productName: string }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // The Accept header tells Formspree to return JSON instead of redirecting
      const response = await fetch("https://formspree.io/f/mwvyzybq", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  // SUCCESS STATE UI
  if (status === 'success') {
    return (
      <div className="border border-emerald-500/50 bg-emerald-500/10 p-8 text-center flex flex-col items-center animate-in fade-in zoom-in duration-500">
        <CheckCircle2 className="h-12 w-12 text-emerald-400 mb-4" />
        <h3 className="text-xl font-bold text-white mb-2 tracking-widest uppercase">Transmission Successful</h3>
        <p className="text-zinc-400 text-sm mb-6">Your infrastructure parameters have been received. A SECURE Blue engineer will contact you shortly.</p>
        <Button onClick={() => setStatus('idle')} variant="outline" className="rounded-none border-zinc-700 bg-zinc-900/50 text-zinc-300 hover:bg-zinc-800 font-mono text-xs uppercase tracking-widest">
          Return to Terminal
        </Button>
      </div>
    );
  }

  // STANDARD FORM UI
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Error Message Alert */}
      {status === 'error' && (
        <div className="border border-red-500/50 bg-red-500/10 p-4 flex items-center gap-3 mb-6">
          <AlertTriangle className="h-5 w-5 text-red-400 flex-shrink-0" />
          <p className="text-red-400 text-xs font-mono uppercase tracking-wider">Transmission failed. Please verify your connection or email office@securetool.company directly.</p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">CLIENT_NAME</label>
          <input 
            type="text" 
            name="name" 
            required 
            disabled={status === 'loading'}
            className="w-full bg-zinc-950 border border-zinc-800 text-white p-3 text-sm focus:outline-none focus:border-zinc-500 transition-colors disabled:opacity-50"
            placeholder="Enter your full name"
          />
        </div>
        <div className="space-y-2">
          <label className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">SECURE_COMMS (EMAIL)</label>
          <input 
            type="email" 
            name="email" 
            required 
            disabled={status === 'loading'}
            className="w-full bg-zinc-950 border border-zinc-800 text-white p-3 text-sm focus:outline-none focus:border-zinc-500 transition-colors disabled:opacity-50"
            placeholder="name@company.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">INFRASTRUCTURE_TYPE</label>
        <select 
          name="facility_type" 
          disabled={status === 'loading'}
          className="w-full bg-zinc-950 border border-zinc-800 text-white p-3 text-sm focus:outline-none focus:border-zinc-500 transition-colors appearance-none disabled:opacity-50"
        >
          <option value="golf_course">Golf Course / Resort</option>
          <option value="agriculture">Large-Scale Agriculture</option>
          <option value="government">Government / Municipal Facility</option>
          <option value="commercial">Commercial Real Estate</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">DEPLOYMENT_PARAMETERS (MESSAGE)</label>
        <textarea 
          name="message" 
          rows={4} 
          required 
          disabled={status === 'loading'}
          className="w-full bg-zinc-950 border border-zinc-800 text-white p-3 text-sm focus:outline-none focus:border-zinc-500 transition-colors resize-none disabled:opacity-50"
          placeholder={`Describe your specific needs regarding ${productName}...`}
        ></textarea>
      </div>

      <input type="hidden" name="interested_product" value={productName} />

      <Button type="submit" size="lg" disabled={status === 'loading'} className="w-full h-14 text-lg bg-zinc-100 hover:bg-white text-zinc-950 rounded-none font-bold transition-all mt-4 disabled:opacity-70 flex items-center justify-center">
        {status === 'loading' ? (
          <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> TRANSMITTING...</>
        ) : (
          'TRANSMIT_REQUEST'
        )}
      </Button>
    </form>
  );
}