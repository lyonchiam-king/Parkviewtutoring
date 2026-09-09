import React from "react";
import { Star, Quote, CheckCircle2 } from "lucide-react";

export const ReviewsSection: React.FC = () => {
  const verifiedQuotes = [
    {
      text: "Students report significant grade improvements",
      label: "Parent Verified Feedback",
      location: "Richmond Parent",
    },
    {
      text: "Charlie explains complex subjects simply",
      label: "GCSE Maths & Physics",
      location: "Year 11 Student Parent",
    },
    {
      text: "Based in TW9 Richmond — supportive and highly effective tutoring",
      label: "Local Richmond Community",
      location: "TW9 Area",
    },
  ];

  return (
    <section id="reviews" className="py-10 bg-[#1A2B49] text-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/15">
          <div className="flex items-center gap-2">
            <Quote className="w-5 h-5 text-emerald-400" />
            <h3 className="font-serif font-bold text-lg text-white">
              Verified Parent & Student Feedback
            </h3>
          </div>
          <div className="flex items-center gap-1 text-amber-400 text-xs font-semibold">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span className="text-white/80 ml-1">5.0 Star Feedback</span>
          </div>
        </div>

        {/* Quotes Grid / Ticker Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {verifiedQuotes.map((q, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-xs p-4 rounded-xl border border-white/15 flex flex-col justify-between"
            >
              <div className="flex items-start gap-2 mb-3">
                <Quote className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 opacity-80" />
                <p className="font-sans font-medium text-sm text-white/95 leading-snug">
                  &ldquo;{q.text}&rdquo;
                </p>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-white/70">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  {q.label}
                </span>
                <span className="font-semibold text-white/90">{q.location}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
