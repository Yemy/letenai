"use client";

import React from "react";
import { Mail, Globe } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    product: [
      { name: "AI Wellness Coach", href: "#solution" },
      { name: "How It Works", href: "#how-it-works" },
      { name: "Offline & SMS", href: "#features" },
      { name: "Corporate Challenges", href: "#corporate" },
    ],
    company: [
      { name: "About Our Mission", href: "#about" },
      { name: "Community Support", href: "#community" },
      { name: "Contact Support", href: "#contact" },
      { name: "Careers", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "HIPAA & Data Protection", href: "#" },
      { name: "Ethical AI Code", href: "#" },
    ],
  };

  return (
    <footer className="relative bg-slate-50 dark:bg-brand-dark border-t border-slate-200 dark:border-slate-900 pt-16 pb-8 z-10 transition-colors">
      {/* Background visual details */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-teal/5 dark:bg-brand-teal/2 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-blue/5 dark:bg-brand-blue/2 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <a href="#" className="flex items-center gap-3 group self-start">
              <Image
                src="/logo.png"
                alt="LeTenai Logo"
                width={40}
                height={40}
                className="rounded-xl object-cover shadow-md shadow-brand-teal/20 transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-brand-teal to-brand-blue bg-clip-text text-transparent">
                  LeTenai
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-emerald-600 dark:text-brand-teal">
                  AI for Health
                </span>
              </div>
            </a>
            
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
              Ethiopia’s Behavioral Wellness Operating System. We leverage scientific gamification and multi-channel AI to build healthier, happier, and burnout-free communities.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 text-slate-400 dark:text-slate-500">
              <a href="#" className="hover:text-brand-teal transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="hover:text-brand-teal transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="hover:text-brand-teal transition-colors" aria-label="Github">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="hover:text-brand-teal transition-colors" aria-label="Contact">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-brand-teal transition-colors" aria-label="Website">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">
              Technology
            </h4>
            <ul className="flex flex-col gap-2.5">
              {links.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 dark:text-slate-300 hover:text-brand-teal transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">
              Community
            </h4>
            <ul className="flex flex-col gap-2.5">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 dark:text-slate-300 hover:text-brand-teal transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">
              Trust & Safety
            </h4>
            <ul className="flex flex-col gap-2.5">
              {links.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 dark:text-slate-300 hover:text-brand-teal transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 dark:border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 dark:text-slate-500">
            &copy; {currentYear} LeTenai Wellness. All rights reserved.
          </p>
          <p className="text-xs text-brand-emerald dark:text-brand-teal font-semibold tracking-wide">
            AI for Health – Building Ethiopia’s Wellness Future 🌍
          </p>
        </div>
      </div>
    </footer>
  );
}
