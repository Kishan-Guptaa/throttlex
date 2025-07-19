// components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Brand */}
        <div className="text-center sm:text-left">
          <h2 className="text-xl font-bold tracking-wide">ThrottleX</h2>
          <p className="text-sm text-gray-400">Ride it. Love it. Flex it.</p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col sm:flex-row items-center gap-4 text-sm">
          <a href="#/bikes" className="hover:text-gray-300 transition">Bikes</a>
          <a href="#/cars" className="hover:text-gray-300 transition">Cars</a>
          <a href="#/contact" className="hover:text-gray-300 transition">Contact</a>
        </nav>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} ThrottleX. All rights reserved. <br />
        Made with  by Kishan
      </div>
    </footer>
  );
}
