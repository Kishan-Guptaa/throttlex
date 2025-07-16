import React from "react";

const ferrariCars = [
  {
    name: "Ferrari SF90 Stradale",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Red_2019_Ferrari_SF90_Stradale_%2848264238897%29_%28cropped%29.jpg/500px-Red_2019_Ferrari_SF90_Stradale_%2848264238897%29_%28cropped%29.jpg",
    price: "₹7.50 Cr",
    fuel: "Petrol",
    transmission: "Automatic",
    topSpeed: "340 km/h",
    mileage: "6.5 km/l",
    engine: "4.0L Twin-Turbo V8 + Electric Motor",
    horsepower: "986 bhp",
    colors: ["Red", "Black", "White", "Yellow"],
    rating: 4.9,
    launchYear: 2023,
    seats: 2,
    bootSpace: "74 L",
    groundClearance: "115 mm",
    warranty: "3 years / Unlimited km",
    safety: ["6 Airbags", "ABS", "EBD", "Stability Control"],
    infotainment: [
      "Digital Cluster",
      "Touchscreen Display",
      "Apple CarPlay",
      "Premium Audio",
    ],
    tags: ["Hybrid", "Supercar"],
  },
  {
    name: "Ferrari Roma",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/2021_Ferrari_Roma_in_Rosso_Fiorano%2C_front_right.jpg/500px-2021_Ferrari_Roma_in_Rosso_Fiorano%2C_front_right.jpg",
    price: "₹3.76 Cr",
    fuel: "Petrol",
    transmission: "Automatic",
    topSpeed: "320 km/h",
    mileage: "8.9 km/l",
    engine: "3.9L Twin-Turbo V8",
    horsepower: "612 bhp",
    colors: ["Blue", "Grey", "Red", "Silver"],
    rating: 4.7,
    launchYear: 2022,
    seats: 2+2,
    bootSpace: "272 L",
    groundClearance: "125 mm",
    warranty: "3 years / Unlimited km",
    safety: ["6 Airbags", "ABS", "Traction Control", "Cameras"],
    infotainment: [
      "Touch Display",
      "Android Auto",
      "Apple CarPlay",
      "Navigation",
    ],
    tags: ["Luxury", "Touring"],
  },
  {
    name: "Ferrari 296 GTB",
    image:
      "https://www.novitecgroup.com/assets/images/news/ferrari/296-GTB/296header__FocusFillWyIwLjAwIiwiMC4wMCIsMTkyMCw2MDBd.jpg",
    price: "₹5.40 Cr",
    fuel: "Petrol + Electric",
    transmission: "Automatic",
    topSpeed: "330 km/h",
    mileage: "7.4 km/l",
    engine: "3.0L V6 Plug-in Hybrid",
    horsepower: "818 bhp",
    colors: ["Red", "Yellow", "Black", "Silver"],
    rating: 4.8,
    launchYear: 2023,
    seats: 2,
    bootSpace: "201 L",
    groundClearance: "120 mm",
    warranty: "3 years / Unlimited km",
    safety: ["Airbags", "ABS", "Traction Control", "ESC"],
    infotainment: [
      "Digital Instrument Cluster",
      "CarPlay",
      "Performance Telemetry",
      "Bluetooth Audio",
    ],
    tags: ["Hybrid", "Track Focused"],
  },
  {
    name: "Ferrari Portofino M",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Ferrari_Portofino%2C_Paris_Motor_Show_2018%2C_IMG_0642.jpg/500px-Ferrari_Portofino%2C_Paris_Motor_Show_2018%2C_IMG_0642.jpg",
    price: "₹3.50 Cr",
    fuel: "Petrol",
    transmission: "Automatic",
    topSpeed: "320 km/h",
    mileage: "9.0 km/l",
    engine: "3.9L Twin-Turbo V8",
    horsepower: "612 bhp",
    colors: ["Red", "Blue", "Silver", "White"],
    rating: 4.6,
    launchYear: 2022,
    seats: 2+2,
    bootSpace: "292 L",
    groundClearance: "130 mm",
    warranty: "3 years / Unlimited km",
    safety: ["4 Airbags", "Rear Camera", "Traction Control", "ABS"],
    infotainment: [
      "10.25\" Touchscreen",
      "Navigation",
      "Bluetooth",
      "Android Auto",
    ],
    tags: ["Convertible", "Lifestyle"],
  },
  {
    name: "Ferrari 812 GTS",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/2019_Ferrari_812_Superfast_S-A_6.5.jpg/500px-2019_Ferrari_812_Superfast_S-A_6.5.jpg",
    price: "₹5.75 Cr",
    fuel: "Petrol",
    transmission: "Automatic",
    topSpeed: "340 km/h",
    mileage: "6.7 km/l",
    engine: "6.5L V12 Naturally Aspirated",
    horsepower: "789 bhp",
    colors: ["Red", "Black", "Blue", "Yellow"],
    rating: 4.9,
    launchYear: 2022,
    seats: 2,
    bootSpace: "210 L",
    groundClearance: "125 mm",
    warranty: "3 years / Unlimited km",
    safety: ["6 Airbags", "ABS", "Stability Control", "EBD"],
    infotainment: [
      "Dual Screen Cockpit",
      "Navigation",
      "Premium Sound",
      "CarPlay",
    ],
    tags: ["V12", "Open-top Grand Tourer"],
  },
];
export default function Ferrari() {
  return (
    <div className="min-h-screen px-4 sm:px-6  py-5">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
        Ferrari Cars Collection
      </h1>
      <p className="text-gray-600 text-center mb-10">
        Discover Unmatched Performance & Italian Elegance
      </p>

      <div className="flex flex-col gap-5">
        {ferrariCars.map((car, index) => (
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
                      className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-semibold"
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
