"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-navy-900 border-t border-white/10 py-3 px-6 md:min-h-[16rem]">
      {/* Logo — same height & left offset as the navbar logo, so their horizontal centers line up */}
      <img
        src="/ecource-logo.png"
        alt="Ecource"
        className="h-32 md:h-[252px] w-auto object-contain mx-auto mb-4 md:mx-0 md:mb-0 md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2"
      />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-end gap-4">
        <p className="text-white/30 text-xs text-center">{t.footer.copyright}</p>
        <div className="flex gap-6 text-xs text-white/40">
          <a href="#contact" className="hover:text-gold-400 transition-colors">
            {t.footer.contact}
          </a>
          <a href="#solution" className="hover:text-gold-400 transition-colors">
            {t.footer.technology}
          </a>
        </div>
      </div>
    </footer>
  );
}
