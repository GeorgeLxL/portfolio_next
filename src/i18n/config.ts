"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import jp from "./locales/jp.json";

export type Language = "en" | "jp";

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: en },
        jp: { translation: jp },
      },
      fallbackLng: "en",
      interpolation: { escapeValue: false },
    });
}

export default i18n;
