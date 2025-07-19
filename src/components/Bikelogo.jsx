// import React from "react";
// import { motion } from "framer-motion";

// const brands = [
//   { name: "Honda", src: "/logos/Hondalogo.png" },
//   { name: "Yamaha", src: "/logos/Yamahalogo.jpeg" },
//   { name: "KTM", src: "/logos/Ktmlogo.png" },
//   { name: "BMW Motorrad", src: "/logos/BMWlogo.png" },
//   { name: "Harley-Davidson", src: "/logos/Harley-Davidsonlogo.jpeg" },
// ];

// export default function Bikelogo() {
//   return (
//     <>
//       {/* Heading */}
//       <motion.div
//         initial={{ opacity: 0, y: -30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className=" text-gray-800 py-10 text-center text-3xl font-extrabold tracking-wide"
//       >
//         TRENDING BRANDS
//       </motion.div>

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

// ✅ Use import.meta.env.BASE_URL for correct asset path on GitHub Pages
const brands = [
  { name: "Honda", src: `${import.meta.env.BASE_URL}logos/Hondalogo.png` },
  { name: "Yamaha", src: `${import.meta.env.BASE_URL}logos/Yamahalogo.jpeg` },
  { name: "KTM", src: `${import.meta.env.BASE_URL}logos/Ktmlogo.png` },
  { name: "BMW Motorrad", src: `${import.meta.env.BASE_URL}logos/BMWlogo.png` },
  { name: "Harley-Davidson", src: `${import.meta.env.BASE_URL}logos/Harley-Davidsonlogo.jpeg` },
];

export default function Bikelogo() {
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
        TRENDING BRANDS
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
