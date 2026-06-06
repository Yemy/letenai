"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Trophy, BarChart2, Plus, Sparkles, Footprints, Moon, AppWindow, ShieldAlert } from "lucide-react";
import confetti from "canvas-confetti";

export default function B2BCorporate() {
  const [activeTab, setActiveTab] = useState("challenges");
  
  // Custom interactive state for active corporate challenges
  const [challenges, setChallenges] = useState([
    { id: 1, name: "10-Minute Walk Challenge", category: "physical", duration: "Daily", participants: 142, icon: <Footprints className="w-4 h-4 text-emerald-500" />, status: "Active" },
    { id: 2, name: "9 PM Digital Detox", category: "mental", duration: "Weekly", participants: 98, icon: <AppWindow className="w-4 h-4 text-brand-blue" />, status: "Active" },
    { id: 3, name: "Deep Sleep Improvement Loop", category: "sleep", duration: "Monthly", participants: 210, icon: <Moon className="w-4 h-4 text-indigo-500" />, status: "Active" }
  ]);

  const departmentLeaderboard = [
    { rank: 1, dept: "Engineering Lobe", score: 9240, activeCount: "42/45", change: "+12%" },
    { rank: 2, dept: "Operations Heart", score: 8790, activeCount: "31/35", change: "+8%" },
    { rank: 3, dept: "Design Synapse", score: 8120, activeCount: "19/20", change: "+4%" },
    { rank: 4, dept: "Sales & Growth Circle", score: 7850, activeCount: "25/30", change: "-2%" }
  ];

  const handleLaunchChallenge = () => {
    const categories = [
      { name: "Mindfulness Breathing 🧘", category: "mental", duration: "Daily", icon: <Sparkles className="w-4 h-4 text-teal-500" /> },
      { name: "No Slack / Teams after 7PM 📱", category: "detox", duration: "Weekly", icon: <ShieldAlert className="w-4 h-4 text-rose-500" /> },
      { name: "3 Liters Hydration Sprint 💧", category: "physical", duration: "Daily", icon: <Footprints className="w-4 h-4 text-blue-500" /> }
    ];
    
    // Choose random challenge template
    const template = categories[Math.floor(Math.random() * categories.length)];
    const newId = challenges.length + 1;
    
    setChallenges((prev) => [
      ...prev,
      {
        id: newId,
        name: template.name,
        category: template.category,
        duration: template.duration,
        participants: Math.floor(Math.random() * 50) + 20,
        icon: template.icon,
        status: "Launched"
      }
    ]);

    // Premium interactive feedback!
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 }
    });
  };

  return (
    <section id="corporate" className="py-24 px-6 relative overflow-hidden bg-slate-100/40 dark:bg-brand-dark/30 transition-colors">
      {/* Decorative details */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-emerald/5 dark:bg-brand-emerald/2 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-blue/5 dark:bg-brand-blue/2 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Block: Description Copy */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-emerald/10 dark:bg-brand-emerald/5 border border-brand-emerald/20 text-brand-emerald text-xs font-bold uppercase tracking-wider self-start">
              <Building2 className="w-4 h-4" />
              Corporate Health Solutions
            </div>

            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-slate-800 dark:text-white">
              Wellness-as-a-Service for <span className="bg-gradient-to-r from-brand-emerald to-brand-teal bg-clip-text text-transparent">Organizations</span>
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed">
              Unshackle your teams from cognitive fatigue and silent stress. LeTenai allows companies, NGOs, and universities to register members, monitor aggregated wellbeing metrics, and execute engaging team challenges.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
              <div className="flex flex-col gap-1.5 p-4 rounded-xl bg-slate-50 dark:bg-brand-dark-card border border-slate-200/50 dark:border-slate-800/35">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Challenge Formats</span>
                <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Daily, Weekly, Monthly challenges</span>
              </div>
              <div className="flex flex-col gap-1.5 p-4 rounded-xl bg-slate-50 dark:bg-brand-dark-card border border-slate-200/50 dark:border-slate-800/35">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Compliance & Trust</span>
                <span className="text-sm font-bold text-slate-700 dark:text-slate-200">100% Anonymous aggregates</span>
              </div>
            </div>

            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Run custom corporate competitions—such as 10-minute digital detox walks or structured sleep improvements—to boost engagement, build company circles, and foster organizational resilience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl font-bold bg-gradient-to-r from-brand-emerald to-brand-teal text-white hover:shadow-lg hover:shadow-brand-teal/20 transition-all text-center self-start md:self-auto"
              >
                Book Corporate Demo
              </a>
              <button
                onClick={handleLaunchChallenge}
                className="px-6 py-3 rounded-xl font-bold border border-slate-200 dark:border-slate-800 hover:border-brand-teal/40 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors flex items-center justify-center gap-2"
              >
                <Plus className="w-4 h-4" /> Simulate Challenge Launch
              </button>
            </div>
          </div>

          {/* Right Block: Interactive Admin Dashboard Preview */}
          <div className="lg:col-span-7">
            <div className="w-full glass-panel rounded-3xl p-6 border shadow-2xl relative overflow-hidden flex flex-col h-[480px]">
              
              {/* Dashboard Header Mock */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/5 flex items-center justify-center text-brand-emerald">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800 dark:text-white">LeTenai Enterprise Admin</h4>
                    <span className="text-[10px] font-semibold text-slate-400">Organization: Safaricom Ltd.</span>
                  </div>
                </div>
                {/* Mini Admin navigation tabs */}
                <div className="flex bg-slate-100/50 dark:bg-slate-900/50 rounded-lg p-1 text-[11px] font-bold">
                  <button
                    onClick={() => setActiveTab("challenges")}
                    className={`px-3 py-1.5 rounded-md transition-colors ${
                      activeTab === "challenges"
                        ? "bg-white dark:bg-slate-800 shadow text-brand-teal"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    Active Challenges
                  </button>
                  <button
                    onClick={() => setActiveTab("leaderboard")}
                    className={`px-3 py-1.5 rounded-md transition-colors ${
                      activeTab === "leaderboard"
                        ? "bg-white dark:bg-slate-800 shadow text-brand-teal"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    Circle Leaderboard
                  </button>
                </div>
              </div>

              {/* Interactive Tab contents */}
              <div className="flex-1 overflow-y-auto no-scrollbar">
                <AnimatePresence mode="wait">
                  
                  {activeTab === "challenges" && (
                    <motion.div
                      key="challenges"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-3"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[11px] font-black uppercase tracking-widest text-slate-400">
                          Active Campaigns ({challenges.length})
                        </span>
                        <span className="text-[10px] text-brand-teal font-semibold">
                          Anonymous reporting enabled
                        </span>
                      </div>
                      
                      {challenges.map((c) => (
                        <div
                          key={c.id}
                          className="flex items-center justify-between p-4 rounded-xl border border-slate-200/50 dark:border-slate-800/35 bg-slate-50/50 dark:bg-brand-dark-card hover:border-brand-teal/20 transition-all duration-300"
                        >
                          <div className="flex items-center gap-3.5">
                            <div className="w-8 h-8 rounded-lg bg-slate-200/50 dark:bg-slate-900/50 flex items-center justify-center">
                              {c.icon}
                            </div>
                            <div>
                              <h5 className="text-sm font-bold text-slate-800 dark:text-white">{c.name}</h5>
                              <span className="text-[10px] font-semibold text-slate-400 capitalize">{c.duration} challenge</span>
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{c.participants} active</span>
                            <div className="text-[9px] font-bold text-brand-teal mt-0.5 uppercase tracking-wide">
                              {c.status}
                            </div>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {activeTab === "leaderboard" && (
                    <motion.div
                      key="leaderboard"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-2.5"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[11px] font-black uppercase tracking-widest text-slate-400">
                          Team Circle Performance
                        </span>
                        <span className="text-[10px] text-slate-400 font-semibold">Sorted by aggregated XP</span>
                      </div>

                      {departmentLeaderboard.map((row) => (
                        <div
                          key={row.rank}
                          className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200/50 dark:border-slate-800/35 bg-slate-50/50 dark:bg-brand-dark-card"
                        >
                          <div className="flex items-center gap-4">
                            <span className={`text-sm font-black w-4 ${row.rank === 1 ? 'text-amber-500' : 'text-slate-400'}`}>
                              {row.rank}
                            </span>
                            <div>
                              <h5 className="text-sm font-bold text-slate-800 dark:text-white">{row.dept}</h5>
                              <span className="text-[10px] font-semibold text-slate-400">{row.activeCount} participating</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-black text-slate-700 dark:text-slate-200">{row.score} XP</div>
                            <span className={`text-[10px] font-bold ${row.change.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>
                              {row.change}
                            </span>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
