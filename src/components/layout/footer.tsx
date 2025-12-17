"use client";

import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-[#1B3C8A] via-[#F27A2C] to-[#C89B3C]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand & Contact */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-headline font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              ARK ASSURED
            </h3>
            <p className="text-sm text-slate-300 mb-6 leading-relaxed max-w-md">
              India&apos;s most trusted ecosystem for building materials and interior solutions. Your seal of authenticity, transparency, and quality.
            </p>

            {/* Incubated badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
              <span className="text-xs font-semibold text-slate-200">Incubated with T-Hub</span>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Contact Us
              </h4>
              <a href="mailto:ark.hardware.online@gmail.com" className="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors group">
                <Mail className="h-4 w-4 text-[#F27A2C] group-hover:scale-110 transition-transform" />
                <span>ark.hardware.online@gmail.com</span>
              </a>
              <a href="tel:+918688045970" className="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors group">
                <Phone className="h-4 w-4 text-[#F27A2C] group-hover:scale-110 transition-transform" />
                <span>+91 86880 45970</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <MapPin className="h-4 w-4 text-[#F27A2C]" />
                <span>Hyderabad, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#home" className="text-sm text-slate-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#how-it-works" className="text-sm text-slate-300 hover:text-white transition-colors">How it Works</a></li>
              <li><a href="#why-ark" className="text-sm text-slate-300 hover:text-white transition-colors">Why ARK Assured</a></li>
              <li><a href="#mission" className="text-sm text-slate-300 hover:text-white transition-colors">Mission</a></li>
              <li><a href="#contact" className="text-sm text-slate-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5 mb-6">
              <li><a href="#privacy" className="text-sm text-slate-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="text-sm text-slate-300 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#support" className="text-sm text-slate-300 hover:text-white transition-colors">Support</a></li>
            </ul>

            {/* Social Icons */}
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Follow Us
            </h4>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-slate-400">
              © 2025 ARK Assured. All rights reserved.
            </p>
            <p className="text-xs sm:text-sm font-semibold text-slate-300 italic">
              ARK ASSURED - The Seal of Trust
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
