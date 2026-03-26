"use client";

import { useState } from "react";
import { Play, Newspaper, ChevronRight, ExternalLink, Film, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

function VideoCard({
  title,
  subtitle,
  tag,
  featured = false,
}: {
  title: string;
  subtitle: string;
  tag: string;
  featured?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative group rounded-2xl overflow-hidden border transition-all duration-500 cursor-pointer ${
        featured
          ? "border-gold-500/30 bg-navy-800/80"
          : "border-white/10 bg-navy-800/50 hover:border-gold-500/20"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Thumbnail area */}
      <div className={`relative ${featured ? "h-64" : "h-48"} bg-gradient-to-br from-navy-700 to-navy-900 flex items-center justify-center overflow-hidden`}>
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-gold-500/20 via-transparent to-blue-500/10" />
          <div
            className="absolute inset-0 transition-transform duration-700"
            style={{
              backgroundImage: `radial-gradient(circle at 30% 40%, rgba(200,150,42,0.15) 0%, transparent 50%),
                                radial-gradient(circle at 70% 60%, rgba(26,140,110,0.1) 0%, transparent 50%)`,
              transform: hovered ? "scale(1.1)" : "scale(1)",
            }}
          />
          {/* Grid lines */}
          <svg className="absolute inset-0 w-full h-full" opacity="0.3">
            <defs>
              <pattern id={`grid-${title}`} width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#c8962a" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#grid-${title})`}/>
          </svg>
        </div>

        {/* Play button */}
        <div className={`relative z-10 flex flex-col items-center gap-3 transition-all duration-300 ${hovered ? "scale-110" : "scale-100"}`}>
          <div className={`rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${
            featured
              ? "w-20 h-20 bg-gold-500 shadow-gold-500/40"
              : "w-14 h-14 bg-gold-500/90 shadow-gold-500/30 group-hover:bg-gold-500"
          }`}>
            <Play size={featured ? 28 : 20} className="text-navy-900 ml-1" fill="currentColor" />
          </div>
          {featured && (
            <span className="text-white/60 text-xs font-medium tracking-widest uppercase">Watch Now</span>
          )}
        </div>

        {/* Tag */}
        <div className="absolute top-3 left-3">
          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
            featured
              ? "bg-gold-500 text-navy-900"
              : "bg-white/10 text-white/70 border border-white/10"
          }`}>
            {tag}
          </span>
        </div>

        {/* Duration indicator -->*/}
        <div className="absolute bottom-3 right-3 bg-black/60 text-white/70 text-xs px-2 py-0.5 rounded font-mono">
          2:34
        </div>
      </div>

      {/* Text */}
      <div className={`p-5 ${featured ? "p-6" : ""}`}>
        <h4 className={`font-bold text-white mb-1 leading-snug ${featured ? "text-lg" : "text-sm"}`}>{title}</h4>
        <p className={`text-white/50 leading-relaxed ${featured ? "text-sm" : "text-xs"}`}>{subtitle}</p>
      </div>
    </div>
  );
}

function NewsCard({ title, source, date, excerpt }: { title: string; source: string; date: string; excerpt: string }) {
  return (
    <div className="group flex flex-col gap-3 p-6 rounded-2xl border border-white/10 bg-navy-800/40 hover:border-gold-500/20 hover:bg-navy-800/60 transition-all duration-300 cursor-pointer">
      <div className="flex items-center justify-between">
        <span className="text-gold-400 text-xs font-bold uppercase tracking-widest">{source}</span>
        <span className="text-white/30 text-xs">{date}</span>
      </div>
      <h4 className="text-white font-bold text-sm leading-snug group-hover:text-gold-200 transition-colors">{title}</h4>
      <p className="text-white/50 text-xs leading-relaxed">{excerpt}</p>
      <div className="flex items-center gap-1 text-gold-400 text-xs font-semibold mt-auto pt-1 opacity-0 group-hover:opacity-100 transition-opacity">
        Read more <ExternalLink size={10} />
      </div>
    </div>
  );
}

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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Featured video */}
            <div className="lg:col-span-1">
              <VideoCard
                title={m.videos[0].title}
                subtitle={m.videos[0].subtitle}
                tag={m.videos[0].tag}
                featured
              />
            </div>

            {/* Side videos */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {m.videos.slice(1).map((v) => (
                <VideoCard key={v.title} title={v.title} subtitle={v.subtitle} tag={v.tag} />
              ))}
            </div>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-20" />

        {/* ── News ── */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gold-500/15 flex items-center justify-center">
                <Newspaper size={16} className="text-gold-400" />
              </div>
              <h3 className="text-white font-bold text-xl">{m.newsTitle}</h3>
            </div>
            <a href="#contact" className="hidden sm:flex items-center gap-1 text-gold-400 text-sm font-semibold hover:text-gold-300 transition-colors">
              {m.newsLink} <ChevronRight size={14} />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {m.news.map((n) => (
              <NewsCard key={n.title} title={n.title} source={n.source} date={n.date} excerpt={n.excerpt} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
