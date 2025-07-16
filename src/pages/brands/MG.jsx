import React from "react";

const mgCars = [
  {
    name: "MG Hector",
    image:
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/130583/hector-exterior-right-front-three-quarter-86.jpeg?isig=0&q=80",
    price: "₹15.00 - ₹22.00 Lakh",
    fuel: "Petrol / Diesel",
    transmission: "Manual / Automatic",
    topSpeed: "195 km/h",
    mileage: "13 - 17 km/l",
    engine: "1.5L Turbo / 2.0L Diesel",
    horsepower: "143 - 170 bhp",
    colors: ["White", "Black", "Red", "Silver"],
    rating: 4.5,
    launchYear: 2023,
    seats: 5,
    bootSpace: "587 L",
    groundClearance: "192 mm",
    warranty: "5 years / Unlimited km",
    safety: ["6 Airbags", "ESP", "Hill Hold", "ADAS"],
    infotainment: [
      "14\" Touchscreen",
      "Wireless CarPlay",
      "Android Auto",
      "Voice Commands",
    ],
    tags: ["Family SUV", "Connected Car"],
  },
  {
    name: "MG Gloster",
    image:
      "https://media.assettype.com/evoindia/2022-08/a6d4603d-1cf1-4786-9c2d-21b4fa4cfdea/mg.jpg",
    price: "₹32.00 - ₹42.00 Lakh",
    fuel: "Diesel",
    transmission: "Automatic",
    topSpeed: "198 km/h",
    mileage: "12.35 km/l",
    engine: "2.0L Twin-Turbo Diesel",
    horsepower: "218 bhp",
    colors: ["Black", "White", "Brown", "Grey"],
    rating: 4.6,
    launchYear: 2022,
    seats: 6 - 7,
    bootSpace: "343 L (expandable)",
    groundClearance: "210 mm",
    warranty: "5 years / Unlimited km",
    safety: ["6 Airbags", "ADAS Level 1", "Auto Emergency Braking"],
    infotainment: [
      "12.3\" Touchscreen",
      "i-SMART Connected Tech",
      "Android Auto",
      "Apple CarPlay",
    ],
    tags: ["Luxury SUV", "Premium 7-seater"],
  },
  {
    name: "MG ZS EV",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/MG_ZS_%28crossover%2C_second_generation%29_DSC_8542.jpg/500px-MG_ZS_%28crossover%2C_second_generation%29_DSC_8542.jpg",
    price: "₹18.98 - ₹24.98 Lakh",
    fuel: "Electric",
    transmission: "Automatic",
    topSpeed: "175 km/h",
    mileage: "461 km/full charge",
    engine: "Electric Motor - 50.3 kWh",
    horsepower: "176 bhp",
    colors: ["White", "Black", "Red", "Grey"],
    rating: 4.7,
    launchYear: 2023,
    seats: 5,
    bootSpace: "470 L",
    groundClearance: "177 mm",
    warranty: "8 years / 1.6 Lakh km (Battery)",
    safety: ["6 Airbags", "ESP", "Hill Descent", "Rear Camera"],
    infotainment: [
      "10.1\" Touchscreen",
      "i-SMART EV Features",
      "Navigation",
      "OTA Updates",
    ],
    tags: ["Electric", "Eco-Friendly"],
  },
  {
    name: "MG Astor",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a0/2021_MG_Astor_Sharp_220_Turbo_%28India%29_front_view.png",
    price: "₹10.82 - ₹18.68 Lakh",
    fuel: "Petrol",
    transmission: "Manual / CVT / Automatic",
    topSpeed: "160 km/h",
    mileage: "14 - 15.4 km/l",
    engine: "1.5L NA / 1.3L Turbo",
    horsepower: "110 - 140 bhp",
    colors: ["Red", "White", "Black", "Silver"],
    rating: 4.4,
    launchYear: 2022,
    seats: 5,
    bootSpace: "488 L",
    groundClearance: "180 mm",
    warranty: "5 years / Unlimited km",
    safety: ["6 Airbags", "ADAS", "360 Camera", "TPMS"],
    infotainment: [
      "10.1\" Display",
      "AI Assistant",
      "Wireless Apple CarPlay",
      "Android Auto",
    ],
    tags: ["Mid-Size SUV", "Smart Features"],
  },
  {
    name: "MG Comet EV",
    image:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/MG/Comet-EV/11556/1720151908023/front-left-side-47.jpg",
    price: "₹6.98 - ₹9.98 Lakh",
    fuel: "Electric",
    transmission: "Automatic",
    topSpeed: "100 km/h",
    mileage: "230 km/full charge",
    engine: "17.3 kWh Electric Motor",
    horsepower: "42 bhp",
    colors: ["White", "Black", "Green", "Dual-tone"],
    rating: 4.2,
    launchYear: 2023,
    seats: 4,
    bootSpace: "153 L",
    groundClearance: "165 mm",
    warranty: "8 years / 1.2 Lakh km (Battery)",
    safety: ["2 Airbags", "ABS", "Reverse Camera", "ESC"],
    infotainment: [
      "10.25\" Dual Screen",
      "Bluetooth",
      "Navigation",
      "Voice Commands",
    ],
    tags: ["Compact EV", "City Car"],
  },
];

export default function MG() {
  return (
    <div className="min-h-screen px-4 sm:px-6 py-5">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
        MG Cars Collection
      </h1>
      <p className="text-gray-600 text-center mb-10">
        Smart, Stylish & Tech-Savvy Cars by Morris Garages
      </p>

      <div className="flex flex-col gap-5">
        {mgCars.map((car, index) => (
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
