import ServiceCard from "../components/ServiceCard";
import { Truck, Ship, Plane } from "lucide-react";

const ServicesSection = () => {
  return (
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
  );
};

export default ServicesSection;