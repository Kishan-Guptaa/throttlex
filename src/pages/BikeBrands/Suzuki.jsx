import React from "react";

const suzukiBikes = [
  {
    name: "Suzuki Gixxer SF 250",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/--standard1744983583068.jpg?q=80",
    price: "₹1.85 Lakh",
    fuel: "Petrol",
    transmission: "5-speed Manual",
    topSpeed: "150 km/h",
    mileage: "40 km/l",
    engine: "249 cc Air-cooled Single-cylinder",
    horsepower: "26.5 bhp",
    colors: ["Metallic Matte Black", "Metallic Matte Platinum Silver"],
    rating: 4.6,
    launchYear: 2022,
    seats: 2,
    tankCapacity: "12 L",
    groundClearance: "155 mm",
    warranty: "2 years / Unlimited km",
    safety: ["Dual Channel ABS", "Disc Brakes"],
    features: ["Full Fairing", "LED Headlight", "Digital Console"],
    tags: ["Sport", "Commuter"],
  },
  {
    name: "Suzuki Intruder 150",
    image: "https://imgd.aeplcdn.com/664x374/bw/models/suzuki-intruder-150-standard--bs-vi20200320182536.jpg?q=80",
    price: "₹1.36 Lakh",
    fuel: "Petrol",
    transmission: "5-speed Manual",
    topSpeed: "114 km/h",
    mileage: "45 km/l",
    engine: "155 cc Air-cooled Single-cylinder",
    horsepower: "14.8 bhp",
    colors: ["Pearl Mira White", "Metallic Matte Gray", "Dawn Yellow"],
    rating: 4.5,
    launchYear: 2023,
    seats: 2,
    tankCapacity: "11 L",
    groundClearance: "165 mm",
    warranty: "2 years / Unlimited km",
    safety: ["Dual Channel ABS", "Disc Brakes"],
    features: ["Cruiser Design", "Lightweight", "Back-rest"],
    tags: ["Cruiser", "Comfort"],
  },
  {
    name: "Suzuki Access 125",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/suzuki-access-125-standard1738074352591.jpg?q=80",
    price: "₹83,570",
    fuel: "Petrol",
    transmission: "CVT Automatic",
    topSpeed: "90 km/h",
    mileage: "50 km/l",
    engine: "124 cc Air-cooled Single-cylinder",
    horsepower: "8.6 bhp",
    colors: ["Pearl Mira Red", "Metallic Matte Black", "Pearl Glacier White"],
    rating: 4.7,
    launchYear: 2022,
    seats: 2,
    tankCapacity: "5.6 L",
    groundClearance: "155 mm",
    warranty: "2 years / Unlimited km",
    safety: ["Combined Braking System", "Disc Brake"],
    features: ["Smartphone App Connectivity", "Fully Digital Console", "USB Port"],
    tags: ["Scooter", "Daily Rider"],
  },
  {
    name: "Suzuki V-Strom 650 XT",
    image: "https://imgd.aeplcdn.com/664x374/bw/models/suzuki-v-strom-650.jpg?20190103151915&q=80",
    price: "₹7.99 Lakh",
    fuel: "Petrol",
    transmission: "6-speed Manual",
    topSpeed: "190 km/h",
    mileage: "25 km/l",
    engine: "645 cc Liquid-cooled V‑Twin",
    horsepower: "70 bhp",
    colors: ["Pearl Brilliant White", "Metallic Matte Sonic Silver"],
    rating: 4.8,
    launchYear: 2023,
    seats: 2,
    tankCapacity: "20 L",
    groundClearance: "170 mm",
    warranty: "2 years / Unlimited km",
    safety: ["ABS", "Traction Control", "LED Lighting"],
    features: ["Windscreen", "Hand Guards", "Rider Modes"],
    tags: ["Adventure", "Touring"],
  },
  {
    name: "Suzuki Hayabusa",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/--standard1744377521310.jpg?q=80",
    price: "₹16.98 Lakh",
    fuel: "Petrol",
    transmission: "6-speed Manual",
    topSpeed: "312 km/h",
    mileage: "20 km/l",
    engine: "1,340 cc Liquid-cooled Inline‑4",
    horsepower: "190 bhp",
    colors: ["Metallic Mystic Silver", "Pearl Deep Black"],
    rating: 4.9,
    launchYear: 2023,
    seats: 2,
    tankCapacity: "21 L",
    groundClearance: "125 mm",
    warranty: "2 years / Unlimited km",
    safety: ["ABS", "Suzuki Traction Control", "Dual Disc Brakes"],
    features: ["Ride-by-Wire", "Suzuki Drive Mode Selector", "Slide Control"],
    tags: ["Sportbike", "Flagship"],
  },
  {
    name: "Suzuki Gixxer 250",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/--standard-20251744980408468.jpg?q=80",
    price: "₹1.70 Lakh",
    fuel: "Petrol",
    transmission: "5-speed Manual",
    topSpeed: "145 km/h",
    mileage: "38 km/l",
    engine: "249 cc Air-cooled Single-cylinder",
    horsepower: "26.5 bhp",
    colors: ["Metallic Triton Blue", "Metallic Matte Black"],
    rating: 4.6,
    launchYear: 2022,
    seats: 2,
    tankCapacity: "12 L",
    groundClearance: "155 mm",
    warranty: "2 years / Unlimited km",
    safety: ["Dual Channel ABS", "Disc Brakes"],
    features: ["Alloy Wheels", "Backlit Console", "LED Headlight"],
    tags: ["Naked", "Performance"],
  },
];

export default function Suzuki() {
  return (
    <div className="min-h-screen px-4 sm:px-6 py-5">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
        Suzuki Bikes Collection
      </h1>
      <p className="text-gray-600 text-center mb-10">
        Top‑sellers from Suzuki — Style, Speed & Comfort
      </p>

      <div className="flex flex-col gap-5">
        {suzukiBikes.map((bike, idx) => (
          <div
            key={idx}
            className={`bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row ${
              idx % 2 === 1 ? "md:flex-row-reverse" : ""
            } hover:shadow-2xl transition-all duration-300`}
          >
            {/* Image & Summary */}
            <div className="md:w-1/2 w-full flex flex-col">
              <div className="w-full h-64 md:h-72">
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
                    >{tag}</span>
                  ))}
                </div>
                <div className="text-sm text-gray-700 space-y-1">
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
