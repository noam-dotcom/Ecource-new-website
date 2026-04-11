"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const METRIC_SOURCES = [
  { label: "FAO SOFIA 2024", url: "https://www.fao.org/3/cd0683en/online/sofia/2024/world-fisheries-aquaculture-production.html" },
  { label: "FAO/OECD 2024", url: "https://www.oecd.org/en/publications/oecd-fao-agricultural-outlook-2025-2034_601276cd-en/full-report/meat_5462e384.html" },
  { label: "FAO/OECD 2024", url: "https://www.oecd.org/en/publications/oecd-fao-agricultural-outlook-2025-2034_601276cd-en/full-report/meat_5462e384.html" },
  { label: "FAO/OECD 2024", url: "https://www.oecd.org/en/publications/oecd-fao-agricultural-outlook-2025-2034_601276cd-en/full-report/meat_5462e384.html" },
];

export default function Market() {
  const { t } = useLanguage();
  const m = t.market;

  return (
    <section id="market" className="py-28 px-6 bg-navy-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-3">
            {m.label}
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            {m.headline1}
            <br />
            <span className="gold-gradient">{m.headline2}</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">{m.description}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">
          {m.metrics.map((metric, idx) => (
            <div
              key={metric.label}
              className="bg-navy-800/60 border border-white/10 rounded-2xl p-6 text-center hover:border-gold-500/30 transition-colors"
            >
              <p className="text-4xl font-black gold-gradient mb-1">{metric.value}</p>
              <p className="text-white font-semibold text-sm mb-1">{metric.label}</p>
              <p className="text-white/40 text-xs">{metric.sub}</p>
              {METRIC_SOURCES[idx] && (
                <a
                  href={METRIC_SOURCES[idx].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-500/60 text-xs hover:text-gold-400 transition-colors mt-1 inline-block"
                >
                  [{METRIC_SOURCES[idx].label}]
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-white font-bold text-2xl mb-6">{m.driversTitle}</h3>
            <ul className="space-y-4">
              {m.drivers.map((d) => (
                <li key={d} className="flex gap-3 items-start text-white/70 text-sm leading-relaxed">
                  <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-400 text-xs">
                    ✓
                  </span>
                  <span>
                    {d}
                    {d.toLowerCase().includes("regulatory pressure") && (
                      <a
                        href="https://environment.ec.europa.eu/topics/waste-and-recycling/food-waste_en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gold-500/60 text-xs hover:text-gold-400 transition-colors ml-1"
                      >
                        [EU source]
                      </a>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-navy-800/60 border border-gold-500/20 rounded-2xl p-8">
            <h3 className="text-white font-bold text-xl mb-2">{m.whyNowTitle}</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">{m.whyNow}</p>
            <h3 className="text-white font-bold text-xl mb-2">{m.whyEcourceTitle}</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">{m.whyEcource}</p>
            <a
              href="#contact"
              className="text-gold-400 font-semibold text-sm hover:text-gold-300 transition-colors"
            >
              {m.callLink}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
