import React from "react";
import "../index.css";
import { motion } from "framer-motion";

export default function Favourite() {
  const vehicles = [
    { name: "Indian Scout", type: "Bike", image: "/fav/Indian-Scout.jpg" },
    { name: "Suzuki SV650", type: "Bike", image: "/fav/suzuki-sv650-.png" },
    { name: "Yamaha FZ-S FI", type: "Bike", image: "/fav/Yamaha-FZ-S-FI.webp" },
    { name: "Honda Africa Twin", type: "Bike", image: "/fav/hondaafrica-twin.jpg" },
    { name: "Royal Enfield", type: "Bike", image: "/fav/royal-enfield-continental-gt-650-58.jpg" },
    { name: "Honda CB500F", type: "Bike", image: "/fav/Honda-CB500F.jpg" },
    { name: "Harley Davidson", type: "Bike", image: "/fav/harleydavidson-street-750.webp" },
    { name: "BMW 7 Series", type: "Car", image: "/fav/BMW-7-Series-car.avif" },
    { name: "Range Rover", type: "Car", image: "/fav/car.webp" },
    { name: "Defender", type: "Car", image: "/fav/Defender.avif" },
    { name: "Fortuner", type: "Bike", image: "/fav/fortunerr.jpg" },
    { name: "Endeavour", type: "Car", image: "/fav/Endeavour1.jpg" },
    { name: "G Wagon", type: "Car", image: "/fav/g.jpg" },
    { name: "Datsun 240Z", type: "Car", image: "/fav/Datsun-240Z.jpg" },
    { name: "Mercedes-Benz", type: "Car", image: "/fav/mercedes-benz.jpg" },
  ];

  return (
    <>
      <div className="text-center text-3xl font-bold py-10 text-gray-800 tracking-wide">
        FAVOURITES
      </div>

      <div className="px-4 max-w-[1200px] mx-auto space-y-10">
        {/* 3 x 3 Cards */}
        <GridRow count={3} data={vehicles.slice(0, 3)} />
        <GridRow count={3} data={vehicles.slice(3, 6)} />
        <GridRow count={3} data={vehicles.slice(6, 9)} />

        {/* Full-width */}
        <FullRow vehicle={vehicles[9]} />

        {/* 2 x 2 Cards */}
        <GridRow count={2} data={vehicles.slice(10, 12)} />
        <GridRow count={2} data={vehicles.slice(12, 14)} />

        {/* Full-width */}
        <FullRow vehicle={vehicles[14]} />
      </div>
    </>
  );
}

function GridRow({ count, data }) {
  let colClass = "grid-cols-1";

  if (count === 2) {
    colClass = "grid-cols-1 sm:grid-cols-2";
  } else if (count === 3) {
    colClass = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3";
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`grid ${colClass} gap-6`}
    >
      {data.map((v, i) => (
        <VehicleCard key={i} vehicle={v} fullWidth={false} />
      ))}
    </motion.div>
  );
}

function FullRow({ vehicle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      <VehicleCard vehicle={vehicle} fullWidth={true} />
    </motion.div>
  );
}

function VehicleCard({ vehicle, fullWidth }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`rounded-xl shadow-md hover:shadow-xl transition duration-300 bg-white overflow-hidden ${
        fullWidth ? "w-full" : ""
      }`}
    >
      <img
        src={vehicle.image}
        alt={vehicle.name}
        className={`object-cover w-full ${
          fullWidth ? "h-[400px]" : "h-[220px]"
        } transition-transform duration-300`}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">
          {vehicle.name}
        </h2>
        <p className="text-sm text-gray-500">{vehicle.type}</p>
      </div>
    </motion.div>
  );
}
