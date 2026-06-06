"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Smartphone, Download, CheckCircle, ShieldAlert, Sparkles, Flame, WifiOff, PhoneCall } from "lucide-react";

export default function AppDownloadPage() {
  const steps = [
    {
      num: 1,
      title: "Download APK",
      desc: "Tap the download button below to transfer the APK file onto your Android device."
    },
    {
      num: 2,
      title: "Allow Sideloading",
      desc: "If prompted, allow your browser or file manager to install apps from 'unknown sources'."
    },
    {
      num: 3,
      title: "Install & Launch",
      desc: "Open the downloaded .apk file, hit install, and begin your wellness journey!"
    }
  ];

  const highlights = [
    {
      title: "Offline-First Syncing",
      desc: "Synchronize your habit logs even in zero-data regions using local caching systems.",
      icon: <WifiOff className="w-5 h-5 text-blue-500" />
    },
    {
      title: "Voice-First Support",
      desc: "Record wellness logs in Amharic, English, and Tigrigna. No keyboard typing required.",
      icon: <PhoneCall className="w-5 h-5 text-emerald-500" />
    },
    {
      title: "Streak Protectors",
      desc: "Receive lightweight push notifications and gamified achievements to stack positive daily habits.",
      icon: <Flame className="w-5 h-5 text-rose-500" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 px-6 relative overflow-hidden">
        {/* Decorative background gradients */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-brand-teal/10 dark:bg-brand-teal/3 blur-3xl -z-10 animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-blue/10 dark:bg-brand-blue/3 blur-3xl -z-10 animate-float-delayed" />

        <div className="max-w-5xl mx-auto">
          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-teal/10 dark:bg-brand-teal/5 border border-brand-teal/20 text-brand-emerald dark:text-brand-teal text-xs font-bold uppercase tracking-wider self-start">
                <Smartphone className="w-4 h-4 text-brand-teal" />
                Mobile Application
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none text-slate-800 dark:text-white">
                Take Wellness <span className="bg-gradient-to-r from-brand-emerald to-brand-blue bg-clip-text text-transparent">Everywhere</span>
              </h1>

              <p className="text-slate-500 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
                Download the official LeTenai Android mobile client. Log your mood, speak to your AI coach, check-in offline, and protect your habits.
              </p>

              {/* Direct APK Download Button */}
              <div className="flex flex-col sm:flex-row gap-4 items-start mt-2">
                <a
                  href="/Lenetai-mvp.apk"
                  download
                  className="px-8 py-4 bg-gradient-to-r from-brand-emerald to-brand-teal text-white font-bold rounded-2xl hover:shadow-xl hover:shadow-brand-teal/20 hover:scale-102 transition-all flex items-center gap-3 shadow-lg active:scale-98 glow-effect"
                >
                  <Download className="w-5 h-5" /> Download Android App (APK)
                </a>
              </div>

              {/* Warnings / Disclaimer details */}
              <div className="p-4 bg-amber-500/10 dark:bg-amber-500/5 border border-amber-500/20 rounded-2xl flex items-start gap-3 text-slate-650 dark:text-slate-300">
                <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm leading-relaxed">
                  <span className="font-bold">Android Sideloading Note:</span> Since we distribute offline-first software tailored directly for regional cellular providers, you may need to authorize installations from third-party sources in your browser settings.
                </div>
              </div>
            </div>

            {/* Right Instructions / Highlights Column */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              
              {/* Onboarding installation steps cards */}
              <div className="glass-panel p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/35 shadow-xl flex flex-col gap-5">
                <h3 className="text-base font-bold text-slate-800 dark:text-white uppercase tracking-wider mb-2">
                  Installation Steps
                </h3>
                
                {steps.map((s) => (
                  <div key={s.num} className="flex gap-4">
                    <div className="w-7 h-7 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center font-bold text-sm shrink-0">
                      {s.num}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-700 dark:text-slate-200">
                        {s.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* App Highlights Cards */}
              <div className="flex flex-col gap-4">
                {highlights.map((h, i) => (
                  <motion.div
                    key={h.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-2xl border border-slate-200/40 dark:border-slate-800/25 bg-slate-50/50 dark:bg-brand-dark/10"
                  >
                    <div className="p-2.5 rounded-xl bg-slate-200/50 dark:bg-slate-900/50 shrink-0">
                      {h.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-750 dark:text-slate-200">
                        {h.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                        {h.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
