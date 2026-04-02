"use client";

import { ArrowDown, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section
      id="hero"
      className="parallax-bg relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 pb-10 overflow-hidden"
      style={{ backgroundImage: "url('/fishing-vessel.png')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-black/55 z-0" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold-500/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-6 animate-slide-up">
          {h.headline1}
          <br />
          <span className="gold-gradient">{h.headline2}</span>
        </h1>

        <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-8 animate-slide-up">
          {h.description}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 animate-fade-in">
          {[
            { value: "$250B/Year", label: "Untapped Seafood Market", sub: "~80MT/Year · Source: FAO SOFIA 2024" },
            { value: "80MT/Year", label: "Fish Biomass Wasted Annually", sub: "Discarded by conventional processing" },
            { value: "Up to 65%", label: "Of Every Fish Discarded Today", sub: "The structural inefficiency we solve" },
            { value: "25+", label: "Years Seafood Expertise", sub: "Founder's hands-on industry experience" },
          ].map((metric) => (
            <div
              key={metric.label}
              className="bg-navy-800/60 border border-white/10 rounded-2xl p-5 text-center hover:border-gold-500/30 transition-colors"
            >
              <p className="text-3xl font-black gold-gradient mb-1">{metric.value}</p>
              <p className="text-white font-semibold text-sm mb-1">{metric.label}</p>
              <p className="text-white/40 text-xs">{metric.sub}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/40 text-white text-sm font-semibold px-6 py-3 rounded-full">
            <ShieldCheck size={15} className="text-gold-400" />
            Patent-Pending Technology · Applied in 40 Countries
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-white/10 pt-10 animate-fade-in">
          {[
            { value: h.stat1Value, label: h.stat1Label },
            { value: h.stat2Value, label: h.stat2Label },
            { value: h.stat3Value, label: h.stat3Label },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-black gold-gradient">{stat.value}</p>
              <p className="text-xs text-white/50 mt-1 font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#problem"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hover:text-gold-400 transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
}
