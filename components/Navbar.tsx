"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Lang } from "@/lib/translations";

const LANGUAGES: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "he", label: "עב" },
  { code: "zh", label: "中" },
  { code: "es", label: "ES" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, lang, setLang } = useLanguage();

  const links = [
    { href: "#about", label: t.about.label, cta: false },
    { href: "#problem", label: t.nav.problem, cta: false },
    { href: "#solution", label: t.nav.solution, cta: false },
    { href: "#market", label: t.nav.market, cta: false },
    { href: "#products", label: t.nav.products, cta: false },
    { href: "#contact", label: t.nav.contactUs, cta: true },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // dir="ltr" keeps the navbar layout fixed regardless of page language direction
    <nav
      dir="ltr"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-900/95 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo — custom wordmark (fish in C, mirrored last C & E) + hexagon mark */}
        <a href="#hero" className="flex items-center gap-2 shrink-0">
          <img
            src="/ecource-wordmark.svg"
            alt="Ecource"
            className="h-9 w-auto object-contain"
          />
          <img
            src="/ecource-logo-mark.svg"
            alt=""
            className="h-7 w-7 object-contain"
          />
        </a>

        {/* Desktop links — Contact Us is the last link, styled as CTA */}
        <ul className="hidden xl:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={
                  l.cta
                    ? "inline-flex items-center bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold text-sm px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
                    : "text-sm text-white/70 hover:text-gold-400 transition-colors font-medium whitespace-nowrap"
                }
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: language switcher only */}
        <div className="hidden xl:flex items-center">
          <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-lg p-1">
            {LANGUAGES.map(({ code, label }) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all duration-200 ${
                  lang === code
                    ? "bg-gold-500 text-navy-900"
                    : "text-white/50 hover:text-white hover:bg-white/10"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="xl:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="xl:hidden bg-navy-800 border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={
                l.cta
                  ? "inline-flex items-center justify-center bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold text-sm px-4 py-2.5 rounded-lg transition-colors"
                  : "text-white/80 hover:text-gold-400 transition-colors font-medium"
              }
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}

          {/* Mobile language switcher */}
          <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-lg p-1 w-fit">
            {LANGUAGES.map(({ code, label }) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all duration-200 ${
                  lang === code
                    ? "bg-gold-500 text-navy-900"
                    : "text-white/50 hover:text-white hover:bg-white/10"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
