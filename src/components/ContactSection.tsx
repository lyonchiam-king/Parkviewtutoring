import React, { useState } from "react";
import { MessageCircle, Phone, Send, CheckCircle2, Download, Table, AlertCircle } from "lucide-react";
import { SubjectSelection, YearGroupSelection, EnquiryState } from "../types";
import { EnquiryBuilder } from "./EnquiryBuilder";

interface ContactSectionProps {
  initialSubject?: SubjectSelection;
  initialYearGroup?: YearGroupSelection;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialSubject = "Maths",
  initialYearGroup = "11",
}) => {
  const [subject, setSubject] = useState<SubjectSelection>(initialSubject);
  const [yearGroup, setYearGroup] = useState<YearGroupSelection>(initialYearGroup);

  const [formState, setFormState] = useState<EnquiryState>({
    subject: initialSubject,
    yearGroup: initialYearGroup,
    parentName: "",
    studentName: "",
    contactNumber: "",
    email: "",
    preferredDays: "",
    additionalNotes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Sync builder choices to form
  const handleApplyToForm = () => {
    setFormState((prev) => ({
      ...prev,
      subject,
      yearGroup,
    }));
    // Smooth scroll to form fields
    const formElement = document.getElementById("enquiry-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(null);

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formState,
          subject,
          yearGroup,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit enquiry.");
      }

      setSubmitSuccess(
        `Thank you ${formState.parentName || "Parent"}! Your enquiry for GCSE ${subject} (Year ${yearGroup}) has been recorded and synced to Charlie's spreadsheet.`
      );
      setFormState({
        subject: "Maths",
        yearGroup: "11",
        parentName: "",
        studentName: "",
        contactNumber: "",
        email: "",
        preferredDays: "",
        additionalNotes: "",
      });
    } catch (err: any) {
      setSubmitError(err.message || "Something went wrong. Please call or WhatsApp Charlie directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const waPhone = "447930752684";
  const waMsg = `Hello Charlie, I am interested in GCSE ${subject} tutoring for my Year ${yearGroup} student at Park View Tutoring.`;
  const waUrl = `https://wa.me/${waPhone}?text=${encodeURIComponent(waMsg)}`;

  return (
    <section id="contact" className="py-14 sm:py-20 bg-[#F9F7F2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-left mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1A2B49] mb-2">
            <Send className="w-4 h-4" />
            <span>Direct Enquiries</span>
          </div>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1A1A1A] tracking-tight">
            Enquire About Spaces
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#5F6368] mt-2 max-w-xl">
            Confirm Charlie&apos;s availability for GCSE Maths and Physics in Richmond. Quick response guaranteed.
          </p>
        </div>

        {/* Interactive Piece: Enquiry Builder */}
        <EnquiryBuilder
          subject={subject}
          yearGroup={yearGroup}
          onSubjectChange={(subj) => {
            setSubject(subj);
            setFormState((prev) => ({ ...prev, subject: subj }));
          }}
          onYearGroupChange={(yr) => {
            setYearGroup(yr);
            setFormState((prev) => ({ ...prev, yearGroup: yr }));
          }}
          onApplyToForm={handleApplyToForm}
        />

        {/* Contact Form & WhatsApp Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Main Form */}
          <div className="md:col-span-8 bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#E2DFD8] shadow-xs">
            <form id="enquiry-form" onSubmit={handleSubmit} className="space-y-4">
              <h3 className="font-serif font-bold text-lg text-[#1A1A1A] mb-1">
                Parent Enquiry Form
              </h3>
              <p className="text-xs text-[#5F6368] mb-4">
                Submissions automatically update Charlie&apos;s Google Sheets spreadsheet tracker.
              </p>

              {submitSuccess && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-xl text-xs sm:text-sm flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Enquiry Received!</span>
                    <span>{submitSuccess}</span>
                  </div>
                </div>
              )}

              {submitError && (
                <div className="p-4 bg-rose-50 border border-rose-200 text-rose-900 rounded-xl text-xs sm:text-sm flex items-start gap-2.5">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <span>{submitError}</span>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="parentName" className="block text-xs font-semibold text-[#1A1A1A] mb-1">
                    Parent Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    required
                    value={formState.parentName}
                    onChange={handleInputChange}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FFFFFF] border border-[#E2DFD8] rounded-lg focus:outline-none focus:border-[#1A2B49] focus:ring-1 focus:ring-[#1A2B49] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="studentName" className="block text-xs font-semibold text-[#1A1A1A] mb-1">
                    Student Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="studentName"
                    name="studentName"
                    value={formState.studentName}
                    onChange={handleInputChange}
                    placeholder="e.g. Charlie"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FFFFFF] border border-[#E2DFD8] rounded-lg focus:outline-none focus:border-[#1A2B49] focus:ring-1 focus:ring-[#1A2B49] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-[#1A1A1A] mb-1">
                    Subject Required
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={subject}
                    onChange={(e) => {
                      const val = e.target.value as SubjectSelection;
                      setSubject(val);
                      setFormState((p) => ({ ...p, subject: val }));
                    }}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FFFFFF] border border-[#E2DFD8] rounded-lg focus:outline-none focus:border-[#1A2B49] focus:ring-1 focus:ring-[#1A2B49] transition-all"
                  >
                    <option value="Maths">GCSE Maths</option>
                    <option value="Physics">GCSE Physics</option>
                    <option value="Both">Both Maths & Physics</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="yearGroup" className="block text-xs font-semibold text-[#1A1A1A] mb-1">
                    Year Group
                  </label>
                  <select
                    id="yearGroup"
                    name="yearGroup"
                    value={yearGroup}
                    onChange={(e) => {
                      const val = e.target.value as YearGroupSelection;
                      setYearGroup(val);
                      setFormState((p) => ({ ...p, yearGroup: val }));
                    }}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FFFFFF] border border-[#E2DFD8] rounded-lg focus:outline-none focus:border-[#1A2B49] focus:ring-1 focus:ring-[#1A2B49] transition-all"
                  >
                    <option value="10">Year 10 GCSE</option>
                    <option value="11">Year 11 GCSE</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contactNumber" className="block text-xs font-semibold text-[#1A1A1A] mb-1">
                    Phone / Contact Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    required
                    value={formState.contactNumber}
                    onChange={handleInputChange}
                    placeholder="07123 456789"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FFFFFF] border border-[#E2DFD8] rounded-lg focus:outline-none focus:border-[#1A2B49] focus:ring-1 focus:ring-[#1A2B49] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-[#1A1A1A] mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder="parent@example.com"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FFFFFF] border border-[#E2DFD8] rounded-lg focus:outline-none focus:border-[#1A2B49] focus:ring-1 focus:ring-[#1A2B49] transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="preferredDays" className="block text-xs font-semibold text-[#1A1A1A] mb-1">
                  Preferred Days / Times
                </label>
                <input
                  type="text"
                  id="preferredDays"
                  name="preferredDays"
                  value={formState.preferredDays}
                  onChange={handleInputChange}
                  placeholder="e.g. Tuesday after school or Saturday morning"
                  className="w-full px-3.5 py-2.5 text-sm bg-[#FFFFFF] border border-[#E2DFD8] rounded-lg focus:outline-none focus:border-[#1A2B49] focus:ring-1 focus:ring-[#1A2B49] transition-all"
                />
              </div>

              <div>
                <label htmlFor="additionalNotes" className="block text-xs font-semibold text-[#1A1A1A] mb-1">
                  Target Grade or Specific Exam Concerns
                </label>
                <textarea
                  id="additionalNotes"
                  name="additionalNotes"
                  rows={3}
                  value={formState.additionalNotes}
                  onChange={handleInputChange}
                  placeholder="e.g. Currently working at Grade 5, aiming for Grade 7 in GCSE Maths."
                  className="w-full px-3.5 py-2.5 text-sm bg-[#FFFFFF] border border-[#E2DFD8] rounded-lg focus:outline-none focus:border-[#1A2B49] focus:ring-1 focus:ring-[#1A2B49] transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1A2B49] hover:bg-[#2C426B] active:bg-[#1A2B49] active:scale-98 text-white font-bold py-3.5 px-6 rounded-lg text-sm transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? "Syncing Enquiry..." : "Submit Enquiry"}</span>
              </button>
            </form>
          </div>

          {/* Sidebar Direct Links & WhatsApp */}
          <div className="md:col-span-4 flex flex-col gap-4">
            
            {/* WhatsApp Fast Link */}
            <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E2DFD8] shadow-xs">
              <div className="flex items-center gap-2 text-[#25D366] font-bold text-sm mb-2">
                <MessageCircle className="w-5 h-5 fill-[#25D366] text-white" />
                <span>Prefer Instant Chat?</span>
              </div>
              <p className="text-xs text-[#5F6368] mb-4 leading-relaxed">
                Parents often get the quickest response by reaching Charlie directly on WhatsApp.
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] active:scale-95 text-white font-bold py-3 px-4 rounded-lg text-xs transition-all flex items-center justify-center gap-2 text-center"
              >
                <span>WhatsApp Charlie</span>
              </a>
            </div>

            {/* Direct Call Link */}
            <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E2DFD8] shadow-xs">
              <div className="flex items-center gap-2 text-[#1A2B49] font-bold text-sm mb-2">
                <Phone className="w-4 h-4 text-[#1A2B49]" />
                <span>Call Directly</span>
              </div>
              <a
                href="tel:+447930752684"
                className="font-serif font-bold text-lg text-[#1A2B49] hover:underline block mb-1"
              >
                +44 7930 752684
              </a>
              <p className="text-xs text-[#5F6368]">
                Richmond TW9 local line
              </p>
            </div>

            {/* Google Sheets Owner Download Connector */}
            <div className="bg-[#FFFFFF] p-5 rounded-2xl border border-[#E2DFD8] shadow-xs">
              <div className="flex items-center gap-2 text-[#1A2B49] font-bold text-xs mb-1.5">
                <Table className="w-4 h-4 text-emerald-600" />
                <span>Owner Spreadsheet Connector</span>
              </div>
              <p className="text-[11px] text-[#5F6368] mb-3">
                Export all live parent enquiries to CSV / Google Sheets spreadsheet format with a single click.
              </p>
              <a
                href="/api/enquiries/csv"
                download="Park_View_Tutoring_Enquiries.csv"
                className="w-full bg-[#F9F7F2] hover:bg-[#E2DFD8] text-[#1A2B49] font-semibold py-2 px-3 rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5 text-emerald-600" />
                <span>Download CSV Spreadsheet</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
