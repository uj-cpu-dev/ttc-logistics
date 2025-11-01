import ServicesIllustrationSVG from "./ServicesIllustrationSVG";

const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="relative py-16 sm:py-20 px-6 bg-white overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-10 right-20 w-32 h-32 bg-orange-200 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute bottom-10 left-16 w-24 h-24 bg-blue-200 rounded-full opacity-20 blur-2xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center">
        {/* Left Illustration */}
        <div className="flex justify-center md:justify-start">
          <ServicesIllustrationSVG className="w-full max-w-md md:max-w-lg drop-shadow-lg" />
        </div>

        {/* Right Content */}
        <div className="md:pl-6">
        <span className="text-sm font-semibold uppercase text-orange-500 tracking-wider border-l-4 border-orange-500 pl-3">
           The TTC Difference
         </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 my-4">
            Our Freight & Logistics Services
          </h2>
          <p className="text-base sm:text-xl text-gray-600 mb-8 leading-relaxed">
            We provide reliable, efficient, and secure transportation services across air, land, and sea.
            Our team ensures your goods are delivered safely and on time — no matter the distance.
          </p>

          {/* Services List */}
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <span className="text-orange-500 text-xl mr-3">✈️</span>
              <p>
                <strong>Air Freight:</strong> Fast and secure cargo delivery for time-sensitive shipments.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 text-xl mr-3">🚢</span>
              <p>
                <strong>Sea Freight:</strong> Cost-effective transport for bulk or heavy shipments worldwide.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 text-xl mr-3">🚛</span>
              <p>
                <strong>Land Transport:</strong> Reliable domestic and regional delivery across multiple routes.
              </p>
            </li>
          </ul>

          {/* Restricted Materials */}
          <div className="bg-yellow-50 p-5 rounded-2xl border border-yellow-200 shadow-sm mb-10">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              ⚠️ Materials We Do Not Move
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm sm:text-base">
              <li>Explosives and hazardous chemicals</li>
              <li>Perishable or temperature-sensitive goods without prior arrangement</li>
              <li>Illegal or restricted items under customs regulations</li>
              <li>High-value or fragile items without secure packaging</li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="text-center md:text-left">
            <a
              href="#contact"
              className="inline-block bg-orange-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-orange-600 transition-colors"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;