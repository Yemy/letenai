"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { FileText, Download, CheckCircle, Sparkles, Presentation, Shield, Users, ArrowRight } from "lucide-react";

export default function PitchDeckPage() {
  const slides = [
    {
      num: "01",
      title: "The Silent Epidemic",
      topic: "The Problem",
      points: [
        "85% of people in Ethiopia suffering from mental health issues have no access to treatment.",
        "Young professional burnout and anxiety are skyrocketing in tech hubs.",
        "Clinical services are expensive, stigmatized, and linguistically inaccessible."
      ]
    },
    {
      num: "02",
      title: "Behavioral Wellness OS",
      topic: "The Solution",
      points: [
        "Empathetic AI Coach (Tenai) providing science-backed advice.",
        "Gamified daily habits (streaks, XP) based on behavioral design.",
        "SMS and USSD support for offline compatibility on basic feature phones."
      ]
    },
    {
      num: "03",
      title: "Multi-Language Voice-First AI",
      topic: "Core Innovation",
      points: [
        "Voice logs supporting local languages (Amharic, Tigrigna, English).",
        "Predictive burnout algorithm based on vocal metrics and log latency.",
        "Aggregated, anonymous dashboard analytics for organizations (B2B)."
      ]
    },
    {
      num: "04",
      title: "Wellness-as-a-Service (WaaS)",
      topic: "Business Model",
      points: [
        "B2B SaaS subscription for corporates, universities, and NGOs.",
        "Gamified department-wide challenges (posture detours, sleep improvements).",
        "B2C premium tiers for localized personalized counseling."
      ]
    },
    {
      num: "05",
      title: "Scaling Across Ethiopia",
      topic: "Market & Roadmap",
      points: [
        "Addis Ababa pilot with 5,000+ active student circle users.",
        "Expanding to Kenya and Nigeria with Swahili and Hausa localized engines.",
        "Securing research partnerships with Ethiopian mental health coalitions."
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 px-6 relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-teal/10 dark:bg-brand-teal/3 blur-3xl -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-brand-blue/10 dark:bg-brand-blue/3 blur-3xl -z-10" />

        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center flex flex-col items-center gap-5 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-teal/10 dark:bg-brand-teal/5 border border-brand-teal/20 text-brand-emerald dark:text-brand-teal text-xs font-bold uppercase tracking-wider">
              <Presentation className="w-4 h-4" />
              Investor portal
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none text-slate-800 dark:text-white">
              LeTenai <span className="bg-gradient-to-r from-brand-teal to-brand-blue bg-clip-text text-transparent">Pitch Deck</span>
            </h1>
            
            <p className="text-slate-500 dark:text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
              Explore our vision, technological edge, and roadmap for building Ethiopia's Behavioral Wellness Operating System. Download the full presentation below.
            </p>

            <a
              href="/pitchdeck-updated.pptx"
              download
              className="mt-4 px-8 py-4 bg-gradient-to-r from-brand-emerald to-brand-teal text-white font-bold rounded-2xl hover:shadow-xl hover:shadow-brand-teal/20 hover:scale-102 transition-all flex items-center gap-3 shadow-lg active:scale-98 glow-effect"
            >
              <Download className="w-5 h-5" /> Download Full Pitch Deck (PPTX)
            </a>
          </div>

          {/* Slide Cards Summary */}
          <div className="space-y-8">
            <h2 className="text-xl font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-6 text-center">
              Key Slide Summaries
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {slides.map((slide, idx) => (
                <motion.div
                  key={slide.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="glass-panel p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/35 flex flex-col justify-between hover:border-brand-teal/30 transition-colors shadow-md group"
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                        {slide.topic}
                      </span>
                      <span className="text-2xl font-black text-brand-teal/20 group-hover:text-brand-teal transition-colors">
                        {slide.num}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-850 dark:text-white mb-4">
                      {slide.title}
                    </h3>
                    <ul className="space-y-3">
                      {slide.points.map((p, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                          <CheckCircle className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}

              {/* Download Callout Card */}
              <div className="glass-panel p-6 rounded-2xl border border-brand-teal/30 bg-gradient-to-tr from-brand-emerald/10 to-transparent flex flex-col justify-between shadow-lg">
                <div>
                  <Sparkles className="w-8 h-8 text-brand-teal mb-4 animate-pulse-slow" />
                  <h3 className="text-lg font-black text-slate-850 dark:text-white mb-2">
                    Review Offline
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                    Get the complete presentation files including financials, go-to-market strategies, and technical system architecture.
                  </p>
                </div>
                <a
                  href="/pitchdeck-updated.pptx"
                  download
                  className="w-full py-3 bg-brand-teal text-white text-center font-bold text-xs rounded-xl hover:bg-brand-emerald active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" /> Download PPTX
                </a>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
