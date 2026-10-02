import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CloudRain,
  Droplets,
  Factory,
  RefreshCw,
  Snowflake,
  Waves,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Water Recovery Solutions | SECURE Blue + Wahaso",
  description:
    "Commercial water recovery systems by SECURE Blue and Wahaso. Capture, treat, monitor, and reuse on-site water.",
};

const solutions = [
  {
    title: "Greywater Recovery",
    slug: "greywater",
    system: "GREYFLO SERIES",
    source: "SHOWERS / LAVATORIES / LAUNDRY",
    description:
      "Recover gently used building water and treat it for planned non-potable reuse.",
    outputs: ["IRRIGATION", "FLUSHING", "TOWER MAKE-UP"],
    icon: Droplets,
    accent: "cyan",
  },
  {
    title: "HVAC Condensate Recovery",
    slug: "condensate",
    system: "CONDENSAFLO SERIES",
    source: "HVAC / AIR-HANDLING EQUIPMENT",
    description:
      "Capture condensate at its source and return high-quality water to facility operations.",
    outputs: ["TOWER MAKE-UP", "IRRIGATION", "REUSE"],
    icon: Snowflake,
    accent: "blue",
  },
  {
    title: "Cooling Tower Recovery",
    slug: "cooling-tower-recovery",
    system: "CT RECOVER SERIES",
    source: "COOLING TOWER BLOWDOWN",
    description:
      "Recover blowdown before discharge, reduce make-up demand, and optimize tower operation.",
    outputs: ["WATER SAVINGS", "CHEMICAL SAVINGS", "REUSE"],
    icon: RefreshCw,
    accent: "lime",
  },
  {
    title: "Stormwater Harvesting",
    slug: "stormwater",
    system: "STORMFLO SERIES",
    source: "RUNOFF / HARDSCAPE / SITE DRAINAGE",
    description:
      "Capture and manage runoff as an engineered on-site water resource.",
    outputs: ["IRRIGATION", "FLUSHING", "TOWER MAKE-UP"],
    icon: Waves,
    accent: "cyan",
  },
  {
    title: "Rainwater Harvesting",
    slug: "rainwater",
    system: "STORMFLO-RAIN SERIES",
    source: "ROOFTOP COLLECTION",
    description:
      "Collect, treat, store, and distribute rooftop rainwater for non-potable building demand.",
    outputs: ["IRRIGATION", "FLUSHING", "TOWER MAKE-UP"],
    icon: CloudRain,
    accent: "blue",
  },
  {
    title: "Multi-Source Water Reuse",
    slug: "multi-source",
    system: "INTEGRATED RECOVERY",
    source: "MULTIPLE ON-SITE WATER STREAMS",
    description:
      "Coordinate multiple available sources into a unified system designed around demand.",
    outputs: ["INTEGRATED", "CONTROLLED", "RESILIENT"],
    icon: Building2,
    accent: "lime",
  },
] as const;

const processSteps = [
  {
    id: "01",
    title: "SOURCE AUDIT",
    detail:
      "Identify source-water availability, building demand, operating conditions, and project constraints.",
  },
  {
    id: "02",
    title: "SYSTEM DESIGN",
    detail:
      "Align collection, storage, treatment, controls, and delivery around the intended reuse application.",
  },
  {
    id: "03",
    title: "RECOVERY",
    detail:
      "Capture and process on-site water through engineered Wahaso equipment and treatment systems.",
  },
  {
    id: "04",
    title: "REUSE",
    detail:
      "Deliver a managed non-potable supply to irrigation, flushing, cooling-tower, or process demand.",
  },
] as const;

const waterAssessmentEmailHref =
  `mailto:scott.holbrook@secureblue.earth?subject=${encodeURIComponent(
    "Water Assessment Request"
  )}&body=${encodeURIComponent(
    `Hello SECURE Blue,

I would like to request a Water Assessment.

Water recovery solution of interest:
Project Name:
Company / Organization:
Name:
Email:
Phone:
Project Location:
Facility Type:
Available Water Source(s):
Intended Reuse Goal(s):
Project Notes:

Thank you.`
  )}`;

