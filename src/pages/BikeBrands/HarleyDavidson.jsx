import React from "react";

const harleyBikes = [
  {
    name: "Harley-Davidson Iron 883",
    image:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/harleydavidson-iron-883-standard1677237126841.jpg?q=80",
    price: "₹11.99 Lakh",
    fuel: "Petrol",
    transmission: "5-speed Manual",
    topSpeed: "166 km/h",
    mileage: "20 km/l",
    engine: "883cc Air-Cooled Evolution V-Twin",
    horsepower: "52 bhp",
    colors: ["Black Denim", "River Rock Gray", "Deadwood Green"],
    rating: 4.6,
    launchYear: 2022,
    seats: 2,
    tankCapacity: "12.5 L",
    groundClearance: "140 mm",
    warranty: "2 years / Unlimited km",
    safety: ["ABS", "Disc Brakes", "Tubeless Tyres"],
    features: ["Classic Design", "LED Indicators", "Digital Odometer"],
    tags: ["Cruiser", "Iconic"],
  },
  {
    name: "Harley-Davidson Street Glide Special",
    image:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/harleydavidson-street-glide-special-standard1732627828006.jpg?q=80",
    price: "₹38.99 Lakh",
    fuel: "Petrol",
    transmission: "6-speed Manual",
    topSpeed: "185 km/h",
    mileage: "18 km/l",
    engine: "1868cc Milwaukee-Eight 114",
    horsepower: "93 bhp",
    colors: ["Vivid Black", "River Rock Gray", "Billiard Red"],
    rating: 4.8,
    launchYear: 2023,
    seats: 2,
    tankCapacity: "22.7 L",
    groundClearance: "125 mm",
    warranty: "2 years / Unlimited km",
    safety: ["ABS", "Traction Control", "TPMS"],
    features: ["Boom! Box GTS", "Touchscreen", "Saddlebags"],
    tags: ["Touring", "Luxury"],
  },
  {
    name: "Harley-Davidson Fat Boy 114",
    image:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/harleydavidson-fat-boy-standard1732626929069.jpg?q=80",
    price: "₹24.49 Lakh",
    fuel: "Petrol",
    transmission: "6-speed Manual",
    topSpeed: "180 km/h",
    mileage: "18 km/l",
    engine: "1868cc Milwaukee-Eight 114",
    horsepower: "94 bhp",
    colors: ["Vivid Black", "Reef Blue", "Gray Haze"],
    rating: 4.7,
    launchYear: 2023,
    seats: 2,
    tankCapacity: "18.9 L",
    groundClearance: "115 mm",
    warranty: "2 years / Unlimited km",
    safety: ["ABS", "Disc Brakes", "Stability Control"],
    features: ["LED Headlamp", "Chrome Finish", "Wide Tires"],
    tags: ["Cruiser", "Legendary"],
  },
  {
    name: "Harley-Davidson Pan America 1250",
    image:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/harleydavidson-pan-america-1250-special1732622328877.jpg?q=80",
    price: "₹24.59 Lakh",
    fuel: "Petrol",
    transmission: "6-speed Manual",
    topSpeed: "210 km/h",
    mileage: "20 km/l",
    engine: "1252cc Revolution Max V-Twin",
    horsepower: "150 bhp",
    colors: ["Vivid Black", "Gauntlet Gray Metallic"],
    rating: 4.9,
    launchYear: 2022,
    seats: 2,
    tankCapacity: "21.2 L",
    groundClearance: "210 mm",
    warranty: "2 years / Unlimited km",
    safety: ["Cornering ABS", "Hill Hold", "Rider Modes"],
    features: ["Adjustable Suspension", "Touch Display", "Bluetooth"],
    tags: ["Adventure", "Off-Road"],
  },
  {
    name: "Harley-Davidson Forty-Eight",
    image:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/harleydavidson-forty-eight-standard1677237205440.jpg?q=80",
    price: "₹13.59 Lakh",
    fuel: "Petrol",
    transmission: "5-speed Manual",
    topSpeed: "160 km/h",
    mileage: "20 km/l",
    engine: "1202cc Air-Cooled Evolution",
    horsepower: "67 bhp",
    colors: ["Black", "Billiard Red", "White Sand Pearl"],
    rating: 4.5,
    launchYear: 2021,
    seats: 1,
    tankCapacity: "7.9 L",
    groundClearance: "110 mm",
    warranty: "2 years / Unlimited km",
    safety: ["ABS", "Disc Brakes"],
    features: ["Fat Front Tire", "Solo Seat", "Low-Slung Look"],
    tags: ["Street", "Muscle"],
  },
  {
    name: "Harley-Davidson Road Glide Special",
    image:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/harleydavidson-road-glide-special-standard1732627448381.jpg?q=80",
    price: "₹40.49 Lakh",
    fuel: "Petrol",
    transmission: "6-speed Manual",
    topSpeed: "190 km/h",
    mileage: "17 km/l",
    engine: "1868cc Milwaukee-Eight 114",
    horsepower: "93 bhp",
    colors: ["Black", "Midnight Crimson", "White Sand Pearl"],
    rating: 4.9,
    launchYear: 2023,
    seats: 2,
    tankCapacity: "22.7 L",
    groundClearance: "130 mm",
    warranty: "2 years / Unlimited km",
    safety: ["RDRS Safety Enhancements", "ABS", "TPMS"],
    features: ["Infotainment System", "Saddlebags", "LED Lighting"],
    tags: ["Touring", "Premium"],
  },
];

