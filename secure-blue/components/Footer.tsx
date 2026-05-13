import Link from 'next/link';
import { Terminal, Mail, MapPin } from 'lucide-react';

// Custom lightweight brand components to replace missing Lucide 1.0 icons
const LinkedInIcon = ({ size = 20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterXIcon = ({ size = 20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 pt-24 pb-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="bg-blue-600 p-1.5 rounded-sm">
                <Terminal className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold tracking-tighter text-xl uppercase text-white">SECURE BLUE</span>
            </Link>
            <p className="text-zinc-500 text-sm max-w-xs leading-relaxed mb-6 italic">
              Empowering industrial resource sovereignty through autonomous IoT infrastructure and edge intelligence.
            </p>
            <div className="flex gap-4">
              <Link href="https://www.linkedin.com/company/secure-tool" target="_blank" className="text-zinc-600 hover:text-blue-400 transition-colors">
                <LinkedInIcon size={20} />
              </Link>
              <Link href="https://x.com/SECUREtool" target="_blank" className="text-zinc-600 hover:text-blue-400 transition-colors">
                <TwitterXIcon size={20} />
              </Link>
              <Link href="mailto:office@securetool.company" className="text-zinc-600 hover:text-blue-400 transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-[10px] tracking-widest text-white uppercase mb-6">Infrastructure</h4>
            <ul className="space-y-4 text-sm text-zinc-500 font-mono text-[11px]">
              <li><Link href="/#solutions" className="hover:text-blue-400 transition-colors">HARDWARE_NODES</Link></li>
              <li><Link href="/os" className="hover:text-blue-400 transition-colors">SECURE_BLUE_OS</Link></li>
              <li><Link href="/methodology" className="hover:text-blue-400 transition-colors">DEPLOY_PIPELINE</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] tracking-widest text-white uppercase mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-zinc-500 font-mono text-[11px]">
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">ABOUT_US</Link></li>
              <li><Link href="/security" className="hover:text-blue-400 transition-colors">SECURITY_TRUST</Link></li>
              <li><Link href="/managed-services" className="hover:text-blue-400 transition-colors">MANAGED_SLA</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] tracking-widest text-white uppercase mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-zinc-500 font-mono text-[11px]">
              <li><Link href="/privacy" className="hover:text-blue-400 transition-colors">PRIVACY_POLICY</Link></li>
              <li><Link href="/terms" className="hover:text-blue-400 transition-colors">TERMS_OF_SERVICE</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-mono text-zinc-600 tracking-widest uppercase">
            &copy; 2026 SECURE BLUE INFRASTRUCTURE. OPERATIONAL_STATUS: OPTIMAL
          </p>
          <div className="flex gap-6 text-[10px] font-mono text-zinc-600 tracking-widest uppercase items-center">
             <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> Tucson, AZ</span>
             <span>ESTABLISHED_2025</span>
          </div>
        </div>
      </div>
    </footer>
  );
}