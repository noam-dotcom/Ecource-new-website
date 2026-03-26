"use client";

import { CheckCircle2, Zap, Layers, RefreshCcw } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ICONS = [Layers, RefreshCcw, Zap, CheckCircle2];

export default function Solution() {
  const { t } = useLanguage();
  const s = t.solution;

  return (
    <section
      id="solution"
      className="py-28 px-6 relative bg-navy-900"
      style={{
        backgroundImage: "url('/solution-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-navy-900/85" />
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-3">
            {s.label}
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            {s.headline1}
            <br />
            <span className="gold-gradient">{s.headline2}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              {s.para1}
            </p>
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              {s.para2.split("Poultry, Beef, and Pork")[0]}
              <strong className="text-white">Poultry, Beef, and Pork</strong>
              {s.para2.split("Poultry, Beef, and Pork")[1]}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-gold-400 font-semibold hover:text-gold-300 transition-colors"
            >
              {s.linkText}
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {s.features.map((f, idx) => {
              const Icon = ICONS[idx];
              return (
                <div
                  key={f.title}
                  className="bg-navy-800/80 border border-white/10 rounded-2xl p-6 hover:border-gold-500/40 transition-all hover:-translate-y-1 duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold-500/15 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-gold-400" />
                  </div>
                  <h3 className="text-white font-bold mb-2 text-sm">{f.title}</h3>
                  <p className="text-white/50 text-xs leading-relaxed">{f.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-red-950/30 border border-red-500/20 rounded-2xl p-8">
            <p className="text-red-400 font-bold text-sm uppercase tracking-widest mb-4">
              {s.traditional.label}
            </p>
            <ul className="space-y-3 text-white/60 text-sm">
              {s.traditional.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-xs">
                    ✕
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gold-500/5 border border-gold-500/30 rounded-2xl p-8">
            <p className="text-gold-400 font-bold text-sm uppercase tracking-widest mb-4">
              {s.ecource.label}
            </p>
            <ul className="space-y-3 text-white/70 text-sm">
              {s.ecource.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center text-xs">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
