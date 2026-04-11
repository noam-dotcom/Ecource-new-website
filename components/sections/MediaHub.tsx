"use client";

import { Newspaper, ChevronRight, ExternalLink, Film, Users } from "lucide-react"; // ExternalLink used in testimonial verify link
import { useLanguage } from "@/contexts/LanguageContext";



export default function MediaHub() {
  const { t } = useLanguage();
  const m = t.media;

  return (
    <section id="media" className="py-28 px-6 bg-navy-900 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full bg-gold-500/4 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-3">{m.label}</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            {m.headline1}
            <br />
            <span className="gold-gradient">{m.headline2}</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">{m.description}</p>
        </div>

        {/* ── Video Section ── */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-lg bg-gold-500/15 flex items-center justify-center">
              <Film size={16} className="text-gold-400" />
            </div>
            <h3 className="text-white font-bold text-xl">{m.videosTitle}</h3>
          </div>

          <div className="text-center py-12 px-8 border border-dashed border-white/20 rounded-2xl">
            <div className="w-16 h-16 rounded-full bg-gold-500/10 flex items-center justify-center mx-auto mb-6">
              <Film size={28} className="text-gold-400" />
            </div>
            <h3 className="text-white font-bold text-xl mb-3">Technology Videos — In Production</h3>
            <p className="text-white/60 text-sm leading-relaxed max-w-lg mx-auto mb-6">
              Our technology walkthrough and founder pitch videos are currently being produced.
              Request early access to pilot footage via the investor contact form below.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-gold-400 font-semibold text-sm hover:text-gold-300 transition-colors"
            >
              Request Video Access <ChevronRight size={14} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-20" />

        {/* ── Testimonials strip ── */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-lg bg-gold-500/15 flex items-center justify-center">
              <Users size={16} className="text-gold-400" />
            </div>
            <h3 className="text-white font-bold text-xl">{m.testimonialsTitle}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {m.testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-navy-800/50 border border-white/10 rounded-2xl p-6 hover:border-gold-500/20 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-gold-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed italic mb-5">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gold-500/15 flex items-center justify-center text-gold-400 font-bold text-xs">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-white/40 text-xs">{t.role}</p>
                  </div>
                </div>
                {t.name.includes("Tzach") && (
                  <a
                    href="https://www.innovalley.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-4 text-gold-400/70 text-xs hover:text-gold-300 transition-colors"
                  >
                    Verify Innovalley <ExternalLink size={10} />
                  </a>
                )}
              </div>
            ))}

            {/* Placeholder for additional references */}
            <div className="flex flex-col items-center justify-center text-center p-6 rounded-2xl border border-dashed border-white/20 text-white/50">
              <p className="text-sm leading-relaxed mb-4">
                Additional industry references and testimonials available to qualified investors upon request under NDA.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-gold-400 text-sm font-semibold hover:text-gold-300 transition-colors"
              >
                Request References <ChevronRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-20" />

        {/* ── News ── */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-lg bg-gold-500/15 flex items-center justify-center">
              <Newspaper size={16} className="text-gold-400" />
            </div>
            <h3 className="text-white font-bold text-xl">{m.newsTitle}</h3>
          </div>
          <div className="text-center py-10 px-8 border border-dashed border-white/20 rounded-2xl">
            <h3 className="text-white font-bold text-lg mb-3">Press & Media</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Ecource is currently in active media outreach.<br />
              For press inquiries contact:{" "}
              <a href="mailto:press@ecource.com" className="text-gold-400 hover:text-gold-300 transition-colors">
                press@ecource.com
              </a>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
