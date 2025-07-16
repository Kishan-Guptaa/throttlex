import React from "react";

const bmwBikes = [
  {
    name: "BMW S1000RR",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/BMW_S1000_RR_Studio.JPG/960px-BMW_S1000_RR_Studio.JPG",
    price: "₹20.75 Lakh",
    fuel: "Petrol",
    transmission: "6-Speed Manual",
    topSpeed: "303 km/h",
    mileage: "15 km/l",
    engine: "999cc Inline-4",
    horsepower: "206 bhp",
    colors: ["Red", "Black", "White", "Blue"],
    rating: 4.9,
    launchYear: 2023,
    seats: 2,
    weight: "197 kg",
    warranty: "3 years / Unlimited km",
    safety: ["Dual Channel ABS", "Traction Control", "Wheelie Control", "Riding Modes"],
    infotainment: ["6.5\" TFT Display", "Bluetooth Connectivity"],
    tags: ["Superbike", "Track Focused"],
  },
  {
    name: "BMW G310R",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/BMW_G_310_R.jpg/960px-BMW_G_310_R.jpg",
    price: "₹2.85 Lakh",
    fuel: "Petrol",
    transmission: "6-Speed Manual",
    topSpeed: "143 km/h",
    mileage: "30 km/l",
    engine: "313cc Single Cylinder",
    horsepower: "34 bhp",
    colors: ["Red", "Blue", "Black"],
    rating: 4.4,
    launchYear: 2022,
    seats: 2,
    weight: "164 kg",
    warranty: "3 years / Unlimited km",
    safety: ["Dual Channel ABS", "Slipper Clutch"],
    infotainment: ["LCD Display", "Digital Speedometer"],
    tags: ["Street", "Affordable BMW"],
  },
  {
    name: "BMW R1250GS",
    image: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/113967/bmw-r-1250-gs-left-front-three-quarter2.jpeg?isig=0&wm=2",
    price: "₹20.55 Lakh",
    fuel: "Petrol",
    transmission: "6-Speed Manual",
    topSpeed: "200+ km/h",
    mileage: "21 km/l",
    engine: "1254cc Boxer Twin",
    horsepower: "136 bhp",
    colors: ["Black", "White", "Blue", "Grey"],
    rating: 4.8,
    launchYear: 2023,
    seats: 2,
    weight: "249 kg",
    warranty: "3 years / Unlimited km",
    safety: ["ABS Pro", "Hill Start", "Traction Control", "Ride Modes"],
    infotainment: ["6.5\" TFT Display", "Navigation", "Bluetooth"],
    tags: ["Adventure", "Touring"],
  },
  {
    name: "BMW F900R",
    image: "https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/undefined-black-storm-metallic-1590756569692.jpg?q=80",
    price: "₹10.80 Lakh",
    fuel: "Petrol",
    transmission: "6-Speed Manual",
    topSpeed: "200+ km/h",
    mileage: "24 km/l",
    engine: "895cc Parallel Twin",
    horsepower: "105 bhp",
    colors: ["Black", "Red", "Blue"],
    rating: 4.6,
    launchYear: 2022,
    seats: 2,
    weight: "211 kg",
    warranty: "3 years / Unlimited km",
    safety: ["ABS", "Traction Control", "Riding Modes"],
    infotainment: ["6.5\" TFT", "Phone Connectivity"],
    tags: ["Naked", "Performance"],
  },
  {
    name: "BMW G310GS",
    image: "https://img.autocarindia.com/ExtraImages/20201008125705_BS6-BMW-G310GS.jpg?w=700&c=1",
    price: "₹3.20 Lakh",
    fuel: "Petrol",
    transmission: "6-Speed Manual",
    topSpeed: "143 km/h",
    mileage: "28 km/l",
    engine: "313cc Single Cylinder",
    horsepower: "34 bhp",
    colors: ["White", "Black", "Blue"],
    rating: 4.5,
    launchYear: 2023,
    seats: 2,
    weight: "169.5 kg",
    warranty: "3 years / Unlimited km",
    safety: ["Dual Channel ABS", "Slipper Clutch"],
    infotainment: ["Digital Console", "Side Stand Indicator"],
    tags: ["Adventure", "Beginner Friendly"],
  },
  {
    name: "BMW R18",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/55171/left-rear-three-quarter.jpeg?q=80",
    price: "₹19.90 Lakh",
    fuel: "Petrol",
    transmission: "6-Speed Manual",
    topSpeed: "180 km/h",
    mileage: "17 km/l",
    engine: "1802cc Boxer Twin",
    horsepower: "91 bhp",
    colors: ["Black", "Silver"],
    rating: 4.7,
    launchYear: 2023,
    seats: 2,
    weight: "345 kg",
    warranty: "3 years / Unlimited km",
    safety: ["ABS", "Engine Brake Control", "Cornering Control"],
    infotainment: ["Analog + Digital Display"],
    tags: ["Cruiser", "Heritage"],
  },
];

export default function BMWBikes() {
  return (
    <div className="min-h-screen px-4 sm:px-6 py-5">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
        BMW Bikes Collection
      </h1>
      <p className="text-gray-600 text-center mb-10">
        Ride the Power of German Engineering
      </p>

      <div className="flex flex-col gap-5">
        {bmwBikes.map((bike, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } hover:shadow-2xl transition-all duration-300`}
          >
            {/* Image & Summary */}
            <div className="md:w-1/2 w-full flex flex-col">
              <div className="w-full h-64 md:h-full">
                <img
                  src={bike.image}
                  alt={bike.name}
                  className="w-full h-full object-cover object-center transition-all duration-300"
                />
              </div>
              <div className="hidden md:block px-5 py-3 text-sm text-gray-700 space-y-1 border-t">
                <p><strong>Price:</strong> <span className="text-green-600">{bike.price}</span></p>
                <p><strong>Launch Year:</strong> {bike.launchYear}</p>
                <p><strong>Fuel:</strong> {bike.fuel}</p>
                <p><strong>Transmission:</strong> {bike.transmission}</p>
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
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-sm text-gray-700 space-y-1 leading-relaxed">
                  <p><strong>Engine:</strong> {bike.engine}</p>
                  <p><strong>Horsepower:</strong> {bike.horsepower}</p>
                  <p><strong>Seating Capacity:</strong> {bike.seats}</p>
                  <p><strong>Weight:</strong> {bike.weight}</p>
                  <p><strong>Warranty:</strong> {bike.warranty}</p>
                  <p><strong>Colors:</strong> {bike.colors.join(", ")}</p>
                  <p><strong>Rating:</strong> ⭐ {bike.rating}</p>
                  <p><strong>Safety:</strong> {bike.safety.join(", ")}</p>
                  <p><strong>Infotainment:</strong> {bike.infotainment.join(", ")}</p>
                </div>
              </div>
              <button className="mt-6 w-fit bg-gradient-to-r from-[#1B3C53] to-[#456882] text-white py-2 px-5 rounded-lg hover:opacity-90 transition-all duration-300 shadow">
                Book Test Ride
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
