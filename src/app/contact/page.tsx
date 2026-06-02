"use client";

import { motion } from "motion/react";
import { Send, Linkedin, Phone, Mail, Github, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import PageShell from "@/components/PageShell";
import { resume } from "@/data/resume";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (!trimmedMessage) {
      toast.error("Please enter your message before sending.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: trimmedEmail,
          subject: subject.trim() || "Portfolio Contact Message",
          message: trimmedMessage,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to send message");
      }
      toast.success("Message sent successfully!");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Failed to send message.";
      toast.error(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactItems = [
    { icon: Mail, label: resume.email, href: `mailto:${resume.email}` },
    { icon: Phone, label: resume.phone, href: `tel:${resume.phone.replace(/\s/g, "")}` },
    { icon: Github, label: "GitHub", href: resume.github, external: true },
    { icon: Linkedin, label: "LinkedIn", href: resume.linkedin, external: true },
    { icon: MapPin, label: resume.location, href: null },
  ];

  return (
    <PageShell>
      <div className="min-h-screen pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Reach out directly or send a message below.
          </motion.p>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left column: contact info */}
            <motion.div
              className="lg:w-2/5 flex flex-col gap-3"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              {contactItems.map((item, i) => {
                const content = (
                  <>
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center shrink-0">
                      <item.icon size={18} className="text-green-400" />
                    </div>
                    <span className="text-sm text-gray-300 break-all">{item.label}</span>
                  </>
                );
                const className =
                  "flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-lg hover:border-green-500/40 hover:text-white transition-all duration-300";
                return item.href ? (
                  <a
                    key={i}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className={className}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={i} className={className}>
                    {content}
                  </div>
                );
              })}
            </motion.div>

            {/* Right column: form */}
            <motion.div
              className="lg:w-3/5"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 h-full">
                <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-gray-300 mb-2 text-sm" htmlFor="email">
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white focus:outline-none focus:border-green-500 transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2 text-sm" htmlFor="subject">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white focus:outline-none focus:border-green-500 transition-colors"
                      placeholder="Write a subject..."
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2 text-sm" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows={7}
                      className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white focus:outline-none focus:border-green-500 transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:shadow-lg hover:shadow-green-500/40 transition-all duration-300 hover:scale-[1.01] flex items-center justify-center gap-2 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send size={20} />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
