import React from "react";

const royalEnfieldBikes = [
  {
    name: "Royal Enfield Classic 350",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/--redditch1738919737719.jpg?q=80",
    price: "₹1.93 Lakh",
    fuel: "Petrol",
    transmission: "5-speed Manual",
    topSpeed: "120 km/h",
    mileage: "35 km/l",
    engine: "349 cc Air-oil cooled engine",
    horsepower: "20.2 bhp",
    colors: ["Chrome Red", "Gunmetal Grey", "Halcyon Black"],
    rating: 4.6,
    launchYear: 2021,
    seats: 2,
    tankCapacity: "13 L",
    groundClearance: "170 mm",
    warranty: "3 years / 30,000 km",
    safety: ["Dual Channel ABS", "Disc Brakes", "Tubeless Tyres"],
    features: ["LED DRLs", "Digital-Analog Console", "Kick & Electric Start"],
    tags: ["Classic", "Iconic"],
  },
  {
    name: "Royal Enfield Meteor 350",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/51245/meteor-350-right-side-view-10.png?isig=0&q=80",
    price: "₹2.05 Lakh",
    fuel: "Petrol",
    transmission: "5-speed Manual",
    topSpeed: "115 km/h",
    mileage: "35 km/l",
    engine: "349 cc Air-oil cooled engine",
    horsepower: "20.2 bhp",
    colors: ["Stellar Red", "Fireball Yellow", "Supernova Blue"],
    rating: 4.5,
    launchYear: 2020,
    seats: 2,
    tankCapacity: "15 L",
    groundClearance: "170 mm",
    warranty: "3 years / 30,000 km",
    safety: ["ABS", "Disc Brakes", "Tubeless Tyres"],
    features: ["Tripper Navigation", "Comfort Seat", "Digital Console"],
    tags: ["Cruiser", "Touring"],
  },
  {
    name: "Royal Enfield Hunter 350",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/royalenfield-hunter-350-standard1745757843659.jpg?q=80",
    price: "₹1.50 Lakh",
    fuel: "Petrol",
    transmission: "5-speed Manual",
    topSpeed: "114 km/h",
    mileage: "36 km/l",
    engine: "349 cc Air-oil cooled engine",
    horsepower: "20.2 bhp",
    colors: ["Rebel Red", "Dapper Grey", "Rebel Black"],
    rating: 4.4,
    launchYear: 2022,
    seats: 2,
    tankCapacity: "13 L",
    groundClearance: "150 mm",
    warranty: "3 years / 30,000 km",
    safety: ["ABS", "Disc Brakes", "Tubeless Tyres"],
    features: ["Lightweight Frame", "Compact Design", "Dual Tone Paint"],
    tags: ["Street", "Urban"],
  },
  {
    name: "Royal Enfield Bullet 350",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/royalenfield-bullet-battalion-black1740992373327.jpg?q=80",
    price: "₹1.74 Lakh",
    fuel: "Petrol",
    transmission: "5-speed Manual",
    topSpeed: "110 km/h",
    mileage: "38 km/l",
    engine: "346 cc Air-cooled engine",
    horsepower: "19.1 bhp",
    colors: ["Standard Black", "Maroon", "Silver"],
    rating: 4.3,
    launchYear: 2023,
    seats: 2,
    tankCapacity: "13.5 L",
    groundClearance: "135 mm",
    warranty: "3 years / 30,000 km",
    safety: ["ABS", "Disc Brakes", "Tubeless Tyres"],
    features: ["Iconic Silhouette", "Retro Styling", "Halogen Headlamp"],
    tags: ["Retro", "Everyday"],
  },
  {
    name: "Royal Enfield Himalayan 450",
    image: "https://imgd.aeplcdn.com/664x374/n/bw/models/colors/royal-enfield-select-model-kaza-brown-1698908621684.png?q=80",
    price: "₹2.80 Lakh",
    fuel: "Petrol",
    transmission: "6-speed Manual",
    topSpeed: "150 km/h",
    mileage: "30 km/l",
    engine: "452 cc Liquid-cooled DOHC engine",
    horsepower: "40 bhp",
    colors: ["Kamet White", "Hanle Black", "Kaza Brown"],
    rating: 4.8,
    launchYear: 2023,
    seats: 2,
    tankCapacity: "17 L",
    groundClearance: "230 mm",
    warranty: "3 years / 30,000 km",
    safety: ["Switchable ABS", "Disc Brakes", "Spoke Wheels"],
    features: ["Riding Modes", "TFT Display", "Adjustable Windscreen"],
    tags: ["Adventure", "Off-road"],
  },
  {
    name: "Royal Enfield Super Meteor 650",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/royalenfield-super-meteor-650-astral1748865528348.jpg?q=80",
    price: "₹3.63 Lakh",
    fuel: "Petrol",
    transmission: "6-speed Manual",
    topSpeed: "170 km/h",
    mileage: "25 km/l",
    engine: "648 cc Parallel Twin engine",
    horsepower: "47 bhp",
    colors: ["Celestial Red", "Interstellar Green", "Astral Black"],
    rating: 4.7,
    launchYear: 2023,
    seats: 2,
    tankCapacity: "15.7 L",
    groundClearance: "135 mm",
    warranty: "3 years / 30,000 km",
    safety: ["ABS", "Disc Brakes", "Tubeless Tyres"],
    features: ["Upside Down Forks", "LED Lights", "Cruiser Styling"],
    tags: ["Cruiser", "Premium"],
  },
];

export default function RoyalEnfield() {
  return (
    <div className="min-h-screen px-4 sm:px-6 py-5">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
        Royal Enfield Bikes Collection
      </h1>
      <p className="text-gray-600 text-center mb-10">
        Power, Legacy & Timeless Style — Royal Enfield’s Finest Machines
      </p>

      <div className="flex flex-col gap-5">
        {royalEnfieldBikes.map((bike, index) => (
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
                <p><strong>Fuel:</strong> {bike.fuel}</p>
                <p><strong>Transmission:</strong> {bike.transmission}</p>
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
                      className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold"
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
              <button className="mt-6 w-fit bg-gradient-to-r from-[#4B3C1B] to-[#826B45] text-white py-2 px-5 rounded-lg hover:opacity-90 transition-all duration-300 shadow">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
