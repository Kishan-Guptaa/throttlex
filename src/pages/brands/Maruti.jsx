import React from "react";

const marutiCars = [
  {
    name: "Maruti Suzuki Swift",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Suzuki_Swift_%282024%29_hybrid_IMG_2582.jpg/500px-Suzuki_Swift_%282024%29_hybrid_IMG_2582.jpg",
    price: "₹6.49 Lakh – ₹9.64 Lakh",
    fuel: "Petrol / CNG",
    transmission: "Manual / AMT",
    topSpeed: "165 km/h",
    mileage: "22.38 km/l (Petrol)",
    engine: "1.2L DualJet Petrol",
    horsepower: "88 bhp",
    colors: ["Red", "White", "Grey", "Blue", "Black"],
    rating: 4.5,
    launchYear: 2024,
    seats: 5,
    bootSpace: "268 L",
    groundClearance: "163 mm",
    warranty: "2 years / 40,000 km",
    safety: ["Dual Airbags", "ABS", "EBD", "Rear Camera"],
    infotainment: [
      "7\" Touchscreen",
      "Android Auto",
      "Apple CarPlay",
      "Voice Assist",
    ],
    tags: ["Hatchback", "Popular"],
  },
  {
    name: "Maruti Suzuki Brezza",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/2016_Suzuki_Vitara_Brezza_ZDi%2B_1.3_YFB1S_%2820160821%29.jpg/500px-2016_Suzuki_Vitara_Brezza_ZDi%2B_1.3_YFB1S_%2820160821%29.jpg",
    price: "₹8.34 Lakh – ₹14.14 Lakh",
    fuel: "Petrol / CNG",
    transmission: "Manual / Automatic",
    topSpeed: "170 km/h",
    mileage: "19.89 km/l (Petrol)",
    engine: "1.5L K-Series Petrol",
    horsepower: "103 bhp",
    colors: ["Red", "Blue", "Silver", "White", "Black"],
    rating: 4.6,
    launchYear: 2023,
    seats: 5,
    bootSpace: "328 L",
    groundClearance: "198 mm",
    warranty: "2 years / 40,000 km",
    safety: ["6 Airbags", "ABS with EBD", "Hill Hold", "ESC"],
    infotainment: [
      "9\" SmartPlay Pro+",
      "Alexa & Car Connect",
      "Navigation",
      "Surround Sound",
    ],
    tags: ["SUV", "Top Seller"],
  },
  {
    name: "Maruti Suzuki Baleno",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Suzuki_iK-2_Concept_%282015_Gaikindo_Indonesia_International_Auto_Show%2C_08-23-2015%29%2C_South_Tangerang_-_rear.jpg/1024px-Suzuki_iK-2_Concept_%282015_Gaikindo_Indonesia_International_Auto_Show%2C_08-23-2015%29%2C_South_Tangerang_-_rear.jpg",
    price: "₹6.66 Lakh – ₹9.88 Lakh",
    fuel: "Petrol / CNG",
    transmission: "Manual / AMT",
    topSpeed: "180 km/h",
    mileage: "22.35 km/l (Petrol)",
    engine: "1.2L K-Series DualJet Petrol",
    horsepower: "88 bhp",
    colors: ["Blue", "Red", "White", "Silver", "Black"],
    rating: 4.4,
    launchYear: 2023,
    seats: 5,
    bootSpace: "318 L",
    groundClearance: "170 mm",
    warranty: "2 years / 40,000 km",
    safety: ["6 Airbags", "ABS", "Rear Camera", "ESC"],
    infotainment: [
      "9\" SmartPlay Pro+",
      "CarPlay / Android Auto",
      "Voice Commands",
      "Arkamys Sound",
    ],
    tags: ["Hatchback", "Premium"],
  },
  {
    name: "Maruti Suzuki Grand Vitara",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/2022_Suzuki_Grand_Vitara_GX_Smart_Hybrid_%28Indonesia%29_front_view.jpg/500px-2022_Suzuki_Grand_Vitara_GX_Smart_Hybrid_%28Indonesia%29_front_view.jpg",
    price: "₹10.80 Lakh – ₹20.09 Lakh",
    fuel: "Petrol / Hybrid",
    transmission: "Manual / Automatic",
    topSpeed: "180 km/h",
    mileage: "27.97 km/l (Hybrid)",
    engine: "1.5L Petrol & Strong Hybrid",
    horsepower: "103 - 115 bhp",
    colors: ["Red", "Blue", "Brown", "Silver", "White"],
    rating: 4.7,
    launchYear: 2023,
    seats: 5,
    bootSpace: "373 L",
    groundClearance: "208 mm",
    warranty: "2 years / 40,000 km",
    safety: ["6 Airbags", "360 Camera", "ADAS", "ABS with EBD"],
    infotainment: [
      "10.1\" Touchscreen",
      "Hybrid Display",
      "Car Connect",
      "Wireless Charging",
    ],
    tags: ["SUV", "Hybrid"],
  },
  {
    name: "Maruti Suzuki Dzire",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Maruti_Suzuki_Dzire_VXi_VVT_%28front%29.JPG/500px-Maruti_Suzuki_Dzire_VXi_VVT_%28front%29.JPG",
    price: "₹6.57 Lakh – ₹9.39 Lakh",
    fuel: "Petrol / CNG",
    transmission: "Manual / AMT",
    topSpeed: "165 km/h",
    mileage: "23.26 km/l (Petrol)",
    engine: "1.2L DualJet Petrol",
    horsepower: "89 bhp",
    colors: ["Brown", "Blue", "White", "Silver", "Red"],
    rating: 4.5,
    launchYear: 2022,
    seats: 5,
    bootSpace: "378 L",
    groundClearance: "163 mm",
    warranty: "2 years / 40,000 km",
    safety: ["Dual Airbags", "ABS with EBD", "Rear Parking Sensor"],
    infotainment: [
      "7\" Touchscreen",
      "SmartPlay Studio",
      "CarPlay",
      "Bluetooth Audio",
    ],
    tags: ["Sedan", "Economical"],
  },
];

export default function Maruti() {
  return (
    <div className="min-h-screen px-4 sm:px-6 py-5">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
        Maruti Suzuki Cars Collection
      </h1>
      <p className="text-gray-600 text-center mb-10">
        India’s Most Trusted & Loved Car Brand
      </p>

      <div className="flex flex-col gap-5">
        {marutiCars.map((car, index) => (
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
                      className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold"
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
