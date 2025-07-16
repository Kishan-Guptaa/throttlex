import React from "react";

const ktmBikes = [
  {
    name: "KTM 390 Duke",
    image: "https://imgd.aeplcdn.com/664x374/n/bw/models/colors/ktm-select-model-atlantic-blue-1694407102580.png?q=80",
    price: "₹2.45 Lakh",
    fuel: "Petrol",
    transmission: "6-speed Manual",
    topSpeed: "160 km/h",
    mileage: "25 km/l",
    engine: "373.2 cc Liquid-cooled Single-cylinder",
    horsepower: "43 bhp @ 9,500 rpm",
    colors: ["Orange", "Black", "White"],
    rating: 4.8,
    launchYear: 2023,
    seats: 2,
    tankCapacity: "13.4 L",
    groundClearance: "178 mm",
    warranty: "2 years / Unlimited km",
    safety: ["ABS", "Dual Disc Brakes", "LED Headlight"],
    features: ["TFT Display", "Ride-by-Wire", "Slipper Clutch"],
    tags: ["Naked", "Streetfighter"],
  },
  {
    name: "KTM RC 390",
    image: "https://imgd.aeplcdn.com/664x374/n/bw/models/colors/ktm-select-model-gp-edition-1670841965124.png?q=80",
    price: "₹3.05 Lakh",
    fuel: "Petrol",
    transmission: "6-speed Manual",
    topSpeed: "172 km/h",
    mileage: "22 km/l",
    engine: "373.2 cc Liquid-cooled Single-cylinder",
    horsepower: "43 bhp @ 9,500 rpm",
    colors: ["Black", "White", "Orange"],
    rating: 4.7,
    launchYear: 2022,
    seats: 2,
    tankCapacity: "13.4 L",
    groundClearance: "135 mm",
    warranty: "2 years / Unlimited km",
    safety: ["Dual Channel ABS", "LED Lights"],
    features: ["Race Fairing", "Quickshifter", "TFT Display"],
    tags: ["Sportbike", "Track"],
  },
  {
    name: "KTM 250 Duke",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/ktm-duke-250-standard1728459958743.jpg?q=80",
    price: "₹2.10 Lakh",
    fuel: "Petrol",
    transmission: "6-speed Manual",
    topSpeed: "140 km/h",
    mileage: "30 km/l",
    engine: "248.8 cc Liquid-cooled Single-cylinder",
    horsepower: "30 bhp @ 8,500 rpm",
    colors: ["Orange", "Black", "White"],
    rating: 4.6,
    launchYear: 2023,
    seats: 2,
    tankCapacity: "13.4 L",
    groundClearance: "178 mm",
    warranty: "2 years / Unlimited km",
    safety: ["ABS", "Disc Brakes"],
    features: ["LED Headlight", "Digital Console"],
    tags: ["Naked", "Entry-level"],
  },
  {
    name: "KTM RC 200",
    image: "https://imgd.aeplcdn.com/664x374/n/bw/models/colors/ktm-select-model-gp-editiond-1670826275682.png?q=80",
    price: "₹1.80 Lakh",
    fuel: "Petrol",
    transmission: "6-speed Manual",
    topSpeed: "135 km/h",
    mileage: "35 km/l",
    engine: "199.5 cc Liquid-cooled Single-cylinder",
    horsepower: "25 bhp @ 9,000 rpm",
    colors: ["White", "Black", "Orange"],
    rating: 4.5,
    launchYear: 2022,
    seats: 2,
    tankCapacity: "12 L",
    groundClearance: "135 mm",
    warranty: "2 years / Unlimited km",
    safety: ["ABS", "Disc Brakes"],
    features: ["Full Fairing", "TFT Console"],
    tags: ["Sport", "Track-ready"],
  },
  {
    name: "KTM 250 Adventure (390 Adv sibling)",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/ktm-250-adventure-2025-standard1738766794300.jpg?q=80",
    price: "₹2.25 Lakh",
    fuel: "Petrol",
    transmission: "6-speed Manual",
    topSpeed: "145 km/h",
    mileage: "30 km/l",
    engine: "248.8 cc Liquid-cooled Single-cylinder",
    horsepower: "30 bhp",
    colors: ["Orange", "Black"],
    rating: 4.6,
    launchYear: 2023,
    seats: 2,
    tankCapacity: "14 L",
    groundClearance: "220 mm",
    warranty: "2 years / Unlimited km",
    safety: ["ABS", "Disc Brakes"],
    features: ["Long Travel Suspension", "TFT Display"],
    tags: ["Adventure", "Touring"],
  },
  {
    name: "KTM 390 Adventure",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/ktm-390-adventure-x-standard1741327263132.jpg?q=80",
    price: "₹3.40 Lakh",
    fuel: "Petrol",
    transmission: "6-speed Manual",
    topSpeed: "160 km/h",
    mileage: "28 km/l",
    engine: "373.2 cc Liquid-cooled Single-cylinder",
    horsepower: "43 bhp",
    colors: ["Orange", "Black", "White"],
    rating: 4.7,
    launchYear: 2022,
    seats: 2,
    tankCapacity: "14 L",
    groundClearance: "220 mm",
    warranty: "2 years / Unlimited km",
    safety: ["Cornering ABS", "LED Lights"],
    features: ["Dual Channel TFT", "Adventure Ready"],
    tags: ["Adventure", "Off-road"],
  },
];

