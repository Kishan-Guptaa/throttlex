import React from "react";

const ducatiBikes = [
  {
    name: "Ducati Monster 937",
    image:
      "https://d1hv7ee95zft1i.cloudfront.net/custom/motorcycle-model-photo/original/ducati-monster-937-68244e786ba05.png",
    price: "₹14.80 Lakh",
    fuel: "Petrol",
    transmission: "6-speed Manual",
    topSpeed: "225 km/h",
    mileage: "20 km/l",
    engine: "937 cc Testastretta 11° L-Twin",
    horsepower: "110 bhp",
    colors: ["Red", "White", "Black"],
    rating: 4.7,
    launchYear: 2022,
    seats: 2,
    tankCapacity: "14 L",
    groundClearance: "130 mm",
    warranty: "2 years / Unlimited km",
    safety: ["ABS Cornering", "Ducati Traction Control"],
    features: ["Full LED", "TFT Display", "Riding Modes"],
    tags: ["Naked", "Sport"],
  },
  {
    name: "Ducati Panigale V4",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Ducati_Panigale_V4_-_Tuning_World_Bodensee_2018%2C_Friedrichshafen_%28OW1A0484%29.jpg/960px-Ducati_Panigale_V4_-_Tuning_World_Bodensee_2018%2C_Friedrichshafen_%28OW1A0484%29.jpg",
    price: "₹49.95 Lakh",
    fuel: "Petrol",
    transmission: "6-speed Manual w/ Quick Shift",
    topSpeed: "299 km/h",
    mileage: "15 km/l",
    engine: "1,103 cc Desmosedici Stradale V4",
    horsepower: "214 bhp",
    colors: ["Red", "Black"],
    rating: 4.9,
    launchYear: 2021,
    seats: 2,
    tankCapacity: "16 L",
    groundClearance: "110 mm",
    warranty: "2 years / Unlimited km",
    safety: ["ABS", "Slide Control", "Ducati Wheelie Control"],
    features: ["Winglets", "Riding Modes", "Live Data"],
    tags: ["Superbike", "Flagship"],
  },
  {
    name: "Ducati Multistrada V4",
    image:
      "https://imgd.aeplcdn.com/664x374/n/bw/models/colors/ducati-select-model-ducati-red-1627562331021.jpg?q=80",
    price: "₹34.95 Lakh",
    fuel: "Petrol",
    transmission: "6-speed Manual w/ Quick Shift",
    topSpeed: "270 km/h",
    mileage: "18 km/l",
    engine: "1,158 cc V4 Granturismo",
    horsepower: "170 bhp",
    colors: ["Red", "Grey"],
    rating: 4.8,
    launchYear: 2023,
    seats: 2,
    tankCapacity: "22 L",
    groundClearance: "215 mm",
    warranty: "2 years / Unlimited km",
    safety: ["ABS Cornering", "Radar CC & CW", "DTC"],
    features: ["GPS", "Full TFT", "WP Suspension"],
    tags: ["Adventure", "Touring"],
  },
  {
    name: "Ducati Scrambler Icon",
    image:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/--dark1742547712884.jpg?q=80",
    price: "₹11.25 Lakh",
    fuel: "Petrol",
    transmission: "6-speed Manual",
    topSpeed: "170 km/h",
    mileage: "22 km/l",
    engine: "803 cc Air-cooled L-Twin",
    horsepower: "73 bhp",
    colors: ["Yellow", "Red", "Black"],
    rating: 4.5,
    launchYear: 2022,
    seats: 2,
    tankCapacity: "13.5 L",
    groundClearance: "180 mm",
    warranty: "2 years / Unlimited km",
    safety: ["ABS", "Ducati Traction Control"],
    features: ["LED Lighting", "TFT Display", "Riding Modes"],
    tags: ["Retro", "Casual"],
  },
  {
    name: "Ducati Diavel V4",
    image:
      "https://imgd.aeplcdn.com/664x374/n/bw/models/colors/ducati-select-model-thrilling-black-1691487842546.png?q=80",
    price: "₹39.95 Lakh",
    fuel: "Petrol",
    transmission: "6-speed Manual w/ Quick Shift",
    topSpeed: "270 km/h",
    mileage: "17 km/l",
    engine: "1,158 cc V4 Granturismo",
    horsepower: "159 bhp",
    colors: ["Black", "Carbon Grey"],
    rating: 4.8,
    launchYear: 2023,
    seats: 2,
    tankCapacity: "17 L",
    groundClearance: "130 mm",
    warranty: "2 years / Unlimited km",
    safety: ["ABS", "Slide Control", "DTC"],
    features: ["Cruise Control", "TFT Display", "LED"],
    tags: ["Power Cruiser", "Muscle"],
  },
  {
    name: "Ducati Hypermotard 950",
    image:
      "https://imgd.aeplcdn.com/664x374/n/bw/models/colors/ducati-select-model-graffiti-evo-1714038480859.png?q=80",
    price: "₹18.95 Lakh",
    fuel: "Petrol",
    transmission: "6-speed Manual",
    topSpeed: "215 km/h",
    mileage: "18 km/l",
    engine: "937 cc Testastretta 11° L-Twin",
    horsepower: "114 bhp",
    colors: ["Red", "Yellow"],
    rating: 4.6,
    launchYear: 2022,
    seats: 2,
    tankCapacity: "13 L",
    groundClearance: "260 mm",
    warranty: "2 years / Unlimited km",
    safety: ["ABS Cornering", "DTC"],
    features: ["LED", "TFT Display", "Riding Modes"],
    tags: ["Supermotard", "Urban"],
  },
];

