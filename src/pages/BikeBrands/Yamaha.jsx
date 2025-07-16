import React from "react";

const yamahaBikes = [
  {
    name: "Yamaha FZ 25",
    image: "https://siramotoparts.com/wp-content/uploads/2019/12/yamaha-fz25-bs6-sample-image-for-sira-rear-rack.jpg",
    price: "₹1.60 Lakh",
    fuel: "Petrol",
    transmission: "5-speed Manual",
    topSpeed: "130 km/h",
    mileage: "40 km/l",
    engine: "249 cc Air-cooled Single-cylinder",
    horsepower: "20.5 bhp",
    colors: ["Grey", "Black", "Blue"],
    rating: 4.5,
    launchYear: 2022,
    seats: 2,
    tankCapacity: "14 L",
    groundClearance: "165 mm",
    warranty: "3 years / Unlimited km",
    safety: ["ABS", "Disc Brakes"],
    features: ["LED Headlamp", "Digital Console", "Alloy Wheels"],
    tags: ["Street", "Naked"],
  },
  {
    name: "Yamaha R15 V4",
    image: "https://imgd.aeplcdn.com/664x374/n/bw/models/colors/yamaha-select-model-metallic-red-1704802630538.png?q=80",
    price: "₹1.80 Lakh",
    fuel: "Petrol",
    transmission: "6-speed Manual",
    topSpeed: "140 km/h",
    mileage: "45 km/l",
    engine: "155 cc Liquid-cooled Single-cylinder",
    horsepower: "18.4 bhp",
    colors: ["Blue", "Black", "Grey"],
    rating: 4.7,
    launchYear: 2023,
    seats: 2,
    tankCapacity: "11 L",
    groundClearance: "170 mm",
    warranty: "3 years / Unlimited km",
    safety: ["ABS", "Disc Brakes"],
    features: ["Full LED", "Assist & Slipper Clutch", "Smartphone Connectivity"],
    tags: ["Sportbike", "Track"],
  },
  {
    name: "Yamaha MT-15",
    image: "https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/yamaha-select-model-cyber-green-dlx-1712693249606.png?q=80",
    price: "₹1.75 Lakh",
    fuel: "Petrol",
    transmission: "6-speed Manual",
    topSpeed: "135 km/h",
    mileage: "42 km/l",
    engine: "155 cc Liquid-cooled Single-cylinder",
    horsepower: "18.4 bhp",
    colors: ["Black", "Blue", "Yellow"],
    rating: 4.6,
    launchYear: 2023,
    seats: 2,
    tankCapacity: "10 L",
    groundClearance: "170 mm",
    warranty: "3 years / Unlimited km",
    safety: ["ABS", "Disc Brakes"],
    features: ["LED Headlamp", "Assist & Slipper Clutch", "TFT Meter"],
    tags: ["Naked", "Urban"],
  },
  {
    name: "Yamaha XSR 155",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/--standard1737960297949.jpg?q=80",
    price: "₹1.95 Lakh",
    fuel: "Petrol",
    transmission: "6-speed Manual",
    topSpeed: "140 km/h",
    mileage: "45 km/l",
    engine: "155 cc Liquid-cooled Single-cylinder",
    horsepower: "18.4 bhp",
    colors: ["Grey", "White", "Black"],
    rating: 4.7,
    launchYear: 2022,
    seats: 2,
    tankCapacity: "11 L",
    groundClearance: "160 mm",
    warranty: "3 years / Unlimited km",
    safety: ["ABS", "Disc Brakes"],
    features: ["LED Round Headlamp", "Retro Styling", "Assist & Slipper Clutch"],
    tags: ["Retro", "Heritage"],
  },
  {
    name: "Yamaha MT-03",
    image: "https://www.motorbeam.com/wp-content/uploads/2015-Yamaha-MT-03.jpg",
    price: "₹3.05 Lakh",
    fuel: "Petrol",
    transmission: "6-speed Manual",
    topSpeed: "160 km/h",
    mileage: "35 km/l",
    engine: "321 cc Liquid-cooled Parallel-Twin",
    horsepower: "42 bhp",
    colors: ["Blue", "Black", "Grey"],
    rating: 4.8,
    launchYear: 2023,
    seats: 2,
    tankCapacity: "14 L",
    groundClearance: "160 mm",
    warranty: "3 years / Unlimited km",
    safety: ["ABS", "Disc Brakes"],
    features: ["LED Lighting", "Slipper Clutch", "Digital Display"],
    tags: ["Naked", "Performance"],
  },
  {
    name: "Yamaha R7",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/146939/r7-right-front-three-quarter.jpeg?isig=0&q=80",
    price: "₹7.10 Lakh",
    fuel: "Petrol",
    transmission: "6-speed Manual",
    topSpeed: "200 km/h",
    mileage: "25 km/l",
    engine: "689 cc Liquid-cooled Parallel-Twin",
    horsepower: "73.4 bhp",
    colors: ["Blue", "Black", "Grey"],
    rating: 4.9,
    launchYear: 2023,
    seats: 2,
    tankCapacity: "13 L",
    groundClearance: "125 mm",
    warranty: "3 years / Unlimited km",
    safety: ["ABS", "Disc Brakes", "Cornering ABS"],
    features: ["Full Fairing", "TFT Display", "Quickshifter"],
    tags: ["Sportbike", "Supersport"],
  },
];

export default function YamahaBikes() {
  return (
    <div className="min-h-screen px-4 sm:px-6 py-5">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
        Yamaha Motorcycles Collection
      </h1>
      <p className="text-gray-600 text-center mb-10">
        Explore Six Popular Yamaha Models
      </p>

      <div className="flex flex-col gap-5">
        {yamahaBikes.map((bike, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } hover:shadow-2xl transition-all duration-300`}
          >
            {/* Image & Summary */}
            <div className="md:w-1/2 w-full flex flex-col">
              <div className="w-full h-64 md:h-[300px]">
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
