import React from "react";

const bajajBikes = [
  {
    name: "Bajaj Pulsar 150",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/185667/pulsar-150-right-front-three-quarter.jpeg?isig=0&q=80",
    price: "₹1.35 Lakh",
    fuel: "Petrol",
    transmission: "5-speed Manual",
    topSpeed: "119 km/h",
    mileage: "45 km/l",
    engine: "149.5 cc Air-cooled SI engine",
    horsepower: "14 bhp",
    colors: ["Red", "Black", "Blue", "White"],
    rating: 4.5,
    launchYear: 2021,
    seats: 2,
    tankCapacity: "14 L",
    groundClearance: "165 mm",
    warranty: "2 years / Unlimited km",
    safety: ["Disc Brakes", "CBS", "Tubeless Tyres"],
    features: ["LED Headlamp", "Digital Console", "Alloy Wheels"],
    tags: ["Street", "Daily Rider"],
  },
  {
    name: "Bajaj Pulsar NS200",
    image: "https://imgd.aeplcdn.com/664x374/n/bw/models/colors/bajaj-select-model-pewter-grey-1709101653302.png?q=80",
    price: "₹1.60 Lakh",
    fuel: "Petrol",
    transmission: "6-speed Manual",
    topSpeed: "136 km/h",
    mileage: "38 km/l",
    engine: "199.5 cc Liquid-cooled DTS-i engine",
    horsepower: "24.5 bhp",
    colors: ["Black", "Red", "Blue", "Grey"],
    rating: 4.7,
    launchYear: 2022,
    seats: 2,
    tankCapacity: "12 L",
    groundClearance: "175 mm",
    warranty: "2 years / Unlimited km",
    safety: ["Disc Brakes", "ABS", "Tubeless Tyres"],
    features: ["Tripper Navigation", "LED Lamps", "Alloy Wheels"],
    tags: ["Naked", "Performance"],
  },
  {
    name: "Bajaj Dominar 400",
    image: "https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/bajaj-select-model-aurora-green-1669289011797.png?q=80",
    price: "₹2.20 Lakh",
    fuel: "Petrol",
    transmission: "6-speed Manual",
    topSpeed: "148 km/h",
    mileage: "30 km/l",
    engine: "373.3 cc Liquid-cooled DTS-i engine",
    horsepower: "39 bhp",
    colors: ["Black", "Blue", "Orange"],
    rating: 4.6,
    launchYear: 2020,
    seats: 2,
    tankCapacity: "13 L",
    groundClearance: "186 mm",
    warranty: "2 years / Unlimited km",
    safety: ["ABS", "Twin Disc Brakes", "Tubeless Tyres"],
    features: ["Full LED Lighting", "Digital Console", "Comfort Seat"],
    tags: ["Cruiser", "Touring"],
  },
  {
    name: "Bajaj Avenger Street 160",
    image: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/94159/avenger-street-160-right-side-view-2.png?isig=0",
    price: "₹1.43 Lakh",
    fuel: "Petrol",
    transmission: "5-speed Manual",
    topSpeed: "110 km/h",
    mileage: "45 km/l",
    engine: "160.3 cc Air-cooled DTS-Si engine",
    horsepower: "14 bhp",
    colors: ["Matte Blue", "Black"],
    rating: 4.4,
    launchYear: 2021,
    seats: 2,
    tankCapacity: "10 L",
    groundClearance: "177 mm",
    warranty: "2 years / Unlimited km",
    safety: ["Disc Brakes", "CBS", "Tubeless Tyres"],
    features: ["Comfort Seat", "Chrome Finish", "Round Headlamp"],
    tags: ["Cruiser", "Comfort"],
  },
  {
    name: "Bajaj CT 100",
    image: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/95099/right-front-three-quarter.jpeg",
    price: "₹69,757",
    fuel: "Petrol",
    transmission: "4-speed Manual",
    topSpeed: "85 km/h",
    mileage: "90 km/l",
    engine: "102 cc Air-cooled DTS-Si engine",
    horsepower: "8.2 bhp",
    colors: ["Black", "Red", "Grey"],
    rating: 4.2,
    launchYear: 2019,
    seats: 2,
    tankCapacity: "10 L",
    groundClearance: "160 mm",
    warranty: "2 years / Unlimited km",
    safety: ["Drum Brakes", "Tubed Tyres"],
    features: ["Economical", "Simple & Reliable"],
    tags: ["Commuter", "Budget"],
  },
  {
    name: "Bajaj Platina 100",
    image: "https://cdn.bajajauto.com/-/media/assets/bajajauto/360degreeimages/bikes/platina/platina-100es-ebony-black-red/00.png",
    price: "₹68,230",
    fuel: "Petrol",
    transmission: "4-speed Manual",
    topSpeed: "90 km/h",
    mileage: "95 km/l",
    engine: "102 cc Air-cooled DTS-Si engine",
    horsepower: "8.4 bhp",
    colors: ["Blue", "Black", "Grey"],
    rating: 4.3,
    launchYear: 2020,
    seats: 2,
    tankCapacity: "11 L",
    groundClearance: "155 mm",
    warranty: "2 years / Unlimited km",
    safety: ["Drum Brakes", "Tubed Tyres"],
    features: ["Comfort Suspension", "Economical"],
    tags: ["Commuter", "Mileage King"],
  },
];

export default function Bajaj() {
  return (
    <div className="min-h-screen px-4 sm:px-6 py-5">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
        Bajaj Bikes Collection
      </h1>
      <p className="text-gray-600 text-center mb-10">
        Top-Rated Bikes by Bajaj — Reliable & Performance
      </p>

      <div className="flex flex-col gap-5">
        {bajajBikes.map((bike, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } hover:shadow-2xl transition-all duration-300`}
          >
            {/* Image & Summary */}
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