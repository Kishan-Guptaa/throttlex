import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative text-white px-4 sm:px-8 md:px-20 ">
      {/* Top Navbar */}
      <Navbar />

      {/* Centered Hero Card */}
      <div className="flex justify-center items-center mt-16">
        <div
          className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}hero.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] z-0" />

          {/* Hero Content */}
          <div className="relative z-10 space-y-4 p-8 sm:p-12 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-2xl sm:text-4xl md:text-5xl font-bold text-zinc-300 drop-shadow-[5px_5px_8px_rgba(0,0,0,0.8)]"
            >
              Unleashing the Beast on Two and Four Wheels
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="text-base sm:text-xl md:text-2xl font-medium text-zinc-300 drop-shadow-[3px_3px_6px_rgba(0,0,0,0.8)]"
            >
              Explore the world of speed, style, and machines.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
            >
              <button
                onClick={() => navigate("/bikes")}
                className="bg-[#1B3C53] text-white px-6 py-2 rounded-lg shadow-lg hover:bg-[#254e6b] transition"
              >
                Explore Bikes
              </button>
              <button
                onClick={() => navigate("/cars")}
                className="bg-[#1B3C53] text-white px-6 py-2 rounded-lg shadow-lg hover:bg-[#254e6b] transition"
              >
                Explore Cars
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
