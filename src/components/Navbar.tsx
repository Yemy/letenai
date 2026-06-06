"use client";

import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, Download, Presentation } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Dark mode check
    const root = document.documentElement;
    const isDarkTheme =
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    if (isDarkTheme) {
      root.classList.add("dark");
      setIsDark(true);
    } else {
      root.classList.remove("dark");
      setIsDark(false);
    }

    // Scroll check
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const root = document.documentElement;
    if (root.classList.contains("dark")) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: "Solution", href: "/#solution" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "B2B Wellness", href: "/#corporate" },
    { name: "Community", href: "/#community" },
    { name: "About", href: "/#about" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 glass-panel border-b shadow-lg"
          : "py-5 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
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

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-brand-teal dark:hover:text-brand-teal transition-colors"
            >
              {link.name}
            </a>
          ))}
          {/* <Link
            href="/pitchdeck"
            className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-brand-teal dark:hover:text-brand-teal transition-colors flex items-center gap-1"
          >
            <Presentation className="w-3.5 h-3.5" /> Pitch Deck
          </Link> */}
        </div>

        {/* Right side actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme Toggle */}
          {/* <button
            onClick={toggleDarkMode}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors text-slate-700 dark:text-slate-300"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button> */}

          {/* CTA */}
          <Link
            href="/app"
            className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-brand-emerald to-brand-teal text-white hover:shadow-lg hover:shadow-brand-teal/20 transition-all active:scale-98 glow-effect flex items-center gap-2"
          >
            <Download className="w-4 h-4" /> Download App
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-slate-700 dark:text-slate-300"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 py-6 px-6 glass-panel border-b flex flex-col gap-4 animate-fade-in shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-slate-700 dark:text-slate-200 hover:text-brand-teal transition-colors py-2 border-b border-slate-100 dark:border-slate-900"
            >
              {link.name}
            </a>
          ))}
          <Link
            href="/pitchdeck"
            onClick={() => setIsOpen(false)}
            className="text-base font-semibold text-slate-700 dark:text-slate-200 hover:text-brand-teal transition-colors py-2 border-b border-slate-100 dark:border-slate-900 flex items-center gap-2"
          >
            <Presentation className="w-4 h-4" /> Pitch Deck
          </Link>
          <Link
            href="/app"
            onClick={() => setIsOpen(false)}
            className="mt-2 w-full py-3 text-center font-bold text-white bg-gradient-to-r from-brand-emerald to-brand-teal rounded-xl shadow-lg shadow-brand-teal/10 flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" /> Download App
          </Link>
        </div>
      )}
    </nav>
  );
}
