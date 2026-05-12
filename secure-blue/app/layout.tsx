import type { Metadata } from "next";
import { Inter, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono'
});

const inter = Inter({ subsets: ["latin"] });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "SECURE BLUE | Command Center",
  description: "Advanced Water Technology & Resource Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("dark", jetbrainsMono.variable, geistMono.variable)}>
      <body className={cn(inter.className, "antialiased bg-[#131722] text-zinc-400 min-h-screen")}>
        {children}
      </body>
    </html>
  );
}