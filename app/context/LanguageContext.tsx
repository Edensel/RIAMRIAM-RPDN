"use client";

import React, { createContext, useContext } from "react";

interface LanguageContextType {
  language: "en" | "sw";
  setLanguage: (lang: "en" | "sw") => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<string, Record<"en" | "sw", string>> = {
  navContact: {
    en: "Contact",
    sw: "Wasiliana"
  },
  navOperations: {
    en: "Operations",
    sw: "Shughuli"
  },
  send: {
    en: "Send",
    sw: "Tuma"
  },
  loading: {
    en: "Loading...",
    sw: "Inapakia..."
  },
  success: {
    en: "Message sent successfully!",
    sw: "Ujumbe umechukuliwa!"
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = React.useState<"en" | "sw">("en");

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
