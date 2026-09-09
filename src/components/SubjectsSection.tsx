import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, BookOpen, Layers } from "lucide-react";
import { SubjectCard } from "../types";

import mathsImg from "../assets/images/gcse_maths_card_1788971767052.jpg";
import physicsImg from "../assets/images/gcse_physics_card_1788971780214.jpg";
import examImg from "../assets/images/exam_technique_card_1788971794468.jpg";

export const SUBJECT_CARDS: SubjectCard[] = [
  {
    id: "maths",
    name: "GCSE Maths",
    tags: ["Algebra", "Calculus"],
    image: mathsImg,
    summary: "Comprehensive coverage of Edexcel, AQA & OCR Higher and Foundation GCSE Maths specifications.",
    description: "Charlie breaks down intimidating mathematical concepts into clear, logical steps. From mastering algebraic transformations to understanding calculus fundamentals, students build deep problem-solving skills.",
    topics: ["Algebraic Proof & Quadratics", "Differential Calculus Foundations", "Vectors & Trigonometry", "Probability & Statistics"],
    outcome: "Helps students convert C/D prediction scores into Grade 7-9 results with clear method marks.",
  },
  {
    id: "physics",
    name: "GCSE Physics",
    tags: ["Mechanics", "Energy"],
    image: physicsImg,
    summary: "Clear physical intuition and formula applications for Combined & Triple Physics GCSE.",
    description: "Physics can feel abstract until broken down visually. Charlie connects formulas to real-world physical systems, ensuring students master forces, energy calculations, circuit diagrams, and required practicals.",
    topics: ["Forces, Motion & Newton's Laws", "Energy Transfer & Work Done", "Electrical Circuits & Waves", "Atomic Structure & Magnetism"],
    outcome: "Builds confidence in multi-step 6-mark calculation and explanation questions.",
  },
  {
    id: "exam",
    name: "Exam Technique",
    tags: ["Revision", "Confidence"],
    image: examImg,
    summary: "Targeted mark scheme awareness, time allocation, and mock exam strategy for maximum marks.",
    description: "Knowing the syllabus is only half the battle. Charlie teaches precise examiner keywords, command word breakdown ('evaluate' vs 'explain'), and error-checking strategies under timed conditions.",
    topics: ["Mark Scheme Keyword Precision", "Command Word Decoders", "Timing Strategy & Question Prioritization", "Exam Stress & Anxiety Control"],
    outcome: "Eliminates silly calculation slips and ensures students capture every available mark.",
  },
];

interface SubjectsSectionProps {
  onSelectCard: (card: SubjectCard) => void;
  onStartEnquiry: (subjectName: string) => void;
}

export const SubjectsSection: React.FC<SubjectsSectionProps> = ({
  onSelectCard,
  onStartEnquiry,
}) => {
  const shouldReduceMotion = useReducedMotion();

  // Signature moment animation: Index-card folder slide-out feel
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: shouldReduceMotion
      ? { opacity: 0 }
      : { opacity: 0, x: -24, y: 12 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 22,
      },
    },
  };

  return (
    <section id="subjects" className="py-14 sm:py-20 bg-[#F9F7F2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10 text-left">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1A2B49] mb-2">
            <BookOpen className="w-4 h-4" />
            <span>Targeted GCSE Curriculum</span>
          </div>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1A1A1A] tracking-tight">
            What They Offer
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#5F6368] mt-2 max-w-xl">
            Focused 1-on-1 and tailored group tutoring tailored directly to Edexcel, AQA, and OCR specifications in Richmond.
          </p>
        </div>

        {/* 3 Cards Grid with Index-Card Folder Slide-Out Signature Moment */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {SUBJECT_CARDS.map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
              className="group bg-[#FFFFFF] rounded-xl border border-[#E2DFD8] overflow-hidden flex flex-col justify-between shadow-xs hover:border-[#1A2B49]/40 transition-colors cursor-pointer"
              onClick={() => onSelectCard(card)}
            >
              <div>
                {/* Image Area with Badge */}
                <div className="relative aspect-[4/3] w-full bg-[#F9F7F2] overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white/90 backdrop-blur-xs text-[#1A2B49] font-bold text-[11px] px-2.5 py-0.5 rounded-full border border-[#E2DFD8] shadow-2xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <h3 className="font-serif font-bold text-lg text-[#1A1A1A] mb-2 group-hover:text-[#1A2B49] transition-colors">
                    {card.name}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#5F6368] leading-relaxed mb-4">
                    {card.summary}
                  </p>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 pt-0 mt-auto flex flex-col gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onStartEnquiry(card.name);
                  }}
                  className="w-full bg-[#1A2B49] hover:bg-[#2C426B] active:bg-[#1A2B49] active:scale-98 text-white text-xs font-semibold py-2.5 px-4 rounded-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Start Enquiry</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <div className="text-center">
                  <span className="text-[11px] text-[#5F6368] group-hover:text-[#1A2B49] underline underline-offset-2">
                    Tap for topic breakdown →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
