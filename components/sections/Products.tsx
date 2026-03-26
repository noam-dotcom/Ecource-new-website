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
    <section
      id="products"
      className="py-28 px-6 relative bg-navy-800"
      style={{
        backgroundImage: "url('/products-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-navy-900/50" />
      <div className="relative z-10 max-w-7xl mx-auto">
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

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-gradient-to-br from-gold-500/15 to-gold-900/10 border border-gold-500/40 rounded-2xl p-7 text-center flex flex-col items-center gap-3">
            <span className="text-3xl">🧬</span>
            <p className="text-gold-400 font-black text-sm uppercase tracking-widest">Superior Nutrition</p>
            <p className="text-white/80 text-sm leading-relaxed">{p.note}</p>
          </div>
          <div className="bg-gradient-to-br from-green-500/15 to-green-900/10 border border-green-500/30 rounded-2xl p-7 text-center flex flex-col items-center gap-3">
            <span className="text-3xl">💚</span>
            <p className="text-green-400 font-black text-sm uppercase tracking-widest">Consumer Friendly</p>
            <p className="text-white/80 text-sm leading-relaxed">{p.note2}</p>
          </div>
          <div className="bg-gradient-to-br from-blue-500/15 to-blue-900/10 border border-blue-500/30 rounded-2xl p-7 text-center flex flex-col items-center gap-3">
            <span className="text-3xl">✡︎</span>
            <p className="text-blue-400 font-black text-sm uppercase tracking-widest">Certified</p>
            <p className="text-white/80 text-sm leading-relaxed">{p.note3}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
