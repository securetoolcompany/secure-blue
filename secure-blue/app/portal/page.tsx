"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PortalLogin() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Mock authentication delay - replace with real auth later
    setTimeout(() => {
      router.push('/portal/dashboard');
    }, 800);
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="w-full max-w-md z-10">
        <div className="flex flex-col items-center mb-8">
          <div className="h-12 w-12 bg-blue-500/10 border border-blue-500/30 rounded-sm flex items-center justify-center mb-6">
            <Lock className="h-5 w-5 text-blue-400" />
          </div>
          <h1 className="text-2xl font-mono text-white tracking-widest">SECURE_PORTAL</h1>
          <p className="text-zinc-500 font-mono text-xs mt-2 uppercase tracking-widest">Authorized Access Only</p>
        </div>

        <form onSubmit={handleLogin} className="bg-zinc-900/50 border border-zinc-800 p-8 backdrop-blur-sm">
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Client ID / Email</label>
              <input 
                type="email" 
                required
                className="w-full bg-zinc-950 border border-zinc-800 p-3 text-white font-mono text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                placeholder="admin@fairlakesgc.com"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Access Token</label>
              <input 
                type="password" 
                required
                className="w-full bg-zinc-950 border border-zinc-800 p-3 text-white font-mono text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                placeholder="••••••••••••"
              />
            </div>

            <Button 
              type="submit" 
              disabled={loading}
              className="w-full h-12 bg-blue-600 hover:bg-blue-500 text-white font-mono uppercase tracking-widest rounded-none transition-all flex items-center justify-center gap-2"
            >
              {loading ? 'Authenticating...' : 'Initialize Session'}
              {!loading && <ArrowRight className="h-4 w-4" />}
            </Button>
          </div>
        </form>
        
        <div className="mt-8 text-center">
          <p className="text-[10px] font-mono text-zinc-600">
            For support access, contact SECURE BLUE NOC.
          </p>
        </div>
      </div>
    </div>
  );
}