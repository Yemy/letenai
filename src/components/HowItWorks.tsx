"use client";

import React from "react";
import { motion } from "framer-motion";
import { LogIn, BrainCircuit, Activity, HeartHandshake, Compass, Trophy, Users } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Daily Check-in",
      desc: "Log your mood in 10 seconds via text, voice notes (Amharic, Tigrigna, English), or simple USSD inputs.",
      icon: <LogIn className="w-5 h-5 text-teal-500" />,
      color: "border-teal-500/20"
    },
    {
      num: "02",
      title: "Cognitive AI Analysis",
      desc: "Our neural network evaluates vocal frequencies, check-in velocity, and text sentiment to build an emotional baseline.",
      icon: <BrainCircuit className="w-5 h-5 text-emerald-500" />,
      color: "border-emerald-500/20"
    },
    {
      num: "03",
      title: "Burnout Risk Assessment",
      desc: "Adaptive algorithms calculate your daily stress quotient and flag risk trends before physical burnout occurs.",
      icon: <Activity className="w-5 h-5 text-rose-500" />,
      color: "border-rose-500/20"
    },
    {
      num: "04",
      title: "Micro-Interventions",
      desc: "Receive personalized behavioral science recipes: 2-minute meditations, digital detox triggers, or stretching goals.",
      icon: <Compass className="w-5 h-5 text-blue-500" />,
      color: "border-blue-500/20"
    },
    {
      num: "05",
      title: "Daily Wellness Quests",
      desc: "Complete mini-missions tailored to your mental state (e.g. '10-minute sunshine walk' or 'disconnect at 9 PM').",
      icon: <HeartHandshake className="w-5 h-5 text-indigo-500" />,
      color: "border-indigo-500/20"
    },
    {
      num: "06",
      title: "Streaks & Rewards",
      desc: "Maintain your consistency. Earn XP, rank up, and unlock group achievements with your friends or co-workers.",
      icon: <Trophy className="w-5 h-5 text-amber-500" />,
      color: "border-amber-500/20"
    },
    {
      num: "07",
      title: "Community Circles",
      desc: "Join anonymous support groups to share progress, exchange encouragement, and complete group wellness challenges.",
      icon: <Users className="w-5 h-5 text-violet-500" />,
      color: "border-violet-500/20"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 relative overflow-hidden bg-slate-50 dark:bg-brand-dark/10 transition-colors">
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-brand-emerald/5 dark:bg-brand-emerald/1 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20 flex flex-col items-center gap-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-teal">
            The Engine
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-800 dark:text-white">
            How LeTenai Works
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed">
            We guide you through a science-backed daily loop that restructures habits and flags stress before it gets overwhelming.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative border-l border-slate-200 dark:border-slate-800 pl-6 sm:pl-10 ml-4 sm:ml-12 space-y-12">
          
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: Math.min(idx * 0.1, 0.3) }}
              className="relative"
            >
              {/* Timeline dot / icon */}
              <div className="absolute -left-[45px] sm:-left-[61px] top-1.5 flex items-center justify-center">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center shadow-md text-brand-teal z-20 group-hover:border-brand-teal transition-colors">
                  {step.icon}
                </div>
                {/* Glowing light line dot */}
                <div className="absolute w-2 h-2 rounded-full bg-brand-teal animate-ping opacity-75 z-10" />
              </div>

              {/* Step Card */}
              <div className={`glass-panel p-6 sm:p-8 rounded-2xl border ${step.color} shadow-md hover:shadow-xl hover:scale-101 transition-all duration-300`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
                    Step {step.num}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
}
