import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/2348012345678?text=Hello%20TTC%20Logistics!%20I%20would%20like%20to%20inquire%20about%20your%20freight%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-transform transform hover:scale-110 z-50"
      aria-label="Chat on WhatsApp"
    >
      {/*<FaWhatsapp className="text-3xl" />*/}
    </a>
  );
};

export default WhatsAppButton;
