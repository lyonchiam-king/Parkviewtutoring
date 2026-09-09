import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle, ArrowRight, BookOpen } from "lucide-react";
import { SubjectCard } from "../types";

interface SubjectModalProps {
  card: SubjectCard | null;
  onClose: () => void;
  onEnquireSubject: (subjectName: string) => void;
}

export const SubjectModal: React.FC<SubjectModalProps> = ({
  card,
  onClose,
  onEnquireSubject,
}) => {
  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (card) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [card, onClose]);

  return (
    <AnimatePresence>
      {card && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#1A1A1A]/60 backdrop-blur-xs"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-[#FFFFFF] rounded-2xl border border-[#E2DFD8] shadow-xl w-full max-w-xl max-h-[90vh] overflow-y-auto z-10 p-6 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full text-[#5F6368] hover:text-[#1A1A1A] hover:bg-[#F9F7F2] transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Tags & Header */}
            <div className="flex flex-wrap gap-2 mb-3">
              {card.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[#F9F7F2] text-[#1A2B49] font-bold text-xs px-3 py-1 rounded-full border border-[#E2DFD8]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 id="modal-title" className="font-serif font-bold text-2xl text-[#1A1A1A] mb-3">
              {card.name}
            </h3>

            {/* Modal Image */}
            <div className="aspect-[16/9] w-full rounded-lg overflow-hidden mb-5 bg-[#F9F7F2]">
              <img
                src={card.image}
                alt={card.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Detailed Description */}
            <p className="font-sans text-sm sm:text-base text-[#1A1A1A]/85 leading-relaxed mb-6">
              {card.description}
            </p>

            {/* Key Topics List */}
            <div className="bg-[#F9F7F2] p-4 rounded-xl border border-[#E2DFD8] mb-6">
              <h4 className="font-serif font-bold text-sm text-[#1A2B49] mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>Key Specification Modules Covered</span>
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#1A1A1A]">
                {card.topics.map((topic) => (
                  <li key={topic} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Target Outcome */}
            <div className="mb-6 p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs sm:text-sm text-emerald-900 font-medium">
              💡 <span className="font-bold">Expected Outcome:</span> {card.outcome}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  onClose();
                  onEnquireSubject(card.name);
                }}
                className="flex-1 bg-[#1A2B49] hover:bg-[#2C426B] active:scale-98 text-white font-semibold py-3 px-5 rounded-lg text-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Enquire About {card.name} Spaces</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onClose}
                className="bg-[#F9F7F2] hover:bg-[#E2DFD8] text-[#1A1A1A] font-medium py-3 px-5 rounded-lg text-sm transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
