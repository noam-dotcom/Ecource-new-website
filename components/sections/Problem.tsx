"use client";

import { AlertTriangle, TrendingDown, Globe, Trash2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ICONS = [Trash2, TrendingDown, Globe, AlertTriangle];

export default function Problem() {
  const { t } = useLanguage();
  const p = t.problem;

  return (
    <section id="problem" className="py-28 px-6 bg-navy-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-3">
            {p.label}
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            {p.headline}
            <br />
            <span className="text-white/50">{p.headlineSub}</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            The world is running short of food — yet conventional food processing discards up to 65% of every fish.<br />
            {"This is a "}<strong className="text-white">structural crisis</strong>{", not an operational one."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {p.items.map((item, idx) => {
            const Icon = ICONS[idx];
            return (
              <div
                key={item.title}
                className="bg-navy-900/60 border border-white/10 rounded-2xl p-8 flex gap-5 hover:border-gold-500/30 transition-colors group"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                  <Icon size={22} className="text-gold-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  {"sources" in item && Array.isArray(item.sources) && item.sources.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {(item.sources as { label: string; url: string }[]).map((s) => (
                        <a
                          key={s.url}
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gold-500/70 text-xs hover:text-gold-400 transition-colors"
                        >
                          [{s.label}]
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 bg-gradient-to-r from-gold-500/10 to-transparent border border-gold-500/20 rounded-2xl p-8 text-center">
          <p className="text-5xl font-black gold-gradient mb-2">$150B+</p>
          <p className="text-white/60 text-lg">{p.bigStatLabel}</p>
        </div>
      </div>
    </section>
  );
}
