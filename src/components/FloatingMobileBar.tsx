import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, MessageCircle } from "lucide-react";

interface FloatingMobileBarProps {
  phone?: string;
  waPhone?: string;
}

export const FloatingMobileBar: React.FC<FloatingMobileBarProps> = ({
  phone = "+44 7930 752684",
  waPhone = "447930752684",
}) => {
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appear after scrolling past 280px (past hero)
      if (window.scrollY > 280) {
        setShowBar(true);
      } else {
        setShowBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const waGreeting = "Hello Charlie, I would like to enquire about GCSE Maths/Physics tutoring spaces at Park View Tutoring.";
  const waUrl = `https://wa.me/${waPhone}?text=${encodeURIComponent(waGreeting)}`;

  return (
    <AnimatePresence>
      {showBar && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", damping: 22, stiffness: 280 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#1A2B49] text-white border-t border-[#2C426B] shadow-2xl px-4 py-3"
          style={{ paddingBottom: "max(12px, env(safe-area-inset-bottom, 12px))" }}
        >
          <div className="max-w-md mx-auto grid grid-cols-2 gap-3">
            {/* Call Charlie Button */}
            <a
              href={`tel:${phone.replace(/\s+/g, "")}`}
              className="bg-white/10 hover:bg-white/20 active:scale-95 text-white text-xs font-bold py-3 px-3 rounded-lg flex items-center justify-center gap-2 border border-white/20 transition-transform text-center"
            >
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Call Charlie</span>
            </a>

            {/* WhatsApp Button */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] active:scale-95 text-white text-xs font-bold py-3 px-3 rounded-lg flex items-center justify-center gap-2 transition-transform text-center shadow-xs"
            >
              <MessageCircle className="w-4 h-4 fill-white shrink-0" />
              <span>WhatsApp</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
