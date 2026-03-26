"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-navy-900 border-t border-white/10 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-3">
            <img
              src="/ecource-wordmark.svg"
              alt="Ecource"
              className="h-12 w-auto object-contain"
            />
            <img
              src="/ecource-logo-mark.svg"
              alt=""
              className="h-10 w-10 object-contain"
            />
          </div>
          <p className="text-xs tracking-widest text-gold-500/60 mt-1 uppercase">
            Transforming the Future of Food
          </p>
        </div>
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
