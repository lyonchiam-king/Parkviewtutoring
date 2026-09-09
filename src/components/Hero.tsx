import React from "react";
import { CheckCircle2, ShieldCheck, MapPin, ArrowRight } from "lucide-react";
import heroImage from "../assets/images/hero_study_desk_1788971753878.jpg";

interface HeroProps {
  onEnquireClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onEnquireClick }) => {
  return (
    <section id="hero" className="relative w-full bg-[#1A2B49] text-white overflow-hidden">
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0 opacity-25">
        <img
          src={heroImage}
          alt="Park View Tutoring Richmond study desk"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B49] via-[#1A2B49]/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20 flex flex-col items-start justify-center">
        {/* Verification Pill */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-medium text-white/90 mb-6">
          <MapPin className="w-3.5 h-3.5 text-emerald-400" />
          <span>Richmond TW9, London • 1-on-1 & Small Group GCSE</span>
        </div>

        {/* EXACT Headline as specified */}
        <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-[1.1] max-w-2xl mb-4">
          GCSE Maths and Physics, Explained Simply.
        </h1>

        {/* EXACT Subcopy as specified */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-white/85 max-w-xl mb-8 leading-relaxed">
          Supportive tutoring in Richmond helping students secure significant grade improvements.
        </p>

        {/* Action Button & Phone CTA */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
          <button
            onClick={onEnquireClick}
            className="inline-flex items-center justify-center gap-2 bg-white text-[#1A2B49] hover:bg-emerald-50 active:scale-98 text-base font-bold px-7 py-3.5 rounded-lg transition-all shadow-md active:bg-emerald-100 cursor-pointer"
          >
            <span>Enquire About Spaces</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href="tel:+447930752684"
            className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 bg-white/5 hover:bg-white/10 active:scale-98 text-white text-sm font-semibold px-5 py-3 rounded-lg transition-all"
          >
            <span>Call Charlie: +44 7930 752684</span>
          </a>
        </div>

        {/* Trust Badges Bar */}
        <div className="pt-6 border-t border-white/15 w-full grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-white/80">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Students report grade improvements</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Charlie explains complex subjects simply</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Based in TW9 Richmond</span>
          </div>
        </div>
      </div>
    </section>
  );
};
