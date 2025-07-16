import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const bmwCars = [
  {
    name: "BMW M4 Competition",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/2021_BMW_M4_Competition_Automatic_3.0_Front.jpg/500px-2021_BMW_M4_Competition_Automatic_3.0_Front.jpg",
    price: "₹1.53 Cr",
    fuel: "Petrol",
    transmission: "Automatic",
    topSpeed: "250 km/h",
    mileage: "9.7 km/l",
    engine: "3.0L Twin-Turbo Inline-6",
    horsepower: "503 bhp",
    colors: ["Yellow", "Black", "White", "Blue"],
    rating: 4.8,
    launchYear: 2023,
    seats: 4,
    bootSpace: "440 L",
    groundClearance: "120 mm",
    warranty: "3 years / Unlimited km",
    safety: ["6 Airbags", "ABS", "Traction Control", "Collision Warning"],
    infotainment: [
      '12.3" Touchscreen',
      "Apple CarPlay",
      "Android Auto",
      "Harman Kardon Speakers",
    ],
    tags: ["Luxury", "Performance"],
  },
  {
    name: "BMW X5",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/2019_BMW_X5_M50d_Automatic_3.0.jpg/500px-2019_BMW_X5_M50d_Automatic_3.0.jpg",
    price: "₹96.00 Lakh",
    fuel: "Diesel / Petrol",
    transmission: "Automatic",
    topSpeed: "230 km/h",
    mileage: "13.38 km/l",
    engine: "3.0L Turbocharged Inline-6",
    horsepower: "335 bhp",
    colors: ["White", "Black", "Grey", "Blue"],
    rating: 4.7,
    launchYear: 2022,
    seats: 5,
    bootSpace: "650 L",
    groundClearance: "214 mm",
    warranty: "2 years / Unlimited km",
    safety: [
      "8 Airbags",
      "Lane Assist",
      "Blind Spot Monitor",
      "Rear Camera",
    ],
    infotainment: [
      '14.9" Display',
      "Navigation",
      "Gesture Control",
      "Bowers & Wilkins Audio",
    ],
    tags: ["Top Seller", "Family SUV"],
  },
  {
    name: "BMW iX (Electric)",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/BMW_iX_IAA_2021_1X7A0204.jpg/500px-BMW_iX_IAA_2021_1X7A0204.jpg",
    price: "₹1.39 Cr",
    fuel: "Electric",
    transmission: "Automatic",
    topSpeed: "200 km/h",
    mileage: "425 km/full charge",
    engine: "Dual Electric Motors",
    horsepower: "326 bhp",
    colors: ["White", "Black", "Red", "Grey"],
    rating: 4.9,
    launchYear: 2024,
    seats: 5,
    bootSpace: "500 L",
    groundClearance: "195 mm",
    warranty: "8 years / 160,000 km (Battery)",
    safety: [
      "Collision Avoidance",
      "Autonomous Braking",
      "Lane Keep Assist",
      "Surround Cameras",
    ],
    infotainment: [
      "Curved Display",
      "iDrive 8",
      "Voice Control",
      "Wireless Charging",
    ],
    tags: ["Electric", "Futuristic"],
  },
  {
    name: "BMW 3 Series Gran Limousine",
    image:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/139177/3-series-gran-limousine-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
    price: "₹60.60 Lakh",
    fuel: "Petrol / Diesel",
    transmission: "Automatic",
    topSpeed: "235 km/h",
    mileage: "15 km/l",
    engine: "2.0L Turbo Inline-4",
    horsepower: "255 bhp",
    colors: ["Blue", "White", "Grey", "Black"],
    rating: 4.6,
    launchYear: 2022,
    seats: 5,
    bootSpace: "480 L",
    groundClearance: "165 mm",
    warranty: "3 years / Unlimited km",
    safety: ["6 Airbags", "Parking Assist", "ABS with EBD", "Crash Sensor"],
    infotainment: [
      '10.25" Touchscreen',
      "Voice Control",
      "Hi-Fi Speakers",
      "ConnectedDrive",
    ],
    tags: ["Spacious", "Business Class"],
  },
  {
    name: "BMW Z4 Roadster",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/2021_BMW_Z4_M40i_3.0.jpg/500px-2021_BMW_Z4_M40i_3.0.jpg",
    price: "₹90.90 Lakh",
    fuel: "Petrol",
    transmission: "Automatic",
    topSpeed: "250 km/h",
    mileage: "14.37 km/l",
    engine: "2.0L Turbocharged Petrol",
    horsepower: "255 bhp",
    colors: ["Red", "White", "Blue", "Black"],
    rating: 4.7,
    launchYear: 2023,
    seats: 2,
    bootSpace: "281 L",
    groundClearance: "114 mm",
    warranty: "2 years / Unlimited km",
    safety: [
      "4 Airbags",
      "Roll-over Protection",
      "Traction Control",
      "Brake Assist",
    ],
    infotainment: [
      '8.8" Touchscreen',
      "Wireless Apple CarPlay",
      "Navigation",
      "Hi-Fi Sound System",
    ],
    tags: ["Sport", "Convertible"],
  },
];

export default function Bmw() {
  return (
    <div className="min-h-screen px-4 sm:px-6 py-5">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
        BMW Cars Collection
      </h1>
      <p className="text-gray-600 text-center mb-10">
        Explore the perfect blend of Power, Luxury & Technology
      </p>

      <div className="flex flex-col gap-5">
        {bmwCars.map((car, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } hover:shadow-2xl transition-all duration-300`}
          >
            {/* Image & Summary */}
            <div className="md:w-1/2 w-full flex flex-col">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-64 object-cover transition-all duration-300"
              />
              <div className="hidden md:block  px-5 py-3 text-sm text-gray-700 space-y-1 border-t">
                <p><strong>Price:</strong> <span className="text-green-600">{car.price}</span></p>
                <p><strong>Launch Year:</strong> {car.launchYear}</p>
                <p><strong>Fuel:</strong> {car.fuel}</p>
                <p><strong>Transmission:</strong> {car.transmission}</p>
                <p><strong>Top Speed:</strong> {car.topSpeed}</p>
                <p><strong>Mileage:</strong> {car.mileage}</p>
              </div>
            </div>

            {/* Details Section */}
            <div className="md:w-1/2 w-full p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{car.name}</h2>
                <div className="flex flex-wrap gap-2 mb-3">
                  {car.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-[#1B3C53] px-2 py-1 rounded-full text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-sm text-gray-700 space-y-1 leading-relaxed">
                  <p><strong>Engine:</strong> {car.engine}</p>
                  <p><strong>Horsepower:</strong> {car.horsepower}</p>
                  <p><strong>Seating Capacity:</strong> {car.seats}</p>
                  <p><strong>Boot Space:</strong> {car.bootSpace}</p>
                  <p><strong>Ground Clearance:</strong> {car.groundClearance}</p>
                  <p><strong>Warranty:</strong> {car.warranty}</p>
                  <p><strong>Colors:</strong> {car.colors.join(", ")}</p>
                  <p><strong>Rating:</strong> ⭐ {car.rating}</p>
                  <p><strong>Safety:</strong> {car.safety.join(", ")}</p>
                  <p><strong>Infotainment:</strong> {car.infotainment.join(", ")}</p>
                </div>
              </div>
              <button className="mt-6 w-fit bg-gradient-to-r from-[#1B3C53] to-[#456882] text-white py-2 px-5 rounded-lg hover:opacity-90 transition-all duration-300 shadow">
                Book Test Drive
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}