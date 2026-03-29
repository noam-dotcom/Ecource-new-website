"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

// Ordered to match translations members array: Noam, Joseph, Bogie, Doron, Dr.Tal, Avner
const TEAM_PHOTOS: Record<number, string> = {
  0: "/team/team-noam.jpg",
  1: "/team/team-joseph.jpg",
  2: "/team/team-bogie.jpg",
  3: "/team/team-yoel.jpg",
  4: "/team/team-drtal.jpg",
  5: "/team/team-yigal.jpg",
};

export default function Team() {
  const { t } = useLanguage();
  const tm = t.team;

  return (
    <section id="team" className="py-28 px-6 bg-navy-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-3">
            {tm.label}
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            {tm.headline1}
            <br />
            <span className="gold-gradient">{tm.headline2}</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">{tm.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tm.members.map((member, idx) => (
            <div
              key={member.role}
              className="bg-navy-900/60 border border-white/10 rounded-2xl p-8 hover:border-gold-500/30 transition-all hover:-translate-y-1 duration-300 group"
            >
              <div className="w-20 h-20 rounded-2xl overflow-hidden mb-5 bg-gold-500/15">
                {TEAM_PHOTOS[idx] ? (
                  <Image
                    src={TEAM_PHOTOS[idx]}
                    alt={member.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gold-400 font-black text-sm">{member.initials}</span>
                  </div>
                )}
              </div>
              <h3 className="text-white font-bold text-lg mb-0.5">{member.name}</h3>
              <p className="text-gold-400 text-sm font-medium mb-4">{member.role}</p>
              <p className="text-white/55 text-sm leading-relaxed">
                {member.bio.includes("Former Israel Defense Minister") ? (
                  <>
                    <strong className="text-white">Former Israel Defense Minister and IDF Commander in Chief</strong>
                    {member.bio.replace("Former Israel Defense Minister and IDF Commander in Chief", "")}
                  </>
                ) : member.bio}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
