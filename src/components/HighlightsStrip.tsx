import React from "react";
import { GraduationCap, Calculator, MapPin } from "lucide-react";

export const HighlightsStrip: React.FC = () => {
  return (
    <div className="w-full bg-[#FFFFFF] border-b border-[#E2DFD8] shadow-xs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-[#1A2B49]">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F9F7F2] border border-[#E2DFD8]">
            <GraduationCap className="w-4 h-4 text-[#1A2B49]" />
            <span>GCSE Focus</span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F9F7F2] border border-[#E2DFD8]">
            <Calculator className="w-4 h-4 text-[#1A2B49]" />
            <span>Maths & Physics</span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F9F7F2] border border-[#E2DFD8]">
            <MapPin className="w-4 h-4 text-[#1A2B49]" />
            <span>Richmond Based</span>
          </div>
        </div>
      </div>
    </div>
  );
};
