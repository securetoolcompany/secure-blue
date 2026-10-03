import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";

import WahasoPartnerMark from "@/components/water-recovery/WahasoPartnerMark";
import {
  getWaterRecoveryProject,
  waterRecoveryProjects,
  type ProjectDetail,
  type WaterRecoveryProject,
} from "@/lib/waterRecoveryProjects";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const systemLabels: Record<string, string> = {
  greywater: "Greywater Recovery",
  condensate: "HVAC Condensate Recovery",
  "cooling-tower-recovery": "Cooling Tower Recovery",
  stormwater: "Stormwater Harvesting",
  rainwater: "Rainwater Harvesting",
  "multi-source": "Multi-Source Water Reuse",
};

export function generateStaticParams() {
  return waterRecoveryProjects.map((project: WaterRecoveryProject) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getWaterRecoveryProject(slug);

  if (!project) {
    return { title: "Water Recovery Project | SECURE Blue" };
  }

  return {
    title: `${project.name} | Wahaso Project Experience | SECURE Blue`,
    description: project.summary,
  };
}

export default async function WaterRecoveryProjectPage({
  params,
}: PageProps) {
  const { slug } = await params;
  const project = getWaterRecoveryProject(slug);

  if (!project) {
    notFound();
  }

  const assessmentEmailHref = `mailto:scott.holbrook@secureblue.earth?subject=${encodeURIComponent(
    "Water Assessment Request"
  )}&body=${encodeURIComponent(
    `Hello SECURE Blue,

I would like to request a Water Assessment.

Project reference viewed: ${project.name}
Project location: ${project.location}

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
                {project.name}
              </h1>

              <div className="mt-7 flex items-center gap-2 text-sm font-bold tracking-[0.08em] text-cyan-300">
                <MapPin className="h-4 w-4" />
                {project.location}
              </div>

              <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                {project.summary}
              </p>

              {project.headlineStat && (
                <div className="mt-9 inline-block border border-lime-300/40 bg-lime-300/10 px-6 py-5 [clip-path:polygon(0_0,100%_0,100%_78%,94%_100%,0_100%)]">
                  <p className="text-4xl font-black tracking-[-0.03em] text-lime-300 sm:text-5xl">
                    {project.headlineStat.value}
                  </p>
                  <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-300">
                    {project.headlineStat.label}
                  </p>
                </div>
              )}

              <div className="mt-9 flex flex-wrap gap-x-4 gap-y-3">
                {project.categories.map((category: string) => (
                  <span
                    key={category}
                    className="border border-cyan-300/30 bg-cyan-300/10 px-3 py-2 text-[10px] font-black tracking-[0.12em] text-cyan-300"
                  >
                    {category.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden border border-cyan-300/40 bg-[#071424] [clip-path:polygon(0_0,100%_0,100%_92%,92%_100%,0_100%)]">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/80 via-transparent to-transparent" />
                <div className="absolute right-0 top-0 border-b border-l border-white/20 bg-[#030712]/85 px-4 py-3">
                  <span className="flex items-center gap-2 text-[10px] font-bold tracking-[0.14em] text-lime-300">
                    <span className="h-2 w-2 bg-lime-300 shadow-[0_0_12px_rgba(190,242,100,0.9)]" />
                    WAHASO REFERENCE PROJECT
                  </span>
                </div>
              </div>

              <div className="relative mt-4 border border-white/10 bg-[#071424]/95 p-5 shadow-[0_0_40px_rgba(34,211,238,0.08)]">
                <p className="text-[10px] font-bold tracking-[0.16em] text-slate-500">
                  DELIVERED BY
                </p>
                <div className="mt-3">
                  <WahasoPartnerMark />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-2 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-lime-300" />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold tracking-[0.24em] text-cyan-300">
              CASE STUDY
            </p>
            <h2 className="mt-5 text-4xl font-black uppercase leading-none tracking-[-0.04em] text-white sm:text-5xl">
              How the
              <span className="block text-slate-500">system works.</span>
            </h2>
            <div className="mt-9 border-l-2 border-lime-300 bg-white/[0.02] p-5">
              <p className="text-xs font-bold tracking-[0.16em] text-lime-300">
                WAHASO PROJECT EXPERIENCE
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {project.wahasoAttribution}
              </p>
            </div>
          </div>

          <div className="space-y-6 border-l border-white/10 pl-0 lg:pl-10">
            {project.caseStudy.map((paragraph: string, index: number) => (
              <p
                key={`${project.slug}-case-${index}`}
                className="text-base leading-8 text-slate-300"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#06111f]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-[0.24em] text-lime-300">
              PROJECT DETAILS
            </p>
            <h2 className="mt-5 text-4xl font-black uppercase leading-none tracking-[-0.04em] text-white sm:text-5xl">
              System and
              <span className="block text-cyan-300">performance profile.</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {project.details.map((detail: ProjectDetail) => (
              <div key={detail.label} className="bg-[#06111f] p-6">
                <p className="text-[10px] font-bold tracking-[0.16em] text-slate-500">
                  {detail.label.toUpperCase()}
                </p>
                <p className="mt-4 text-base font-black uppercase leading-tight text-white">
                  {detail.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.24em] text-lime-300">
              RELEVANT SYSTEM CAPABILITIES
            </p>
            <h2 className="mt-5 text-4xl font-black uppercase leading-none tracking-[-0.04em] text-white sm:text-5xl">
              Explore a
              <span className="block text-cyan-300">similar pathway.</span>
            </h2>
            <p className="mt-7 max-w-md text-sm leading-7 text-slate-400">
              Every facility is different. SECURE Blue can help evaluate the
              available water sources, non-potable demand, project stage, and
              operating priorities for your own site.
            </p>
          </div>

          <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
            {project.systems.slice(0, 4).map((system: string, index: number) => (
              <Link
                key={system}
                href={`/water-recovery/${system}`}
                className="group bg-[#06111f] p-6 transition hover:bg-[#0a1727]"
              >
                <p className="text-3xl font-black text-cyan-400/35">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-6 text-sm font-black uppercase leading-tight text-white">
                  {systemLabels[system] ?? system}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold tracking-[0.12em] text-cyan-300">
                  EXPLORE SYSTEM
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
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
              Tell us about your facility, available water sources, and intended
              reuse goals. SECURE Blue will review your opportunity and help
              determine the right water-recovery pathway with our Wahaso
              technology partner.
            </p>
            <a
              href={assessmentEmailHref}
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