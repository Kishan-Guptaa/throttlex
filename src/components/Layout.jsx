// components/Layout.jsx
import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="font-serif bg-[#F9F3EF]">
      <Navbar />
      <main className="pt-24 px-4 sm:px-6 lg:px-8">{children}</main>
      <Footer />
    </div>
  );
}
