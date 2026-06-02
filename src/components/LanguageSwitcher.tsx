"use client";

import { useTranslation } from "react-i18next";
import type { Language } from "@/i18n/config";

type Size = "xs" | "lg";

export default function LanguageSwitcher({ size = "xs" }: { size?: Size }) {
  const { i18n } = useTranslation();
  const change = (lng: Language) => i18n.changeLanguage(lng);
  const textSize = size === "xs" ? "text-xs" : "text-lg";

  return (
    <div className="flex text-gray-500">
      <button
        className={`${textSize} rounded-sm px-1 ${i18n.language === "en" ? "bg-green-500 text-white" : ""}`}
        onClick={() => change("en")}
      >
        EN
      </button>
      <button
        className={`${textSize} rounded-sm px-1 ${i18n.language === "jp" ? "bg-green-500 text-white" : ""}`}
        onClick={() => change("jp")}
      >
        JP
      </button>
    </div>
  );
}
