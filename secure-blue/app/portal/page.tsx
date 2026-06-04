"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function PortalLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // This is the magic function that talks to auth.ts and MongoDB!
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false, // We handle the redirect manually below
    });

    if (res?.error) {
      setError("Invalid email or password");
      setLoading(false);
    } else {
      // Success! The cookie is set. Send them to the dashboard.
      router.push("/portal/dashboard");
      router.refresh(); // Forces Next.js to update the session state
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-mono text-white tracking-widest mb-2">SECURE BLUE</h1>
          <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">Client Portal Access</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 text-white p-3 font-mono focus:outline-none focus:border-blue-500 transition-colors"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 text-white p-3 font-mono focus:outline-none focus:border-blue-500 transition-colors"
              required
            />
          </div>

          {error && (
            <div className="text-red-400 text-sm font-mono bg-red-500/10 border border-red-500/20 p-3">
              {error}
            </div>
          )}

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-mono uppercase tracking-widest py-4 transition-colors flex justify-center items-center"
          >
            {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "AUTHENTICATE"}
          </button>
        </form>
      </div>
    </div>
  );
}