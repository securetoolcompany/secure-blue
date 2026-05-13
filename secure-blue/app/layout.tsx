import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SECURE BLUE | Next-Generation IoT Infrastucture",
  description: "Autonomous IoT infrastructure and resource sovereignty protocols.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-zinc-950 text-white selection:bg-blue-500/30`}>
        {/* The global navigation bar */}
        <Navbar />
        
        {/* pt-16 provides space for the fixed navbar */}
        <main className="min-h-screen pt-16">
          {children}
        </main>

        {/* The global footer */}
        <Footer />
      </body>
    </html>
  );
}