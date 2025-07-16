import React from "react";

const kiaCars = [
  {
    name: "Kia Seltos",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Kia_Seltos_SP2_PE_Snow_White_Pearl_%286%29_%28cropped%29.jpg/500px-Kia_Seltos_SP2_PE_Snow_White_Pearl_%286%29_%28cropped%29.jpg",
    price: "₹10.90 - ₹20.30 Lakh",
    fuel: "Petrol / Diesel",
    transmission: "Manual / Automatic",
    topSpeed: "170 km/h",
    mileage: "17 - 20.7 km/l",
    engine: "1.5L NA / 1.5L Turbo / 1.5L Diesel",
    horsepower: "113 - 158 bhp",
    colors: ["Red", "Black", "White", "Grey", "Blue"],
    rating: 4.6,
    launchYear: 2023,
    seats: 5,
    bootSpace: "433 L",
    groundClearance: "190 mm",
    warranty: "3 years / Unlimited km",
    safety: ["6 Airbags", "ADAS", "ESC", "VSM", "360° Camera"],
    infotainment: [
      "10.25\" Touchscreen",
      "Bose Sound System",
      "Apple CarPlay",
      "Android Auto",
    ],
    tags: ["Top Seller", "Urban SUV"],
  },
  {
    name: "Kia Sonet",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/2021_Kia_Sonet_1.5_Premiere_%28Indonesia%29_front_view_02.jpg/500px-2021_Kia_Sonet_1.5_Premiere_%28Indonesia%29_front_view_02.jpg",
    price: "₹7.99 - ₹14.89 Lakh",
    fuel: "Petrol / Diesel",
    transmission: "Manual / Automatic",
    topSpeed: "160 km/h",
    mileage: "18 - 24 km/l",
    engine: "1.2L Petrol / 1.0L Turbo / 1.5L Diesel",
    horsepower: "82 - 118 bhp",
    colors: ["Blue", "Red", "White", "Grey", "Black"],
    rating: 4.5,
    launchYear: 2024,
    seats: 5,
    bootSpace: "392 L",
    groundClearance: "205 mm",
    warranty: "3 years / Unlimited km",
    safety: ["6 Airbags", "ABS", "Hill Assist", "Rear Camera"],
    infotainment: [
      "10.25\" Touchscreen",
      "Connected Car Tech",
      "Wireless CarPlay",
      "Navigation",
    ],
    tags: ["Compact SUV", "Youth Favorite"],
  },
  {
    name: "Kia Carens",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/2016_Kia_Rondo_LX_Value_in_Sterling_Metallic%2C_Front_Right%2C_05-18-2023.jpg/500px-2016_Kia_Rondo_LX_Value_in_Sterling_Metallic%2C_Front_Right%2C_05-18-2023.jpg",
    price: "₹10.45 - ₹19.45 Lakh",
    fuel: "Petrol / Diesel",
    transmission: "Manual / Automatic",
    topSpeed: "180 km/h",
    mileage: "16 - 21 km/l",
    engine: "1.5L Petrol / Turbo / Diesel",
    horsepower: "113 - 158 bhp",
    colors: ["Blue", "Red", "Silver", "White", "Green"],
    rating: 4.4,
    launchYear: 2023,
    seats: 6/7,
    bootSpace: "216 L (expandable)",
    groundClearance: "195 mm",
    warranty: "3 years / Unlimited km",
    safety: ["6 Airbags", "TPMS", "Hill Assist", "Rear Sensors"],
    infotainment: [
      "10.25\" Infotainment",
      "Voice Recognition",
      "Premium Sound",
      "Wireless Charger",
    ],
    tags: ["Family", "MPV"],
  },
  {
    name: "Kia EV6",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/2021_Kia_EV6_GT-Line_S.jpg/500px-2021_Kia_EV6_GT-Line_S.jpg",
    price: "₹60.95 - ₹65.95 Lakh",
    fuel: "Electric",
    transmission: "Automatic",
    topSpeed: "192 km/h",
    mileage: "528 km/full charge",
    engine: "77.4 kWh Battery (RWD/AWD)",
    horsepower: "229 - 325 bhp",
    colors: ["White", "Black", "Red", "Matte Grey"],
    rating: 4.9,
    launchYear: 2023,
    seats: 5,
    bootSpace: "520 L",
    groundClearance: "178 mm",
    warranty: "8 years / 160,000 km (Battery)",
    safety: ["ADAS", "8 Airbags", "360 Camera", "Lane Keep Assist"],
    infotainment: [
      "Dual 12.3\" Displays",
      "AR HUD",
      "Premium Audio",
      "Connected Car",
    ],
    tags: ["Electric", "Futuristic"],
  },
  {
    name: "Kia Carnival (Upcoming)",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Kia_Carnival_KA4_red_diplomatic_%281%29_%28cropped%29.jpg/500px-Kia_Carnival_KA4_red_diplomatic_%281%29_%28cropped%29.jpg",
    price: "₹40.00 - ₹45.00 Lakh (Expected)",
    fuel: "Diesel",
    transmission: "Automatic",
    topSpeed: "180 km/h",
    mileage: "13-14 km/l",
    engine: "2.2L Diesel",
    horsepower: "200 bhp",
    colors: ["White", "Black", "Silver", "Grey"],
    rating: 4.6,
    launchYear: 2024 ,
    seats: 7/9,
    bootSpace: "540 L",
    groundClearance: "180 mm",
    warranty: "3 years / Unlimited km",
    safety: ["6 Airbags", "Rear Sensors", "ADAS (Expected)", "ESC"],
    infotainment: [
      "12.3\" Infotainment",
      "Rear Entertainment",
      "Premium Sound",
      "Wireless Charging",
    ],
    tags: ["MPV", "Luxury Family"],
  },
];

