import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import FAQSection from "../components/FAQSection";
import ContactSection from "../components/ContactSection";
import FloatingContactButtons from "../components/FloatingContactButtons";

const Home = () => {
    return (
        <div className="font-sans text-gray-800 bg-gray-50 min-h-screen relative">
            <HeroSection />
            <ServicesSection />
            <AboutSection imageOnLeft={true} />
            <FAQSection />
            <ContactSection />
            <FloatingContactButtons />
        </div>
    );
};

export default Home;