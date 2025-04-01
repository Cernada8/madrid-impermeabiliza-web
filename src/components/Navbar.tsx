
import React, { useState, useEffect } from "react";
import { Phone, Droplets } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container-padding mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <a href="/" className="flex items-center">
              <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white p-2 rounded-lg shadow-lg flex items-center">
                <Droplets size={24} className="mr-1" />
                <span className="font-heading font-bold text-xl md:text-2xl tracking-tight">
                  GLOTEBER
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              <li>
                <a
                  href="#inicio"
                  className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#nosotros"
                  className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#trabajos"
                  className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
                >
                  Trabajos
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
            <a
              href="tel:+34666777888"
              className="flex items-center text-blue-800 font-semibold"
            >
              <Phone size={18} className="mr-2" />
              <span>666 777 888</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <a
                  href="#inicio"
                  className="block text-slate-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="block text-slate-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#nosotros"
                  className="block text-slate-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#trabajos"
                  className="block text-slate-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Trabajos
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="block text-slate-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contacto
                </a>
              </li>
            </ul>
            <a
              href="tel:+34666777888"
              className="flex items-center mt-4 text-blue-800 font-semibold"
            >
              <Phone size={18} className="mr-2" />
              <span>666 777 888</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
