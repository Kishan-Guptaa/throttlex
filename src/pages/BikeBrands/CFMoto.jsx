import React from "react";

const cfmotoBikes = [
  {
    name: "CFMOTO 300SR",
    image: "https://www.datocms-assets.com/119921/1714589052-cfmoto-300sr-redesign-coming-soon_01.jpg?auto=format&w=800",
    price: "₹2.40 Lakh",
    fuel: "Petrol",
    transmission: "6-speed Manual",
    topSpeed: "140 km/h",
    mileage: "30 km/l",
    engine: "292 cc Liquid-cooled Single-cylinder",
    horsepower: "27 bhp",
    colors: ["Blue", "Red", "Black"],
    rating: 4.4,
    launchYear: 2021,
    seats: 2,
    tankCapacity: "12 L",
    groundClearance: "160 mm",
    warranty: "2 years / Unlimited km",
    safety: ["ABS", "Disc Brakes", "Tubeless Tyres"],
    features: ["Full LED", "LCD Console", "Split Seats"],
    tags: ["Sport", "Commuter"],
  },
  {
    name: "CFMOTO 650NK",
    image: "https://cdn.dealerspike.com/imglib/v1/800x600/imglib/Assets/Inventory/EC/20/EC20C187-0C89-4F65-8178-49981AE352C1.jpg",
    price: "₹5.99 Lakh",
    fuel: "Petrol",
    transmission: "6-speed Manual",
    topSpeed: "170 km/h",
    mileage: "25 km/l",
    engine: "649 cc Parallel‑Twin",
    horsepower: "61 bhp",
    colors: ["Black Metallic", "Orange Black"],
    rating: 4.7,
    launchYear: 2022,
    seats: 2,
    tankCapacity: "18 L",
    groundClearance: "160 mm",
    warranty: "2 years / Unlimited km",
    safety: ["ABS", "Dual Channel", "Disc Brakes"],
    features: ["Digital LCD", "USD Fork", "Comfort Seat"],
    tags: ["Naked", "Performance"],
  },
  {
    name: "CFMOTO 650MT",
    image: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/97475/right-side-view.jpeg",
    price: "₹6.49 Lakh",
    fuel: "Petrol",
    transmission: "6-speed Manual",
    topSpeed: "165 km/h",
    mileage: "23 km/l",
    engine: "649 cc Parallel‑Twin",
    horsepower: "60 bhp",
    colors: ["Grey", "Sandstorm"],
    rating: 4.6,
    launchYear: 2023,
    seats: 2,
    tankCapacity: "18 L",
    groundClearance: "205 mm",
    warranty: "2 years / Unlimited km",
    safety: ["ABS", "Disc Brakes", "Tubeless Tyres"],
    features: ["Windscreen", "USB Charger", "LCD Console"],
    tags: ["Adventure", "Touring"],
  },
  {
    name: "CFMOTO 700CL-X Heritage",
    image: "https://cfmotobenelux.com/wp-content/uploads/2021/05/700-cl-x-heritage-twilight-blue.jpg",
    price: "₹6.79 Lakh",
    fuel: "Petrol",
    transmission: "6-speed Manual",
    topSpeed: "180 km/h",
    mileage: "20 km/l",
    engine: "693 cc Parallel‑Twin",
    horsepower: "74 bhp",
    colors: ["Vintage Black", "Sandstorm"],
    rating: 4.8,
    launchYear: 2023,
    seats: 2,
    tankCapacity: "17.5 L",
    groundClearance: "205 mm",
    warranty: "2 years / Unlimited km",
    safety: ["ABS", "Disc Brakes", "Tubeless Tyres"],
    features: ["Retro Design", "LED Headlamp", "Dual Display"],
    tags: ["Heritage", "Roadster"],
  },
  {
    name: "CFMOTO 800MT",
    image: "https://www.cfmoto.com/content/dam/cfmoto/site/global/product/motorcycle/mt----mult-touring/800mt-explore-edition/2025update/1.png",
    price: "₹6.99 Lakh",
    fuel: "Petrol",
    transmission: "6-speed Manual",
    topSpeed: "200 km/h",
    mileage: "22 km/l",
    engine: "799 cc Parallel‑Twin",
    horsepower: "95 bhp",
    colors: ["Sandstorm", "Sky Blue"],
    rating: 4.7,
    launchYear: 2024,
    seats: 2,
    tankCapacity: "19 L",
    groundClearance: "200 mm",
    warranty: "2 years / Unlimited km",
    safety: ["ABS", "Disc Brakes", "Tubeless Tyres"],
    features: ["Cruise Control", "TFT Display", "Tyre Pressure Monitor"],
    tags: ["Adventure", "Touring"],
  },
  {
    name: "CFMOTO 300CL-X",
    image: "https://sunstatemotorcycles.com.au/wp-content/uploads/2023/12/5.png",
    price: "₹2.80 Lakh",
    fuel: "Petrol",
    transmission: "6-speed Manual",
    topSpeed: "150 km/h",
    mileage: "28 km/l",
    engine: "292 cc Single-cylinder",
    horsepower: "27 bhp",
    colors: ["Matte Blue", "Black"],
    rating: 4.5,
    launchYear: 2023,
    seats: 2,
    tankCapacity: "12 L",
    groundClearance: "175 mm",
    warranty: "2 years / Unlimited km",
    safety: ["ABS", "Disc Brakes", "Tubeless Tyres"],
    features: ["LCD Cluster", "LED Headlamp", "Retro Styling"],
    tags: ["Retro", "Roadster"],
  },
];

export default function Cfmoto() {
  return (
    <div className="min-h-screen px-4 sm:px-6 py-5">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
        CFMoto Bikes Collection
      </h1>
      <p className="text-gray-600 text-center mb-10">
        Discover these popular CFMoto models — stylish, performance-packed rides.
      </p>

      <div className="flex flex-col gap-5">
        {cfmotoBikes.map((bike, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } hover:shadow-2xl transition-all duration-300`}
          >
            {/* Image + summary section */}
            <div className="md:w-1/2 w-full flex flex-col">
              <div className="w-full h-[260px] md:h-[300px]">
                <img
                  src={bike.image}
                  alt={bike.name}
                  className="w-full h-full object-cover object-center rounded-tr-2xl rounded-tl-2xl md:rounded-none"
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

            {/* Right side: Details */}
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
                  <p><strong>Seats:</strong> {bike.seats}</p>
                  <p><strong>Fuel Tank:</strong> {bike.tankCapacity}</p>
                  <p><strong>Ground Clearance:</strong> {bike.groundClearance}</p>
                  <p><strong>Warranty:</strong> {bike.warranty}</p>
                  <p><strong>Colors:</strong> {bike.colors.join(", ")}</p>
                  <p><strong>Rating:</strong> ⭐ {bike.rating}</p>
                  <p><strong>Safety:</strong> {bike.safety.join(", ")}</p>
                  <p><strong>Features:</strong> {bike.features.join(", ")}</p>
                </div>
              </div>
              <button className="mt-6 w-fit bg-gradient-to-r from-[#1B3C53] to-[#456882] text-white py-2 px-5 rounded-lg hover:opacity-90 transition-all duration-300 shadow">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
