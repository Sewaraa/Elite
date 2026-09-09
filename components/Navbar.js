"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/#studio", label: "Studio" },
  { href: "/#services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--ink)]/95 px-6 py-3 text-white backdrop-blur-md sm:px-10 lg:px-16">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between pb-2">
        <Link
          className="font-sans text-[15px] font-semibold uppercase tracking-[0.12em]"
          href="/"
          onClick={() => setIsOpen(false)}
        >
          Elite Intelligent
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              className="font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-white/70 transition-colors hover:text-[var(--yellow)]"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center border border-white/25 md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          type="button"
        >
          <span className="font-mono text-xs" aria-hidden="true">
            {isOpen ? "×" : "☰"}
          </span>
        </button>
      </nav>

      {isOpen && (
        <div className="mx-auto max-w-[1440px] bg-[var(--ink)]/95 px-1 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <Link
                className="font-sans text-sm font-medium uppercase tracking-[0.12em] text-white/80 hover:text-[var(--yellow)]"
                href={link.href}
                key={link.href}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}