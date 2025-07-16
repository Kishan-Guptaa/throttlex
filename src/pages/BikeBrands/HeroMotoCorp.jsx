import React from "react";

const heroBikes = [
  {
    name: "Hero Splendor Plus",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/--drum-brake-obd-2b1744875559407.jpg?q=80",
    price: "₹72,420 – ₹78,120",
    fuel: "Petrol",
    transmission: "4-speed Manual",
    topSpeed: "98 km/h",
    mileage: "70 km/l",
    engine: "97.2 cc Air-cooled OHC",
    horsepower: "8.02 bhp",
    colors: ["Black", "Blue", "Red", "Grey"],
    rating: 4.5,
    launchYear: 2023,
    seats: 2,
    tankCapacity: "9.8 L",
    groundClearance: "166 mm",
    warranty: "5 years / Unlimited km",
    safety: ["Drum Brakes", "CBS"],
    features: ["Ultra-gear Technology", "LCD Console", "LED Pilot Lamp"],
    tags: ["Commuter", "Economical"],
  },
  {
    name: "Hero HF Deluxe",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/--hf-100-obd-2b1744803664892.jpg?q=80",
    price: "₹66,140 – ₹69,270",
    fuel: "Petrol",
    transmission: "4-speed Manual",
    topSpeed: "98 km/h",
    mileage: "65 km/l",
    engine: "97.2 cc Air-cooled OHC",
    horsepower: "8.02 bhp",
    colors: ["Black", "Red", "Blue", "Beige"],
    rating: 4.4,
    launchYear: 2022,
    seats: 2,
    tankCapacity: "9 L",
    groundClearance: "165 mm",
    warranty: "5 years / Unlimited km",
    safety: ["Drum Brakes", "CBS"],
    features: ["Comfort Seat", "Economical Engine", "Lightweight"],
    tags: ["Daily Rider", "Budget"],
  },
  {
    name: "Hero Passion Pro",
    image: "https://imgd.aeplcdn.com/664x374/bw/models/hero-passion-pro-2018.jpg?20190103151915&q=80",
    price: "₹73,390 – ₹77,160",
    fuel: "Petrol",
    transmission: "4-speed Manual",
    topSpeed: "100 km/h",
    mileage: "65 km/l",
    engine: "113.2 cc Air-cooled OHC",
    horsepower: "9.1 bhp",
    colors: ["Red", "Blue", "Black", "Green"],
    rating: 4.6,
    launchYear: 2023,
    seats: 2,
    tankCapacity: "9 L",
    groundClearance: "176 mm",
    warranty: "5 years / Unlimited km",
    safety: ["Drum Brakes", "CBS"],
    features: ["Digital Instrument Cluster", "LED Tail Lamp", "Alloy Wheels"],
    tags: ["Commuter", "Feature-rich"],
  },
  {
    name: "Hero Glamour",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/--drum-obd-2b1744873987453.jpg?q=80",
    price: "₹80,440 – ₹83,940",
    fuel: "Petrol",
    transmission: "5-speed Manual",
    topSpeed: "105 km/h",
    mileage: "60 km/l",
    engine: "125 cc Air-cooled OHC",
    horsepower: "10.6 bhp",
    colors: ["Black", "Red", "Silver", "Blue"],
    rating: 4.6,
    launchYear: 2023,
    seats: 2,
    tankCapacity: "11 L",
    groundClearance: "180 mm",
    warranty: "5 years / Unlimited km",
    safety: ["Drum Brakes", "CBS"],
    features: ["LED Pilot Lamp", "Alloy Wheels", "Stylish Graphics"],
    tags: ["Commuter", "125cc"],
  },
  {
    name: "Hero Xtreme 160R",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/--stealth-obd-2b1746622466805.jpg?q=80",
    price: "₹99,900 – ₹1.06 Lakh",
    fuel: "Petrol",
    transmission: "5-speed Manual",
    topSpeed: "114 km/h",
    mileage: "50 km/l",
    engine: "163 cc Air-cooled OHC",
    horsepower: "13.1 bhp",
    colors: ["Blue", "Red", "Orange", "Black"],
    rating: 4.7,
    launchYear: 2023,
    seats: 2,
    tankCapacity: "12 L",
    groundClearance: "165 mm",
    warranty: "5 years / Unlimited km",
    safety: ["Disc Brake (Front)", "CBS"],
    features: ["All-digital Console", "Disc Brakes", "Sharp Styling"],
    tags: ["Sporty", "Street"],
  },
  {
    name: "Hero Xpulse 200 4V",
    image: "https://imgd.aeplcdn.com/664x374/n/bw/models/colors/hero-select-model-sports-red-1707139187405.png?q=80",
    price: "₹1.32 – ₹1.40 Lakh",
    fuel: "Petrol",
    transmission: "5-speed Manual",
    topSpeed: "110 km/h",
    mileage: "50 km/l",
    engine: "199.6 cc Air-cooled OHC",
    horsepower: "18 bhp",
    colors: ["Red", "Yellow", "Black"],
    rating: 4.8,
    launchYear: 2023,
    seats: 2,
    tankCapacity: "13 L",
    groundClearance: "220 mm",
    warranty: "5 years / Unlimited km",
    safety: ["Disc Brakes (Both)", "CBS"],
    features: ["Off-road Tires", "Long-travel Suspension", "Digital Console"],
    tags: ["Adventure", "Dual-sport"],
  },
];

export default function HeroMoto() {
  return (
    <div className="min-h-screen px-4 sm:px-6 py-5">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
        Hero MotoCorp Bikes Collection
      </h1>
      <p className="text-gray-600 text-center mb-10">
        Reliable, Efficient & Iconic Rides
      </p>

      <div className="flex flex-col gap-5">
        {heroBikes.map((bike, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } hover:shadow-2xl transition-all duration-300`}
          >
            {/* Image & Summary */}
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
                <p><strong>Launch Year:</strong> {bike.launchYear}</p>
                <p><strong>Top Speed:</strong> {bike.topSpeed}</p>
                <p><strong>Mileage:</strong> {bike.mileage}</p>
                <p><strong>Fuel Capacity:</strong> {bike.tankCapacity}</p>
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
                  <p><strong>Ground Clearance:</strong> {bike.groundClearance}</p>
                  <p><strong>Warranty:</strong> {bike.warranty}</p>
                  <p><strong>Colors:</strong> {bike.colors.join(", ")}</p>
                  <p><strong>Safety:</strong> {bike.safety.join(", ")}</p>
                  <p><strong>Features:</strong> {bike.features.join(", ")}</p>
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
