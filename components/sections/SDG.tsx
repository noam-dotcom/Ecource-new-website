"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

// Official UN SDG icon URLs — zero-padded, e.g. 02, 09, 12, 13, 14
const SDG_ICON_URL = (id: number) =>
  `https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-${String(id).padStart(2, "0")}.jpg`;

const SDG_COLORS: Record<number, string> = {
  2:  "#DDA63A",
  3:  "#4C9F38",
  9:  "#FD6925",
  12: "#BF8B2E",
  13: "#3F7E44",
  14: "#0A97D9",
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 mb-12">
          {s.goals.map((goal) => {
            const accentColor = SDG_COLORS[goal.id];
            return (
              <div
                key={goal.id}
                className="group rounded-2xl overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-2"
                style={{ boxShadow: `0 4px 24px 0 ${accentColor}40` }}
              >
                {/* Official SDG icon — square, full width */}
                <div className="relative w-full aspect-square">
                  <Image
                    src={SDG_ICON_URL(goal.id)}
                    alt={`SDG ${goal.id}: ${goal.title}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />
                  {/* Subtle overlay on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    style={{ backgroundColor: accentColor }}
                  />
                </div>

                {/* Tagline */}
                <div
                  className="flex-1 px-4 py-4 border border-t-0 border-white/10 rounded-b-2xl"
                  style={{ backgroundColor: `${accentColor}18` }}
                >
                  <p className="text-white/70 text-xs leading-relaxed text-center">
                    {goal.tagline}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* UN Note */}
        <div className="flex items-center justify-center gap-3">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            className="shrink-0 opacity-50"
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