export default function KTM() {
  return (
    <div className="min-h-screen px-4 sm:px-6 py-5">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
        KTM Bikes Collection
      </h1>
      <p className="text-gray-600 text-center mb-10">
        Performance • Agility • Adventure
      </p>

      <div className="flex flex-col gap-5">
        {ktmBikes.map((bike, idx) => (
          <div
            key={idx}
            className={`bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row ${
              idx % 2 === 1 ? "md:flex-row-reverse" : ""
            } hover:shadow-2xl transition-all duration-300`}
          >
            {/* Image & Summary */}
            <div className="md:w-1/2 w-full flex flex-col">
              <div className="w-full h-64">
                <img
                  src={bike.image}
                  alt={bike.name}
                  className="w-full h-full object-cover object-center transition-all duration-300"
                />
              </div>
              <div className="block px-5 py-3 text-sm text-gray-700 space-y-1 border-t">
                <p><strong>Price:</strong> <span className="text-green-600">{bike.price}</span></p>
                <p><strong>Launch Year:</strong> {bike.launchYear}</p>
                <p><strong>Top Speed:</strong> {bike.topSpeed}</p>
                <p><strong>Mileage:</strong> {bike.mileage}</p>
                <p><strong>Transmission:</strong> {bike.transmission}</p>
              </div>
            </div>

            {/* Details Section */}
            <div className="md:w-1/2 w-full p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{bike.name}</h2>
                <div className="flex flex-wrap gap-2 mb-3">
                  {bike.tags.map((tg, i) => (
                    <span
                      key={i}
                      className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-semibold"
                    >
                      {tg}
                    </span>
                  ))}
                </div>
                <div className="text-sm text-gray-700 space-y-1 leading-relaxed">
                  <p><strong>Engine:</strong> {bike.engine}</p>
                  <p><strong>Power:</strong> {bike.horsepower}</p>
                  <p><strong>Seats:</strong> {bike.seats}</p>
                  <p><strong>Tank:</strong> {bike.tankCapacity}</p>
                  <p><strong>Ground Clearance:</strong> {bike.groundClearance}</p>
                  <p><strong>Safety:</strong> {bike.safety.join(", ")}</p>
                  <p><strong>Features:</strong> {bike.features.join(", ")}</p>
                  <p><strong>Rating:</strong> ⭐ {bike.rating}</p>
                </div>
              </div>
              <button className="mt-6 w-fit bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white py-2 px-5 rounded-lg hover:opacity-90 transition-all duration-300 shadow">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
