import React, { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { HighlightsStrip } from "./components/HighlightsStrip";
import { SubjectsSection } from "./components/SubjectsSection";
import { SubjectModal } from "./components/SubjectModal";
import { MethodSection } from "./components/MethodSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { LocationSection } from "./components/LocationSection";
import { ContactSection } from "./components/ContactSection";
import { FloatingMobileBar } from "./components/FloatingMobileBar";
import { Footer } from "./components/Footer";
import { SubjectCard, SubjectSelection, YearGroupSelection } from "./types";

export default function App() {
  const [selectedCard, setSelectedCard] = useState<SubjectCard | null>(null);
  const [chosenSubject, setChosenSubject] = useState<SubjectSelection>("Maths");
  const [chosenYearGroup, setChosenYearGroup] = useState<YearGroupSelection>("11");

  const handleEnquireClick = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleStartEnquiryForSubject = (subjectName: string) => {
    if (subjectName.includes("Maths")) {
      setChosenSubject("Maths");
    } else if (subjectName.includes("Physics")) {
      setChosenSubject("Physics");
    } else {
      setChosenSubject("Both");
    }
    handleEnquireClick();
  };

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#1A1A1A] font-sans antialiased pb-safe-bar selection:bg-[#1A2B49] selection:text-white">
      {/* Top Header */}
      <Header onEnquireClick={handleEnquireClick} />

      {/* Main Page Flow */}
      <main>
        {/* 1. Hero Section (Renders instantly at final opacity for performance) */}
        <Hero onEnquireClick={handleEnquireClick} />

        {/* Highlights Strip directly under hero */}
        <HighlightsStrip />

        {/* 2. Subjects Offered Card Grid with Signature Slide-Out Animation */}
        <SubjectsSection
          onSelectCard={(card) => setSelectedCard(card)}
          onStartEnquiry={handleStartEnquiryForSubject}
        />

        {/* 3. Method Section (Two-Column Split with Charlie's Photo) */}
        <MethodSection />

        {/* 4. Reviews Ticker Strip with Direct Quotes */}
        <ReviewsSection />

        {/* 5. Location, Address & Hours Section */}
        <LocationSection />

        {/* 6. Contact Section & Interactive Enquiry Builder */}
        <ContactSection
          initialSubject={chosenSubject}
          initialYearGroup={chosenYearGroup}
        />
      </main>

      {/* Modal Detail for Subject Cards */}
      <SubjectModal
        card={selectedCard}
        onClose={() => setSelectedCard(null)}
        onEnquireSubject={handleStartEnquiryForSubject}
      />

      {/* Floating Bar on Mobile (Appears on Scroll) */}
      <FloatingMobileBar />

      {/* Footer */}
      <Footer />
    </div>
  );
}
