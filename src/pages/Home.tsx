import { useState } from "react";
import ServiceCard from "../components/ServiceCard";
import HeroImageSVG from "../components/HeroImageSVG";
import AboutImageSVG from "../components/AboutImageSVG";
import FAQSection from "../components/FAQSection";
import FadeInSection from "../components/FadeInSection"
import ServicesSection from "../components/ServicesSection"
import { Truck, Ship, Plane, CheckCircle, MapPin, Clock, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

// Fix TS2786 warning
const WhatsAppIcon: React.FC<React.SVGProps<SVGSVGElement>> =
  FaWhatsapp as unknown as React.FC<React.SVGProps<SVGSVGElement>>;

const Home = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch("https://formspree.io/f/YOUR_FORMSPREE_URL", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Something went wrong."));
  };

  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen relative">
      <section
        id="home"
        className="pt-28 pb-12 sm:pt-36 sm:pb-24 bg-yellow-50 text-blue-900 overflow-hidden"
      >
        <div className="container mx-auto px-6 max-w-7xl flex flex-col-reverse lg:flex-row items-center gap-10">
          {/* LEFT COLUMN - Text */}
          <div className="flex-1 text-center lg:text-left">
            <span className="text-sm font-semibold uppercase text-orange-500 tracking-wider border-l-4 border-orange-500 pl-3 inline-block mb-3">
              Your Global Freight Partner
            </span>

            <h1
              className="font-extrabold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ lineHeight: "1.1" }}
            >
              Reliable{" "}
              <span className="text-orange-500">Logistics</span> Solutions
            </h1>

            <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-xl mx-auto lg:mx-0">
              Tiniji Trading Concepts (TTC Logistics) offers swift, secure, and
              reliable air, sea, and land freight services across global markets.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="bg-blue-900 text-white px-8 py-3 sm:px-10 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-lg hover:bg-blue-800 transition transform hover:-translate-y-0.5 text-center w-full sm:w-auto"
              >
                Get a Quote
              </a>
              <a
                href="#tracking"
                className="bg-white text-blue-900 border-2 border-blue-900 px-8 py-3 sm:px-10 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-md hover:bg-gray-100 transition text-center w-full sm:w-auto"
              >
                Track Shipment
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN - Hero Image */}
          <div className="flex-1 flex justify-center items-center relative">
            <HeroImageSVG className="w-full h-auto max-w-md md:max-w-lg lg:max-w-xl" />
            <div className="hidden lg:block absolute -bottom-20 left-1/2 transform -translate-x-1/2 bg-white p-5 rounded-xl shadow-2xl w-max border-t-4 border-orange-500">
              <p className="text-lg font-bold text-blue-900">Need immediate service?</p>
               <a href="tel:2348012345678" className="text-orange-500 font-semibold hover:underline">
                    Call Us Now:
                    <p className="m-1">
                    +44(0) 709 116 678 <br/>
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
          </div>
        </div>
      </section>

      {/* FLOATING CONTACT BUTTONS (mobile & tablet only) */}
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

      {/* SERVICES SECTION */}
      <section id="services" className="py-16 sm:py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 text-center mb-4">
            Our Core Freight Services
          </h2>
          <p className="text-base sm:text-xl text-gray-600 text-center mb-12 sm:mb-16">
            Connecting continents, delivering promises.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            <ServiceCard
              icon={Plane}
              title="Air Freight"
              description="Fastest delivery for time-sensitive cargo with full tracking and customs support."
            />
            <ServiceCard
              icon={Ship}
              title="Sea Freight"
              description="Cost-effective shipping for large-volume cargo, ensuring global reach and reliability."
            />
            <ServiceCard
              icon={Truck}
              title="Land Transport"
              description="Efficient door-to-door ground logistics for domestic and regional distribution."
            />
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-16 sm:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-7xl grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <span className="text-sm font-semibold uppercase text-orange-500 tracking-wider border-l-4 border-orange-500 pl-3">
              The TTC Difference
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mt-4 mb-6">
              Why Trust Your Cargo with Us?
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-8">
              We are committed to transparency, security, and leveraging modern
              technology to simplify complex logistics challenges for every
              client.
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

          <div className="relative p-3 sm:p-4 bg-yellow-50 rounded-3xl flex justify-center items-center order-1 md:order-2">
            <AboutImageSVG className="w-full h-auto max-w-md md:max-w-full" />
          </div>
        </div>
      </section>

      <ServicesSection />

      <FAQSection />

      {/* CONTACT SECTION */}
      <section id="contact" className="py-16 sm:py-20 px-6 bg-yellow-50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 text-center mb-4">
            Contact Our Experts
          </h2>
          <p className="text-base sm:text-xl text-gray-600 text-center mb-10 sm:mb-12">
            We're here to answer all your logistics questions.
          </p>
          <form
            onSubmit={handleSubmit}
            className="max-w-md lg:max-w-lg mx-auto bg-white p-6 sm:p-10 rounded-3xl shadow-2xl space-y-4 sm:space-y-6"
          >
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-3 sm:p-4 border-2 border-gray-200 focus:border-orange-500 rounded-xl transition"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-3 sm:p-4 border-2 border-gray-200 focus:border-orange-500 rounded-xl transition"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message / Inquiry Details"
              required
              className="w-full p-3 sm:p-4 border-2 border-gray-200 focus:border-orange-500 rounded-xl h-32 sm:h-36 resize-none"
            />
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-orange-600 transition transform hover:-translate-y-0.5"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Home;