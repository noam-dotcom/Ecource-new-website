"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutUs() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section
      id="about"
      className="py-28 px-6 relative bg-navy-900"
      style={{
        backgroundImage: "url('/about-bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-navy-900/70" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-3">
            {a.label}
          </p>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            {a.headline}
            <br />
            <span className="gold-gradient">{a.headlineSub}</span>
          </h2>
        </div>

        {/* Story */}
        <div className="mb-16">
          {a.story.split("\n\n").map((para, i) => (
            <p key={i} className="text-white/70 text-lg leading-relaxed mb-5">
              {para}
            </p>
          ))}
          <p className="mt-2 text-gold-500 text-base font-semibold italic leading-relaxed">
            {a.slogan}
          </p>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {a.highlights.map((h) => (
            <div
              key={h.label}
              className="bg-navy-800/60 border border-white/10 rounded-2xl p-8 text-center hover:border-gold-500/30 transition-colors"
            >
              <p className="text-3xl font-black gold-gradient mb-2">{h.value}</p>
              <p className="text-white/50 text-xs font-semibold uppercase tracking-widest">
                {h.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
