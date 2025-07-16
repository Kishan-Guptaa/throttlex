import React from "react";

const porscheCars = [
  {
    name: "Porsche 911 Turbo S",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/2019_Porsche_911_Carrera_S_S-A_3.0_Front.jpg/500px-2019_Porsche_911_Carrera_S_S-A_3.0_Front.jpg",
    price: "₹3.35 Cr",
    fuel: "Petrol",
    transmission: "Automatic",
    topSpeed: "330 km/h",
    mileage: "9.0 km/l",
    engine: "3.8L Twin-Turbo Flat-6",
    horsepower: "641 bhp",
    colors: ["Red", "Black", "White", "Grey"],
    rating: 4.9,
    launchYear: 2023,
    seats: 4,
    bootSpace: "132 L (front)",
    groundClearance: "120 mm",
    warranty: "2 years / Unlimited km",
    safety: ["6 Airbags", "ABS", "Traction Control", "Stability Control"],
    infotainment: [
      '10.9" Touchscreen',
      "Burmester Audio",
      "Apple CarPlay",
      "Navigation",
    ],
    tags: ["Iconic", "Performance"],
  },
  {
    name: "Porsche Taycan Turbo S",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/2020_Porsche_Taycan_4S_79kWh_Front.jpg/500px-2020_Porsche_Taycan_4S_79kWh_Front.jpg",
    price: "₹2.44 Cr",
    fuel: "Electric",
    transmission: "Automatic",
    topSpeed: "260 km/h",
    mileage: "420 km/full charge",
    engine: "Dual Electric Motors",
    horsepower: "750 bhp (with overboost)",
    colors: ["Blue", "White", "Black", "Green"],
    rating: 4.8,
    launchYear: 2023,
    seats: 5,
    bootSpace: "366 L + 84 L",
    groundClearance: "128 mm",
    warranty: "8 years / 160,000 km (Battery)",
    safety: ["Autonomous Braking", "Lane Assist", "Cruise Control", "8 Airbags"],
    infotainment: [
      "Curved Instrument Panel",
      "Voice Command",
      "Bose Surround",
      "Porsche Connect",
    ],
    tags: ["Electric", "Futuristic"],
  },
  {
    name: "Porsche Panamera",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Porsche_972_IMG_9337.jpg/500px-Porsche_972_IMG_9337.jpg",
    price: "₹1.67 Cr",
    fuel: "Petrol / Hybrid",
    transmission: "Automatic",
    topSpeed: "270 km/h",
    mileage: "11.9 km/l",
    engine: "2.9L Twin-Turbo V6",
    horsepower: "443 bhp",
    colors: ["Silver", "Black", "White", "Blue"],
    rating: 4.7,
    launchYear: 2023,
    seats: 4,
    bootSpace: "495 L",
    groundClearance: "133 mm",
    warranty: "2 years / Unlimited km",
    safety: ["8 Airbags", "Parking Assist", "Blind Spot", "Traction Control"],
    infotainment: [
      "Dual Display",
      "Navigation",
      "BOSE Audio",
      "Apple CarPlay",
    ],
    tags: ["Luxury Sedan", "Hybrid Option"],
  },
  {
    name: "Porsche Macan",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Porsche_Macan_4_IMG_2153.jpg/500px-Porsche_Macan_4_IMG_2153.jpg",
    price: "₹88.06 Lakh",
    fuel: "Petrol",
    transmission: "Automatic",
    topSpeed: "232 km/h",
    mileage: "11.4 km/l",
    engine: "2.9L V6 Twin-Turbo",
    horsepower: "434 bhp",
    colors: ["Grey", "Red", "White", "Black"],
    rating: 4.6,
    launchYear: 2022,
    seats: 5,
    bootSpace: "488 L",
    groundClearance: "190 mm",
    warranty: "2 years / Unlimited km",
    safety: ["6 Airbags", "Hill Control", "ABS", "ESC"],
    infotainment: [
      '10.9" Touchscreen',
      "Voice Navigation",
      "Apple CarPlay",
      "Burmester Audio",
    ],
    tags: ["Compact SUV", "Urban Drive"],
  },
  {
    name: "Porsche Cayenne",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Porsche_Cayenne_%28III%2C_Facelift%29_%E2%80%93_f_01012025.jpg/500px-Porsche_Cayenne_%28III%2C_Facelift%29_%E2%80%93_f_01012025.jpg",
    price: "₹1.36 Cr",
    fuel: "Petrol / Hybrid",
    transmission: "Automatic",
    topSpeed: "253 km/h",
    mileage: "10.9 km/l",
    engine: "3.0L V6 Turbo",
    horsepower: "335 bhp",
    colors: ["Black", "White", "Green", "Blue"],
    rating: 4.7,
    launchYear: 2023,
    seats: 5,
    bootSpace: "772 L",
    groundClearance: "190 mm",
    warranty: "2 years / Unlimited km",
    safety: ["8 Airbags", "Hill Assist", "ADAS", "Blind Spot Monitor"],
    infotainment: [
      "Advanced Infotainment",
      "BOSE Audio",
      "Apple CarPlay / Android Auto",
      "Surround View Camera",
    ],
    tags: ["Luxury SUV", "Family Tourer"],
  },
];

export default function Porsche() {
  return (
    <div className="min-h-screen px-4 sm:px-6 py-5">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
        Porsche Cars Collection
      </h1>
      <p className="text-gray-600 text-center mb-10">
        Precision Engineering Meets Passionate Performance
      </p>

      <div className="flex flex-col gap-5">
        {porscheCars.map((car, index) => (
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
                      className="bg-blue-100 text-[#1B3C53] px-2 py-1 rounded-full text-xs font-semibold"
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
