"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const COLORS = [
  { color: "from-blue-500/20 to-blue-900/10", border: "border-blue-500/20" },
  { color: "from-gold-500/20 to-gold-900/10", border: "border-gold-500/30" },
  { color: "from-green-500/20 to-green-900/10", border: "border-green-500/20" },
  { color: "from-purple-500/20 to-purple-900/10", border: "border-purple-500/20" },
  { color: "from-teal-500/20 to-teal-900/10", border: "border-teal-500/20" },
  { color: "from-orange-500/20 to-orange-900/10", border: "border-orange-500/20" },
  { color: "from-cyan-500/20 to-cyan-900/10", border: "border-cyan-500/20" },
  { color: "from-rose-500/20 to-rose-900/10", border: "border-rose-500/20" },
];

export default function Products() {
  const { t } = useLanguage();
  const p = t.products;

  return (
    <section id="products" className="py-28 px-6 bg-navy-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-3">
            {p.label}
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            {p.headline1}
            <br />
            <span className="gold-gradient">{p.headline2}</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">{p.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {p.items.map((prod, idx) => (
            <div
              key={prod.category}
              className={`bg-gradient-to-br ${COLORS[idx % COLORS.length].color} border ${COLORS[idx % COLORS.length].border} rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="flex items-start justify-between mb-5">
                <h3 className="text-white font-black text-xl">{prod.category}</h3>
                <span className="text-xs font-semibold border border-white/20 text-white/60 px-2.5 py-1 rounded-full">
                  {prod.tag}
                </span>
              </div>
              <ul className="space-y-2">
                {prod.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-white/70 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-navy-900/60 border border-white/10 rounded-2xl p-8 text-center">
          <p className="text-white/50 text-sm">
            {p.note}{" "}
            <a href="#contact" className="text-gold-400 hover:underline font-medium">
              {p.noteLink}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
