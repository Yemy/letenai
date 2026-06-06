"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Frown, AlertCircle, EyeOff, ShieldAlert, Sparkles } from "lucide-react";

// Count-up helper component
function StatCounter({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      if (start === end) return;

      const totalMiliseconds = duration * 1000;
      const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) {
          clearInterval(timer);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="text-5xl font-black tracking-tight text-slate-800 dark:text-white">
      {count}
      {suffix}
    </span>
  );
}

export default function ProblemSection() {
  const stats = [
    {
      label: "Mental Health Treatment Gap",
      value: 85,
      suffix: "%",
      desc: "Eighty-five percent of individuals in Ethiopia suffering from psychological conditions have zero access to support.",
      icon: <EyeOff className="w-5 h-5 text-rose-500" />,
      color: "border-rose-500/20 shadow-rose-500/5"
    },
    {
      label: "Young Professionals Burned Out",
      value: 64,
      suffix: "%",
      desc: "Unprecedented rates of digital overload, stress, and anxiety in Ethiopia's emerging startup and tech hubs.",
      icon: <ShieldAlert className="w-5 h-5 text-amber-500" />,
      color: "border-amber-500/20 shadow-amber-500/5"
    },
    {
      label: "Lack of Affordable Therapy",
      value: 92,
      suffix: "%",
      desc: "Traditional clinical counseling is prohibitively expensive or socially stigmatized in local communities.",
      icon: <Frown className="w-5 h-5 text-teal-500" />,
      color: "border-teal-500/20 shadow-teal-500/5"
    }
  ];

  return (
    <section id="problem" className="relative py-24 px-6 overflow-hidden bg-slate-100/40 dark:bg-brand-dark/30 transition-colors">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-rose-500/5 dark:bg-rose-500/2 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Storytelling Content */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-100/50 dark:bg-rose-950/20 border border-rose-200/50 dark:border-rose-950/35 text-rose-600 dark:text-rose-400 self-start text-xs font-bold uppercase tracking-wider">
              <AlertCircle className="w-4 h-4" />
              The Silent Epidemic
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-slate-800 dark:text-white">
              Ethiopia is facing a <span className="bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text text-transparent">burnout and anxiety</span> crisis.
            </h2>
            
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              As the continent rapidly urbanizes and digitizes, the pressure on young minds is multiplying. Yet, structural support systems remain virtually nonexistent.
            </p>
            
            <div className="border-l-4 border-brand-teal pl-5 py-2 my-2 bg-brand-teal/5 dark:bg-brand-teal/2 rounded-r-xl">
              <p className="text-sm italic text-slate-500 dark:text-slate-400">
                “Mental health in Ethiopia has long been neglected. High cost, severe social stigma, and language barriers mean millions suffer in absolute silence.”
              </p>
              <div className="mt-2 text-xs font-semibold text-slate-600 dark:text-slate-300">— World Health Organization Digital Health Studies</div>
            </div>

            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              We cannot solve a 21st-century problem with outdated, clinical-only models. We need a behavioral operating system that meets people where they are: offline, on SMS, in their native tongue, and inside their daily workspaces.
            </p>
          </div>

          {/* Metric Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`glass-panel p-8 rounded-2xl flex flex-col justify-between border shadow-lg relative overflow-hidden group ${stat.color} ${idx === 2 ? 'md:col-span-2' : ''}`}
              >
                {/* Visual glow on card hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-slate-200/50 dark:bg-slate-800/50 flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <Sparkles className="w-4 h-4 text-slate-300 dark:text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div>
                  <div className="flex items-baseline gap-1 mb-2">
                    <StatCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <h3 className="text-base font-bold text-slate-700 dark:text-slate-200 mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
