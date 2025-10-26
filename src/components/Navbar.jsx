import React, { useState, useEffect } from "react";
import { Menu, X, GraduationCap } from "lucide-react";

function Navbar({ mobileMenuOpen, setMobileMenuOpen }) {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#staff", label: "Our Staff" },
    { href: "#achievements", label: "Achievements" },
    { href: "#gallery", label: "Gallery" },
    { href: "#datesheet", label: "Date Sheet" },
    { href: "#contact", label: "Contact" },
    { href: "#SocialMedia", label: "Platforms" },
  ];

  // Detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide navbar on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ease-in-out ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Glassmorphism background */}
      <div className="overflow-x-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 backdrop-blur-md bg-opacity-95 shadow-2xl border-b border-white border-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <GraduationCap
                    className="text-blue-900"
                    size={24}
                    strokeWidth={2.5}
                  />
                </div>
                <div className="absolute inset-0 bg-yellow-400 rounded-xl blur-md opacity-30 group-hover:opacity-50 transition-opacity"></div>
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold hidden sm:block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Bright Moon Public High School
                </h1>
                <h1 className="text-xl font-bold sm:hidden bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  BMPHS
                </h1>
                <p className="text-xs text-blue-200 hidden lg:block">
                  Excellence in Education
                </p>
              </div>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-white font-medium group overflow-hidden rounded-lg transition-all duration-300 hover:bg-white hover:bg-opacity-10"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="relative z-10 group-hover:text-yellow-300 transition-colors duration-200">
                    {link.label}
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* Mobile button */}
            <button
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="relative w-6 h-6">
                <Menu
                  size={24}
                  className={`absolute inset-0 transition-all duration-300 ${
                    mobileMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                  }`}
                />
                <X
                  size={24}
                  className={`absolute inset-0 transition-all duration-300 ${
                    mobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-gradient-to-b from-blue-800 to-blue-900 px-4 pb-6 pt-2 space-y-1 border-t border-white border-opacity-10">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-3 rounded-lg text-white hover:bg-white hover:bg-opacity-10 hover:text-yellow-300 transition-all duration-200 transform hover:translate-x-2 font-medium"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  animation: mobileMenuOpen
                    ? `slideIn 0.3s ease-out ${index * 50}ms forwards`
                    : "none",
                  opacity: 0,
                }}
              >
                <span className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3"></span>
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
