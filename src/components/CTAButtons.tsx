import React from "react";
const CTAButtons = () => {
    return (
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
                href="/"
                className="bg-blue-900 text-white px-8 py-3 sm:px-10 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-lg hover:bg-blue-800 transition transform hover:-translate-y-0.5 text-center w-full sm:w-auto"
            >
                Get a Quote
            </a>
            <a
                href="/track"
                className="bg-white text-blue-900 border-2 border-blue-900 px-8 py-3 sm:px-10 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-md hover:bg-gray-100 transition text-center w-full sm:w-auto"
            >
                Track Shipment
            </a>
        </div>
    );
};

export default CTAButtons;