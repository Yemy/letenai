"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Sparkles, Heart } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden bg-slate-100/40 dark:bg-brand-dark/30 transition-colors">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-teal/5 dark:bg-brand-teal/2 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Visual/Stylized Photo Box representing founder team */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-sm aspect-square rounded-3xl overflow-hidden glass-panel border border-brand-teal/30 p-8 shadow-2xl flex flex-col justify-between group">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-emerald/10 via-brand-teal/5 to-transparent group-hover:scale-105 transition-transform duration-500" />
              
              <div className="flex justify-between items-start z-10">
                <Quote className="w-12 h-12 text-brand-teal/30" />
                <Sparkles className="w-6 h-6 text-brand-teal animate-pulse-slow" />
              </div>
              
              <div className="z-10 flex flex-col gap-4">
                <p className="text-sm font-bold text-slate-500 dark:text-slate-400">
                  Founded in Addis Ababa, Ethiopia. Serving communities across the continent.
                </p>
                <div>
                  <h4 className="text-lg font-black text-slate-800 dark:text-white">
                    The LeTenai Team
                  </h4>
                  <span className="text-xs font-semibold text-brand-teal">
                    Mental Health & AI Engineers
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Narrative story */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-teal/10 dark:bg-brand-teal/5 border border-brand-teal/20 text-brand-emerald dark:text-brand-teal text-xs font-bold uppercase tracking-wider self-start">
              <Heart className="w-4 h-4 text-rose-500" />
              Our Mission
            </div>

            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-slate-800 dark:text-white">
              Why We Built <span className="bg-gradient-to-r from-brand-teal to-brand-blue bg-clip-text text-transparent">LeTenai</span>
            </h2>

            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed">
              <p>
                In many Ethiopian societies, mental health is a topic spoken of in whispers. Stigma is heavy, costs are high, and there is only one psychiatrist for every one million people in some countries. 
              </p>
              
              <p>
                When our team saw classmates and co-workers breaking down under the silent weight of burnout and anxiety with nowhere to turn, we realized that traditional Western clinic-only models would never scale here. 
              </p>

              <p className="font-semibold text-slate-800 dark:text-white">
                Our mission is clear: To make behavioral wellness accessible to every Ethiopian, regardless of their language, income level, or internet access.
              </p>

              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                By integrating cognitive behavioral science with gamified habit tracking, and building our models voice-first (supporting Amharic, English, and Tigrigna) and offline-first (deployable via SMS and USSD), we are building a new foundation for health across the continent.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
