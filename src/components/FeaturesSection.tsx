"use client";

import React from "react";
import { MessageSquare, ShieldAlert, Flame, WifiOff, PhoneCall, MessageCircle, Users, CheckSquare, Sparkles } from "lucide-react";

export default function FeaturesSection() {
  const featureList = [
    {
      title: "AI Wellness Coach",
      desc: "An empathetic conversational partner providing evidence-based cognitive strategies adapted to African settings.",
      icon: <MessageSquare className="w-6 h-6 text-teal-500" />
    },
    {
      title: "Burnout Prediction",
      desc: "Aggregates check-in response delays, vocabulary metrics, and active hours to forecast burnout risk.",
      icon: <ShieldAlert className="w-6 h-6 text-amber-500" />
    },
    {
      title: "Gamified Habits",
      desc: "Build sustainable mental routines using Duolingo-like XP loops, levels, streaks, and community quests.",
      icon: <Flame className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Offline Access",
      desc: "Our platform works completely offline via simple USSD dialers (*895#) for maximum accessibility.",
      icon: <WifiOff className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Voice AI (Local Languages)",
      desc: "Engage with Tenai in Amharic, English, or Tigrigna using voice notes. Accessibility for every reading level.",
      icon: <PhoneCall className="w-6 h-6 text-emerald-500" />
    },
    {
      title: "SMS Support",
      desc: "Receive daily wellness micro-tips, reminders, and check-ins directly on any basic feature phone via SMS.",
      icon: <MessageCircle className="w-6 h-6 text-indigo-500" />
    },
    {
      title: "Community Circles",
      desc: "Connect anonymously with students, entrepreneurs, or co-workers inside curated, supportive groups.",
      icon: <Users className="w-6 h-6 text-violet-500" />
    },
    {
      title: "Daily Challenges System",
      desc: "Participate in organizational or community challenges including digital detoxes and posture sprints.",
      icon: <CheckSquare className="w-6 h-6 text-pink-500" />
    }
  ];

  return (
    <section id="features" className="py-24 px-6 relative overflow-hidden transition-colors">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-teal/5 dark:bg-brand-teal/2 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-teal">
            The Checklist
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-800 dark:text-white">
            Built for Real-World Access
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed">
            Mental health services shouldn't require high-speed internet or expensive smartphones. LeTenai features a fully hybrid delivery model.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureList.map((f, idx) => (
            <div
              key={f.title}
              className="glass-panel p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/35 flex flex-col justify-between hover:border-brand-teal/40 dark:hover:border-brand-teal/30 hover:scale-102 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-200/50 dark:bg-slate-900/50 flex items-center justify-center self-start group-hover:scale-105 transition-transform duration-300">
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-1.5">
                    {f.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-1 text-[11px] font-bold text-brand-teal opacity-0 group-hover:opacity-100 transition-opacity mt-4">
                <Sparkles className="w-3.5 h-3.5" /> Inclusive feature
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
