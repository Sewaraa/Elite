import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-76px)] overflow-hidden bg-[#061A2D] text-white">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,#17466b_0%,#092844_38%,#061a2d_72%)]" />

        {/* Building Image */}
        <div
          className="absolute inset-y-0 right-0 w-full lg:w-[67%] bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero-building.jpg')",
          }}
        />

        {/* Dark gradient over image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061A2D] via-[#061A2D]/75 to-[#061A2D]/10" />

        {/* Bottom dark */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#061A2D] to-transparent" />
      </div>

      {/* Blueprint Grid */}
      <div className="hero-blueprint-grid absolute inset-0 opacity-30" />

      {/* Blueprint Lines */}
      <div className="pointer-events-none absolute inset-0">

        <span className="absolute left-[42%] top-[20%] h-[1px] w-[42%] rotate-[-25deg] bg-white/20" />

        <span className="absolute left-[48%] top-[43%] h-[1px] w-[48%] bg-white/20" />

        <span className="absolute left-[62%] top-[10%] h-[75%] w-[1px] bg-white/20" />

        <span className="absolute left-[70%] top-[28%] h-[1px] w-[25%] bg-[#D9B84C]/60" />

        <span className="absolute left-[59%] top-[39%] h-[100px] w-[100px] border border-[#D9B84C]/50" />

        <span className="absolute left-[51%] top-[31%] h-[190px] w-[300px] border border-white/25" />

        <span className="absolute left-[55%] top-[39%] h-[130px] w-[230px] border border-white/20" />

      </div>

      {/* Main Container */}
      <div className="relative mx-auto flex min-h-[calc(100svh-76px)] max-w-[1440px] flex-col px-6 sm:px-10 lg:px-16">

        {/* Main Hero */}
        <div className="grid flex-1 items-center lg:grid-cols-[44%_56%]">

          {/* LEFT CONTENT */}
          <div className="relative z-10 py-20 lg:py-0">

            {/* Eyebrow */}
            <div className="mb-8 flex items-stretch gap-4">

              <div className="w-[2px] bg-[#D9B84C]" />

              <p className="font-mono text-[9px] uppercase leading-5 tracking-[0.2em] text-white/60 sm:text-[10px]">
                ARCHITECTURE
                <span className="mx-3 text-[#D9B84C]">•</span>
                ENGINEERING
                <span className="mx-3 text-[#D9B84C]">•</span>
                TECHNICAL SERVICES
              </p>

            </div>

            {/* Heading */}
            <h1 className="max-w-[700px] text-[clamp(4rem,7.5vw,7.5rem)] font-medium leading-[0.83] tracking-[-0.075em]">

              <span className="block text-white">
                Design with
              </span>

              <span className="block text-[#D9B84C]">
                Elite.
              </span>

            </h1>

            {/* Description */}
            <p className="mt-8 max-w-[420px] text-[15px] leading-7 text-white/60 sm:text-base">
              Architecture that combines precision,
              intelligence and vision.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-7">

              <Link
                href="/contact"
                className="group inline-flex min-h-[48px] items-center gap-5 bg-[#D9B84C] px-6 py-3.5 font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-[#061A2D] transition duration-300 hover:bg-[#f0d36b]"
              >
                Start a project

                <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <Link
                href="#studio"
                className="group inline-flex items-center gap-3 border-b border-white/30 pb-2 font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-white/70 transition duration-300 hover:border-[#D9B84C] hover:text-white"
              >
                Explore studio

                <span className="transition-transform duration-300 group-hover:translate-y-1">
                  ↓
                </span>
              </Link>

            </div>

          </div>


          {/* RIGHT IMAGE / ARCHITECTURE */}
          <div className="relative hidden h-full min-h-[600px] lg:block">

            {/* Architecture label */}
            <div className="absolute right-[8%] top-[14%] z-20 border border-white/25 bg-[#061A2D]/40 px-6 py-4 backdrop-blur-sm">

              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/70">
                Architecture
              </p>

              <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.2em] text-white/70">
                Project
              </p>

              <div className="mt-3 h-[2px] w-8 bg-[#D9B84C]" />

            </div>


            {/* Project number */}
            <div className="absolute right-[3%] top-[42%] z-20 flex items-center gap-3">

              <span className="font-mono text-[10px] text-white/70">
                01
              </span>

              <span className="h-12 w-[2px] bg-[#D9B84C]" />

            </div>


            {/* Image Frame */}
            <div className="absolute bottom-[4%] right-0 top-[9%] w-[96%] overflow-hidden">

              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/hero-building.jpg')",
                }}
              />

              {/* Image blue overlay */}
              <div className="absolute inset-0 bg-[#07345a]/25 mix-blend-multiply" />

              {/* Blueprint grid */}
              <div className="absolute inset-0 hero-image-grid opacity-50" />

              {/* Blueprint rectangles */}
              <div className="absolute left-[18%] top-[22%] h-[38%] w-[55%] border border-white/30" />

              <div className="absolute left-[27%] top-[30%] h-[23%] w-[43%] border border-[#D9B84C]/50" />

              {/* Diagonal construction line */}
              <div className="absolute left-[8%] top-[62%] h-[1px] w-[105%] origin-left rotate-[-22deg] bg-white/40" />

              {/* Vertical construction line */}
              <div className="absolute right-[20%] top-0 h-full w-[1px] bg-white/25" />

              {/* Horizontal construction line */}
              <div className="absolute left-0 top-[58%] h-[1px] w-full bg-white/25" />

              {/* Scan animation */}
              <div className="hero-scan absolute left-0 top-[35%] h-[1px] w-full bg-[#D9B84C]" />

              {/* 01 */}
              <span className="absolute left-5 top-5 font-mono text-[9px] tracking-[0.2em] text-white/80">
                01
              </span>

              {/* Caption */}
              <span className="absolute bottom-5 left-5 font-mono text-[8px] uppercase tracking-[0.18em] text-white/70">
                Form follows light
              </span>

              <span className="absolute bottom-5 right-5 rotate-180 font-mono text-[8px] uppercase tracking-[0.16em] text-white/70 [writing-mode:vertical-rl]">
                House No. 04 / Light Study
              </span>

            </div>

            {/* Yellow shadow / frame */}
            <div className="absolute bottom-[1%] right-[2%] -z-10 h-[12px] w-[88%] bg-[#D9B84C]" />

          </div>

        </div>


        {/* BOTTOM INFORMATION */}
        <div className="relative z-20 grid gap-6 border-t border-white/15 py-5 sm:grid-cols-[1.2fr_1.2fr_auto] sm:items-center">

          {/* Statement */}
          <div className="flex items-center gap-4">

            <span className="h-9 w-[2px] bg-[#D9B84C]" />
            <p className="font-sans text-[13px] font-medium uppercase tracking-[0.18em] text-white/85">
              We design what lasts.
            </p>

          </div>


          {/* Description */}
          <p className="hidden max-w-[380px] text-[11px] leading-5 text-white/50 md:block">
            From architectural vision to technical execution,
            we create intelligent spaces built around precision,
            function and lasting value.
          </p>


          {/* Stats */}
          <div className="flex gap-8 sm:gap-10">

            <div>
              <strong className="block text-xl font-medium">
                25+
              </strong>

              <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-white/40">
                Projects
              </span>
            </div>


            <div>
              <strong className="block text-xl font-medium">
                10+
              </strong>

              <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-white/40">
                Years Experience
              </span>
            </div>


            <div>
              <strong className="block text-xl font-medium">
                UAE
              </strong>

              <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-white/40">
                Based
              </span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}