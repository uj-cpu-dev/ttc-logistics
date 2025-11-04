/*import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";


const HeroSection = () => {
    return (
        <section
            id="home"
            className="pt-28 pb-12 sm:pt-36 sm:pb-24 bg-yellow-50 text-blue-900 overflow-hidden"
        >
            <div className="container mx-auto px-6 max-w-7xl flex flex-col-reverse lg:flex-row items-center gap-10">
                <HeroContent />
                <HeroImage />
            </div>
        </section>
    );
};

export default HeroSection;*/

import {Instagram, Search} from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
    const navigate = useNavigate();
    const routeToTrack = () => navigate(`/track?trackingId=TTC123456789`)

    return (
        <section
            id="home"
            className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600 text-white overflow-hidden"
        >
            {/* Background image with orange gradient overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg')",
                }}
            >
                <div
                    className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-orange-600/50"></div>
            </div>

            {/* Content Wrapper */}
            <div
                className="relative z-10 container mx-auto px-6 py-24 lg:py-36 max-w-7xl flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

                {/* ====== TEXT SECTION ====== */}
                <div className="max-w-xl text-center lg:text-left space-y-6">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                        Reliable <span className="text-orange-400">Logistics</span> Solutions
                    </h1>

                    <p className="text-lg text-gray-100 max-w-md mx-auto lg:mx-0">
                        Tiniji Trading Concepts (TTC Logistics) offers swift, secure, and reliable air, sea, and land
                        freight services across global markets.
                    </p>

                    <button
                        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg shadow-orange-400/30 transition-transform hover:scale-105">
                        Get a Quote
                    </button>
                    <button
                        className="bg-white ml-2 hover:bg-blue-800 text-orange-500 hover:text-white font-semibold px-8 py-3 rounded-full shadow-lg shadow-blue-900/40 transition-transform hover:scale-105">
                        Track a shipment
                    </button>
                </div>

                {/* ====== TRACKING CARD ====== */}
                <div
                    className="bg-white/95 text-gray-800 rounded-3xl shadow-2xl border-t-4 border-orange-500 p-6 sm:p-8 w-full max-w-md backdrop-blur-sm transition-all hover:shadow-orange-200">
                    <h3 className="text-lg font-semibold text-blue-900 mb-4">
                        Track Your Shipment
                    </h3>

                    <form className="space-y-4">
                        <div>
                            <label className="text-sm text-gray-500 mb-1 block">From</label>
                            <input
                                type="text"
                                placeholder="Lagos, NG"
                                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-500 mb-1 block">To</label>
                            <input
                                type="text"
                                placeholder="Abuja, NG"
                                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-500 mb-1 block">
                                Tracking ID
                            </label>
                            <div className="flex">
                                <input
                                    type="text"
                                    placeholder="TTC123456789"
                                    className="flex-grow border border-gray-300 rounded-l-xl px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
                                />
                                <button
                                    onClick={() => routeToTrack()}
                                    type="button"
                                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 rounded-r-xl transition-colors flex items-center justify-center"
                                >
                                    <Search size={18}/>
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <h3 className="text-lg font-semibold text-blue-900">
                                Need assistance:
                            </h3>
                            <a
                                href="https://wa.me/2347072109281?text=Hello%20TTC%20Logistics!%20I%20would%20like%20to%20inquire%20about%20your%20freight%20services."
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Chat on WhatsApp"
                                className="bg-green-500 p-3 rounded-full shadow-lg hover:scale-110 hover:shadow-2xl transition ml-2"
                            >
                                <WhatsAppIcon className="w-5 h-5 text-white"/>
                            </a>
                            <a
                                href="https://instagram.com/tiniji_trading_concepts"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit Instagram"
                                className="bg-gradient-to-br ml-2 from-pink-500 to-purple-600 p-3 rounded-full shadow-lg hover:scale-110 hover:shadow-2xl transition"
                            >
                                <Instagram className="w-5 h-5 text-white"/>
                            </a>
                        </div>
                    </form>
                </div>
            </div>

            {/* Decorative gradient line at bottom */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-yellow-300"></div>
        </section>
    );
};

export default HeroSection;
