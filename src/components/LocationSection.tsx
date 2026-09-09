import React from "react";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";

export const LocationSection: React.FC = () => {
  // Google Map embed query for 13 Tersha St, Richmond TW9 2LY, UK
  const mapAddress = "13 Tersha St, Richmond TW9 2LY, UK";
  const encodedAddress = encodeURIComponent(mapAddress);
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  const mapsExternalUrl = `https://maps.google.com/?q=${encodedAddress}`;

  return (
    <section id="location" className="py-14 sm:py-20 bg-[#F9F7F2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-8">
        <div className="text-left">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1A2B49] mb-2">
            <MapPin className="w-4 h-4" />
            <span>Richmond Location</span>
          </div>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1A1A1A] tracking-tight">
            Location & Tutoring Hours
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#5F6368] mt-2">
            Conveniently situated in Richmond TW9 for in-person local tutoring and direct contact.
          </p>
        </div>
      </div>

      {/* Info Cards Row */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Address Card */}
        <div className="bg-[#FFFFFF] p-5 rounded-xl border border-[#E2DFD8] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-[#1A2B49] font-bold text-sm mb-2">
              <MapPin className="w-4 h-4 text-[#1A2B49]" />
              <span>Address</span>
            </div>
            <p className="text-sm font-semibold text-[#1A1A1A]">
              13 Tersha St
            </p>
            <p className="text-sm text-[#5F6368]">
              Richmond TW9 2LY, UK
            </p>
          </div>
          <a
            href={mapsExternalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#1A2B49] hover:underline"
          >
            <span>Open in Google Maps</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Phone Card */}
        <div className="bg-[#FFFFFF] p-5 rounded-xl border border-[#E2DFD8] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-[#1A2B49] font-bold text-sm mb-2">
              <Phone className="w-4 h-4 text-[#1A2B49]" />
              <span>Direct Phone</span>
            </div>
            <a
              href="tel:+447930752684"
              className="text-base font-bold text-[#1A2B49] hover:underline block"
            >
              +44 7930 752684
            </a>
            <p className="text-xs text-[#5F6368] mt-1">
              Direct line to Charlie for parent enquiries
            </p>
          </div>
          <a
            href="tel:+447930752684"
            className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#1A2B49] hover:underline"
          >
            <span>Tap to call now</span>
            <Phone className="w-3 h-3" />
          </a>
        </div>

        {/* Hours Card [TO CONFIRM] */}
        <div className="bg-[#FFFFFF] p-5 rounded-xl border border-[#E2DFD8] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-[#1A2B49] font-bold text-sm mb-2">
              <Clock className="w-4 h-4 text-[#1A2B49]" />
              <span>Tutoring Hours [TO CONFIRM]</span>
            </div>
            <p className="text-xs text-[#5F6368] mb-1">
              Monday – Friday: <span className="font-medium text-[#1A1A1A]">15:30 – 20:00 [TO CONFIRM]</span>
            </p>
            <p className="text-xs text-[#5F6368]">
              Saturday – Sunday: <span className="font-medium text-[#1A1A1A]">09:00 – 17:00 [TO CONFIRM]</span>
            </p>
          </div>
          <span className="mt-4 text-[11px] text-[#5F6368] italic">
            * Session times confirmed upon enquiry
          </span>
        </div>
      </div>

      {/* Full-bleed Google Map iframe container */}
      <div className="w-full h-80 sm:h-96 border-y border-[#E2DFD8] bg-[#E2DFD8]/50 relative">
        <iframe
          title="Park View Tutoring Location Map - 13 Tersha St, Richmond"
          src={mapEmbedUrl}
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};