function AccentLine({ accent }: { accent: "cyan" | "blue" | "lime" }) {
  const accentClass = {
    cyan: "bg-cyan-400",
    blue: "bg-blue-500",
    lime: "bg-lime-400",
  }[accent];

  return <span className={`h-1 w-12 ${accentClass}`} />;
}

export default function WaterRecoveryPage() {
  return (
    <main className="overflow-hidden bg-[#030712] text-white">
			<section className="relative min-h-screen overflow-hidden border-b border-cyan-400/20">
				<div className="pointer-events-none absolute inset-0">
					<div className="absolute inset-0 bg-[#030712]" />

					<div className="absolute inset-0 opacity-40">
						<div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.08)_1px,transparent_1px)] bg-[size:46px_46px]" />
						<div className="absolute -right-32 top-0 h-[560px] w-[560px] bg-cyan-400/15 blur-[140px]" />
						<div className="absolute -left-40 bottom-0 h-[420px] w-[420px] bg-blue-600/20 blur-[140px]" />
					</div>
				</div>

				<div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-32 sm:px-8 lg:px-10 lg:pb-24 lg:pt-40">
          <div className="grid gap-16 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-cyan-400" />
                <p className="text-xs font-bold tracking-[0.24em] text-cyan-300">
                  SECURE BLUE // WAHASO PARTNERSHIP
                </p>
              </div>

              <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.92] tracking-[-0.055em] text-white sm:text-6xl lg:text-8xl">
                Recover
                <span className="block text-cyan-300">Water.</span>
                <span className="block">Build</span>
                <span className="block text-lime-300">Resilience.</span>
              </h1>

              <p className="mt-9 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                SECURE Blue and Wahaso deliver commercial water-recovery
                systems that capture, treat, monitor, and reuse water already
                present at your site. Convert overlooked water streams into a
                reliable non-potable operational resource.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#solutions"
                  className="inline-flex items-center justify-center gap-3 border border-cyan-300 bg-cyan-300 px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-slate-950 transition hover:bg-white"
                >
                  Explore Systems
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
  								href={waterAssessmentEmailHref}
                  className="inline-flex items-center justify-center gap-3 border border-white/30 bg-white/[0.02] px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:border-lime-300 hover:bg-lime-300/10"
                >
                  Start Water Assessment
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="relative border border-cyan-300/30 bg-[#071424]/90 p-6 shadow-[0_0_50px_rgba(34,211,238,0.10)] [clip-path:polygon(0_0,100%_0,100%_92%,92%_100%,0_100%)]">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <p className="text-xs font-bold tracking-[0.18em] text-cyan-300">
                  SYSTEM STATUS
                </p>
                <span className="flex items-center gap-2 text-xs font-bold tracking-[0.14em] text-lime-300">
                  <span className="h-2 w-2 bg-lime-300 shadow-[0_0_12px_rgba(190,242,100,0.9)]" />
                  ACTIVE
                </span>
              </div>

              <div className="mt-7 space-y-5">
                <div className="border-l-2 border-cyan-400 pl-4">
                  <p className="text-xs tracking-[0.16em] text-slate-500">
                    SOURCE INPUT
                  </p>
                  <p className="mt-1 font-semibold text-white">
                    Six Commercial Recovery Pathways
                  </p>
                </div>

                <div className="border-l-2 border-blue-500 pl-4">
                  <p className="text-xs tracking-[0.16em] text-slate-500">
                    SYSTEM SCOPE
                  </p>
                  <p className="mt-1 font-semibold text-white">
                    Capture // Treatment // Storage // Controls // Reuse
                  </p>
                </div>

                <div className="border-l-2 border-lime-300 pl-4">
                  <p className="text-xs tracking-[0.16em] text-slate-500">
                    DELIVERY PATH
                  </p>
                  <p className="mt-1 font-semibold text-white">
                    SECURE Blue Assessment → Wahaso System Scoping
                  </p>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-px border border-white/10 bg-white/10">
                <div className="bg-[#071424] p-4">
                  <p className="text-2xl font-black text-cyan-300">06</p>
                  <p className="mt-1 text-[10px] font-bold tracking-[0.14em] text-slate-400">
                    SOURCES
                  </p>
                </div>

                <div className="bg-[#071424] p-4">
                  <p className="text-2xl font-black text-blue-400">01</p>
                  <p className="mt-1 text-[10px] font-bold tracking-[0.14em] text-slate-400">
                    PARTNER
                  </p>
                </div>

                <div className="bg-[#071424] p-4">
                  <p className="text-2xl font-black text-lime-300">∞</p>
                  <p className="mt-1 text-[10px] font-bold tracking-[0.14em] text-slate-400">
                    OPTIONS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-2 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-lime-300" />
      </section>

      <section id="solutions" className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="absolute left-0 top-20 h-px w-full bg-cyan-400/10" />

        <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-[0.24em] text-cyan-300">
              WATER RECOVERY SYSTEMS // SELECT A PATHWAY
            </p>

            <h2 className="mt-5 text-4xl font-black uppercase leading-none tracking-[-0.04em] text-white sm:text-5xl">
              Water already exists
              <span className="block text-slate-500">at your facility.</span>
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-slate-400">
            Start with your available sources, intended reuse, and facility
            demand. Select a recovery pathway below or begin with a SECURE Blue
            Water Assessment.
          </p>
        </div>

        <div className="relative mt-14 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-3">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;

            const accentText = {
              cyan: "text-cyan-300",
              blue: "text-blue-400",
              lime: "text-lime-300",
            }[solution.accent];

            const accentBorder = {
              cyan: "group-hover:border-cyan-300",
              blue: "group-hover:border-blue-400",
              lime: "group-hover:border-lime-300",
            }[solution.accent];

            return (
              <Link
                key={solution.slug}
                href={`/water-recovery/${solution.slug}`}
                className={`group relative min-h-[360px] overflow-hidden border border-transparent bg-[#07101d] p-7 transition duration-300 hover:z-10 hover:bg-[#0a1727] ${accentBorder}`}
              >
                <div className="absolute right-0 top-0 h-16 w-16 border-b border-l border-white/10 bg-[#030712] [clip-path:polygon(100%_0,100%_100%,0_0)]" />

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-bold tracking-[0.18em] text-slate-500">
                      SYSTEM 0{index + 1}
                    </p>
                    <div className="mt-5 flex items-center gap-3">
                      <Icon className={`h-7 w-7 ${accentText}`} />
                      <AccentLine accent={solution.accent} />
                    </div>
                  </div>

                  <ArrowRight
                    className={`h-5 w-5 ${accentText} transition duration-300 group-hover:translate-x-2`}
                  />
                </div>

                <div className="mt-12">
                  <p className={`text-xs font-bold tracking-[0.16em] ${accentText}`}>
                    {solution.system}
                  </p>

                  <h3 className="mt-3 text-2xl font-black uppercase leading-tight tracking-[-0.03em] text-white">
                    {solution.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-slate-400">
                    {solution.description}
                  </p>
                </div>

                <div className="mt-8 border-t border-white/10 pt-5">
                  <p className="text-[10px] font-bold tracking-[0.16em] text-slate-600">
                    SOURCE
                  </p>
                  <p className="mt-2 text-xs font-semibold tracking-[0.08em] text-slate-300">
                    {solution.source}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                  {solution.outputs.map((output) => (
                    <span
                      key={output}
                      className={`text-[10px] font-bold tracking-[0.12em] ${accentText}`}
                    >
                      // {output}
                    </span>
                  ))}
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#06111f]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-bold tracking-[0.24em] text-lime-300">
                OPERATIONAL FLOW // 01–04
              </p>

              <h2 className="mt-5 text-4xl font-black uppercase leading-none tracking-[-0.04em] text-white sm:text-5xl">
                From overlooked
                <span className="block text-cyan-300">source to supply.</span>
              </h2>

              <p className="mt-7 max-w-md text-sm leading-7 text-slate-400">
                Every water recovery project begins with an assessment of
                actual supply and demand, then connects engineered equipment,
                controls, and treatment to the facility’s intended reuse.
              </p>
            </div>

            <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
              {processSteps.map((step) => (
                <div key={step.id} className="bg-[#06111f] p-7">
                  <p className="text-4xl font-black text-cyan-400/35">
                    {step.id}
                  </p>

                  <h3 className="mt-7 text-lg font-black uppercase tracking-[-0.02em] text-white">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
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