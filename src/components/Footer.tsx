"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { resume } from "@/data/resume";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-white/10 bg-black/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center items-center gap-6 mb-4">
          <a
            href={resume.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href={resume.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href={`mailto:${resume.email}`}
            className="text-gray-500 hover:text-white transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>
        <p className="text-gray-600 text-center text-sm">© {t("name")} 2026</p>
      </div>
    </footer>
  );
}