export default function Kia() {
  return (
    <div className="min-h-screen px-4 sm:px-6 py-5">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
        Kia Cars Collection
      </h1>
      <p className="text-gray-600 text-center mb-10">
        Power, Innovation & Comfort by Kia Motors
      </p>

      <div className="flex flex-col gap-5">
        {kiaCars.map((car, index) => (
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
                <p>
                  <strong>Price:</strong>{" "}
                  <span className="text-green-600">{car.price}</span>
                </p>
                <p>
                  <strong>Launch Year:</strong> {car.launchYear}
                </p>
                <p>
                  <strong>Fuel:</strong> {car.fuel}
                </p>
                <p>
                  <strong>Transmission:</strong> {car.transmission}
                </p>
                <p>
                  <strong>Top Speed:</strong> {car.topSpeed}
                </p>
                <p>
                  <strong>Mileage:</strong> {car.mileage}
                </p>
              </div>
            </div>

            {/* Details Section */}
            <div className="md:w-1/2 w-full p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {car.name}
                </h2>
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
                  <p>
                    <strong>Engine:</strong> {car.engine}
                  </p>
                  <p>
                    <strong>Horsepower:</strong> {car.horsepower}
                  </p>
                  <p>
                    <strong>Seating Capacity:</strong> {car.seats}
                  </p>
                  <p>
                    <strong>Boot Space:</strong> {car.bootSpace}
                  </p>
                  <p>
                    <strong>Ground Clearance:</strong> {car.groundClearance}
                  </p>
                  <p>
                    <strong>Warranty:</strong> {car.warranty}
                  </p>
                  <p>
                    <strong>Colors:</strong> {car.colors.join(", ")}
                  </p>
                  <p>
                    <strong>Rating:</strong> ⭐ {car.rating}
                  </p>
                  <p>
                    <strong>Safety:</strong> {car.safety.join(", ")}
                  </p>
                  <p>
                    <strong>Infotainment:</strong> {car.infotainment.join(", ")}
                  </p>
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
