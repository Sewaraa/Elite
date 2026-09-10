import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Residential",
    type: "Design & Fitout",
    text: "Elegant and functional residential spaces shaped around the people who live in them.",
  },
  {
    number: "02",
    title: "Office",
    type: "Design & Fitout",
    text: "Contemporary workplaces designed for productivity, identity, and everyday experience.",
  },
  {
    number: "03",
    title: "Exhibition Stand",
    type: "Design & Fitout",
    text: "Distinctive exhibition environments designed to capture attention and communicate your brand.",
  },
  {
    number: "04",
    title: "Commercial",
    type: "Design & Fitout",
    text: "Strategic commercial spaces that combine functionality, visual identity, and customer experience.",
  },
  {
    number: "05",
    title: "Landscape",
    type: "Design",
    text: "Outdoor environments carefully composed through landscape, materials, greenery, and light.",
  },
  {
    number: "06",
    title: "Hospitality",
    type: "Design & Fitout",
    text: "Atmospheric hospitality spaces where design and experience come together.",
  },
  {
    number: "07",
    title: "F&B",
    type: "Design & Fitout",
    text: "Memorable food and beverage environments designed around flow, identity, and atmosphere.",
  },
  {
    number: "08",
    title: "Healthcare",
    type: "Design & Fitout",
    text: "Human-centered healthcare environments combining functionality, comfort, and precision.",
  },
  {
    number: "09",
    title: "Events",
    type: "Design",
    text: "Immersive environments created to transform spaces and create memorable experiences.",
  },
];

export default function ServicesPage() {
  return (
    <main className="relative overflow-hidden bg-[#061A2D] text-white">

      {/* subtle blueprint background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.22]">
        <div className="services-grid absolute inset-0" />
      </div>

      {/* soft architectural glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#D9B84C]/[0.06] blur-[140px]" />

      <section className="relative mx-auto w-full max-w-[1440px] px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20 lg:px-12 lg:pb-32 lg:pt-24 xl:px-16">

        {/* Section intro */}
        <div className="mb-14 grid gap-8 lg:mb-20 lg:grid-cols-[1fr_0.8fr] lg:items-end">

          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#D9B84C]" />

              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#D9B84C]">
                What We Do
              </span>
            </div>

            <h2 className="max-w-[850px] text-[clamp(3.5rem,8vw,7rem)] font-medium leading-[0.86] tracking-[-0.07em]">
              Spaces
              <span className="text-white/35">.</span>
              <br />

              <span className="text-white/50">
                Shaped
              </span>{" "}

              <span className="text-[#D9B84C]">
                intelligently.
              </span>
            </h2>
          </div>

          <div className="max-w-[390px] lg:justify-self-end">
            <p className="text-sm leading-7 text-white/45 sm:text-[15px]">
              From concept to completion, we bring together
              design, technical expertise, and precision fitout
              to create spaces with purpose.
            </p>

            <div className="mt-7 flex items-center gap-4">
              <span className="h-px w-8 bg-white/20" />

              <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/30">
                Design · Build · Experience
              </span>
            </div>
          </div>

        </div>


        {/* Services */}
        <div className="relative">

          {/* vertical architectural line */}
          <div className="absolute bottom-0 left-0 top-0 hidden w-px bg-white/10 sm:block" />
          <div className="grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => (
              <Link
                key={service.number}
                href="/contact"
                className="group relative min-h-[300px] overflow-hidden border-b border-r border-white/10 p-6 transition-all duration-500 hover:bg-[#0A2238] sm:min-h-[340px] sm:p-8 lg:min-h-[370px] lg:p-9"
              >

                {/* top gold line */}
                <span className="absolute left-0 top-0 h-[2px] w-0 bg-[#D9B84C] transition-all duration-700 group-hover:w-full" />

                {/* number */}
                <div className="flex items-center justify-between">

                  <span className="font-mono text-[9px] tracking-[0.18em] text-[#D9B84C]">
                    {service.number}
                  </span>

                  <span className="font-mono text-xs text-white/20 transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#D9B84C]">
                    ↗
                  </span>

                </div>


                {/* service title */}
                <div className="mt-20 sm:mt-24">

                  <h3 className="text-[clamp(2rem,4vw,3rem)] font-medium leading-[0.9] tracking-[-0.055em]">
                    {service.title}
                  </h3>

                  <p className="mt-3 font-mono text-[8px] uppercase tracking-[0.18em] text-[#D9B84C]">
                    {service.type}
                  </p>

                  <p className="mt-6 max-w-[350px] text-xs leading-6 text-white/35 transition-colors duration-500 group-hover:text-white/55 sm:text-sm">
                    {service.text}
                  </p>

                </div>


                {/* corner detail */}
                <span className="absolute bottom-6 right-6 h-4 w-4 border-b border-r border-white/10 transition-all duration-500 group-hover:h-7 group-hover:w-7 group-hover:border-[#D9B84C]" />

              </Link>
            ))}

          </div>

        </div>


        {/* Bottom micro information */}
        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">

          <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/25">
            Elite Intelligent Technical Services L.L.C
          </p>

          <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/25">
            Dubai · UAE
          </p>

        </div>

      </section>

    </main>
  );
}