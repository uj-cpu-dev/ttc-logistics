import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Track Your Shipment", href: "/track", dropdown: false },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Brand */}
          <a
            href="/"
            className="text-2xl sm:text-3xl font-extrabold text-blue-900 tracking-wide hover:text-orange-500 transition"
          >
            TTC <span className="text-orange-500">LOGISTICS</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center text-gray-700 hover:text-orange-500 font-semibold transition duration-200"
              >
                {item.name}
                {item.dropdown && <ChevronDown className="w-4 h-4 ml-1" />}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-orange-500 text-white px-5 py-2.5 rounded-full font-bold shadow-lg hover:bg-orange-600 transition"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-900 p-2 rounded-md hover:bg-gray-100 transition"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden bg-white shadow-inner transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col py-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-6 py-3 text-blue-900 hover:bg-orange-500 hover:text-white font-medium transition"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block mx-4 mt-2 text-center bg-orange-500 text-white px-5 py-2.5 rounded-full font-bold hover:bg-orange-600 transition"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
