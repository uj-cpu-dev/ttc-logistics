import { CheckCircle, Clock, MapPin } from "lucide-react";

const AboutContent = () => {
    return (
        <div>
      <span className="text-sm font-semibold uppercase text-orange-500 tracking-wider border-l-4 border-orange-500 pl-3">
        The TTC Difference
      </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mt-4 mb-6">
                Why Trust Your Cargo with Us?
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-8">
                We are committed to transparency, security, and leveraging modern
                technology to simplify complex logistics challenges for every client.
            </p>

            <ul className="space-y-4">
                <li className="flex items-start text-base sm:text-lg text-gray-700">
                    <CheckCircle className="w-6 h-6 text-orange-500 mr-3 mt-1" />
                    <span>
            <span className="font-semibold">Global Network:</span> Extensive
            reach across all major trade routes.
          </span>
                </li>
                <li className="flex items-start text-base sm:text-lg text-gray-700">
                    <Clock className="w-6 h-6 text-orange-500 mr-3 mt-1" />
                    <span>
            <span className="font-semibold">Timely Delivery:</span>{" "}
                        Punctuality is our highest priority.
          </span>
                </li>
                <li className="flex items-start text-base sm:text-lg text-gray-700">
                    <MapPin className="w-6 h-6 text-orange-500 mr-3 mt-1" />
                    <span>
            <span className="font-semibold">Seamless Tracking:</span>{" "}
                        Real-time updates from pickup to destination.
          </span>
                </li>
            </ul>
        </div>
    );
};

export default AboutContent;