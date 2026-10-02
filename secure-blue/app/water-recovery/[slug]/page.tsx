import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Droplets,
  Factory,
  Gauge,
  Layers3,
  ShieldCheck,
  Workflow,
} from "lucide-react";

import {
  getWaterRecoverySolution,
  waterRecoverySolutions,
  type WaterRecoverySolution,
} from "@/lib/waterRecoverySolutions";

import {
  getWaterRecoveryProject,
  type WaterRecoveryProject,
} from "@/lib/waterRecoveryProjects";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type AccentName = "cyan" | "blue" | "lime";

type AccentClasses = {
  text: string;
  border: string;
  solid: string;
  hoverSolid: string;
  soft: string;
  line: string;
  glow: string;
};

type Benefit = {
  title: string;
  description: string;
};

type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

const accentClasses: Record<AccentName, AccentClasses> = {
  cyan: {
    text: "text-cyan-300",
    border: "border-cyan-300/40",
    solid: "bg-cyan-300",
    hoverSolid: "hover:bg-white",
    soft: "bg-cyan-300/10",
    line: "bg-cyan-400",
    glow: "bg-cyan-400/20",
  },
  blue: {
    text: "text-blue-400",
    border: "border-blue-400/40",
    solid: "bg-blue-400",
    hoverSolid: "hover:bg-white",
    soft: "bg-blue-400/10",
    line: "bg-blue-500",
    glow: "bg-blue-500/20",
  },
  lime: {
    text: "text-lime-300",
    border: "border-lime-300/40",
    solid: "bg-lime-300",
    hoverSolid: "hover:bg-white",
    soft: "bg-lime-300/10",
    line: "bg-lime-300",
    glow: "bg-lime-300/20",
  },
};

const benefitIcons = [Gauge, ShieldCheck, Layers3, Factory];

