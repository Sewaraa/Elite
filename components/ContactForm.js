"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const services = [
  "Residential",
  "Office",
  "Commercial",
  "Hospitality",
  "F&B",
  "Healthcare",
  "Exhibition",
  "Landscape",
  "Events",
];

export default function ContactForm() {
  const form = useRef();

  const [selectedService, setSelectedService] = useState("");
  const [status, setStatus] = useState("idle");

  const sendEmail = async (event) => {
    event.preventDefault();

    setStatus("sending");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus("success");
      form.current.reset();
      setSelectedService("");

    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className="relative">

      {/* Form frame */}
      <div className="border border-white/10 bg-[#081F34]/60 p-5 sm:p-8 lg:p-10 xl:p-12">

        {/* Form Header */}
        <div className="mb-10 flex items-end justify-between border-b border-white/10 pb-6">

          <div>
            <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#D9B84C]">
              Project Inquiry
            </span>

            <h2 className="mt-2 text-2xl font-medium tracking-[-0.03em] sm:text-3xl">
              Tell us about your project
            </h2>
          </div>

          <span className="hidden font-mono text-[9px] text-white/20 sm:block">
            01 / 01
          </span>

        </div>


        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-8"
        >

          {/* Name + Email */}
          <div className="grid gap-8 sm:grid-cols-2">

            <div className="group">
              <label className="form-label">
                Your Name
              </label>

              <input
                required
                type="text"
                name="from_name"
                placeholder="John Smith"
                className="form-input"
              />
            </div>


            <div className="group">
              <label className="form-label">
                Email Address
              </label>

              <input
                required
                type="email"
                name="from_email"
                placeholder="john@example.com"
                className="form-input"
              />
            </div>

          </div>


          {/* Phone + Company */}
          <div className="grid gap-8 sm:grid-cols-2">

            <div>
              <label className="form-label">
                Phone
              </label>

              <input
                type="tel"
                name="phone"
                placeholder="+971"
                className="form-input"
              />
            </div>


            <div>
              <label className="form-label">
                Company
              </label>

              <input
                type="text"
                name="company"
                placeholder="Company name"
                className="form-input"
              />
            </div>

          </div>


          {/* Services */}
          <div>

            <label className="form-label">
              What can we help you with?
            </label>

            <div className="mt-4 flex flex-wrap gap-2">

              {services.map((service) => (
                <button
                  key={service}
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className={`border px-3 py-2 font-mono text-[8px] uppercase tracking-[0.1em] transition-all duration-300 sm:px-4 sm:py-2.5 ${
                    selectedService === service
                      ? "border-[#D9B84C] bg-[#D9B84C] text-[#061A2D]"
                      : "border-white/10 text-white/45 hover:border-[#D9B84C]/60 hover:text-[#D9B84C]"
                  }`}
                >
                  {service}
                </button>
              ))}

            </div>

            <input
              type="hidden"
              name="service"
              value={selectedService}
            />

          </div>


          {/* Budget */}
          <div>

            <label className="form-label">
              Estimated Budget
            </label>

            <select
              name="budget"
              className="form-input cursor-pointer bg-[#081F34]"
              defaultValue=""
            >
              <option value="" disabled>
                Select a range
              </option>

              <option value="Under 100K">
                Under AED 100K
              </option>

              <option value="100K - 500K">
                AED 100K – 500K
              </option>

              <option value="500K - 1M">
                AED 500K – 1M
              </option>

              <option value="1M+">
                AED 1M+
              </option>
            </select>

          </div>


          {/* Message */}
          <div>

            <label className="form-label">
              Tell us more
            </label>

            <textarea
              required
              name="message"
              rows="5"
              placeholder="Tell us about your project, location, scope, timeline..."
              className="form-input resize-none"
            />

          </div>


          {/* Submit */}
          <div className="flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">

            <div className="min-h-[24px]">

              {status === "success" && (
                <p className="font-mono text-[8px] uppercase tracking-[0.12em] text-[#D9B84C]">
                  ✓ Message sent successfully
                </p>
              )}

              {status === "error" && (
                <p className="font-mono text-[8px] uppercase tracking-[0.12em] text-red-300">
                  Something went wrong. Please try again.
                </p>
              )}

            </div>


            <button
              type="submit"
              disabled={status === "sending"}
              className="group flex min-h-[52px] w-full items-center justify-center gap-5 bg-[#D9B84C] px-7 font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-[#061A2D] transition hover:bg-[#efd36d] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-[190px]"
            >
              {status === "sending"
                ? "Sending..."
                : "Send Inquiry"}

              <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

          </div>

        </form>

      </div>

      {/* Decorative corner */}
      <span className="absolute -bottom-3 -right-3 h-10 w-10 border-b border-r border-[#D9B84C]/50" />

    </div>
  );
}