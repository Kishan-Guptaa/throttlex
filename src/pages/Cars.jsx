import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const carCompanies = [
  {
    name: "BMW",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
    route: "/brands/bmw",
  },
  {
    name: "Ferrari",
    src: "https://upload.wikimedia.org/wikipedia/sco/thumb/d/d1/Ferrari-Logo.svg/516px-Ferrari-Logo.svg.png?20150601144908",
    route: "/brands/ferrari",
  },
  {
    name: "Hyundai",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hyundai_Motor_Company_logo.svg/1200px-Hyundai_Motor_Company_logo.svg.png",
    route: "/brands/hyundai",
  },
  {
    name: "Kia",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/KIA_logo2.svg/1280px-KIA_logo2.svg.png",
    route: "/brands/kia",
  },
  {
    name: "Lamborghini",
    src: "https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Lamborghini_Logo.svg/800px-Lamborghini_Logo.svg.png",
    route: "/brands/lamborghini",
  },
  {
    name: "Maruti",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Maruti_Suzuki_logo.svg/1920px-Maruti_Suzuki_logo.svg.png",
    route: "/brands/maruti",
  },
  {
    name: "Mercedes",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Mercedes-Benz_Logo_2010.svg/1920px-Mercedes-Benz_Logo_2010.svg.png",
    route: "/brands/mercedesbenz",
  },
  {
    name: "MG",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/MG_Motor_2021_logo.svg/800px-MG_Motor_2021_logo.svg.png",
    route: "/brands/mg",
  },
  {
    name: "Porsche",
    src: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Porsche_logo.svg/1280px-Porsche_logo.svg.png",
    route: "/brands/porsche",
  },
  {
    name: "Tata",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/800px-Tata_logo.svg.png",
    route: "/brands/tata",
  },
  {
    name: "Tesla",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/1200px-Tesla_logo.png",
    route: "/brands/tesla",
  },
  {
    name: "Toyota",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Toyota.svg/1920px-Toyota.svg.png",
    route: "/brands/toyota",
  },
];

export default function Cars() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const skeletonArray = new Array(12).fill(0);

  return (
    <section className="min-h-screen py-12 px-4 sm:px-6 lg:px-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 text-[#1B3C53]">
        Car Companies
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
          : carCompanies.map((brand, index) => (
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
