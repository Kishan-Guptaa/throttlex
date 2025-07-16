import React from "react";

const tataCars = [
  {
    name: "Tata Nexon EV",
    image:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/149123/nexon-ev-exterior-right-front-three-quarter-79.jpeg?isig=0&q=80",
    price: "₹14.49 – ₹19.54 Lakh",
    fuel: "Electric",
    transmission: "Automatic",
    topSpeed: "140 km/h",
    mileage: "453 km/full charge",
    engine: "Permanent Magnet Synchronous Motor",
    horsepower: "143 bhp",
    colors: ["Teal Blue", "White", "Grey", "Black"],
    rating: 4.7,
    launchYear: 2023,
    seats: 5,
    bootSpace: "350 L",
    groundClearance: "205 mm",
    warranty: "8 years / 1.6 Lakh km (Battery)",
    safety: ["6 Airbags", "ESP", "ABS", "Hill Hold"],
    infotainment: [
      "10.25\" Touchscreen",
      "Apple CarPlay & Android Auto",
      "Connected Car Tech",
      "Harman Sound System",
    ],
    tags: ["Electric", "Top Seller"],
  },
  {
    name: "Tata Harrier",
    image:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/139139/harrier-exterior-right-front-three-quarter-6.jpeg?isig=0&q=80",
    price: "₹15.49 – ₹26.44 Lakh",
    fuel: "Diesel",
    transmission: "Manual / Automatic",
    topSpeed: "180 km/h",
    mileage: "16.35 km/l",
    engine: "2.0L Turbo Diesel",
    horsepower: "170 bhp",
    colors: ["White", "Red", "Black", "Silver"],
    rating: 4.6,
    launchYear: 2023,
    seats: 5,
    bootSpace: "425 L",
    groundClearance: "205 mm",
    warranty: "3 years / 1 Lakh km",
    safety: ["6 Airbags", "ADAS", "360 Camera", "ESP"],
    infotainment: [
      "12.3\" Touchscreen",
      "Wireless Apple CarPlay",
      "JBL Audio",
      "Navigation",
    ],
    tags: ["SUV", "Flagship"],
  },
  {
    name: "Tata Safari",
    image:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Safari/9485/1741331784853/front-left-side-47.jpg",
    price: "₹16.19 – ₹27.34 Lakh",
    fuel: "Diesel",
    transmission: "Manual / Automatic",
    topSpeed: "180 km/h",
    mileage: "16.14 km/l",
    engine: "2.0L Turbo Diesel",
    horsepower: "170 bhp",
    colors: ["Royal Blue", "White", "Grey", "Black"],
    rating: 4.6,
    launchYear: 2023,
    seats: 7,
    bootSpace: "447 L",
    groundClearance: "200 mm",
    warranty: "3 years / 1 Lakh km",
    safety: ["6 Airbags", "Hill Descent", "TPMS", "ESP"],
    infotainment: [
      "12.3\" Touchscreen",
      "Panoramic Sunroof",
      "Connected Tech",
      "JBL Audio",
    ],
    tags: ["SUV", "Family Car"],
  },
  {
    name: "Tata Tiago",
    image:
      "https://www.motorbeam.com/wp-content/uploads/Tata-Tiago-EV-Blitz-Edition.jpg",
    price: "₹5.65 – ₹8.90 Lakh",
    fuel: "Petrol / CNG",
    transmission: "Manual / AMT",
    topSpeed: "150 km/h",
    mileage: "19 – 26.49 km/kg (CNG)",
    engine: "1.2L Revotron",
    horsepower: "86 bhp",
    colors: ["Blue", "Red", "Grey", "White"],
    rating: 4.4,
    launchYear: 2022,
    seats: 5,
    bootSpace: "242 L",
    groundClearance: "170 mm",
    warranty: "2 years / 75,000 km",
    safety: ["2 Airbags", "ABS", "Rear Parking Sensors", "EBD"],
    infotainment: [
      "7\" Touchscreen",
      "Android Auto / Apple CarPlay",
      "Harman Audio",
    ],
    tags: ["Budget", "Compact Hatchback"],
  },
  {
    name: "Tata Punch",
    image:
      "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/148309/punch-ev-exterior-right-front-three-quarter-10.jpeg?isig=0&q=80&q=80",
    price: "₹6.13 – ₹10.20 Lakh",
    fuel: "Petrol / CNG",
    transmission: "Manual / AMT",
    topSpeed: "160 km/h",
    mileage: "20 – 26.99 km/kg (CNG)",
    engine: "1.2L Revotron",
    horsepower: "86 bhp",
    colors: ["White", "Red", "Orange", "Blue"],
    rating: 4.5,
    launchYear: 2022,
    seats: 5,
    bootSpace: "366 L",
    groundClearance: "187 mm",
    warranty: "2 years / 75,000 km",
    safety: ["2 Airbags", "ABS", "iRA Connected Car Tech", "Rear Camera"],
    infotainment: [
      "7\" Touchscreen",
      "Harman Audio",
      "Navigation",
      "CarPlay / Android Auto",
    ],
    tags: ["Micro SUV", "Top Seller"],
  },
];

export default function Tata() {
  return (
    <div className="min-h-screen px-4 sm:px-6 py-5">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
        Tata Cars Collection
      </h1>
      <p className="text-gray-600 text-center mb-10">
        Trusted Indian Innovation, Safety & Value
      </p>

      <div className="flex flex-col gap-5">
        {tataCars.map((car, index) => (
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
                    <strong>Infotainment:</strong>{" "}
                    {car.infotainment.join(", ")}
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
