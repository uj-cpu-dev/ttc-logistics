import { Instagram } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

const FloatingContactButtons = () => {
    return (
        <div className="fixed right-5 bottom-8 flex flex-col items-center gap-4 z-50 lg:hidden animate-fade-in">
            <a
                href="https://wa.me/2347072109281?text=Hello%20TTC%20Logistics!%20I%20would%20like%20to%20inquire%20about%20your%20freight%20services."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="bg-green-500 p-3 rounded-full shadow-lg hover:scale-110 hover:shadow-2xl transition"
            >
                <WhatsAppIcon className="w-7 h-7 text-white" />
            </a>
            <a
                href="https://instagram.com/tiniji_trading_concepts"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Instagram"
                className="bg-gradient-to-br from-pink-500 to-purple-600 p-3 rounded-full shadow-lg hover:scale-110 hover:shadow-2xl transition"
            >
                <Instagram className="w-7 h-7 text-white" />
            </a>
        </div>
    );
};

export default FloatingContactButtons;