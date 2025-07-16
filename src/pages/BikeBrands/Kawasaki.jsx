import React from "react";

const kawasakiBikes = [
  {
    name: "Kawasaki Ninja 300",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/--standard1745397850563.jpg?q=80",
    price: "₹4.99 Lakh",
    fuel: "Petrol",
    transmission: "6-speed Manual",
    topSpeed: "160 km/h",
    mileage: "30 km/l",
    engine: "296 cc Liquid-cooled Parallel-Twin",
    horsepower: "39 bhp",
    colors: ["Lime Green", "Black", "White"],
    rating: 4.5,
    launchYear: 2022,
    seats: 2,
    tankCapacity: "17 L",
    groundClearance: "130 mm",
    warranty: "2 years / Unlimited km",
    safety: ["ABS", "Disc Brakes", "Tubeless Tyres"],
    features: ["LED Headlight", "Digital Display", "Twin Exhaust"],
    tags: ["Sport", "Beginner"],
  },
  {
    name: "Kawasaki Ninja ZX-10R",
    image: "https://imgd.aeplcdn.com/664x374/n/bw/models/colors/kawasaki-select-model-pearl-robotic-white-1662979616807.jpg?q=80",
    price: "₹16.99 Lakh",
    fuel: "Petrol",
    transmission: "6-speed Manual",
    topSpeed: "298 km/h",
    mileage: "15 km/l",
    engine: "998 cc Liquid-cooled Inline‑4",
    horsepower: "200 bhp",
    colors: ["Green", "Black", "White"],
    rating: 4.9,
    launchYear: 2023,
    seats: 2,
    tankCapacity: "17 L",
    groundClearance: "140 mm",
    warranty: "2 years / Unlimited km",
    safety: ["ABS", "Traction Control", "KTRC"],
    features: ["Quick Shifter", "Dual Throttle Valves", "TFT Display"],
    tags: ["Supersport", "Track"],
  },
  {
    name: "Kawasaki Z650",
    image: "https://imgd.aeplcdn.com/664x374/n/bw/models/colors/kawasaki-select-model-candy-lime-green-1628747796894.png?q=80",
    price: "₹6.49 Lakh",
    fuel: "Petrol",
    transmission: "6-speed Manual",
    topSpeed: "200 km/h",
    mileage: "25 km/l",
    engine: "649 cc Liquid-cooled Parallel-Twin",
    horsepower: "68 bhp",
    colors: ["Green", "Black", "Red"],
    rating: 4.6,
    launchYear: 2022,
    seats: 2,
    tankCapacity: "15 L",
    groundClearance: "130 mm",
    warranty: "2 years / Unlimited km",
    safety: ["ABS", "Disc Brakes", "Tubeless Tyres"],
    features: ["LED Lights", "Backlit Instrument", "Comfort Seat"],
    tags: ["Naked", "Urban"],
  },
  {
    name: "Kawasaki Vulcan S",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/--standard1728554869402.jpg?q=80",
    price: "₹8.49 Lakh",
    fuel: "Petrol",
    transmission: "6-speed Manual",
    topSpeed: "170 km/h",
    mileage: "22 km/l",
    engine: "649 cc Liquid-cooled Parallel-Twin",
    horsepower: "61 bhp",
    colors: ["Matte Black", "Metallic Spark Black"],
    rating: 4.6,
    launchYear: 2023,
    seats: 2,
    tankCapacity: "14 L",
    groundClearance: "135 mm",
    warranty: "2 years / Unlimited km",
    safety: ["ABS", "Disc Brakes", "Tubeless Tyres"],
    features: ["Ergo-Fit", "LED Lights", "Adjustable Levers"],
    tags: ["Cruiser", "Comfort"],
  },
  {
    name: "Kawasaki Versys 650",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/--standard1745923380413.jpg?q=80",
    price: "₹7.99 Lakh",
    fuel: "Petrol",
    transmission: "6-speed Manual",
    topSpeed: "210 km/h",
    mileage: "23 km/l",
    engine: "649 cc Liquid-cooled Parallel-Twin",
    horsepower: "68 bhp",
    colors: ["Lime Green", "Pearl White", "Metallic Flat Blazed Copper"],
    rating: 4.7,
    launchYear: 2022,
    seats: 2,
    tankCapacity: "21 L",
    groundClearance: "165 mm",
    warranty: "2 years / Unlimited km",
    safety: ["ABS", "Disc Brakes", "Tubeless Tyres"],
    features: ["Windscreen", "Panniers Ready", "Digital Console"],
    tags: ["Adventure", "Touring"],
  },
  {
    name: "Kawasaki Z H2",
    image: "https://imgd.aeplcdn.com/664x374/n/bw/models/colors/kawasaki-select-model-metallic-carbon-grey-ebony-1691479581158.png?q=80",
    price: "₹23.49 Lakh",
    fuel: "Petrol",
    transmission: "6-speed Manual",
    topSpeed: "280 km/h",
    mileage: "12 km/l",
    engine: "998 cc Supercharged Inline‑4",
    horsepower: "200 bhp",
    colors: ["Metallic Spark Black", "Candy Lime Green"],
    rating: 4.9,
    launchYear: 2023,
    seats: 2,
    tankCapacity: "19 L",
    groundClearance: "135 mm",
    warranty: "2 years / Unlimited km",
    safety: ["ABS", "Traction Control", "Power Modes"],
    features: ["TFT Display", "Quick Shifter", "Smartphone Connectivity"],
    tags: ["Supercharged", "Hyper Naked"],
  },
];

