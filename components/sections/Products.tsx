"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const COLORS = [
  { border: "border-blue-500/30",   accent: "text-blue-400"   },
  { border: "border-gold-500/40",   accent: "text-gold-400"   },
  { border: "border-green-500/30",  accent: "text-green-400"  },
  { border: "border-purple-500/30", accent: "text-purple-400" },
  { border: "border-teal-500/30",   accent: "text-teal-400"   },
  { border: "border-orange-500/30", accent: "text-orange-400" },
  { border: "border-cyan-500/30",   accent: "text-cyan-400"   },
  { border: "border-rose-500/30",   accent: "text-rose-400"   },
];

// Mapped by index order matching the translations items array
const PRODUCT_IMAGES = [
  "/products/product-cutlet.jpg",       // Fish Cutlets
  "/products/product-burger.jpg",       // Fish Burgers
  "/products/product-breaded.jpg",      // Breaded Products
  "/products/product-pasta.jpg",        // Pasta & Noodles
  "/products/product-paella.jpg",       // Pizza Dough
  "/products/product-snacks.jpg",       // Snacks
  "/products/product-rice.jpg",         // Imitation Rice
  "/products/product-pasta-delmar.jpg", // Gluten-Free Pasta & Pizza
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
          {p.items.map((prod, idx) => {
            const color = COLORS[idx % COLORS.length];
            const img = PRODUCT_IMAGES[idx];
            return (
              <div
                key={prod.category}
                className={`group bg-navy-900/70 border ${color.border} rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300`}
              >
                {/* Food Photo */}
                {img && (
                  <div className="relative w-full h-56 overflow-hidden">
                    <Image
                      src={img}
                      alt={prod.category}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Bottom fade so text below blends */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
                    {/* Tag badge over image */}
                    <span className={`absolute top-3 right-3 text-xs font-bold border ${color.border} ${color.accent} bg-navy-900/80 px-2.5 py-1 rounded-full backdrop-blur-sm`}>
                      {prod.tag}
                    </span>
                  </div>
                )}

                {/* Text content */}
                <div className="p-6">
                  <h3 className="text-white font-black text-xl mb-4">{prod.category}</h3>
                  <ul className="space-y-2">
                    {prod.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-white/70 text-sm leading-relaxed">
                        <span className={`mt-1.5 w-1.5 h-1.5 shrink-0 rounded-full ${color.accent.replace("text-", "bg-")}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
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
