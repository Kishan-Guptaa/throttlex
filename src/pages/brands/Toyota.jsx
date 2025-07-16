import React from "react";

const toyotaCars = [
  {
    name: "Toyota Fortuner",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/2015_Toyota_Fortuner_%28New_Zealand%29.jpg/500px-2015_Toyota_Fortuner_%28New_Zealand%29.jpg",
    price: "₹33.43 Lakh",
    fuel: "Diesel / Petrol",
    transmission: "Manual / Automatic",
    topSpeed: "176 km/h",
    mileage: "10.0 – 14.6 km/l",
    engine: "2.7L Petrol / 2.8L Diesel",
    horsepower: "204 bhp",
    colors: ["White", "Black", "Silver", "Brown"],
    rating: 4.7,
    launchYear: 2023,
    seats: 7,
    bootSpace: "296 L",
    groundClearance: "221 mm",
    warranty: "3 years / 1,00,000 km",
    safety: ["7 Airbags", "ABS", "Hill Assist", "Traction Control"],
    infotainment: [
      "8\" Touchscreen",
      "Apple CarPlay",
      "Android Auto",
      "JBL Sound System",
    ],
    tags: ["SUV", "Premium"],
  },
  {
    name: "Toyota Innova Hycross",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Toyota_Innova_Zenix_2.0_V_%28III%29_%E2%80%93_f_22032025.jpg/500px-Toyota_Innova_Zenix_2.0_V_%28III%29_%E2%80%93_f_22032025.jpg",
    price: "₹19.77 – 30.68 Lakh",
    fuel: "Petrol / Hybrid",
    transmission: "CVT Automatic",
    topSpeed: "170 km/h",
    mileage: "16 – 23 km/l",
    engine: "2.0L Petrol / 2.0L Hybrid",
    horsepower: "183 bhp",
    colors: ["Silver", "White", "Black", "Red"],
    rating: 4.8,
    launchYear: 2023,
    seats: 7,
    bootSpace: "300 L",
    groundClearance: "185 mm",
    warranty: "3 years / 1,00,000 km",
    safety: ["6 Airbags", "TPMS", "360 Camera", "ADAS"],
    infotainment: [
      "10.1\" Display",
      "Connected Car Tech",
      "Wireless CarPlay",
      "Voice Assist",
    ],
    tags: ["Hybrid", "Family MPV"],
  },
  {
    name: "Toyota Urban Cruiser Hyryder",
    image:
      "https://imgd.aeplcdn.com/1056x594/n/4m3vcva_1596598.jpg?q=80",
    price: "₹11.14 – 20.19 Lakh",
    fuel: "Petrol / CNG / Hybrid",
    transmission: "Manual / e-CVT",
    topSpeed: "160 km/h",
    mileage: "19 – 27.9 km/l",
    engine: "1.5L Petrol / Hybrid",
    horsepower: "115 bhp",
    colors: ["Grey", "Red", "Blue", "Black"],
    rating: 4.6,
    launchYear: 2022,
    seats: 5,
    bootSpace: "373 L",
    groundClearance: "208 mm",
    warranty: "3 years / 1,00,000 km",
    safety: ["6 Airbags", "ABS", "Hill Hold", "ESP"],
    infotainment: [
      "9\" Smart Display",
      "360 Camera",
      "Wireless Android Auto",
      "Connected Car Tech",
    ],
    tags: ["Hybrid", "Mid-size SUV"],
  },
  {
    name: "Toyota Glanza",
    image:
      "https://img.autocarpro.in/autocarpro/9a7a3683-7ef1-4b85-8b51-dfbc191758d3.jpg",
    price: "₹6.86 – 10.00 Lakh",
    fuel: "Petrol / CNG",
    transmission: "Manual / AMT / CVT",
    topSpeed: "180 km/h",
    mileage: "22.3 – 30.61 km/kg",
    engine: "1.2L Petrol / CNG",
    horsepower: "90 bhp",
    colors: ["Red", "Blue", "White", "Grey"],
    rating: 4.5,
    launchYear: 2022,
    seats: 5,
    bootSpace: "318 L",
    groundClearance: "170 mm",
    warranty: "3 years / 1,00,000 km",
    safety: ["6 Airbags", "ABS", "Rear Camera", "Hill Hold"],
    infotainment: [
      "9\" Touchscreen",
      "Apple CarPlay",
      "Android Auto",
      "Connected Features",
    ],
    tags: ["Hatchback", "Efficient"],
  },
  {
    name: "Toyota Hilux",
    image:
      "https://images.91wheels.com/assets/b_images/main/models/profile/profile1746432319.jpg",
    price: "₹30.41 – 37.90 Lakh",
    fuel: "Diesel",
    transmission: "Manual / Automatic",
    topSpeed: "175 km/h",
    mileage: "12 – 14 km/l",
    engine: "2.8L Turbo Diesel",
    horsepower: "204 bhp",
    colors: ["White", "Red", "Grey", "Silver"],
    rating: 4.6,
    launchYear: 2023,
    seats: 5,
    bootSpace: "Open Deck (Load Bed)",
    groundClearance: "220 mm",
    warranty: "3 years / 1,00,000 km",
    safety: ["7 Airbags", "Vehicle Stability Control", "Rear Sensors", "Hill Assist"],
    infotainment: [
      "8\" Touchscreen",
      "Android Auto",
      "Apple CarPlay",
      "Premium Audio",
    ],
    tags: ["Pickup", "Adventure"],
  },
];

export default function Toyota() {
  return (
    <div className="min-h-screen px-4 sm:px-6 py-5">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
        Toyota Cars Collection
      </h1>
      <p className="text-gray-600 text-center mb-10">
        Reliable. Durable. Affordable. Explore Toyota's Finest.
      </p>

      <div className="flex flex-col gap-5">
        {toyotaCars.map((car, index) => (
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
