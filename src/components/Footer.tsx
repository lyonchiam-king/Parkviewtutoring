import React from "react";
import { MapPin, Phone, ExternalLink, ShieldCheck } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A2B49] text-white border-t border-[#2C426B] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-white/15">
          
          {/* Brand Info */}
          <div className="md:col-span-6">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded bg-white text-[#1A2B49] flex items-center justify-center font-serif font-bold text-sm">
                PV
              </div>
              <span className="font-serif font-bold text-lg tracking-tight text-white">
                PARK VIEW TUTORING
              </span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed max-w-sm mb-4">
              Supportive GCSE Maths and Physics tutoring in Richmond TW9, helping students build confidence and achieve significant grade improvements.
            </p>
            <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-white/10 px-3 py-1 rounded-full border border-white/15">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Richmond TW9 Local Tutor • Edexcel, AQA & OCR</span>
            </div>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-6 flex flex-col justify-between text-xs sm:text-sm text-white/80 space-y-2">
            <h4 className="font-serif font-bold text-sm text-white mb-2">
              Contact & Location
            </h4>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <a
                href="https://maps.google.com/?q=13+Tersha+St,+Richmond+TW9+2LY,+UK"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-1 text-white/90"
              >
                <span>13 Tersha St, Richmond TW9 2LY, UK</span>
                <ExternalLink className="w-3 h-3 text-white/60" />
              </a>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <a href="tel:+447930752684" className="hover:underline font-semibold text-white">
                +44 7930 752684
              </a>
            </div>

            <div className="pt-2 text-xs text-white/60">
              Hours: Mon–Fri 15:30–20:00, Sat–Sun 09:00–17:00 [TO CONFIRM]
            </div>
          </div>

        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-3">
          <p>© {new Date().getFullYear()} Park View Tutoring. All rights reserved.</p>
          <p className="text-white/50 text-[11px]">
            Richmond, London UK • GCSE Maths & Physics Specialist
          </p>
        </div>
      </div>
    </footer>
  );
};
