import React from "react";

const tvsBikes = [
  {
    name: "TVS Apache RTR 160 4V",
    image:
      "https://www.thrustzone.com/wp-content/uploads/2024/11/New-TVS-Apache-RTR-160-4V-with-USD_Pearl-White_3-4th-scaled.jpg",
    price: "₹1.43 Lakh",
    fuel: "Petrol",
    transmission: "5-speed Manual",
    topSpeed: "115 km/h",
    mileage: "45 km/l",
    engine: "159.7 cc Air-cooled Single-cylinder",
    horsepower: "17.03 bhp",
    colors: ["Red", "Black", "Blue"],
    rating: 4.6,
    launchYear: 2022,
    seats: 2,
    tankCapacity: "12 L",
    groundClearance: "180 mm",
    warranty: "5 years / 80,000 km",
    safety: ["Disc Brakes", "ABS"],
    features: ["LED Headlamp", "Supermoto Mode", "Digital Console"],
    tags: ["Sport", "Street"],
  },
  {
    name: "TVS Ntorq 125",
    image:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/tvs-ntorq-125-disc1725629749318.jpg?q=80",
    price: "₹1.21 Lakh",
    fuel: "Petrol",
    transmission: "CVT",
    topSpeed: "95 km/h",
    mileage: "40 km/l",
    engine: "124.79 cc Air-cooled Single-cylinder",
    horsepower: "9.4 bhp",
    colors: ["Yellow", "Matte Black", "Red"],
    rating: 4.5,
    launchYear: 2023,
    seats: 2,
    tankCapacity: "6 L",
    groundClearance: "165 mm",
    warranty: "5 years / Unlimited km",
    safety: ["Disc Brakes", "CBS"],
    features: ["Fully Digital Console", "Mobile Connect", "Sporty Design"],
    tags: ["Scooter", "Sporty"],
  },
  {
    name: "TVS Apache RR 310",
    image:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/--red-without-quickshifter-obd-2b1744894903832.jpg?q=80",
    price: "₹3.10 Lakh",
    fuel: "Petrol",
    transmission: "6-speed Manual",
    topSpeed: "154 km/h",
    mileage: "25 km/l",
    engine: "312.2 cc Liquid-cooled Single-cylinder",
    horsepower: "34 bhp",
    colors: ["Pearl White", "Matte Black"],
    rating: 4.8,
    launchYear: 2022,
    seats: 2,
    tankCapacity: "11 L",
    groundClearance: "170 mm",
    warranty: "5 years / 80,000 km",
    safety: ["Dual-channel ABS", "LED Lights"],
    features: ["Race-tuned Suspension", "Windshield", "Digital Dashboard"],
    tags: ["Supersport", "Track"],
  },
  {
    name: "TVS iQube S",
    image:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/--22-kwh1747293190144.jpg?q=80",
    price: "₹1.40 Lakh ",
    fuel: "Electric",
    transmission: "Single-speed",
    topSpeed: "78 km/h",
    mileage: "75 km/charge",
    engine: "Electric Motor",
    horsepower: "4.4 bhp",
    colors: ["Solar Red", "Mineral Black"],
    rating: 4.4,
    launchYear: 2022,
    seats: 2,
    tankCapacity: "Electric",
    groundClearance: "146 mm",
    warranty: "3 years / 40,000 km",
    safety: ["Disc Brakes", "CBS"],
    features: ["Connected Scooter", "Reverse Mode", "LED Lights"],
    tags: ["Electric", "Urban"],
  },
  {
    name: "TVS Metro Plus",
    image:
      "https://imgd.aeplcdn.com/664x374/bw/models/tvs-scooty-pep-plus-standard-167.jpg?20190103151915&q=80",
    price: "₹68,800",
    fuel: "Petrol",
    transmission: "4-speed Manual",
    topSpeed: "65 km/h",
    mileage: "65 km/l",
    engine: "99.7 cc Air-cooled Single-cylinder",
    horsepower: "8.09 bhp",
    colors: ["Red", "Black", "Blue"],
    rating: 4.3,
    launchYear: 2021,
    seats: 2,
    tankCapacity: "9.2 L",
    groundClearance: "170 mm",
    warranty: "5 years / Unlimited km",
    safety: ["Drum Brakes", "CBS"],
    features: ["Economical", "Comfortable Seat", "City Commuter"],
    tags: ["Commuter", "Budget"],
  },
  {
    name: "TVS Sport",
    image:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/tvs-sport-self-start-es-alloy-wheels1727099527455.jpg?q=80",
    price: "₹62,800",
    fuel: "Petrol",
    transmission: "4-speed Manual",
    topSpeed: "85 km/h",
    mileage: "80 km/l",
    engine: "99.7 cc Air-cooled Single-cylinder",
    horsepower: "7.8 bhp",
    colors: ["Black", "Red", "Grey"],
    rating: 4.4,
    launchYear: 2020,
    seats: 2,
    tankCapacity: "10 L",
    groundClearance: "165 mm",
    warranty: "5 years / Unlimited km",
    safety: ["Drum Brakes", "CBS"],
    features: ["High Mileage", "Economic Ride", "Reliable"],
    tags: ["Commuter", "Mileage King"],
  },
];

export default function TVSMotor() {
  return (
    <div className="min-h-screen px-4 sm:px-6 py-5">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
        TVS Motorcycles & Scooters
      </h1>
      <p className="text-gray-600 text-center mb-10">
        Explore Six Popular TVS Two-Wheelers
      </p>

      <div className="flex flex-col gap-5">
        {tvsBikes.map((bike, index) => (
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
                <p>
                  <strong>Price:</strong>{" "}
                  <span className="text-green-600">{bike.price}</span>
                </p>
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
