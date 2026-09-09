import React from "react";
import { CheckCircle2, User, Award, HeartHandshake } from "lucide-react";
import charlieImg from "../assets/images/charlie_portrait_1788971808862.jpg";

export const MethodSection: React.FC = () => {
  return (
    <section id="method" className="py-14 sm:py-20 bg-[#FFFFFF] border-y border-[#E2DFD8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Left Column: Charlie's photo [TO CONFIRM] */}
          <div className="md:col-span-5 flex flex-col items-center sm:items-start">
            <div className="relative w-full max-w-xs sm:max-w-none rounded-2xl overflow-hidden border border-[#E2DFD8] bg-[#F9F7F2] shadow-sm">
              <img
                src={charlieImg}
                alt="Charlie - GCSE Maths and Physics Tutor in Richmond"
                className="w-full aspect-square object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              {/* [TO CONFIRM] Badge tag as specified in brief */}
              <div className="absolute top-3 left-3 bg-[#1A2B49] text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs">
                Charlie • Lead Tutor [TO CONFIRM]
              </div>
            </div>

            <div className="mt-3 text-center sm:text-left text-xs text-[#5F6368]">
              <span className="font-semibold text-[#1A1A1A]">Charlie</span> — Specialist GCSE Maths & Physics Tutor at Park View Tutoring, Richmond.
            </div>
          </div>

          {/* Right Column: Text & Approach */}
          <div className="md:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1A2B49] mb-2">
              <HeartHandshake className="w-4 h-4" />
              <span>Teaching Method</span>
            </div>

            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1A1A1A] tracking-tight mb-4">
              Simple explanations, supportive approach
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#5F6368] leading-relaxed mb-6">
              GCSE anxiety often comes from confusing explanations or fear of asking "silly" questions in a large classroom. At Park View Tutoring, Charlie creates an encouraging environment where students feel comfortable dissecting tricky calculus equations or complex mechanics problems.
            </p>

            <div className="space-y-3.5 w-full">
              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-[#F9F7F2] border border-[#E2DFD8]">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#1A1A1A]">
                    Step-by-Step Problem Deconstruction
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5F6368] mt-0.5">
                    Breaking multi-step word problems into structured 1-2-3 templates that gain full method marks on exams.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-[#F9F7F2] border border-[#E2DFD8]">
                <Award className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#1A1A1A]">
                    Confidence Without Pressure
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5F6368] mt-0.5">
                    Pacing tailored to the student&apos;s individual learning speed, building steady mastery and exam readiness.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
