import React from "react";
import { MessageCircle, Check, Sparkles, Send } from "lucide-react";
import { SubjectSelection, YearGroupSelection } from "../types";

interface EnquiryBuilderProps {
  subject: SubjectSelection;
  yearGroup: YearGroupSelection;
  onSubjectChange: (subj: SubjectSelection) => void;
  onYearGroupChange: (yr: YearGroupSelection) => void;
  onApplyToForm: () => void;
}

export const EnquiryBuilder: React.FC<EnquiryBuilderProps> = ({
  subject,
  yearGroup,
  onSubjectChange,
  onYearGroupChange,
  onApplyToForm,
}) => {
  // Construct pre-filled WhatsApp message string
  const waPhone = "447930752684";
  const waMessage = `Hello Charlie, I would like to enquire about GCSE ${subject} tutoring spaces for a Year ${yearGroup} student at Park View Tutoring in Richmond.`;
  const waUrl = `https://wa.me/${waPhone}?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#E2DFD8] shadow-xs w-full mb-8">
      
      {/* Header */}
      <div className="flex items-center gap-2 mb-2">
        <div className="w-7 h-7 rounded-full bg-[#1A2B49]/10 text-[#1A2B49] flex items-center justify-center font-bold text-xs">
          <Sparkles className="w-4 h-4 text-[#1A2B49]" />
        </div>
        <h3 className="font-serif font-bold text-xl text-[#1A1A1A]">
          Quick Enquiry Builder
        </h3>
      </div>
      <p className="font-sans text-xs sm:text-sm text-[#5F6368] mb-6">
        Select your subject and year group with a tap to instantly build a pre-filled enquiry for Charlie.
      </p>

      {/* Step 1: Select Subject */}
      <div className="mb-6">
        <label className="block text-xs font-bold uppercase tracking-wider text-[#1A2B49] mb-2.5">
          Step 1: Select Subject Needed
        </label>
        <div className="grid grid-cols-3 gap-2.5">
          {(["Maths", "Physics", "Both"] as SubjectSelection[]).map((subj) => {
            const isSelected = subject === subj;
            return (
              <button
                key={subj}
                type="button"
                onClick={() => onSubjectChange(subj)}
                className={`py-3 px-3 rounded-lg border text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer min-h-[48px] ${
                  isSelected
                    ? "bg-[#1A2B49] text-white border-[#1A2B49] shadow-xs"
                    : "bg-[#F9F7F2] text-[#1A1A1A] border-[#E2DFD8] hover:border-[#1A2B49]"
                }`}
              >
                {isSelected && <Check className="w-4 h-4 text-emerald-400 shrink-0" />}
                <span>{subj}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 2: Select Year Group */}
      <div className="mb-6">
        <label className="block text-xs font-bold uppercase tracking-wider text-[#1A2B49] mb-2.5">
          Step 2: Select Student Year Group
        </label>
        <div className="grid grid-cols-2 gap-2.5">
          {(["10", "11"] as YearGroupSelection[]).map((yr) => {
            const isSelected = yearGroup === yr;
            return (
              <button
                key={yr}
                type="button"
                onClick={() => onYearGroupChange(yr)}
                className={`py-3 px-4 rounded-lg border text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer min-h-[48px] ${
                  isSelected
                    ? "bg-[#1A2B49] text-white border-[#1A2B49] shadow-xs"
                    : "bg-[#F9F7F2] text-[#1A1A1A] border-[#E2DFD8] hover:border-[#1A2B49]"
                }`}
              >
                {isSelected && <Check className="w-4 h-4 text-emerald-400 shrink-0" />}
                <span>Year {yr} GCSE</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Live Selection Summary Box */}
      <div className="bg-[#F9F7F2] p-4 rounded-xl border border-[#E2DFD8] mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
        <div>
          <span className="text-[#5F6368] block">Current Selection:</span>
          <span className="font-serif font-bold text-[#1A2B49] text-base">
            GCSE {subject} • Year {yearGroup}
          </span>
        </div>
        <div className="inline-flex items-center gap-1.5 text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-md text-xs font-medium self-start sm:self-auto">
          <Check className="w-3.5 h-3.5 text-emerald-700" />
          <span>Spaces Available in TW9</span>
        </div>
      </div>

      {/* Action Buttons: Pre-filled WhatsApp & Apply to Form */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#20bd5a] active:scale-98 text-white font-bold py-3.5 px-4 rounded-lg text-xs sm:text-sm transition-all flex items-center justify-center gap-2 text-center shadow-xs"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>Send via WhatsApp to Charlie</span>
        </a>

        <button
          type="button"
          onClick={onApplyToForm}
          className="bg-[#1A2B49] hover:bg-[#2C426B] active:scale-98 text-white font-bold py-3.5 px-4 rounded-lg text-xs sm:text-sm transition-all flex items-center justify-center gap-2 text-center shadow-xs cursor-pointer"
        >
          <Send className="w-4 h-4" />
          <span>Fill Form Below With Selection</span>
        </button>
      </div>

    </div>
  );
};
