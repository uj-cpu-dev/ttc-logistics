import React, { useEffect, useState } from "react";
import { MessageCircle, Phone, Mail } from "lucide-react";

/**
 * Floating WhatsApp, Call, and Email buttons
 * - Auto-hide on scroll down, reappear on scroll up
 */
const ContactButtons: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll direction visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false); // Hide on scroll down
      } else {
        setVisible(true); // Show on scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed bottom-6 right-6 flex flex-col gap-4 z-50 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/2348012345678?text=Hello%20TTC%20Logistics!%20I%20would%20like%20to%20inquire%20about%20your%20freight%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Call Button */}
      <a
        href="tel:+2348012345678"
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Call TTC Logistics"
      >
        <Phone className="w-6 h-6" />
      </a>

      {/* Email Button */}
      <a
        href="mailto:info@ttclogistics.com?subject=Inquiry%20About%20Your%20Services&body=Hello%20TTC%20Logistics,%20I%20would%20like%20to%20know%20more%20about..."
        className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Send Email"
      >
        <Mail className="w-6 h-6" />
      </a>
    </div>
  );
};

export default ContactButtons;