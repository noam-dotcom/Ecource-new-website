"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Fish, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden navy-gradient"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold-500/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold px-4 py-2 rounded-full mb-8 animate-fade-in">
          <ShieldCheck size={14} />
          {h.badge}
        </div>

        <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-6 animate-slide-up">
          {h.headline1}
          <br />
          <span className="gold-gradient">{h.headline2}</span>
        </h1>

        <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-4 animate-slide-up">
          {h.description}
        </p>

        <p className="text-sm text-white/50 mb-10 animate-fade-in">
          {h.subtext}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <Button asChild size="lg">
            <a href="#contact">
              <Fish size={18} />
              {h.cta1}
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#solution">{h.cta2}</a>
          </Button>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-white/10 pt-10 animate-fade-in">
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
