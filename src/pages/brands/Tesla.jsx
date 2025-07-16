import React from "react";

const teslaCars = [
  {
    name: "Tesla Model S Plaid",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Tesla_Model_S_%28Facelift_ab_04-2016%29_%28cropped%29.jpg/500px-Tesla_Model_S_%28Facelift_ab_04-2016%29_%28cropped%29.jpg",
    price: "₹1.50 Cr (approx)",
    fuel: "Electric",
    transmission: "Automatic",
    topSpeed: "322 km/h",
    mileage: "628 km/full charge",
    engine: "Tri-Motor All-Wheel Drive",
    horsepower: "1020 bhp",
    colors: ["White", "Black", "Red", "Blue"],
    rating: 4.9,
    launchYear: 2023,
    seats: 5,
    bootSpace: "793 L",
    groundClearance: "116 mm",
    warranty: "4 years / 80,000 km | Battery: 8 years / 240,000 km",
    safety: ["Autopilot", "Airbags", "Emergency Braking", "Lane Assist"],
    infotainment: [
      "17\" Touchscreen",
      "Gaming Console",
      "Wireless Controller Support",
      "Premium Audio",
    ],
    tags: ["Electric", "Performance"],
  },
  {
    name: "Tesla Model 3",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/2019_Tesla_Model_3_Performance_AWD_Front.jpg/500px-2019_Tesla_Model_3_Performance_AWD_Front.jpg",
    price: "₹45.00 Lakh (approx)",
    fuel: "Electric",
    transmission: "Automatic",
    topSpeed: "261 km/h",
    mileage: "491 km/full charge",
    engine: "Dual Motor All-Wheel Drive",
    horsepower: "480 bhp",
    colors: ["White", "Black", "Silver", "Blue"],
    rating: 4.7,
    launchYear: 2022,
    seats: 5,
    bootSpace: "425 L",
    groundClearance: "140 mm",
    warranty: "4 years / 80,000 km | Battery: 8 years / 160,000 km",
    safety: ["Auto Emergency Braking", "Blind Spot Monitoring", "Cameras"],
    infotainment: [
      "15\" Touchscreen",
      "Navigation",
      "Netflix / YouTube",
      "Over-the-Air Updates",
    ],
    tags: ["Affordable", "Popular"],
  },
  {
    name: "Tesla Model X",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/2017_Tesla_Model_X_100D_Front.jpg/500px-2017_Tesla_Model_X_100D_Front.jpg",
    price: "₹1.20 Cr (approx)",
    fuel: "Electric",
    transmission: "Automatic",
    topSpeed: "262 km/h",
    mileage: "536 km/full charge",
    engine: "Dual Motor All-Wheel Drive",
    horsepower: "670 bhp",
    colors: ["White", "Red", "Blue", "Black"],
    rating: 4.8,
    launchYear: 2023,
    seats: 6-7,
    bootSpace: "2486 L",
    groundClearance: "137 mm",
    warranty: "4 years / 80,000 km | Battery: 8 years / 240,000 km",
    safety: ["Auto Pilot", "360° Cameras", "Collision Avoidance", "ABS"],
    infotainment: [
      "17\" Cinematic Display",
      "Yoke Steering UI",
      "Rear Screen",
      "Wireless Gaming",
    ],
    tags: ["Luxury SUV", "Falcon Wing Doors"],
  },
  {
    name: "Tesla Model Y",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Tesla_Model_Y_1X7A6211.jpg/500px-Tesla_Model_Y_1X7A6211.jpg",
    price: "₹60.00 Lakh (approx)",
    fuel: "Electric",
    transmission: "Automatic",
    topSpeed: "217 km/h",
    mileage: "505 km/full charge",
    engine: "Dual Motor AWD",
    horsepower: "456 bhp",
    colors: ["Black", "White", "Blue", "Grey"],
    rating: 4.6,
    launchYear: 2023,
    seats: 5-7,
    bootSpace: "2158 L",
    groundClearance: "167 mm",
    warranty: "4 years / 80,000 km | Battery: 8 years / 160,000 km",
    safety: ["Side Collision Warning", "Lane Departure", "Autopilot"],
    infotainment: [
      "15\" Display",
      "App Integration",
      "Streaming Services",
      "Navigation",
    ],
    tags: ["Compact SUV", "Best Seller"],
  },
  {
    name: "Tesla Cybertruck",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/2024_Tesla_Cybertruck_Foundation_Series%2C_front_left_%28Greenwich%29.jpg/500px-2024_Tesla_Cybertruck_Foundation_Series%2C_front_left_%28Greenwich%29.jpg",
    price: "₹80.00 Lakh - ₹1.20 Cr (expected)",
    fuel: "Electric",
    transmission: "Automatic",
    topSpeed: "210+ km/h",
    mileage: "800+ km/full charge",
    engine: "Tri Motor AWD (Top Variant)",
    horsepower: "800+ bhp",
    colors: ["Silver (Stainless Steel)"],
    rating: 4.9,
    launchYear: 2024,
    seats: 6,
    bootSpace: "1700 L (Vault)",
    groundClearance: "406 mm (Adjustable)",
    warranty: "To be announced",
    safety: ["Armor Glass", "Adaptive Cruise", "Autopilot", "Off-road Assist"],
    infotainment: [
      "17\" Touchscreen",
      "Voice Control",
      "Navigation",
      "Gaming Mode",
    ],
    tags: ["Futuristic", "Pickup Truck"],
  },
];

export default function Tesla() {
  return (
    <div className="min-h-screen px-4 sm:px-6 py-5">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
        Tesla Cars Collection
      </h1>
      <p className="text-gray-600 text-center mb-10">
        Welcome to the Future of Electric Innovation
      </p>

      <div className="flex flex-col gap-5">
        {teslaCars.map((car, index) => (
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
              <div className="hidden md:block px-5 py-3 text-sm text-gray-700 space-y-1 border-t">
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
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold"
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
