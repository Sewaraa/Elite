"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  
  { href: "/projects", label: "Projects" },
  
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#061A2D]/90 text-white backdrop-blur-xl">
      <nav className="mx-auto flex h-[68px] w-full max-w-[1440px] items-center justify-between px-5 sm:h-[74px] sm:px-8 lg:px-12 xl:px-16">

        {/* Logo */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="flex min-w-0 items-center gap-2.5 sm:gap-3"
        >
          <span className="relative flex h-8 w-8 shrink-0 items-center justify-center border-2 border-[#D9B84C] sm:h-9 sm:w-9">
            <span className="absolute left-[6px] top-1/2 h-[19px] w-[2px] -translate-y-1/2 bg-[#D9B84C] sm:left-[7px] sm:h-[22px]" />
            <span className="absolute left-[9px] top-[6px] h-[2px] w-[12px] bg-[#D9B84C] sm:left-[10px] sm:top-[8px] sm:w-[13px]" />
            <span className="absolute bottom-[5px] left-[9px] h-[2px] w-[12px] bg-[#D9B84C] sm:bottom-[6px] sm:left-[10px] sm:w-[13px]" />
          </span>

          <span className="truncate font-sans text-[11px] font-semibold uppercase tracking-[0.11em] sm:text-[15px] sm:tracking-[0.14em]">
            Elite Intelligent
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative py-2 font-sans text-[10px] font-medium uppercase tracking-[0.14em] transition-colors xl:text-[11px] ${
                link.label === "Home"
                  ? "text-[#D9B84C]"
                  : "text-white/70 hover:text-[#D9B84C]"
              }`}
            >
              {link.label}

              {link.label === "Home" && (
                <span className="absolute bottom-0 left-0 h-[1px] w-full bg-[#D9B84C]" />
              )}
            </Link>
          ))}

          <Link
            href="/contact"
            className="ml-1 flex shrink-0 items-center gap-2 bg-[#D9B84C] px-5 py-3.5 font-sans text-[9px] font-bold uppercase tracking-[0.12em] text-[#061A2D] transition hover:bg-[#efd36d] xl:px-6"
          >
            Start a Project
            <span className="text-sm">→</span>
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/20 text-white transition hover:border-[#D9B84C] hover:text-[#D9B84C] lg:hidden"
        >
          <span className="text-lg leading-none">
            {isOpen ? "×" : "☰"}
          </span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-[#061A2D] px-5 pb-6 pt-2 lg:hidden">
          <div className="mx-auto max-w-[1440px]">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block border-b border-white/10 py-4 font-sans text-xs font-medium uppercase tracking-[0.15em] ${
                  link.label === "Home"
                    ? "text-[#D9B84C]"
                    : "text-white/75"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-5 flex items-center justify-between bg-[#D9B84C] px-5 py-4 font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-[#061A2D]"
            >
              <span>Start a Project</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}