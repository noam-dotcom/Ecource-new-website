"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

// Ordered to match translations members array: Noam, Joseph, Bogie, Doron, Dr.Tal, Avner
const TEAM_PHOTOS: Record<number, string> = {
  0: "/team/team-noam.png",
  1: "/team/team-joseph.png",
  2: "/team/team-bogie.png",
  3: "/team/team-doron.png",
  4: "/team/team-drtal.png",
  5: "/team/team-avner.png",
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
          {tm.members.map((member, index) => {
            const photo = TEAM_PHOTOS[index];
            return (
            <div
              key={member.role}
              className="bg-navy-900/60 border border-white/10 rounded-2xl p-8 hover:border-gold-500/30 transition-all hover:-translate-y-1 duration-300 group"
            >
              {photo ? (
                <div className="w-24 h-24 mb-5">
                  <Image
                    src={photo}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                <div className="w-16 h-16 rounded-2xl bg-gold-500/15 flex items-center justify-center mb-5 group-hover:bg-gold-500/25 transition-colors">
                  <span className="text-gold-400 font-black text-sm">{member.initials}</span>
                </div>
              )}
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
            );
          })}
        </div>

      </div>
    </section>
  );
}