export default function Ducati() {
  return (
    <div className="min-h-screen px-4 sm:px-6 py-5">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
        Ducati Motorcycles
      </h1>
      <p className="text-gray-600 text-center mb-10">
        Italian Performance & Passion in Six Models
      </p>

      <div className="flex flex-col gap-5">
        {ducatiBikes.map((bike, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } hover:shadow-2xl transition-all duration-300`}
          >
            {/* Image & Summary */}
            <div className="md:w-1/2 w-full flex flex-col">
              <div className="w-full h-[260px] md:h-[300px]">
                <img
                  src={bike.image}
                  alt={bike.name}
                  className="w-full h-full object-cover object-center transition-all duration-300 rounded-tl-2xl rounded-tr-2xl md:rounded-none"
                />
              </div>
              <div className="hidden md:block px-5 py-3 text-sm text-gray-700 space-y-1 border-t">
                <p>
                  <strong>Price:</strong>{" "}
                  <span className="text-green-600">{bike.price}</span>
                </p>
                <p><strong>Engine:</strong> {bike.engine}</p>
                <p><strong>Power:</strong> {bike.horsepower}</p>
                <p><strong>Top Speed:</strong> {bike.topSpeed}</p>
                <p><strong>Mileage:</strong> {bike.mileage}</p>
              </div>
            </div>

            {/* Details Section */}
            <div className="md:w-1/2 w-full p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{bike.name}</h2>
                <div className="flex flex-wrap gap-2 mb-3">
                  {bike.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-sm text-gray-700 space-y-1 leading-relaxed">
                  <p><strong>Fuel Tank:</strong> {bike.tankCapacity}</p>
                  <p><strong>Ground Clearance:</strong> {bike.groundClearance}</p>
                  <p><strong>Seats:</strong> {bike.seats}</p>
                  <p><strong>Warranty:</strong> {bike.warranty}</p>
                  <p><strong>Colors:</strong> {bike.colors.join(", ")}</p>
                  <p><strong>Rating:</strong> ⭐ {bike.rating}</p>
                  <p><strong>Launch Year:</strong> {bike.launchYear}</p>
                  <p><strong>Safety:</strong> {bike.safety.join(", ")}</p>
                  <p><strong>Features:</strong> {bike.features.join(", ")}</p>
                </div>
              </div>
              <button className="mt-6 w-fit bg-gradient-to-r from-red-600 to-red-800 text-white py-2 px-5 rounded-lg hover:opacity-90 transition-all duration-300 shadow">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
