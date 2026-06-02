"use client";

import { motion } from "motion/react";
import { Award } from "lucide-react";
import { useTranslation } from "react-i18next";
import PageShell from "@/components/PageShell";

const certifications = [
  { name: "Software Engineer", issuer: "HackerRank", image: "/assets/images/certifications/1.png" },
  { name: "Node.js (Intermediate)", issuer: "HackerRank", image: "/assets/images/certifications/2.png" },
  { name: "React (Basic)", issuer: "HackerRank", image: "/assets/images/certifications/3.png" },
  { name: "JavaScript (Intermediate)", issuer: "HackerRank", image: "/assets/images/certifications/4.png" },
  { name: "Rest API (Intermediate)", issuer: "HackerRank", image: "/assets/images/certifications/5.png" },
  { name: "Problem Solving (Intermediate)", issuer: "HackerRank", image: "/assets/images/certifications/6.png" },
];

export default function CertificationsPage() {
  const { t } = useTranslation();
  return (
    <PageShell>
      <div className="min-h-screen pt-28 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.p
            className="text-green-400 font-mono text-sm tracking-widest uppercase mb-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Credentials
          </motion.p>
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t("certTitle")}
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="bg-white/5 rounded-2xl border border-white/10 hover:border-green-500/40 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(34,197,94,0.2)] transition-all duration-300 overflow-hidden"
              >
                <div className="h-56 overflow-hidden bg-white/5 border-b border-white/10 flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={cert.image} alt={cert.name} className="max-h-full max-w-full object-contain" />
                </div>
                <div className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center shrink-0">
                      <Award className="text-green-400" size={16} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-bold text-white leading-snug">{cert.name}</h3>
                      <p className="text-green-400 text-xs mt-0.5">{cert.issuer}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
