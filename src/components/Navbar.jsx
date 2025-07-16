import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed z-50 transition-all duration-500 ease-in-out
        backdrop-blur-md bg-[#1B3C53]/70 shadow-md font-serif rounded-2xl
        ${isScrolled
          ? "top-4 right-4 left-auto transform-none w-fit px-4 py-2"
          : "top-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] px-10 py-4"}
      `}
    >
      <div className="flex items-center gap-4">
        {/* Profile Image always shown at left */}
        <img
          src="/profile1.jpg" // ✅ Make sure the image path is correct
          alt="Profile"
          className="w-14 h-14 rounded-full border-2 border-white object-cover"
        />

        {/* Brand */}
        <div className="text-white text-xl md:text-2xl font-bold tracking-wide">
          THROTTLEX
        </div>

        {/* Links - hidden when scrolled */}
        {!isScrolled && (
          <>
            {/* Hamburger for mobile */}
            <div className="ml-auto md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

            {/* Desktop Links */}
            <ul className="hidden md:flex gap-4 md:gap-8 text-lg md:text-xl text-white font-medium ml-auto">
              <li>
                <a href="/bikes" className="hover:text-gray-300 transition">
                  Bikes
                </a>
              </li>
              <li>
                <a href="/cars" className="hover:text-gray-300 transition">
                  Cars
                </a>
              </li>
            </ul>
          </>
        )}
      </div>

      {/* Mobile Menu - hidden when scrolled */}
      {!isScrolled && isOpen && (
        <ul className="mt-4 md:hidden flex flex-col gap-4 text-white text-lg font-medium">
          <li>
            <a href="/bikes" className="hover:text-gray-300 transition">Bikes</a>
          </li>
          <li>
            <a href="/cars" className="hover:text-gray-300 transition">Cars</a>
          </li>
        </ul>
      )}
    </nav>
  );
}
