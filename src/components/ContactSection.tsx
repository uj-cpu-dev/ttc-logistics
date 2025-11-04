/*import ContactForm from "./ContactForm";
const ContactSection = () => {
    return (
        <section id="contact" className="py-16 sm:py-20 px-6 bg-yellow-50">
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 text-center mb-4">
                    Contact Our Experts
                </h2>
                <p className="text-base sm:text-xl text-gray-600 text-center mb-10 sm:mb-12">
                    We're here to answer all your logistics questions.
                </p>
                <ContactForm/>
            </div>
        </section>
    );
};

export default ContactSection;*/

import ContactForm from "./ContactForm";

const ContactSection = () => {
    return (
        <section
            id="contact"
            className="relative py-16 sm:py-24 px-6 text-blue-900 overflow-hidden"
        >
            {/* === Background Image === */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.pexels.com/photos/8867250/pexels-photo-8867250.jpeg?auto=compress&cs=tinysrgb&w=1600')",
                    backgroundAttachment: "fixed",
                }}
            />
            {/* === Lighter Overlay === */}
            <div className="absolute inset-0 bg-yellow-50/70 backdrop-blur-[1px]"></div>

            {/* === Content === */}
            <div className="relative z-10 container mx-auto max-w-7xl">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 text-center mb-4 drop-shadow-sm">
                    Contact Our Experts
                </h2>
                <p className="text-base sm:text-xl text-blue-900/90 text-center mb-10 sm:mb-12 max-w-2xl mx-auto">
                    We're here to answer all your logistics questions.
                </p>

                <div className="bg-white/95 rounded-3xl shadow-2xl p-8 sm:p-12 backdrop-blur-sm">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
