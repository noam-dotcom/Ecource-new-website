"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutUs() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section id="about" className="py-28 px-6 bg-navy-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-3">
            {a.label}
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            {a.headline}
            <br />
            <span className="gold-gradient">{a.headlineSub}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Story */}
          <div>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              {a.story}
            </p>

            <div className="bg-gold-500/5 border border-gold-500/20 rounded-2xl p-8">
              <h3 className="text-gold-400 font-bold text-lg mb-3">
                {a.missionTitle}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed italic">
                &ldquo;{a.mission}&rdquo;
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-5">
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
      </div>
    </section>
  );
}
