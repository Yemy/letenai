"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: "", email: "", org: "", msg: "" });
  const [submitted, setSubmitted] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubbed, setNewsletterSubbed] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.msg) return;

    // Simulate database submit
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    setNewsletterSubbed(true);
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden transition-colors">
      {/* Background soft glow */}
      <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-brand-blue/5 dark:bg-brand-blue/1 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
          
          {/* Left Block: Contact Details & Newsletter */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-teal block mb-3">
                Get In Touch
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-slate-800 dark:text-white mb-6">
                Let’s build a <span className="bg-gradient-to-r from-brand-teal to-brand-blue bg-clip-text text-transparent">healthier</span> future.
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed mb-8">
                Questions about our developer API, corporate challenge integrations, or local community support circles? Drop us a line!
              </p>

              {/* Direct Info list */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-brand-teal">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-xs text-slate-400 uppercase tracking-widest">Email Us</div>
                    <span>hello@letenai.com</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-brand-teal">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-xs text-slate-400 uppercase tracking-widest">Call Us</div>
                    <span>+251 911 000 000</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-brand-teal">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-xs text-slate-400 uppercase tracking-widest">Location</div>
                    <span>Addis Ababa, Ethiopia</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-brand-dark-card border border-slate-200/50 dark:border-slate-800/35">
              <h4 className="text-sm font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-brand-teal" />
                Subscribe to our newsletter
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
                Stay updated on mental health research, product releases, and corporate wellness guidelines in Ethiopia.
              </p>
              
              <AnimatePresence mode="wait">
                {!newsletterSubbed ? (
                  <motion.form
                    key="newsletter-form"
                    onSubmit={handleNewsletterSubmit}
                    className="flex gap-2"
                  >
                    <input
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="flex-1 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:border-brand-teal text-xs"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-brand-teal hover:bg-brand-emerald rounded-xl text-white font-semibold text-xs active:scale-95 transition-all"
                    >
                      Subscribe
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="newsletter-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-2 text-xs font-bold text-brand-emerald"
                  >
                    <CheckCircle className="w-4 h-4" /> Subscribed successfully! Thank you.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Block: Message Contact Form */}
          <div className="lg:col-span-7 flex items-center">
            <div className="w-full glass-panel rounded-3xl p-6 sm:p-8 border shadow-2xl relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleFormSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          className="px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:border-brand-teal text-sm"
                          placeholder="e.g. Almaz Kebede"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          className="px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:border-brand-teal text-sm"
                          placeholder="e.g. almaz@safaricom.et"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Organization (Optional)</label>
                      <input
                        type="text"
                        value={formState.org}
                        onChange={(e) => setFormState({ ...formState, org: e.target.value })}
                        className="px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:border-brand-teal text-sm"
                        placeholder="e.g. Safaricom Ltd., Addis Ababa University"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Your Message *</label>
                      <textarea
                        required
                        rows={4}
                        value={formState.msg}
                        onChange={(e) => setFormState({ ...formState, msg: e.target.value })}
                        className="px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:border-brand-teal text-sm"
                        placeholder="Tell us how we can help your team or community..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-gradient-to-r from-brand-emerald to-brand-teal hover:shadow-lg hover:shadow-brand-teal/20 text-white font-bold rounded-xl active:scale-98 transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" /> Send Message
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 flex flex-col items-center justify-center text-center gap-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-brand-emerald/10 flex items-center justify-center border border-brand-emerald text-brand-emerald">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-850 dark:text-white">
                      Message Sent! 🕊️
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed">
                      Thank you for reaching out, {formState.name}! A LeTenai health specialist will contact you at {formState.email} within 24 hours.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
