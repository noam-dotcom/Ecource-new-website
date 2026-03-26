"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const SDG_COLORS: Record<number, { bg: string; ring: string }> = {
  2:  { bg: "#DDA63A", ring: "#c8912a" },
  9:  { bg: "#FD6925", ring: "#e0541a" },
  12: { bg: "#BF8B2E", ring: "#a87828" },
  13: { bg: "#3F7E44", ring: "#306335" },
  14: { bg: "#0A97D9", ring: "#0880bb" },
};

export default function SDG() {
  const { t } = useLanguage();
  const s = t.sdg;

  return (
    <section id="sdg" className="py-24 px-6 bg-navy-800">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-3">
            {s.label}
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            {s.headline1}{" "}
            <span className="gold-gradient">{s.headline2}</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            {s.description}
          </p>
        </div>

        {/* SDG Goal Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 mb-12">
          {s.goals.map((goal) => {
            const color = SDG_COLORS[goal.id];
            return (
              <div
                key={goal.id}
                className="group rounded-2xl overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-2"
                style={{ boxShadow: `0 4px 24px 0 ${color.bg}33` }}
              >
                {/* Colored header */}
                <div
                  className="flex flex-col items-center justify-center pt-7 pb-5 px-4"
                  style={{ backgroundColor: color.bg }}
                >
                  {/* SDG Number badge */}
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-3 border-2"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.2)",
                      borderColor: "rgba(255,255,255,0.5)",
                    }}
                  >
                    <span className="text-white font-black text-xl leading-none">
                      {goal.id}
                    </span>
                  </div>
                  <p className="text-white text-center font-bold text-xs leading-tight uppercase tracking-wide">
                    {goal.title}
                  </p>
                </div>

                {/* Description */}
                <div className="flex-1 bg-navy-900/80 border border-white/10 border-t-0 rounded-b-2xl px-4 py-4">
                  <p className="text-white/60 text-xs leading-relaxed text-center">
                    {goal.tagline}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* UN Note */}
        <div className="flex items-center justify-center gap-3 mt-6">
          {/* UN Emblem - simple SVG */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            className="shrink-0 opacity-60"
          >
            <circle cx="14" cy="14" r="13" stroke="#f59e0b" strokeWidth="1.5" fill="none" />
            <ellipse cx="14" cy="14" rx="5.5" ry="13" stroke="#f59e0b" strokeWidth="1" fill="none" />
            <line x1="1" y1="14" x2="27" y2="14" stroke="#f59e0b" strokeWidth="1" />
            <line x1="1.5" y1="9" x2="26.5" y2="9" stroke="#f59e0b" strokeWidth="0.8" />
            <line x1="1.5" y1="19" x2="26.5" y2="19" stroke="#f59e0b" strokeWidth="0.8" />
          </svg>
          <p className="text-white/40 text-sm font-medium text-center">{s.note}</p>
        </div>
      </div>
    </section>
  );
}
