import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BikeCompanies = [
  {
    name: "Bajaj Auto",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Bajaj_Auto_Ltd_logo.svg/800px-Bajaj_Auto_Ltd_logo.svg.png",
    route: "/bikebrands/BajajAuto",
  },
  {
    name: "BMW Motorrad",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Logo_BMW_Motorrad_2021.svg/1920px-Logo_BMW_Motorrad_2021.svg.png",
    route: "/bikebrands/BMWMotorrad",
  },
  {
    name: "CFMoto",
    src: "https://upload.wikimedia.org/wikipedia/commons/7/76/Cfmoto.png",
    route: "/bikebrands/CFMoto",
  },
  {
    name: "Ducati",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Ducati_red_logo.svg/330px-Ducati_red_logo.svg.png",
    route: "/bikebrands/Ducati",
  },
  {
    name: "Harley-Davidson",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Harley_Davidson_logo.gif/260px-Harley_Davidson_logo.gif",
    route: "/bikebrands/HarleyDavidson",
  },
  {
    name: "Hero MotoCorp",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Hero_MotoCorp.svg/270px-Hero_MotoCorp.svg.png",
    route: "/bikebrands/HeroMotoCorp",
  },
  {
    name: "Kawasaki",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Kawasaki_Motors_logo.svg/1920px-Kawasaki_Motors_logo.svg.png",
    route: "/bikebrands/Kawasaki",
  },
  {
    name: "KTM",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/KTM-Logo.svg/500px-KTM-Logo.svg.png",
    route: "/bikebrands/KTM",
  },
  {
    name: "Royal Enfield",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Royal_Enfield_logo_new.svg/500px-Royal_Enfield_logo_new.svg.png",
    route: "/bikebrands/RoyalEnfield",
  },
  {
    name: "Suzuki",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Suzuki_logo_2025.svg/330px-Suzuki_logo_2025.svg.png",
    route: "/bikebrands/Suzuki",
  },
  {
    name: "TVS Motor",
    src: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/TVS_Motor_logo.svg/500px-TVS_Motor_logo.svg.png",
    route: "/bikebrands/TVSMotor",
  },
  {
    name: "Yamaha",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Yamaha_logo.svg/500px-Yamaha_logo.svg.png",
    route: "/bikebrands/Yamaha",
  },
];

export default function BikeCompaniesGrid() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const skeletonArray = new Array(12).fill(0); // Placeholder count

  return (
    <section className="min-h-screen py-12 px-4 sm:px-6 lg:px-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 text-[#1B3C53]">
        Bike Companies
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
        {loading
          ? skeletonArray.map((_, index) => (
              <div
                key={index}
                className="bg-gray-200 animate-pulse rounded-2xl p-5 flex flex-col items-center text-center shadow-md"
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 bg-gray-300 rounded-full mb-3"></div>
                <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
              </div>
            ))
          : BikeCompanies.map((brand, index) => (
              <Link
                key={index}
                to={brand.route}
                className="bg-white shadow-md hover:shadow-xl rounded-2xl p-5 flex flex-col items-center transition-transform duration-300 hover:scale-105 text-center"
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 aspect-square mb-3 flex items-center justify-center">
                  <img
                    src={brand.src}
                    alt={brand.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h2 className="text-base sm:text-lg font-medium text-gray-800">
                  {brand.name}
                </h2>
              </Link>
            ))}
      </div>
    </section>
  );
}
