import React from "react";

const mercedesCars = [
  {
    name: "Mercedes-Benz S-Class",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Mercedes-Benz_W223_IMG_6663.jpg/500px-Mercedes-Benz_W223_IMG_6663.jpg",
    price: "₹1.71 Cr",
    fuel: "Petrol / Diesel",
    transmission: "Automatic",
    topSpeed: "250 km/h",
    mileage: "12.0 km/l",
    engine: "3.0L Turbo Inline-6 / Plug-in Hybrid",
    horsepower: "429 bhp",
    colors: ["Black", "White", "Silver", "Blue"],
    rating: 4.9,
    launchYear: 2023,
    seats: 5,
    bootSpace: "550 L",
    groundClearance: "110 mm",
    warranty: "3 years / Unlimited km",
    safety: ["9 Airbags", "ADAS", "360 Camera", "Brake Assist"],
    infotainment: [
      "12.8\" OLED Display",
      "MBUX System",
      "Rear Seat Entertainment",
      "Burmester Audio",
    ],
    tags: ["Luxury Sedan", "Flagship"],
  },
  {
    name: "Mercedes-Benz G-Wagon (G63 AMG)",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Mercedes-Benz_W463_G_350_BlueTEC_01.jpg/500px-Mercedes-Benz_W463_G_350_BlueTEC_01.jpg",
    price: "₹3.30 Cr",
    fuel: "Petrol",
    transmission: "Automatic",
    topSpeed: "220 km/h",
    mileage: "6.1 km/l",
    engine: "4.0L V8 Twin-Turbo",
    horsepower: "585 bhp",
    colors: ["Green", "Black", "White", "Grey"],
    rating: 4.8,
    launchYear: 2023,
    seats: 5,
    bootSpace: "667 L",
    groundClearance: "241 mm",
    warranty: "3 years / Unlimited km",
    safety: ["8 Airbags", "Off-Road Assist", "Hill Assist", "Traction Control"],
    infotainment: [
      "12.3\" Dual Displays",
      "MBUX Off-Road Modes",
      "Android Auto / CarPlay",
      "Burmester Sound",
    ],
    tags: ["SUV", "Luxury Off-Roader"],
  },
  {
    name: "Mercedes-Benz E-Class",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Mercedes-Benz_W214_1X7A1841.jpg/500px-Mercedes-Benz_W214_1X7A1841.jpg",
    price: "₹88.00 Lakh",
    fuel: "Petrol / Diesel",
    transmission: "Automatic",
    topSpeed: "250 km/h",
    mileage: "16.1 km/l",
    engine: "2.0L Turbocharged",
    horsepower: "197–258 bhp",
    colors: ["White", "Black", "Silver", "Brown"],
    rating: 4.7,
    launchYear: 2022,
    seats: 5,
    bootSpace: "540 L",
    groundClearance: "150 mm",
    warranty: "3 years / Unlimited km",
    safety: ["7 Airbags", "Blind Spot Assist", "ABS", "EBD"],
    infotainment: [
      "MBUX Dual Display",
      "Wireless Charging",
      "Connected Car Tech",
      "360 Camera",
    ],
    tags: ["Business", "Executive Sedan"],
  },
  {
    name: "Mercedes-Benz A-Class Limousine",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/2018_Mercedes-Benz_A200_AMG_Line_Premium_Automatic_1.3_Front.jpg/500px-2018_Mercedes-Benz_A200_AMG_Line_Premium_Automatic_1.3_Front.jpg",
    price: "₹48.00 Lakh",
    fuel: "Petrol / Diesel",
    transmission: "Automatic",
    topSpeed: "230 km/h",
    mileage: "17.5 km/l",
    engine: "1.3L Turbocharged",
    horsepower: "163 bhp",
    colors: ["White", "Red", "Black", "Grey"],
    rating: 4.6,
    launchYear: 2023,
    seats: 5,
    bootSpace: "405 L",
    groundClearance: "160 mm",
    warranty: "3 years / Unlimited km",
    safety: ["6 Airbags", "ABS", "Parking Assist", "Hill Start Assist"],
    infotainment: [
      "10.25\" MBUX Display",
      "Touchpad",
      "Apple CarPlay",
      "Android Auto",
    ],
    tags: ["Entry Luxury", "Urban Drive"],
  },
  {
    name: "Mercedes-Benz EQS 580 (Electric)",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Mercedes-Benz_V297_Classic-Days_2022_DSC_0016.jpg/500px-Mercedes-Benz_V297_Classic-Days_2022_DSC_0016.jpg",
    price: "₹1.62 Cr",
    fuel: "Electric",
    transmission: "Automatic",
    topSpeed: "210 km/h",
    mileage: "857 km/full charge",
    engine: "Dual Electric Motors",
    horsepower: "516 bhp",
    colors: ["Silver", "Black", "White", "Green"],
    rating: 5.0,
    launchYear: 2023,
    seats: 5,
    bootSpace: "610 L",
    groundClearance: "125 mm",
    warranty: "8 years / 160,000 km (Battery)",
    safety: ["ADAS", "9 Airbags", "Surround View", "Collision Warning"],
    infotainment: [
      "56\" MBUX Hyperscreen",
      "AR Navigation",
      "Wireless Charging",
      "Burmester 3D Sound",
    ],
    tags: ["Electric", "Flagship EV"],
  },
];

export default function Mercedes() {
  return (
    <div className="min-h-screen px-4 sm:px-6 py-5">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
        Mercedes-Benz Cars Collection
      </h1>
      <p className="text-gray-600 text-center mb-10">
        Where Luxury Meets Innovation and Performance
      </p>

      <div className="flex flex-col gap-5">
        {mercedesCars.map((car, index) => (
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
