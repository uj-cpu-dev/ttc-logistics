// src/App.tsx
import { useState } from "react";
import NavBar from "./components/NavBar";
import ServiceCard from "./components/ServiceCard";
import HeroImageSVG from "./components/HeroImageSVG";
import AboutImageSVG from "./components/AboutImageSVG";
import { Truck, Ship, Plane, CheckCircle, MapPin, Clock } from 'lucide-react';

export default function App() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace YOUR_FORMSPREE_URL with your Formspree endpoint
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
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">
      <NavBar />

      {/* Hero Section (Replicating UI/UX Layout with TTC Colors) */}
      <section id="home" className="pt-32 pb-20 bg-yellow-50 text-blue-900">
        <div className="container mx-auto px-6 max-w-7xl grid md:grid-cols-2 gap-12 items-center">

          {/* Left Column: Text and CTA */}
          <div>
            <span className="text-sm font-semibold uppercase text-orange-500 tracking-widest border-l-4 border-orange-500 pl-3">
              Your Global Freight Partner
            </span>
            <h1 className="text-6xl md:text-7xl font-extrabold mt-4 leading-tight">
              Reliable <span className="text-orange-500">Logistics</span> Solutions
            </h1>
            <p className="mt-6 text-lg text-gray-700 max-w-lg">
              Tiniji Trading Concepts (TTC Logistics) offers swift, secure, and reliable air, sea, and land freight services across global markets.
            </p>
            <div className="mt-8 flex space-x-4">
              <a href="#contact" className="bg-blue-900 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:bg-blue-800 transition transform hover:-translate-y-0.5">
                Get a Quote
              </a>
              <a href="#tracking" className="bg-white text-blue-900 border-2 border-blue-900 px-8 py-4 rounded-xl font-bold text-lg shadow-md hover:bg-gray-100 transition">
                Track Shipment
              </a>
            </div>
          </div>

          {/* Right Column: Engaging Image (Replicating Image 2's Style) */}
          <div className="relative flex justify-center items-center h-full min-h-[400px]">
            <HeroImageSVG className="w-full h-auto max-h-[500px]" />
            {/* Small Floating Card CTA (Inspired by Image 2's components) */}
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white p-5 rounded-xl shadow-2xl w-max border-t-4 border-orange-500">
              <p className="text-lg font-bold text-blue-900">Need immediate service?</p>
              <a href="tel:2348012345678" className="text-orange-500 font-semibold hover:underline">
                Call Us Now: +234 800 123 4567
              </a>
            </div>
          </div>
        </div>
      </section>

      <hr className="h-0.5 bg-gray-200 border-none mx-auto max-w-6xl mt-16" />

      {/* Services Section (Using ServiceCard component) */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-extrabold text-blue-900 text-center mb-4">
            Our Core Freight Services
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Connecting continents, delivering promises.
          </p>
          <div className="grid md:grid-cols-3 gap-10">
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

      {/* About Us / Why Choose TTC (Two-Column Layout Inspired by Image 2) */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-7xl grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Mission / Points */}
          <div>
            <span className="text-sm font-semibold uppercase text-orange-500 tracking-widest border-l-4 border-orange-500 pl-3">
              The TTC Difference
            </span>
            <h2 className="text-4xl font-extrabold text-blue-900 mt-4 mb-6">
              Why Trust Your Cargo with Us?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              We are committed to transparency, security, and leveraging modern technology to simplify complex logistics challenges for every client.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start text-lg text-gray-700">
                <CheckCircle className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                <span className="font-semibold">Global Network:</span> Extensive reach across all major trade routes.
              </li>
              <li className="flex items-start text-lg text-gray-700">
                <Clock className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                <span className="font-semibold">Timely Delivery:</span> Punctuality is our highest priority.
              </li>
              <li className="flex items-start text-lg text-gray-700">
                <MapPin className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                <span className="font-semibold">Seamless Tracking:</span> Real-time updates from pickup to final destination.
              </li>
            </ul>
          </div>

          {/* Right: Image */}
          <div className="relative p-4 bg-yellow-50 rounded-3xl flex justify-center items-center">
            {/* SVG Component takes up the space */}
            <AboutImageSVG className="w-full h-auto max-h-[400px]" />
          </div>
        </div>
      </section>

      {/* Call-to-Action Banner (Inspired by Image 2's CTA style) */}
      <section className="py-16 bg-blue-900 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-3">
            Ready to Move Your Cargo?
          </h2>
          <p className="text-xl font-light text-gray-300 mb-8">
            Get a free, no-obligation quote tailored to your specific freight needs.
          </p>
          <a href="#contact" className="bg-orange-500 text-white px-10 py-4 rounded-full font-bold text-xl shadow-2xl hover:bg-orange-600 transition transform hover:scale-105">
            Request a Quote
          </a>
        </div>
      </section>

      {/* Contact Section (Kept form functional, updated styling) */}
      <section id="contact" className="py-20 px-6 bg-yellow-50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-extrabold text-blue-900 text-center mb-4">
            Contact Our Experts
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            We're here to answer all your logistics questions.
          </p>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-10 rounded-3xl shadow-2xl space-y-6">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-4 border-2 border-gray-200 focus:border-orange-500 rounded-xl transition"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-4 border-2 border-gray-200 focus:border-orange-500 rounded-xl transition"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message / Inquiry Details"
              required
              className="w-full p-4 border-2 border-gray-200 focus:border-orange-500 rounded-xl h-36 resize-none"
            />
            <button type="submit" className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition transform hover:-translate-y-0.5">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center py-8">
        <div className="container mx-auto">
          <p className="text-xl font-bold mb-2">TTC LOGISTICS</p>
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} TTC Logistics. All rights reserved.</p>
          <p className="text-sm mt-2 text-gray-400">Email: info@ttclogistics.com | Phone: +234 800 123 4567</p>
        </div>
        {/* Assuming ContactMenu includes social links, etc. */}
        {/* <ContactMenu /> */}
      </footer>
    </div>
  );
}