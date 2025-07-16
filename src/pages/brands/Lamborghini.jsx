import React from "react";

const lamborghiniCars = [
  {
    name: "Lamborghini Aventador SVJ",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/2023_Lamborghini_Aventador_Ultimae.jpg/500px-2023_Lamborghini_Aventador_Ultimae.jpg",
    price: "₹6.25 Cr",
    fuel: "Petrol",
    transmission: "Automatic",
    topSpeed: "350 km/h",
    mileage: "7.69 km/l",
    engine: "6.5L V12 Naturally Aspirated",
    horsepower: "759 bhp",
    colors: ["Orange", "Yellow", "Black", "White"],
    rating: 4.9,
    launchYear: 2021,
    seats: 2,
    bootSpace: "110 L",
    groundClearance: "125 mm",
    warranty: "3 years / Unlimited km",
    safety: ["6 Airbags", "ABS", "Traction Control", "Stability Program"],
    infotainment: [
      "Touchscreen Display",
      "Navigation",
      "Premium Audio",
      "Apple CarPlay",
    ],
    tags: ["Supercar", "V12 Beast"],
  },
  {
    name: "Lamborghini Huracán EVO",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/2017_Lamborghini_Huracan_LP610.jpg/500px-2017_Lamborghini_Huracan_LP610.jpg",
    price: "₹4.00 Cr",
    fuel: "Petrol",
    transmission: "Automatic",
    topSpeed: "325 km/h",
    mileage: "8.5 km/l",
    engine: "5.2L V10 NA",
    horsepower: "631 bhp",
    colors: ["Green", "Orange", "Black", "Grey"],
    rating: 4.8,
    launchYear: 2022,
    seats: 2,
    bootSpace: "100 L",
    groundClearance: "135 mm",
    warranty: "3 years / Unlimited km",
    safety: ["6 Airbags", "ESC", "TPMS", "Launch Control"],
    infotainment: [
      "Touch Interface",
      "Apple CarPlay",
      "Voice Control",
      "Navigation",
    ],
    tags: ["Sporty", "Track Ready"],
  },
  {
    name: "Lamborghini Urus",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Lamborghini_Urus_SE_DSC_8524.jpg/500px-Lamborghini_Urus_SE_DSC_8524.jpg",
    price: "₹4.22 Cr",
    fuel: "Petrol",
    transmission: "Automatic",
    topSpeed: "305 km/h",
    mileage: "7.8 km/l",
    engine: "4.0L Twin-Turbo V8",
    horsepower: "641 bhp",
    colors: ["Yellow", "Black", "White", "Red"],
    rating: 4.9,
    launchYear: 2023,
    seats: 5,
    bootSpace: "616 L",
    groundClearance: "158 mm",
    warranty: "3 years / Unlimited km",
    safety: ["8 Airbags", "ADAS", "Lane Assist", "360 Camera"],
    infotainment: [
      "Dual Touchscreens",
      "3D Audio",
      "CarPlay / Android Auto",
      "Navigation",
    ],
    tags: ["Luxury SUV", "Daily Supercar"],
  },
  {
    name: "Lamborghini Revuelto",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Lamborghini_Revuelto_DSC_6985_%28cropped%29.jpg/500px-Lamborghini_Revuelto_DSC_6985_%28cropped%29.jpg",
    price: "₹10.00 Cr (est.)",
    fuel: "Hybrid (Petrol + Electric)",
    transmission: "Automatic",
    topSpeed: "350+ km/h",
    mileage: "NA",
    engine: "6.5L V12 + 3 Electric Motors",
    horsepower: "1001 bhp",
    colors: ["Green", "Grey", "Yellow", "Black"],
    rating: 5.0,
    launchYear: 2024,
    seats: 2,
    bootSpace: "NA",
    groundClearance: "120 mm",
    warranty: "3 years / Unlimited km",
    safety: ["Advanced Stability", "ABS", "Traction", "ADAS (Hybrid Tech)"],
    infotainment: [
      "Digital Dash",
      "Touchscreen",
      "Connectivity Suite",
      "Drive Modes",
    ],
    tags: ["Hybrid", "Flagship V12"],
  },
  {
    name: "Lamborghini Gallardo (Legacy)",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Lamborghini_Gallardo_LP560-4_-_009.jpg/1920px-Lamborghini_Gallardo_LP560-4_-_009.jpg",
    price: "₹3.00 Cr (Discontinued)",
    fuel: "Petrol",
    transmission: "Automatic",
    topSpeed: "325 km/h",
    mileage: "6.4 km/l",
    engine: "5.2L V10",
    horsepower: "552 bhp",
    colors: ["Orange", "Blue", "Black", "Yellow"],
    rating: 4.7,
    launchYear: 2014,
    seats: 2,
    bootSpace: "110 L",
    groundClearance: "110 mm",
    warranty: "NA",
    safety: ["ABS", "Airbags", "Stability Control"],
    infotainment: [
      "Basic Screen",
      "Bluetooth",
      "Navigation",
      "Audio System",
    ],
    tags: ["Classic", "Legendary V10"],
  },
];

export default function Lamborghini() {
  return (
    <div className="min-h-screen px-4 sm:px-6 py-5">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
        Lamborghini Cars Collection
      </h1>
      <p className="text-gray-600 text-center mb-10">
        Explore Iconic Italian Performance & Design
      </p>

      <div className="flex flex-col gap-5">
        {lamborghiniCars.map((car, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } hover:shadow-2xl transition-all duration-300`}
          >
            {/* Image & Specs Summary */}
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
                      className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold"
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
