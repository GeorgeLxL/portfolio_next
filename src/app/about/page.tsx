"use client";

import { motion } from "motion/react";
import { Code2, Users, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";
import PageShell from "@/components/PageShell";
import { resume } from "@/data/resume";

export default function AboutPage() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Users,
      title: "Customer & Mentor",
      description: [
        "Mentor support engineers and accelerated new-hire ramp by ~40% at Salesforce.",
        "Onboarded three junior engineers at Rakuten; all shipped production code within 4 weeks.",
        "Translate complex technical problems into clear customer outcomes.",
      ],
    },
    {
      icon: Code2,
      title: "Full-Stack Architect",
      description: [
        "Designed and shipped production telehealth, ERP, RAG search, and event-driven AI agent platforms.",
        "Deep expertise across Python, Java, Go, TypeScript, .NET.",
        "Architectures: Microservices, Event-Driven, Clean Architecture, CQRS, DDD.",
      ],
    },
    {
      icon: Zap,
      title: "AI / LLM & Cloud",
      description: [
        "RAG pipelines with vector DBs (Pinecone, FAISS), multi-strategy retrieval, re-ranking.",
        "AWS, Azure, GCP, Kubernetes — production-tested at enterprise scale.",
        "OpenAI APIs, LangChain, prompt engineering for real workflows.",
      ],
    },
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
            About
          </motion.p>
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t("aboutTitle")}
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-2xl blur-2xl" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/images/about.jpg"
                alt="Sato Takeru"
                className="relative rounded-2xl w-full h-auto border border-white/10 shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-5"
            >
              <h2 className="text-2xl font-bold text-white">{t("aboutSubTitle")}</h2>
              <p className="text-gray-400 leading-relaxed">{t("aboutDesc1")}</p>
              <p className="text-gray-400 leading-relaxed">{t("aboutDesc2")}</p>
              <p className="text-gray-400 leading-relaxed">{t("aboutDesc3")}</p>

              <div className="pt-4 border-t border-white/10">
                <h3 className="text-sm uppercase tracking-widest text-green-400 font-mono mb-3">{t("languagesTitle")}</h3>
                <div className="flex flex-wrap gap-2">
                  {resume.languages.map((l) => (
                    <span key={l.name} className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-full text-gray-300">
                      {l.name} · {l.level}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-green-500/40 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(34,197,94,0.2)] transition-all duration-300"
              >
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="text-green-400" size={20} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <ul className="space-y-2">
                  {item.description.map((desc, i) => (
                    <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-green-400 shrink-0" />
                      {desc}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
