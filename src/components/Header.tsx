import React from "react";
import { Phone, MessageCircle, MapPin } from "lucide-react";

interface HeaderProps {
  onEnquireClick: () => void;
  activeSection?: string;
}

export const Header: React.FC<HeaderProps> = ({ onEnquireClick }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#F9F7F2]/95 backdrop-blur-md border-b border-[#E2DFD8] transition-all">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand logo & title */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded bg-[#1A2B49] text-white flex items-center justify-center font-serif font-bold text-lg shadow-sm group-hover:bg-[#2C426B] transition-colors">
            PV
          </div>
          <div>
            <span className="font-serif font-bold text-lg sm:text-xl tracking-tight text-[#1A1A1A] block leading-none">
              PARK VIEW TUTORING
            </span>
            <span className="text-[11px] text-[#5F6368] flex items-center gap-1 font-medium mt-0.5">
              <MapPin className="w-3 h-3 text-[#1A2B49]" /> Richmond, TW9
            </span>
          </div>
        </a>

        {/* Desktop Links & Phone */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="https://maps.google.com/?q=13+Tersha+St,+Richmond+TW9+2LY,+UK"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#5F6368] hover:text-[#1A1A1A] transition-colors"
          >
            13 Tersha St, TW9 2LY
          </a>
          <a
            href="tel:+447930752684"
            className="flex items-center gap-1.5 text-sm font-semibold text-[#1A2B49] hover:text-[#2C426B] transition-colors bg-white px-3 py-1.5 rounded-md border border-[#E2DFD8]"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>+44 7930 752684</span>
          </a>
          <button
            onClick={onEnquireClick}
            className="bg-[#1A2B49] hover:bg-[#2C426B] text-white text-xs font-semibold px-4 py-2 rounded-md transition-all active:scale-98"
          >
            Enquire About Spaces
          </button>
        </div>

        {/* Mobile Quick Action Phone Link */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="tel:+447930752684"
            className="p-2 text-[#1A2B49] border border-[#E2DFD8] bg-white rounded-md active:scale-95 transition-transform"
            aria-label="Call Charlie"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={onEnquireClick}
            className="bg-[#1A2B49] active:bg-[#2C426B] text-white text-xs font-semibold px-3 py-2 rounded-md transition-all active:scale-95"
          >
            Enquire
          </button>
        </div>
      </div>
    </header>
  );
};
