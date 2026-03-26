"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { translations, Lang, Translations } from "@/lib/translations";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    document.documentElement.dir = newLang === "he" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
  };

  useEffect(() => {
    document.documentElement.dir = "ltr";
    document.documentElement.lang = "en";
  }, []);

  const t = translations[lang];
  const isRTL = lang === "he";

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
