"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, MessagesSquare, Heart, ShieldAlert, Award, MessageSquare, Flame } from "lucide-react";

export default function CommunitySection() {
  const circles = [
    {
      id: "entrepreneurs",
      name: "Founder Resilience Hub",
      desc: "A safe space for startup founders and business owners battling isolation, venture stress, and executive burnout.",
      members: 142,
      activeChallenge: "Sunday Digital Detox Sprint",
      avgStreak: "8 days",
      posts: [
        { id: 1, user: "Anonymous Lion", text: "Finally hit my 7-day breathing streak. Pitching to investors tomorrow, but for the first time, I actually feel calm and prepared.", time: "2h ago", likes: 24 },
        { id: 2, user: "FoundersMind", text: "Had a severe anxiety spike today after code crashed. Took Tenai's advice to step outside for 10 minutes. It works, folks. Resetting.", time: "5h ago", likes: 18 }
      ]
    },
    {
      id: "students",
      name: "Campus Calm Circle",
      desc: "For university students managing exam stress, workload pressure, and academic anxiety.",
      members: 310,
      activeChallenge: "Midterm Study-Pause Challenge",
      avgStreak: "12 days",
      posts: [
        { id: 1, user: "GradStudent99", text: "Highly recommend the 10-minute focus walk challenge before exam prep. Cleared my brain fog immediately.", time: "1h ago", likes: 35 },
        { id: 2, user: "EthiopianScholar", text: "Logging my mood via USSD was so helpful today during the campus power outage. Got my daily mission done!", time: "4h ago", likes: 29 }
      ]
    },
    {
      id: "employees",
      name: "Corporate Synapse",
      desc: "For corporate workers, consultants, and engineers balancing remote work fatigue and heavy deadlines.",
      members: 185,
      activeChallenge: "No-Email Lunch Break Week",
      avgStreak: "6 days",
      posts: [
        { id: 1, user: "DevSynapse", text: "Declined a non-urgent meeting at 6:30 PM today to protect my evening wellness streak. Small wins matter.", time: "30m ago", likes: 12 },
        { id: 2, user: "MarketingMind", text: "Our department hit #1 on the enterprise leaderboard today! Go team! 🚀 +200 XP", time: "3h ago", likes: 27 }
      ]
    }
  ];

  const [activeCircle, setActiveCircle] = useState(circles[0]);

  return (
    <section id="community" className="py-24 px-6 relative overflow-hidden bg-slate-50 dark:bg-brand-dark/10 transition-colors">
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-brand-teal/5 dark:bg-brand-teal/1 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-teal">
            The Community
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-800 dark:text-white">
            Anonymous Support Circles
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed">
            Connect anonymously with peers who understand your specific context. Exchange daily check-ins, streaks, and validation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left selector column */}
          <div className="lg:col-span-5 flex flex-col gap-4 justify-center">
            {circles.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCircle(c)}
                className={`text-left p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                  activeCircle.id === c.id
                    ? "glass-panel border-brand-teal/40 dark:border-brand-teal/30 shadow-lg scale-102"
                    : "bg-slate-50/50 dark:bg-brand-dark/10 border-transparent hover:bg-slate-100/50 dark:hover:bg-brand-dark/20"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-tr from-brand-emerald/20 to-brand-teal/5 text-brand-teal flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                      {c.name}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                      {c.desc}
                    </p>
                    <div className="flex gap-4 mt-4 text-xs font-semibold text-slate-400">
                      <span>👤 {c.members} members</span>
                      <span className="flex items-center gap-1 text-rose-500"><Flame className="w-3.5 h-3.5" /> Avg Streak: {c.avgStreak}</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right Feed Mockup */}
          <div className="lg:col-span-7 flex items-center justify-center">
            <div className="w-full max-w-lg glass-panel rounded-3xl p-6 border shadow-2xl relative overflow-hidden flex flex-col h-[450px]">
              
              {/* Feed Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-6">
                <div>
                  <h4 className="text-sm font-bold text-slate-800 dark:text-white flex items-center gap-1.5">
                    <MessagesSquare className="w-4 h-4 text-brand-teal" />
                    {activeCircle.name} Feed
                  </h4>
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                    Anonymous Peer Encouragement
                  </span>
                </div>
                <div className="text-xs bg-brand-emerald/10 text-brand-emerald font-bold px-3 py-1 rounded-full">
                  Challenge Active
                </div>
              </div>

              {/* Feed Content */}
              <div className="flex-1 overflow-y-auto no-scrollbar space-y-4">
                {/* Active challenge box */}
                <div className="p-4 rounded-xl bg-brand-teal/10 dark:bg-brand-teal/5 border border-brand-teal/20 mb-4">
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 block mb-1">
                    Current Group Challenge
                  </span>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
                      🎯 {activeCircle.activeChallenge}
                    </span>
                    <span className="text-xs text-brand-teal font-black">
                      +150 XP
                    </span>
                  </div>
                </div>

                {/* Posts */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCircle.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    {activeCircle.posts.map((post) => (
                      <div
                        key={post.id}
                        className="p-4 rounded-xl border border-slate-200/50 dark:border-slate-800/35 bg-slate-50/50 dark:bg-brand-dark-card flex flex-col gap-3"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                            🛡️ {post.user}
                          </span>
                          <span className="text-[10px] text-slate-400 font-medium">{post.time}</span>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {post.text}
                        </p>
                        <div className="flex items-center justify-between border-t border-slate-200/30 dark:border-slate-800/30 pt-3 text-xs text-slate-400 font-semibold">
                          <button className="flex items-center gap-1.5 hover:text-rose-500 transition-colors">
                            <Heart className="w-3.5 h-3.5 text-rose-500" /> {post.likes} loves
                          </button>
                          <span className="flex items-center gap-1">
                            <MessageSquare className="w-3.5 h-3.5" /> Reply anonymously
                          </span>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
