"use client";

import { motion } from "motion/react";
import { GraduationCap, Book, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import PageShell from "@/components/PageShell";
import { resume } from "@/data/resume";

export default function EducationPage() {
  const { t } = useTranslation();

  const courses = [
    "Distributed Systems",
    "Cloud Architecture (AWS / Azure / GCP)",
    "Kubernetes & Container Orchestration",
    "Vector Databases & Embeddings",
    "RAG Pipelines & LLM Engineering",
    "Domain-Driven Design",
  ];

  return (
    <PageShell>
      <div className="min-h-screen pt-28 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.p
            className="text-green-400 font-mono text-sm tracking-widest uppercase mb-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Background
          </motion.p>
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t("Education")}
          </motion.h1>

          <div className="mb-14">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-white mb-8">
              <GraduationCap className="text-green-400" size={22} />
              {t("educationAcademic")}
            </h2>

            <div className="relative">
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-green-500/20" />
              <div className="space-y-12">
                {resume.education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index, duration: 0.6 }}
                    className="relative pl-10"
                  >
                    <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-green-500 border-2 border-green-300 shadow-[0_0_8px_2px_rgba(34,197,94,0.5)]" />
                    <span className="inline-block text-xs font-mono text-green-400 bg-green-500/10 border border-green-500/20 px-2.5 py-1 rounded-full mb-3">
                      {edu.period}
                    </span>
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-green-500/40 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(34,197,94,0.2)] transition-all duration-300">
                      <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                      <p className="text-green-400 text-sm mb-3">{edu.institution}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">{edu.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="flex items-center gap-2 text-lg font-semibold text-white mb-6">
              <Book className="text-green-400" size={22} />
              {t("educationAdditionalTitle")}
            </h2>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="flex flex-wrap gap-2">
                {courses.map((course, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * index, duration: 0.3 }}
                    className="px-3 py-1.5 text-sm bg-white/5 border border-white/10 rounded-full text-gray-300 hover:border-green-500/40 hover:text-white transition-all duration-200"
                  >
                    {course}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="flex items-center gap-2 text-lg font-semibold text-white mb-6">
              <Globe className="text-green-400" size={22} />
              {t("languagesTitle")}
            </h2>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 grid sm:grid-cols-3 gap-4">
              {resume.languages.map((l) => (
                <div key={l.name} className="flex flex-col">
                  <span className="text-white font-semibold">{l.name}</span>
                  <span className="text-green-400 text-sm">{l.level}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageShell>
  );
}
