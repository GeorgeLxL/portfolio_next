import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";
import I18nProvider from "@/components/I18nProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Backgrounds from "@/components/Backgrounds";

export const metadata: Metadata = {
  title: "Sato Takeru — Principal Technical Support Engineer",
  description:
    "Principal Technical Support Engineer & full-stack architect — 16+ years across AWS, Azure, GCP, Kubernetes, and modern LLM infrastructure.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <I18nProvider>
          <div className="min-h-screen bg-[#0f0f0f] text-white">
            <Backgrounds />
            <div className="relative z-10">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
          <Toaster position="top-right" richColors />
        </I18nProvider>
      </body>
    </html>
  );
}
