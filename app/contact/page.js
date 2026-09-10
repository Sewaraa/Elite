import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#061A2D] text-white">

      {/* Background */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.18]">
        <div className="contact-grid absolute inset-0" />
      </div>

      {/* Gold glow */}
      <div className="pointer-events-none absolute -right-40 top-40 h-[500px] w-[500px] rounded-full bg-[#D9B84C]/[0.06] blur-[150px]" />

      <section className="relative mx-auto w-full max-w-[1440px] px-5 pb-20 pt-28 sm:px-8 sm:pb-24 lg:px-12 lg:pb-32 xl:px-16">

        {/* Top */}
        <div className="mb-16 lg:mb-24">

          <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-10 bg-[#D9B84C] sm:w-14" />

            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#D9B84C]">
              Contact
            </span>
          </div>

          <h1 className="max-w-[1100px] text-[clamp(3.6rem,9vw,8.5rem)] font-medium leading-[0.84] tracking-[-0.075em]">
            Let&apos;s create
            <br />

            <span className="text-white/40">
              something
            </span>{" "}

            <span className="text-[#D9B84C]">
              remarkable.
            </span>
          </h1>

        </div>


        {/* Main Content */}
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 xl:gap-28">

          {/* ================= LEFT ================= */}
          <div className="flex flex-col justify-between">

            <div>

              <p className="max-w-[400px] text-sm leading-7 text-white/45 sm:text-[15px]">
                Tell us about your project, your vision, or simply
                where you want to begin. Our team will get back to you
                to discuss the next step.
              </p>


              {/* Contact Details */}
              <div className="mt-12 space-y-8">

                <div>
                  <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/30">
                    Email
                  </span>

                  <a
                    href="mailto:info@eliteintelligent.com"
                    className="mt-2 block text-sm text-white/75 transition hover:text-[#D9B84C]"
                  >
                    info@eliteintelligent.com
                  </a>
                </div>


                <div>
                  <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/30">
                    Phone
                  </span>

                  <a
                    href="tel:+971000000000"
                    className="mt-2 block text-sm text-white/75 transition hover:text-[#D9B84C]"
                  >
                    +971 00 000 0000
                  </a>
                </div>


                <div>
                  <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/30">
                    Studio
                  </span>

                  <p className="mt-2 text-sm leading-6 text-white/65">
                    Dubai, United Arab Emirates
                  </p>
                </div>

              </div>

            </div>


            {/* Bottom Label */}
            <div className="mt-14 border-l border-[#D9B84C] pl-4 lg:mt-24">

              <p className="font-mono text-[8px] uppercase leading-5 tracking-[0.16em] text-white/35">
                Architecture
                <br />
                Interior Design
                <br />
                Technical Services
                <br />
                Fitout
              </p>

            </div>

          </div>


          {/* ================= FORM ================= */}
          <ContactForm />

        </div>


        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between lg:mt-24">
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