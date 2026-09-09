import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[var(--ink)] px-6 pb-7 pt-4 text-white sm:px-10 lg:px-16 lg:pt-8">
      <div className="hero-atmosphere absolute inset-0 -z-20" />
      <div className="hero-grid absolute inset-0 -z-10 opacity-50" />

      <div className="mx-auto flex min-h-[calc(100svh-9rem)] w-full max-w-[1440px] flex-col justify-between">
       

        <div className="grid flex-1 gap-10 py-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(400px,1.1fr)] lg:items-center lg:gap-16 lg:py-12">
          <div className="relative z-10 max-w-[700px]">
            <p className="hero-reveal hero-reveal--one mb-7 max-w-[280px] border-l-2 border-[var(--yellow)] pl-4 font-mono text-[10px] font-medium uppercase leading-6 tracking-[0.14em] text-white/65">
              ELLITE INTELLIGENT 
              <br /> TECHNICAL SERVICES L.L.C
              <br />
              Dubai · UAE
            </p>
            <h1 className="hero-reveal hero-reveal--two max-w-[760px] text-pretty text-[clamp(3.8rem,8.5vw,8.5rem)] font-medium leading-[0.84] tracking-[-0.075em]">
              Built
              <br />
              <span className="text-white/45">with</span> precision.
            </h1>
            <div className="hero-reveal hero-reveal--three mt-9 flex flex-wrap items-center gap-x-7 gap-y-5">
              <Link
                className="group inline-flex min-h-12 items-center gap-4 bg-[var(--yellow)] px-5 py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--ink)] transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--yellow)]"
                href="/contact"
              >
                Start a conversation
                <span className="text-base transition-transform group-hover:translate-x-1">↗</span>
              </Link>
              <Link
                className="inline-flex min-h-12 items-center font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-white/60 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--yellow)]"
                href="#studio"
              >
                View our approach <span className="ml-2">↓</span>
              </Link>
            </div>
          </div>

          <div className="hero-reveal hero-reveal--art relative h-[clamp(330px,58vh,590px)] min-h-0">
            <div className="hero-art" aria-label="Abstract architectural study">
              <div className="hero-art__sky" />
              <div className="hero-art__slab hero-art__slab--back" />
              <div className="hero-art__slab hero-art__slab--middle" />
              <div className="hero-art__slab hero-art__slab--front" />
              <div className="hero-art__void" />
              <div className="hero-art__line hero-art__line--vertical" />
              <div className="hero-art__line hero-art__line--horizontal" />
              <span className="hero-art__mark">01</span>
              <span className="hero-art__caption">House No. 04 / Light study</span>
            </div>
            <div className="absolute -bottom-4 -left-3 z-10 max-w-[190px] border-l-2 border-[var(--yellow)] pl-3 font-mono text-[9px] font-medium uppercase leading-5 tracking-[0.13em] text-white/65 sm:left-5">
              Form follows feeling
              <br />
              Material follows light
            </div>
          </div>
        </div>

        <div className="grid gap-5 border-t border-white/20 pt-4 font-mono text-[9px] uppercase tracking-[0.14em] text-white/45 sm:grid-cols-[1.2fr_1fr_auto] sm:items-end">
          <p className="max-w-[380px] text-pretty text-[11px] normal-case leading-6 tracking-normal text-white/65">
           Reliable technical solutions for buildings, spaces, and everyday life.
          </p>
         
        </div>
      </div>
    </section>
  );
}
