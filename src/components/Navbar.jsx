import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; // Assuming you're using React Router

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
        {/* Profile Image always visible */}
        <Link to="/">
          <img
            src="/profile1.jpg" // ✅ Ensure this path exists in your public folder
            alt="Profile"
            className="w-14 h-14 rounded-full border-2 border-white object-cover"
          />
        </Link>

        {/* Logo or Brand Name */}
        <Link
          to="/"
          className="text-white text-xl md:text-2xl font-bold tracking-wide"
        >
          THROTTLEX
        </Link>

        {/* Hamburger Menu Button - visible only on mobile */}
        {!isScrolled && (
          <div className="ml-auto md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        )}

        {/* Desktop Nav Links */}
        {!isScrolled && (
          <ul className="hidden md:flex gap-4 md:gap-8 text-lg md:text-xl text-white font-medium ml-auto">
            <li>
              <Link to="/bikes" className="hover:text-gray-300 transition">
                Bikes
              </Link>
            </li>
            <li>
              <Link to="/cars" className="hover:text-gray-300 transition">
                Cars
              </Link>
            </li>
          </ul>
        )}
      </div>

      {/* Mobile Dropdown Links */}
      {!isScrolled && isOpen && (
        <ul className="mt-4 md:hidden flex flex-col gap-4 text-white text-lg font-medium">
          <li>
            <Link to="/bikes" className="hover:text-gray-300 transition">
              Bikes
            </Link>
          </li>
          <li>
            <Link to="/cars" className="hover:text-gray-300 transition">
              Cars
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
