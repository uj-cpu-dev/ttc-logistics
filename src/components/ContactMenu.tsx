import React, { useState } from "react";
import { MessageCircle, Phone, Mail, Plus } from "lucide-react";

/**
 * Floating expandable contact menu for TTC Logistics
 */
const ContactMenu: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Action Buttons */}
      <div
        className={`flex flex-col items-center gap-3 mb-3 transition-all duration-500 ${
          open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
        }`}
      >
        {/* WhatsApp */}
        <a
          href="https://wa.me/2348012345678?text=Hello%20TTC%20Logistics!%20I%20would%20like%20to%20inquire%20about%20your%20freight%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
        </a>

        {/* Call */}
        <a
          href="tel:+2348012345678"
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="Call TTC Logistics"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* Email */}
        <a
          href="mailto:info@ttclogistics.com?subject=Inquiry%20About%20Your%20Services&body=Hello%20TTC%20Logistics,%20I%20would%20like%20to%20know%20more%20about..."
          className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="Send Email"
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className={`bg-red-500 hover:bg-red-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-xl transition-transform duration-300 ${
          open ? "rotate-45" : "rotate-0"
        }`}
        aria-label="Toggle Contact Menu"
      >
        <Plus className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ContactMenu;
