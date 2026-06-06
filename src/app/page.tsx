"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ArrowDown, Flame, Shield, Users, Sparkles } from "lucide-react";

// Dynamically import 3D Hero Scene with SSR disabled to prevent server-side hydration issues
const ThreeDHero = dynamic(() => import("@/components/ThreeDHero"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center bg-transparent">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 rounded-full border-4 border-teal-500/10 animate-pulse-slow"></div>
        <div className="absolute inset-1 rounded-full border-4 border-emerald-500/20 border-t-emerald-500 animate-spin"></div>
      </div>
    </div>
  ),
});

// Import Section Components
import Navbar from "@/components/Navbar";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorks from "@/components/HowItWorks";
import B2BCorporate from "@/components/B2BCorporate";
import FeaturesSection from "@/components/FeaturesSection";
import CommunitySection from "@/components/CommunitySection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden pt-20">
        
        {/* Floating background gradient blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-teal/20 dark:bg-brand-teal/5 blur-3xl -z-20 animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-brand-blue/20 dark:bg-brand-blue/5 blur-3xl -z-20 animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-emerald-500/10 dark:bg-emerald-500/3 blur-3xl -z-20 animate-pulse-slow" />

        {/* 3D Canvas Background */}
        <ThreeDHero />

        {/* Hero Copy Content */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6 z-10">
          
          {/* Subtext badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/40 dark:bg-brand-dark-card/50 border border-slate-200/50 dark:border-slate-800/50 text-slate-800 dark:text-slate-200 text-xs font-black uppercase tracking-widest shadow-sm animate-pulse-slow">
            <Sparkles className="w-4 h-4 text-brand-teal" />
            Africa's Behavioral Wellness OS
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none text-slate-800 dark:text-white">
            LeTenai – <span className="bg-gradient-to-r from-brand-emerald via-brand-teal to-brand-blue bg-clip-text text-transparent">AI for Health</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-350 max-w-2xl leading-relaxed">
            Prevent burnout. Build healthy habits. Thrive together. A behavioral AI system built for offline, voice, and workspace wellness.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center mt-4 w-full sm:w-auto">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl text-base font-bold bg-gradient-to-r from-brand-emerald to-brand-teal text-white shadow-xl shadow-brand-teal/20 hover:shadow-2xl hover:shadow-brand-teal/30 hover:scale-103 hover:brightness-105 active:scale-98 transition-all duration-300 text-center glow-effect"
            >
              Start Free Wellness Journey
            </a>
            <a
              href="#corporate"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl text-base font-bold border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-brand-dark-card/50 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900/60 hover:scale-103 active:scale-98 transition-all duration-300 text-center"
            >
              Explore Corporate Wellness
            </a>
          </div>

          {/* Quick micro values indicators */}
          <div className="hidden sm:flex items-center gap-8 mt-12 text-xs font-bold text-slate-400 uppercase tracking-widest">
            <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-brand-teal" /> 100% Anonymous</span>
            <span className="flex items-center gap-1.5"><Flame className="w-4 h-4 text-rose-500 animate-pulse" /> Gamified Habits</span>
            <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-brand-blue" /> Community Circles</span>
          </div>

        </div>

        {/* Scroll down indicator */}
        <a
          href="#problem"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[10px] font-bold text-slate-400 hover:text-brand-teal transition-colors uppercase tracking-widest z-10"
        >
          Scroll to explore
          <div className="w-5 h-8 rounded-full border-2 border-slate-300 dark:border-slate-700 flex items-start justify-center p-1 mt-1">
            <div className="w-1 h-2 rounded-full bg-brand-teal animate-scroll-down" />
          </div>
        </a>

      </section>

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col">
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <B2BCorporate />
        <FeaturesSection />
        <CommunitySection />
        <AboutSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
