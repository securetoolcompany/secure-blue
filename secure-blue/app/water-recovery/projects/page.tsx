import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";

import WahasoPartnerMark from "@/components/water-recovery/WahasoPartnerMark";
import {
  waterRecoveryProjects,
  type WaterRecoveryProject,
} from "@/lib/waterRecoveryProjects";

export const metadata: Metadata = {
  title: "Water Recovery Project Experience | SECURE Blue + Wahaso",
  description:
    "Explore commercial water recovery reference projects delivered by Wahaso Water Harvesting Solutions and presented by SECURE Blue.",
};

const systemLabels: Record<string, string> = {
  greywater: "Greywater",
  condensate: "Condensate",
  "cooling-tower-recovery": "Cooling Towers",
  stormwater: "Stormwater",
  rainwater: "Rainwater",
  "multi-source": "Multi-Source",
};

const waterAssessmentEmailHref =
  `mailto:scott.holbrook@secureblue.earth?subject=${encodeURIComponent(
    "Water Assessment Request"
  )}&body=${encodeURIComponent(
    `Hello SECURE Blue,

I would like to request a Water Assessment.

Name:
Company / Organization:
Email:
Phone:
Project Name:
Project Location:
Facility Type:
Available Water Source(s):
Intended Reuse Goal(s):
Project Notes:

Thank you.`
  )}`;

export default function WaterRecoveryProjectsPage() {
  return (
    <main className="overflow-hidden bg-[#030712] text-white">
      <section className="relative overflow-hidden border-b border-cyan-300/20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[#030712]" />

          <div className="absolute inset-0 opacity-40">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.07)_1px,transparent_1px)] bg-[size:46px_46px]" />
            <div className="absolute -right-32 -top-16 h-[560px] w-[560px] bg-cyan-400/15 blur-[140px]" />
            <div className="absolute -left-40 bottom-0 h-[420px] w-[420px] bg-lime-300/10 blur-[140px]" />
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-32 sm:px-8 lg:px-10 lg:pb-24 lg:pt-40">
          <Link
            href="/water-recovery"
            className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] text-cyan-300 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            WATER RECOVERY SOLUTIONS
          </Link>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-lime-300" />
                <p className="text-xs font-bold tracking-[0.22em] text-lime-300">
                  WAHASO PROJECT EXPERIENCE
                </p>
              </div>

              <h1 className="mt-7 max-w-4xl text-5xl font-black uppercase leading-[0.92] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
                Proven
                <span className="block text-cyan-300">Water Recovery</span>
                Projects.
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Explore commercial, institutional, municipal, hospitality, and
                campus reference projects delivered by Wahaso Water Harvesting
                Solutions and presented by SECURE Blue through our technology
                partnership.
              </p>

              <div className="mt-9">
                <WahasoPartnerMark />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-px border border-white/10 bg-white/10">
              <div className="bg-[#071424] p-5">
                <p className="text-3xl font-black text-cyan-300">
                  {String(waterRecoveryProjects.length).padStart(2, "0")}
                </p>
                <p className="mt-2 text-[10px] font-bold tracking-[0.14em] text-slate-400">
                  PROJECTS
                </p>
              </div>

              <div className="bg-[#071424] p-5">
                <p className="text-3xl font-black text-blue-400">06</p>
                <p className="mt-2 text-[10px] font-bold tracking-[0.14em] text-slate-400">
                  PATHWAYS
                </p>
              </div>

              <div className="bg-[#071424] p-5">
                <p className="text-3xl font-black text-lime-300">01</p>
                <p className="mt-2 text-[10px] font-bold tracking-[0.14em] text-slate-400">
                  PARTNER
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-2 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-lime-300" />
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="absolute left-0 top-20 h-px w-full bg-cyan-400/10" />

        <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-[0.24em] text-cyan-300">
              REFERENCE PROJECT LIBRARY
            </p>

            <h2 className="mt-5 text-4xl font-black uppercase leading-none tracking-[-0.04em] text-white sm:text-5xl">
              Experience across
              <span className="block text-slate-500">every water pathway.</span>
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-slate-400">
            These projects are Wahaso-delivered reference experience. SECURE
            Blue presents them to illustrate the commercial water-recovery
            capabilities available through our partnership.
          </p>
        </div>

        <div className="relative mt-14 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-3">
          {waterRecoveryProjects.map(
            (project: WaterRecoveryProject, index: number) => (
              <Link
                key={project.slug}
                href={`/water-recovery/projects/${project.slug}`}
                className="group relative overflow-hidden border border-transparent bg-[#07101d] transition duration-300 hover:z-10 hover:border-cyan-300/60 hover:bg-[#0a1727]"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-[#030712]">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/90 via-[#030712]/10 to-transparent" />

                  <div className="absolute left-0 top-0 border-b border-r border-white/20 bg-[#030712]/85 px-4 py-3">
                    <p className="text-xs font-black text-cyan-300">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 p-5">
                    <p className="text-[10px] font-bold tracking-[0.18em] text-white/80">
                      WAHASO PROJECT EXPERIENCE
                    </p>
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-black uppercase leading-tight tracking-[-0.03em] text-white">
                    {project.name}
                  </h3>

                  <div className="mt-4 flex items-center gap-2 text-sm font-bold tracking-[0.08em] text-cyan-300">
                    <MapPin className="h-4 w-4" />
                    {project.location}
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-400">
                    {project.summary}
                  </p>

                  {project.headlineStat && (
                    <div className="mt-6 border-l-2 border-lime-300 bg-lime-300/10 px-4 py-3">
                      <p className="text-lg font-black text-lime-300">
                        {project.headlineStat.value}
                      </p>
                      <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-300">
                        {project.headlineStat.label}
                      </p>
                    </div>
                  )}

                  <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/10 pt-5">
                    {project.systems.slice(0, 3).map((system: string) => (
                      <span
                        key={system}
                        className="text-[10px] font-bold tracking-[0.12em] text-lime-300"
                      >
                        // {systemLabels[system] ?? system.toUpperCase()}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-white">
                    View Project
                    <ArrowRight className="h-4 w-4 text-cyan-300 transition group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            )
          )}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-10 lg:pb-28">
        <div className="relative overflow-hidden border border-cyan-300/40 bg-[#071b2d] px-7 py-12 sm:px-10 lg:px-14 lg:py-16 [clip-path:polygon(0_0,100%_0,100%_88%,97%_100%,0_100%)]">
          <div className="pointer-events-none absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.15)_1px,transparent_1px)] bg-[size:42px_42px]" />
            <div className="absolute -right-20 -top-20 h-72 w-72 bg-cyan-400/25 blur-[100px]" />
            <div className="absolute bottom-0 left-1/3 h-52 w-52 bg-lime-300/15 blur-[90px]" />
          </div>

          <div className="relative max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-lime-300" />
              <p className="text-xs font-bold tracking-[0.22em] text-lime-300">
                PROJECT INTAKE // SECURE BLUE
              </p>
            </div>

            <h2 className="mt-6 text-4xl font-black uppercase leading-none tracking-[-0.04em] text-white sm:text-5xl">
              Start Your
              <span className="block text-cyan-300">Water Assessment.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200">
              Tell us about your facility, available water sources, and
              intended reuse goals. SECURE Blue will review your opportunity
              and help determine the right water-recovery pathway with our
              Wahaso technology partner.
            </p>

            <a
              href={waterAssessmentEmailHref}
              className="mt-9 inline-flex items-center gap-3 border border-lime-300 bg-lime-300 px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-slate-950 transition hover:bg-white"
            >
              Start a Water Assessment
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}