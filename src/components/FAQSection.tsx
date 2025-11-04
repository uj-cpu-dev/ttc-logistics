import { useState } from "react";
import { ChevronDown } from "lucide-react";
import FAQIllustrationSVG from "./FAQIllustrationSVG";

// --- FAQ Item Component ---
interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4 cursor-pointer">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-blue-900 pr-4">{question}</h3>
        <ChevronDown
          className={`w-6 h-6 text-orange-500 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          isOpen ? "max-h-96 mt-3" : "max-h-0"
        }`}
      >
        <p className="text-gray-700 pt-1 pb-2 pl-1 text-base leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

// --- Main FAQ Section ---
const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "What types of freight services do you offer?",
      answer:
        "We offer comprehensive logistics solutions including Air Freight (fast and time-sensitive cargo), Sea Freight (cost-effective for large volumes), and Land Transport (efficient regional/domestic delivery).",
    },
    {
      question: "How can I track my shipment?",
      answer:
        "You can track your shipment by visiting our 'Track Shipment' link in the hero section or by contacting our support team directly with your tracking number.",
    },
    {
      question: "Do you handle customs clearance?",
      answer:
        "Yes, our services include full customs support to ensure a smooth and hassle-free transit for your cargo across international borders.",
    },
    {
      question: "How do I get a quote for my shipment?",
      answer:
        "You can easily get a quote by filling out the contact form in the 'Contact Our Experts' section, or by calling us directly at the numbers provided on the website.",
    },
  ];

  return (
    <section
      id="faq"
      className="relative py-16 sm:py-20 px-6 bg-yellow-50 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-10 left-20 w-24 h-24 bg-blue-200 rounded-full opacity-25 blur-2xl"></div>
        <div className="absolute bottom-20 right-16 w-32 h-32 bg-orange-200 rounded-full opacity-20 blur-2xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="md:pr-6 order-2 md:order-1">
        <span className="text-sm font-semibold uppercase text-orange-500 tracking-wider border-l-4 border-orange-500 pl-3">
            The TTC Difference
         </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 my-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-xl text-gray-600 mb-10">
            Quick answers to your most common logistics queries.
          </p>

          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center md:text-left mt-10">
            <p className="text-gray-700 mb-3">Still have questions?</p>
            <a
              href="#contact"
              className="inline-block bg-orange-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-orange-600 transition-colors"
            >
              Contact Our Team
            </a>
          </div>
        </div>

        {/* Right Illustration */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
              {/*<FAQIllustrationSVG className="w-full max-w-md md:max-w-lg drop-shadow-lg" />*/}
              <img src={"https://images.pexels.com/photos/8487344/pexels-photo-8487344.jpeg"} alt={'faq-image'}/>
          </div>
      </div>
    </section>
  );
};

export default FAQSection;