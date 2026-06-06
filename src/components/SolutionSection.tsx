"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Flame, BarChart2, ShieldAlert, WifiOff, Smartphone, Heart, Sparkles, Send } from "lucide-react";

export default function SolutionSection() {
  const [activeTab, setActiveTab] = useState("coach");
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState([
    { sender: "coach", text: "Selam! I am Tenai, your wellness companion. How are you feeling today? (ደህና ነህ? / ደህና ነሽ?)" },
  ]);

  const chatbotOptions = [
    { label: "Feeling exhausted 🥱", reply: "I hear you. Burnout is real. Let's do a 2-minute box breathing exercise to reset your nervous system. Ready?" },
    { label: "Check stress level 📊", reply: "Scanning your behavioral patterns... Your current cognitive load index is 7.2. You've been online for 5 hours without a break. I recommend a 10-minute digital detox walk." },
    { label: "Language: Amharic 🇪🇹", reply: "በደስታ! ጤና ይስጥልኝ! ዛሬ ስሜትዎ እንዴት ነው? የስነ-ልቦና ጤንነትዎን ለመጠበቅ እኔን ማማከር ይችላሉ።" }
  ];

  const handleOptionClick = (optionText: string, replyText: string) => {
    setChatMessages((prev) => [
      ...prev,
      { sender: "user", text: optionText },
      { sender: "coach", text: replyText }
    ]);
  };

  const handleCustomSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userText = chatInput;
    setChatMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setChatInput("");

    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          sender: "coach",
          text: "I appreciate you sharing that with me. I am compiling this check-in to analyze your weekly energy levels. Let's keep your streak active!"
        }
      ]);
    }, 1000);
  };

  const features = [
    {
      id: "coach",
      title: "AI Wellness Coach",
      subtitle: "Conversational & Empathetic",
      desc: "Chat with Tenai via voice or text. Offers real-time cognitive behavioral suggestions adapted to local contexts.",
      icon: <MessageSquare className="w-5 h-5 text-teal-500" />,
      color: "from-teal-500/20 to-teal-500/5"
    },
    {
      id: "burnout",
      title: "Burnout Prediction",
      subtitle: "Behavioral Analytics",
      desc: "Monitors screen activity, language tone, sleep estimates, and check-in speeds to flag stress spikes before you crash.",
      icon: <ShieldAlert className="w-5 h-5 text-amber-500" />,
      color: "from-amber-500/20 to-amber-500/5"
    },
    {
      id: "habits",
      title: "Gamified Streaks",
      subtitle: "Habit Stacking",
      desc: "Earn XP, complete daily wellness quests, and protect your streak. A Duolingo-style approach to neuroplasticity.",
      icon: <Flame className="w-5 h-5 text-rose-500" />,
      color: "from-rose-500/20 to-rose-500/5"
    },
    {
      id: "accessibility",
      title: "Offline & SMS First",
      subtitle: "Inclusive Infrastructure",
      desc: "No internet? No smartphone? Use our dial-in SMS and USD service to access core wellness logs and support systems.",
      icon: <WifiOff className="w-5 h-5 text-blue-500" />,
      color: "from-blue-500/20 to-blue-500/5"
    }
  ];

  return (
    <section id="solution" className="py-24 px-6 relative overflow-hidden transition-colors">
      {/* Background soft glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/5 dark:bg-brand-teal/2 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/5 dark:bg-brand-blue/2 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-teal/10 dark:bg-brand-teal/5 border border-brand-teal/20 text-brand-emerald dark:text-brand-teal text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 animate-pulse-slow" />
            Introducing LeTenai
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-slate-800 dark:text-white">
            Africa’s Behavioral Wellness <span className="bg-gradient-to-r from-brand-emerald to-brand-blue bg-clip-text text-transparent">Operating System</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg leading-relaxed">
            An intelligent, accessible framework combining clinical neuroscience with game mechanics to build emotional resilience and lasting health habits.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left: Features selector list */}
          <div className="lg:col-span-5 flex flex-col gap-4 justify-center">
            {features.map((feat) => (
              <button
                key={feat.id}
                onClick={() => setActiveTab(feat.id)}
                className={`text-left p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                  activeTab === feat.id
                    ? "glass-panel border-brand-teal/40 dark:border-brand-teal/30 shadow-lg scale-102"
                    : "bg-slate-50/50 dark:bg-brand-dark/10 border-transparent hover:bg-slate-100/50 dark:hover:bg-brand-dark/20"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-tr ${feat.color} flex items-center justify-center`}>
                    {feat.icon}
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                      {feat.subtitle}
                    </span>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white mt-0.5">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Live Interactive Mockups */}
          <div className="lg:col-span-7 flex items-center justify-center">
            <div className="w-full max-w-lg glass-panel rounded-3xl p-6 border shadow-2xl relative overflow-hidden flex flex-col h-[520px]">
              
              {/* Top simulation bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Live Interactive Mockup
                </div>
              </div>

              {/* Dynamic Interactive Panel Contents */}
              <div className="flex-1 overflow-hidden flex flex-col">
                <AnimatePresence mode="wait">
                  
                  {/* Tab 1: AI Coach Simulator */}
                  {activeTab === "coach" && (
                    <motion.div
                      key="coach"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="flex-1 flex flex-col h-full justify-between"
                    >
                      {/* Chat Messages */}
                      <div className="flex-1 overflow-y-auto no-scrollbar space-y-3 p-2 text-sm max-h-[300px]">
                        {chatMessages.map((msg, i) => (
                          <div
                            key={i}
                            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                          >
                            <div
                              className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                                msg.sender === "user"
                                  ? "bg-brand-teal text-white rounded-br-none"
                                  : "bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 rounded-bl-none border border-slate-200/50 dark:border-slate-800/30"
                              }`}
                            >
                              {msg.text}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Quick Options / Input */}
                      <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                        {/* Quick Pills */}
                        <div className="flex flex-wrap gap-2 mb-3">
                          {chatbotOptions.map((opt) => (
                            <button
                              key={opt.label}
                              onClick={() => handleOptionClick(opt.label, opt.reply)}
                              className="text-xs font-semibold px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 hover:border-brand-teal/50 text-slate-600 dark:text-slate-300 hover:text-brand-teal transition-all"
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>

                        {/* Text form input */}
                        <form onSubmit={handleCustomSend} className="flex gap-2">
                          <input
                            type="text"
                            value={chatInput}
                            onChange={(e) => setChatInput(e.target.value)}
                            placeholder="Type a message..."
                            className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:border-brand-teal text-sm"
                          />
                          <button
                            type="submit"
                            className="p-2.5 bg-brand-teal rounded-xl text-white hover:bg-brand-emerald transition-colors active:scale-95 flex items-center justify-center"
                          >
                            <Send className="w-4 h-4" />
                          </button>
                        </form>
                      </div>
                    </motion.div>
                  )}

                  {/* Tab 2: Burnout prediction visualization */}
                  {activeTab === "burnout" && (
                    <motion.div
                      key="burnout"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="flex-1 flex flex-col justify-between"
                    >
                      <div className="p-4 bg-red-500/10 dark:bg-red-500/5 border border-red-500/20 rounded-2xl flex items-center gap-3 text-red-600 dark:text-red-400 mb-4">
                        <ShieldAlert className="w-5 h-5 animate-bounce" />
                        <div className="text-xs">
                          <span className="font-bold">Burnout Risk Alert:</span> AI detected continuous work patterns of 7.2 hours. Recommendation: 15min break.
                        </div>
                      </div>

                      {/* Bar graph mock */}
                      <div className="flex-1 flex flex-col justify-end p-2 bg-slate-100/50 dark:bg-slate-900/50 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 h-[220px]">
                        <div className="flex items-end justify-between h-[150px] px-6">
                          {[
                            { day: "Mon", val: 30, color: "bg-brand-teal" },
                            { day: "Tue", val: 45, color: "bg-brand-teal" },
                            { day: "Wed", val: 80, color: "bg-red-500 animate-pulse" },
                            { day: "Thu", val: 60, color: "bg-amber-500" },
                            { day: "Fri", val: 35, color: "bg-brand-teal" },
                            { day: "Sat", val: 20, color: "bg-brand-teal" },
                            { day: "Sun", val: 15, color: "bg-brand-teal" }
                          ].map((bar) => (
                            <div key={bar.day} className="flex flex-col items-center gap-2 w-8">
                              <span className="text-[10px] font-bold text-slate-400">{bar.val}%</span>
                              <div
                                style={{ height: `${bar.val}px` }}
                                className={`w-3.5 rounded-t-md transition-all duration-500 ${bar.color}`}
                              />
                              <span className="text-[10px] font-semibold text-slate-500">{bar.day}</span>
                            </div>
                          ))}
                        </div>
                        <div className="text-center py-2 text-[10px] text-slate-400 font-bold border-t border-slate-200/40 dark:border-slate-800/40 uppercase tracking-widest mt-4">
                          Cognitive Load Index (CLI) weekly tracking
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Tab 3: Gamified streaks */}
                  {activeTab === "habits" && (
                    <motion.div
                      key="habits"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="flex-1 flex flex-col justify-center items-center gap-6"
                    >
                      <div className="relative">
                        <div className="w-24 h-24 rounded-full bg-rose-500/10 flex items-center justify-center border-2 border-rose-500 animate-pulse">
                          <Flame className="w-12 h-12 text-rose-500" />
                        </div>
                        <span className="absolute -top-1 -right-1 bg-gradient-to-r from-rose-500 to-amber-500 text-white text-xs font-black px-2.5 py-1 rounded-full border-2 border-white dark:border-slate-900">
                          XP +250
                        </span>
                      </div>

                      <div className="text-center flex flex-col gap-2">
                        <h4 className="text-2xl font-black text-slate-800 dark:text-white">
                          7-Day Wellness Streak! 🔥
                        </h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed">
                          Your habit stacking loop is active. Keep complete check-ins to unlock your next levels!
                        </p>
                      </div>

                      {/* XP Bar */}
                      <div className="w-full max-w-xs bg-slate-200 dark:bg-slate-800 h-3.5 rounded-full overflow-hidden border border-slate-300 dark:border-slate-700">
                        <div className="bg-gradient-to-r from-rose-500 to-amber-500 h-full w-[70%]" />
                      </div>
                      <div className="text-xs font-bold text-slate-400">
                        Level 4 Adaptive Mindset — 700 / 1000 XP
                      </div>
                    </motion.div>
                  )}

                  {/* Tab 4: Offline and SMS */}
                  {activeTab === "accessibility" && (
                    <motion.div
                      key="accessibility"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="flex-1 flex flex-col justify-between"
                    >
                      <div className="p-4 bg-blue-500/10 dark:bg-blue-500/5 border border-blue-500/20 rounded-2xl flex items-center gap-3 text-blue-600 dark:text-blue-400 mb-4">
                        <Smartphone className="w-5 h-5" />
                        <div className="text-xs">
                          <span className="font-bold">USSD / SMS Offline Access:</span> Run health habit logs without cellular data. Type <span className="font-bold underline">*895#</span> on any basic phone.
                        </div>
                      </div>

                      {/* Interactive basic phone simulation */}
                      <div className="flex-1 p-6 bg-slate-900 text-green-400 font-mono rounded-2xl border border-slate-800 h-[220px] flex flex-col justify-between">
                        <div>
                          <div>LeTenai Offline OS v1.2</div>
                          <div className="text-slate-400">----------------------</div>
                          <div>1. Record Daily Check-in</div>
                          <div>2. Log Anxiety / Stress</div>
                          <div>3. Request Peer Call Support</div>
                          <div>4. Check Wellness Challenge XP</div>
                          <div className="text-slate-400">----------------------</div>
                        </div>
                        <div className="flex justify-between items-center text-xs pt-4 border-t border-slate-800">
                          <span>Dial: *895#</span>
                          <span className="animate-pulse">Enter option [ ]</span>
                        </div>
                      </div>
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
