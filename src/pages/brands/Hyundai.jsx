import React from "react";

const hyundaiCars = [
  {
    name: "Hyundai Creta",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/2024_Hyundai_Creta_N_Line_1.5_T-GDi_%28India%29_front_view.png/1024px-2024_Hyundai_Creta_N_Line_1.5_T-GDi_%28India%29_front_view.png",
    price: "₹11.00 - ₹20.00 Lakh",
    fuel: "Petrol / Diesel",
    transmission: "Manual / Automatic",
    topSpeed: "195 km/h",
    mileage: "17-21 km/l",
    engine: "1.5L Petrol / 1.5L Diesel",
    horsepower: "113-157 bhp",
    colors: ["Red", "White", "Black", "Silver", "Blue"],
    rating: 4.5,
    launchYear: 2024,
    seats: 5,
    bootSpace: "433 L",
    groundClearance: "190 mm",
    warranty: "3 years / Unlimited km",
    safety: ["6 Airbags", "ESC", "Hill Assist", "ADAS (Top Variants)"],
    infotainment: [
      "10.25\" Touchscreen",
      "Bluelink Connected Car",
      "BOSE Speakers",
      "Apple CarPlay & Android Auto",
    ],
    tags: ["Top Seller", "SUV"],
  },
  {
    name: "Hyundai Verna",
    image:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/121943/verna-facelift-exterior-right-front-three-quarter-100.jpeg?isig=0&q=80",
    price: "₹11.00 - ₹17.42 Lakh",
    fuel: "Petrol",
    transmission: "Manual / Automatic",
    topSpeed: "210 km/h",
    mileage: "18-20 km/l",
    engine: "1.5L NA / 1.5L Turbo Petrol",
    horsepower: "113 - 158 bhp",
    colors: ["Red", "Black", "White", "Grey", "Blue"],
    rating: 4.4,
    launchYear: 2023,
    seats: 5,
    bootSpace: "528 L",
    groundClearance: "165 mm",
    warranty: "3 years / Unlimited km",
    safety: ["6 Airbags", "ADAS", "ABS", "ESC"],
    infotainment: [
      "10.25\" Dual Display",
      "Connected Car Tech",
      "Premium Sound",
      "Wireless Charging",
    ],
    tags: ["Sedan", "Feature-Rich"],
  },
  {
    name: "Hyundai Venue",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/2022_Hyundai_Venue_Preferred_in_Polar_White%2C_Front_Right%2C_09-12-2023.jpg/500px-2022_Hyundai_Venue_Preferred_in_Polar_White%2C_Front_Right%2C_09-12-2023.jpg",
    price: "₹7.94 - ₹13.48 Lakh",
    fuel: "Petrol / Diesel",
    transmission: "Manual / Automatic",
    topSpeed: "165 km/h",
    mileage: "17-23 km/l",
    engine: "1.2L Petrol / 1.0L Turbo / 1.5L Diesel",
    horsepower: "82 - 118 bhp",
    colors: ["White", "Black", "Red", "Blue", "Grey"],
    rating: 4.3,
    launchYear: 2022,
    seats: 5,
    bootSpace: "350 L",
    groundClearance: "190 mm",
    warranty: "3 years / Unlimited km",
    safety: ["6 Airbags", "TPMS", "Hill Assist", "Rear Camera"],
    infotainment: [
      "8\" Touchscreen",
      "Bluelink",
      "Apple CarPlay",
      "Android Auto",
    ],
    tags: ["Compact SUV", "Popular"],
  },
  {
    name: "Hyundai Tucson",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Hyundai_Tucson_1.6_T-GDI_PHEV_Prime_%28IV%29_%E2%80%93_f_05072025.jpg/500px-Hyundai_Tucson_1.6_T-GDI_PHEV_Prime_%28IV%29_%E2%80%93_f_05072025.jpg",
    price: "₹29.02 - ₹35.94 Lakh",
    fuel: "Petrol / Diesel",
    transmission: "Automatic",
    topSpeed: "200 km/h",
    mileage: "15-18 km/l",
    engine: "2.0L Petrol / 2.0L Diesel",
    horsepower: "154 - 185 bhp",
    colors: ["White", "Black", "Silver", "Grey", "Red"],
    rating: 4.6,
    launchYear: 2023,
    seats: 5,
    bootSpace: "540 L",
    groundClearance: "192 mm",
    warranty: "3 years / Unlimited km",
    safety: ["ADAS", "6 Airbags", "ESC", "360° Camera"],
    infotainment: [
      "10.25\" Display",
      "Premium Sound",
      "Connected Car",
      "Navigation",
    ],
    tags: ["Premium", "Luxury SUV"],
  },
  {
    name: "Hyundai IONIQ 5",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Hyundai_Ioniq_5_AWD_Techniq-Paket_%E2%80%93_f_31122024.jpg/500px-Hyundai_Ioniq_5_AWD_Techniq-Paket_%E2%80%93_f_31122024.jpg",
    price: "₹45.95 Lakh",
    fuel: "Electric",
    transmission: "Automatic",
    topSpeed: "185 km/h",
    mileage: "631 km/full charge (ARAI)",
    engine: "72.6 kWh Battery (RWD)",
    horsepower: "217 bhp",
    colors: ["White", "Black", "Silver", "Gravity Gold"],
    rating: 4.9,
    launchYear: 2023,
    seats: 5,
    bootSpace: "527 L",
    groundClearance: "163 mm",
    warranty: "8 years / 160,000 km (Battery)",
    safety: ["ADAS", "6 Airbags", "VSM", "Lane Keep Assist"],
    infotainment: [
      "Dual 12.3\" Screens",
      "AR HUD",
      "Premium Sound",
      "Wireless Charger",
    ],
    tags: ["Electric", "Futuristic"],
  },
];

export default function Hyundai() {
  return (
    <div className="min-h-screen px-4 sm:px-6 py-5">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
        Hyundai Cars Collection
      </h1>
      <p className="text-gray-600 text-center mb-10">
        Innovation meets Affordability & Everyday Comfort
      </p>

      <div className="flex flex-col gap-5">
        {hyundaiCars.map((car, index) => (
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