export default function Kawasaki() {
  return (
    <div className="min-h-screen px-4 sm:px-6 py-5">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
        Kawasaki Motorcycles
      </h1>
      <p className="text-gray-600 text-center mb-10">
        Legend of Performance & Precision
      </p>

      <div className="flex flex-col gap-5">
        {kawasakiBikes.map((bike, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } hover:shadow-2xl transition-all duration-300`}
          >
            {/* Image Section */}
            <div className="md:w-1/2 w-full flex flex-col">
              <div className="w-full h-[260px] md:h-[300px]">
                <img
                  src={bike.image}
                  alt={bike.name}
                  className="w-full h-full object-cover object-center transition-all duration-300"
                />
              </div>
              <div className="hidden md:block px-5 py-3 text-sm text-gray-700 space-y-1 border-t">
                <p><strong>Price:</strong> <span className="text-green-600">{bike.price}</span></p>
                <p><strong>Engine:</strong> {bike.engine}</p>
                <p><strong>Power:</strong> {bike.horsepower}</p>
                <p><strong>Top Speed:</strong> {bike.topSpeed}</p>
                <p><strong>Mileage:</strong> {bike.mileage}</p>
              </div>
            </div>

            {/* Detail Section */}
            <div className="md:w-1/2 w-full p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{bike.name}</h2>
                <div className="flex flex-wrap gap-2 mb-3">
                  {bike.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-sm text-gray-700 space-y-1 leading-relaxed">
                  <p><strong>Seats:</strong> {bike.seats}</p>
                  <p><strong>Tank:</strong> {bike.tankCapacity}</p>
                  <p><strong>Ground Clearance:</strong> {bike.groundClearance}</p>
                  <p><strong>Colors:</strong> {bike.colors.join(", ")}</p>
                  <p><strong>Rating:</strong> ⭐ {bike.rating}</p>
                  <p><strong>Features:</strong> {bike.features.join(", ")}</p>
                  <p><strong>Launch Year:</strong> {bike.launchYear}</p>
                </div>
              </div>
              <button className="mt-6 w-fit bg-gradient-to-r from-[#1B3C53] to-[#456882] text-white py-2 px-5 rounded-lg hover:opacity-90 transition-all duration-300 shadow">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
