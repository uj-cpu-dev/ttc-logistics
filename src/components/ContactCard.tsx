import { Instagram } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

const ContactCard = () => {
    return (
        <div className="hidden lg:block absolute -bottom-20 left-1/2 transform -translate-x-1/2 bg-white p-5 rounded-xl shadow-2xl w-max border-t-4 border-orange-500">
            <p className="text-lg font-bold text-blue-900">Need immediate service?</p>
            <a href="tel:2348012345678" className="text-orange-500 font-semibold hover:underline">
                Call Us Now:
                <p className="m-1">
                    +44(0) 709 116 678 <br />
                    +234 707 210 9281
                </p>
            </a>
            <div className="flex">
                <a
                    href="https://wa.me/2347072109281?text=Hello%20TTC%20Logistics!%20I%20would%20like%20to%20inquire%20about%20your%20freight%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat on WhatsApp"
                    className="bg-green-500 p-3 rounded-full shadow-lg hover:scale-110 hover:shadow-2xl transition"
                >
                    <WhatsAppIcon className="w-5 h-5 text-white" />
                </a>
                <a
                    href="https://instagram.com/tiniji_trading_concepts"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Instagram"
                    className="bg-gradient-to-br ml-2 from-pink-500 to-purple-600 p-3 rounded-full shadow-lg hover:scale-110 hover:shadow-2xl transition"
                >
                    <Instagram className="w-5 h-5 text-white" />
                </a>
            </div>
        </div>
    );
};

export default ContactCard;