export default function HarleyDavidson() {
  return (
    <div className="min-h-screen px-4 sm:px-6 py-5">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
        Harley-Davidson Bikes Collection
      </h1>
      <p className="text-gray-600 text-center mb-10">
        Iconic American Motorcycles Built for the Bold
      </p>

      <div className="flex flex-col gap-5">
        {harleyBikes.map((bike, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } hover:shadow-2xl transition-all duration-300`}
          >
            {/* Image & Summary Section */}
            <div className="md:w-1/2 w-full flex flex-col">
              <div className="w-full h-64 md:h-full">
                <img
                  src={bike.image}
                  alt={bike.name}
                  className="w-full h-full object-cover object-center transition-all duration-300"
                />
              </div>
              <div className="hidden md:block px-5 py-3 text-sm text-gray-700 space-y-1 border-t">
                <p><strong>Price:</strong> <span className="text-green-600">{bike.price}</span></p>
                <p><strong>Launch Year:</strong> {bike.launchYear}</p>
                <p><strong>Fuel:</strong> {bike.fuel}</p>
                <p><strong>Transmission:</strong> {bike.transmission}</p>
                <p><strong>Top Speed:</strong> {bike.topSpeed}</p>
                <p><strong>Mileage:</strong> {bike.mileage}</p>
              </div>
            </div>

            {/* Details Section */}
            <div className="md:w-1/2 w-full p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{bike.name}</h2>
                <div className="flex flex-wrap gap-2 mb-3">
                  {bike.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-sm text-gray-700 space-y-1 leading-relaxed">
                  <p><strong>Engine:</strong> {bike.engine}</p>
                  <p><strong>Horsepower:</strong> {bike.horsepower}</p>
                  <p><strong>Seats:</strong> {bike.seats}</p>
                  <p><strong>Fuel Tank:</strong> {bike.tankCapacity}</p>
                  <p><strong>Ground Clearance:</strong> {bike.groundClearance}</p>
                  <p><strong>Warranty:</strong> {bike.warranty}</p>
                  <p><strong>Colors:</strong> {bike.colors.join(", ")}</p>
                  <p><strong>Rating:</strong> ⭐ {bike.rating}</p>
                  <p><strong>Safety:</strong> {bike.safety.join(", ")}</p>
                  <p><strong>Features:</strong> {bike.features.join(", ")}</p>
                </div>
              </div>
              <button className="mt-6 w-fit bg-gradient-to-r from-black to-gray-700 text-white py-2 px-5 rounded-lg hover:opacity-90 transition-all duration-300 shadow">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
