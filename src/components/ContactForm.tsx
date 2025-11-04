import { useState } from "react";

const ContactForm = () => {
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
    );
};

export default ContactForm;