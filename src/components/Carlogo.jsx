// import React from "react";
// import { motion } from "framer-motion";

// const brands = [
//   { name: "Tesla", src: "/logos/Teslalogo.jpeg" },
//   { name: "Lamborghini", src: "/logos/Lamborghinilogo.png" },
//   { name: "Toyota", src: "/logos/Toyotalogo.png" },
//   { name: "Porsche", src: "/logos/Porschelogo.png" },
//   { name: "Mercedes-Benz", src: "/logos/Mercedeslogo.jpeg" },
// ];

// export default function Carlogo() {
//   return (
//     <>
     

//       {/* Logos Grid */}
//       <div className="py-8 px-4 flex flex-wrap justify-center gap-6 sm:gap-10">
//         {brands.map((brand, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             viewport={{ once: true }}
//             className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 p-2 bg-white shadow-lg rounded-xl flex items-center justify-center transition-transform hover:scale-110 duration-300 ease-in-out"
//           >
//             <img
//               src={brand.src}
//               alt={brand.name}
//               title={brand.name}
//               className="max-w-full max-h-full object-contain"
//             />
//           </motion.div>
//         ))}
//       </div>
//     </>
//   );
// }
import React from "react";
import { motion } from "framer-motion";

// ✅ Update image paths using import.meta.env.BASE_URL for GitHub Pages compatibility
const brands = [
  { name: "Tesla", src: `${import.meta.env.BASE_URL}logos/Teslalogo.jpeg` },
  { name: "Lamborghini", src: `${import.meta.env.BASE_URL}logos/Lamborghinilogo.png` },
  { name: "Toyota", src: `${import.meta.env.BASE_URL}logos/Toyotalogo.png` },
  { name: "Porsche", src: `${import.meta.env.BASE_URL}logos/Porschelogo.png` },
  { name: "Mercedes-Benz", src: `${import.meta.env.BASE_URL}logos/Mercedeslogo.jpeg` },
];

export default function Carlogo() {
  return (
    <>
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-gray-800 py-10 text-center text-3xl font-extrabold tracking-wide"
      >
        TOP CAR BRANDS
      </motion.div>

      {/* Logos Grid */}
      <div className="py-8 px-4 flex flex-wrap justify-center gap-6 sm:gap-10">
        {brands.map((brand, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 p-2 bg-white shadow-lg rounded-xl flex items-center justify-center transition-transform hover:scale-110 duration-300 ease-in-out"
          >
            <img
              src={brand.src}
              alt={brand.name}
              title={brand.name}
              className="max-w-full max-h-full object-contain"
            />
          </motion.div>
        ))}
      </div>
    </>
  );
}
