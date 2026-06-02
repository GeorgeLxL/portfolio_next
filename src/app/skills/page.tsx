"use client";

import { motion } from "motion/react";
import { Wrench, Code2, Server, Layout, Cloud, Database } from "lucide-react";
import { useTranslation } from "react-i18next";
import PageShell from "@/components/PageShell";
import { skillCategories, additionalSkills } from "@/data/resume";

const ICONS = [Code2, Wrench, Layout, Server, Cloud, Database];

export default function SkillsPage() {
  const { t } = useTranslation();

  const expertise = [
    "Designing & scaling production cloud platforms (AWS, Azure, GCP, Kubernetes).",
    "AI / LLM systems: RAG, vector databases, prompt engineering, re-ranking.",
    "Full-stack delivery in Python, Java, Go, TypeScript, .NET.",
    "Event-driven & distributed systems with Kafka, Redis, Socket.IO.",
    "Database performance: indexing, materialized views, Elasticsearch.",
    "Mentoring & technical leadership across engineering teams.",
  ];

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
            Expertise
          </motion.p>
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t("skillTitle")}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-10 mb-16 items-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/images/skill.jpg"
              alt="Skills"
              className="rounded-2xl w-full h-auto border border-white/10 shadow-xl"
            />
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-white mb-5">{t("skillExpertiseTitle")}</h2>
              {expertise.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {skillCategories.map((category, index) => {
              const Icon = ICONS[index % ICONS.length];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * index, duration: 0.6 }}
                  className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-green-500/40 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(34,197,94,0.2)] transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <Icon className="text-green-400" size={18} />
                    </div>
                    <h3 className="text-base font-semibold text-white">{category.title}</h3>
                  </div>

                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-gray-400">{skill.name}</span>
                          <span className="text-xs text-green-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 + skillIndex * 0.08, duration: 0.8 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 rounded-2xl p-8 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-green-500/20 rounded-lg flex items-center justify-center">
                <Wrench className="text-green-400" size={18} />
              </div>
              <h3 className="text-base font-semibold text-white">{t("skillAdditionalTitle")}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {additionalSkills.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.03 * index, duration: 0.3 }}
                  className="px-3 py-1.5 text-sm bg-white/5 border border-white/10 rounded-full text-gray-300 hover:border-green-500/40 hover:text-white transition-all duration-200"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageShell>
  );
}