export function generateStaticParams() {
  return waterRecoverySolutions.map(
    (solution: WaterRecoverySolution) => ({
      slug: solution.slug,
    })
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getWaterRecoverySolution(slug);

  if (!solution) {
    return {
      title: "Water Recovery Solution | SECURE Blue",
    };
  }

  return {
    title: `${solution.title} | SECURE Blue + Wahaso`,
    description: solution.heroDescription,
  };
}

export default async function WaterRecoverySolutionPage({
  params,
}: PageProps) {
  const { slug } = await params;
  const solution = getWaterRecoverySolution(slug);

  if (!solution) {
    notFound();
  }

  const accent = accentClasses[solution.heroAccent as AccentName];
  
  const projects: WaterRecoveryProject[] = solution.projectSlugs
  .map((projectSlug: string) => getWaterRecoveryProject(projectSlug))
  .filter(
    (project): project is WaterRecoveryProject => project !== undefined
  );
  
  const assessmentEmailHref =
    `mailto:scott.holbrook@secureblue.earth?subject=${encodeURIComponent(
      "Water Assessment Request"
    )}&body=${encodeURIComponent(
      `Hello SECURE Blue,

  I would like to request a Water Assessment.

  Water recovery solution of interest: ${solution.shortTitle}
  Page viewed: https://secureblue.earth/water-recovery/${solution.slug}

  Name:
  Company / Organization:
  Email:
  Phone:
  Project Name:
  Project Location:
  Facility Type:
  New Construction / Retrofit:
  Available Water Source(s):
  Intended Reuse Goal(s):
  Project Notes:

  Thank you.`
    )}`;

  const heroGradient =
    solution.heroAccent === "lime"
      ? "from-lime-300 via-cyan-400 to-blue-500"
      : solution.heroAccent === "blue"
        ? "from-blue-500 via-cyan-400 to-lime-300"
        : "from-cyan-400 via-blue-500 to-lime-300";

  return (
    <main className="overflow-hidden bg-[#030712] text-white">
      <section className="relative min-h-screen overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[#030712]" />

          <div className="absolute inset-0 opacity-40">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.07)_1px,transparent_1px)] bg-[size:46px_46px]" />
            <div
              className={`absolute -right-32 top-0 h-[560px] w-[560px] ${accent.glow} blur-[140px]`}
            />
            <div className="absolute -left-40 bottom-0 h-[420px] w-[420px] bg-blue-600/15 blur-[140px]" />
          </div>
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-32 sm:px-8 lg:px-10 lg:pb-24 lg:pt-40">
          <div className="w-full">
            <Link
              href="/water-recovery"
              className={`inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] ${accent.text} transition hover:text-white`}
            >
              <ArrowLeft className="h-4 w-4" />
              WATER RECOVERY SOLUTIONS
            </Link>

            <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <div className="flex items-center gap-3">
                  <span className={`h-px w-10 ${accent.line}`} />
                  <p
                    className={`text-xs font-bold tracking-[0.22em] ${accent.text}`}
                  >
                    {solution.heroEyebrow}
                  </p>
                </div>

                <h1 className="mt-7 max-w-4xl text-5xl font-black uppercase leading-[0.92] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
                  {solution.heroTitle}
                </h1>

                <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  {solution.heroDescription}
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={assessmentEmailHref}
                    className={`inline-flex items-center justify-center gap-3 border ${accent.border} ${accent.solid} px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-slate-950 transition ${accent.hoverSolid}`}
                  >
                    {solution.primaryCtaLabel}
                    <ArrowRight className="h-4 w-4" />
                  </a>

                  <a
                    href="#system-overview"
                    className="inline-flex items-center justify-center gap-3 border border-white/25 bg-white/[0.02] px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:border-white hover:bg-white/10"
                  >
                    View System Overview
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="relative">
                <div
                  className={`relative aspect-[4/5] overflow-hidden border ${accent.border} bg-[#071424] [clip-path:polygon(0_0,100%_0,100%_92%,92%_100%,0_100%)]`}
                >
                  <img
                    src={solution.heroImage}
                    alt={solution.heroImageAlt}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/25 to-transparent" />

                  <div className="absolute right-0 top-0 border-b border-l border-white/20 bg-[#030712]/85 px-4 py-3">
                    <span
                      className={`flex items-center gap-2 text-[10px] font-bold tracking-[0.14em] ${accent.text}`}
                    >
                      <span className={`h-2 w-2 ${accent.solid}`} />
                      WAHASO SYSTEM
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className={`text-xs font-bold tracking-[0.18em] ${accent.text}`}>
                      {solution.system}
                    </p>

                    <p className="mt-3 text-lg font-black uppercase leading-tight text-white">
                      Engineered Commercial Water Recovery
                    </p>
                  </div>
                </div>

                <div className="relative mt-4 border border-white/10 bg-[#071424]/95 p-5 shadow-[0_0_40px_rgba(34,211,238,0.08)]">                  <p className="text-[10px] font-bold tracking-[0.16em] text-slate-500">
                    PRIMARY SOURCE
                  </p>

                  <p className="mt-2 text-sm font-semibold leading-6 text-white">
                    {solution.sourceLabel}
                  </p>

                  <div className="mt-4 flex items-center gap-3 border-t border-white/10 pt-4">
                    <span className={`h-1 w-8 ${accent.line}`} />
                    <p className={`text-[10px] font-bold tracking-[0.14em] ${accent.text}`}>
                      SECURE BLUE + WAHASO
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`absolute bottom-0 left-0 h-2 w-full bg-gradient-to-r ${heroGradient}`}
        />
      </section>

      <section
        id="system-overview"
        className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28"
      >
        <div className="absolute left-0 top-20 h-px w-full bg-cyan-400/10" />

        <div className="relative grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className={`text-xs font-bold tracking-[0.24em] ${accent.text}`}>
              SYSTEM OVERVIEW // {solution.system}
            </p>

            <h2 className="mt-5 text-4xl font-black uppercase leading-none tracking-[-0.04em] text-white sm:text-5xl">
              Designed around
              <span className="block text-slate-500">your facility.</span>
            </h2>

            <p className="mt-7 max-w-md text-sm leading-7 text-slate-400">
              {solution.overview}
            </p>

            <div
              className={`mt-9 border-l-2 ${accent.border} bg-white/[0.02] p-5`}
            >
              <p className={`text-xs font-bold tracking-[0.16em] ${accent.text}`}>
                DELIVERY MODEL
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                SECURE Blue begins with facility assessment and project
                qualification. Wahaso supports system selection, engineering,
                delivery, commissioning, and long-term system performance.
              </p>
            </div>
          </div>

          <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
            <div className="bg-[#07101d] p-7">
              <div
                className={`flex h-11 w-11 items-center justify-center border ${accent.border} ${accent.soft}`}
              >
                <Droplets className={`h-5 w-5 ${accent.text}`} />
              </div>

              <p className="mt-7 text-xs font-bold tracking-[0.16em] text-slate-500">
                SOURCE WATER
              </p>

              <div className="mt-5 space-y-3">
                {solution.sourceWater.map((source: string) => (
                  <div key={source} className="flex gap-3 text-sm text-slate-300">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${accent.text}`}
                    />
                    <span>{source}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#07101d] p-7">
              <div
                className={`flex h-11 w-11 items-center justify-center border ${accent.border} ${accent.soft}`}
              >
                <Workflow className={`h-5 w-5 ${accent.text}`} />
              </div>

              <p className="mt-7 text-xs font-bold tracking-[0.16em] text-slate-500">
                NON-POTABLE REUSE
              </p>

              <div className="mt-5 space-y-3">
                {solution.reuseApplications.map((application: string) => (
                  <div
                    key={application}
                    className="flex gap-3 text-sm text-slate-300"
                  >
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${accent.text}`}
                    />
                    <span>{application}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#06111f]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p
                className={`text-xs font-bold tracking-[0.24em] ${accent.text}`}
              >
                SYSTEM ADVANTAGES // {solution.system}
              </p>

              <h2 className="mt-5 text-4xl font-black uppercase leading-none tracking-[-0.04em] text-white sm:text-5xl">
                Engineered for
                <span className="block text-slate-500">reliable reuse.</span>
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-slate-400">
              The system path is selected around project conditions, intended
              reuse, water quality, operational priorities, and facility
              integration requirements.
            </p>
          </div>

          <div className="mt-14 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-4">
            {solution.benefits.map((benefit: Benefit, index: number) => {
              const Icon = benefitIcons[index] ?? Check;

              return (
                <div key={benefit.title} className="bg-[#06111f] p-7">
                  <p className={`text-3xl font-black ${accent.text}/40`}>
                    0{index + 1}
                  </p>

                  <Icon className={`mt-7 h-6 w-6 ${accent.text}`} />

                  <h3 className="mt-5 text-lg font-black uppercase leading-tight tracking-[-0.02em] text-white">
                    {benefit.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className={`text-xs font-bold tracking-[0.24em] ${accent.text}`}>
              OPERATIONAL FLOW // 01–04
            </p>

            <h2 className="mt-5 text-4xl font-black uppercase leading-none tracking-[-0.04em] text-white sm:text-5xl">
              From source
              <span className="block text-slate-500">to reuse.</span>
            </h2>

            <p className="mt-7 max-w-md text-sm leading-7 text-slate-400">
              A water-recovery system is more than one piece of equipment. It
              is an integrated path from available source water to dependable,
              monitored facility reuse.
            </p>
          </div>

          <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
            {solution.process.map((step: ProcessStep) => (
              <div key={step.step} className="bg-[#07101d] p-7">
                <p className={`text-4xl font-black ${accent.text}/35`}>
                  {step.step}
                </p>

                <h3 className="mt-7 text-lg font-black uppercase tracking-[-0.02em] text-white">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#06111f]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p
                className={`text-xs font-bold tracking-[0.24em] ${accent.text}`}
              >
                SYSTEM CONFIGURATION
              </p>

              <h2 className="mt-5 text-4xl font-black uppercase leading-none tracking-[-0.04em] text-white sm:text-5xl">
                Built around
                <span className="block text-slate-500">real conditions.</span>
              </h2>
            </div>

            <div className="border-l border-white/10 pl-0 lg:pl-10">
              <div className="space-y-5">
                {solution.systemNotes.map((note: string, index: number) => (
                  <div key={note} className="flex gap-5">
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center border ${accent.border} ${accent.soft} text-xs font-black ${accent.text}`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="pt-1 text-sm leading-7 text-slate-300">
                      {note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="absolute left-0 top-20 h-px w-full bg-cyan-400/10" />

        <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4">
              <p className={`text-xs font-bold tracking-[0.24em] ${accent.text}`}>
                WAHASO PROJECT EXPERIENCE
              </p>

              <span className="h-px flex-1 bg-white/10" />
            </div>

            <h2 className="mt-5 text-4xl font-black uppercase leading-none tracking-[-0.04em] text-white sm:text-5xl">
              Proven systems
              <span className="block text-slate-500">in the field.</span>
            </h2>
          </div>

          <div className="max-w-xl">
            <img
              src="https://wahaso.com/wp-content/uploads/wahaso-commercial-water-harvesting-solutions-wht-logo-r.webp"
              alt="Wahaso Water Harvesting Solutions"
              className="h-auto w-28 object-contain opacity-90"
            />

            <p className="mt-4 text-sm leading-7 text-slate-400">
              Selected Wahaso project experience relevant to{" "}
              <span className="text-slate-200">{solution.shortTitle}</span>. These
              projects were delivered by Wahaso Water Harvesting Solutions and are
              presented by SECURE Blue as examples of the commercial water-recovery
              capabilities available through our partnership.
            </p>
          </div>
        </div>

        <div className="relative mt-14 grid gap-px border border-white/10 bg-white/10 lg:grid-cols-3">
          {projects.map((project: WaterRecoveryProject, index: number) => (
            <Link
              key={project.slug}
              href={`/water-recovery/projects/${project.slug}`}
              className={`group relative overflow-hidden border border-transparent bg-[#07101d] transition duration-300 hover:z-10 hover:bg-[#0a1727] ${accent.border}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-[#030712]">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/90 via-[#030712]/10 to-transparent" />

                <div className="absolute left-0 top-0 border-b border-r border-white/20 bg-[#030712]/85 px-4 py-3">
                  <p className={`text-xs font-black ${accent.text}`}>
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

                <p className={`mt-3 text-sm font-bold tracking-[0.08em] ${accent.text}`}>
                  {project.location}
                </p>

                <p className="mt-5 text-sm leading-7 text-slate-400">
                  {project.summary}
                </p>

                <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/10 pt-5">
                  {project.categories.slice(0, 4).map((category: string) => (
                    <span
                      key={category}
                      className={`text-[10px] font-bold tracking-[0.12em] ${accent.text}`}
                    >
                      // {category.toUpperCase()}
                    </span>
                  ))}
                </div>

                <div className="mt-7 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-white">
                  View Project
                  <ArrowRight className={`h-4 w-4 ${accent.text}`} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div
          className={`relative overflow-hidden border ${accent.border} bg-[#071b2d] px-7 py-12 sm:px-10 lg:px-14 lg:py-16 [clip-path:polygon(0_0,100%_0,100%_88%,97%_100%,0_100%)]`}
        >
          <div className="pointer-events-none absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.15)_1px,transparent_1px)] bg-[size:42px_42px]" />
            <div
              className={`absolute -right-20 -top-20 h-72 w-72 ${accent.glow} blur-[100px]`}
            />
            <div className="absolute bottom-0 left-1/3 h-52 w-52 bg-lime-300/15 blur-[90px]" />
          </div>

          <div className="relative max-w-3xl">
            <div className="flex items-center gap-3">
              <span className={`h-px w-10 ${accent.line}`} />
              <p
                className={`text-xs font-bold tracking-[0.22em] ${accent.text}`}
              >
                PROJECT INTAKE // SECURE BLUE
              </p>
            </div>

            <h2 className="mt-6 text-4xl font-black uppercase leading-none tracking-[-0.04em] text-white sm:text-5xl">
              Start Your
              <span className={`block ${accent.text}`}>Water Assessment.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200">
              Tell us about your facility, available water sources, and
              intended reuse goals. SECURE Blue will review your opportunity
              and help determine the right water-recovery pathway with our
              Wahaso technology partner.
            </p>

            <a
              href={assessmentEmailHref}
              className={`mt-9 inline-flex items-center gap-3 border ${accent.border} ${accent.solid} px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-slate-950 transition ${accent.hoverSolid}`}
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