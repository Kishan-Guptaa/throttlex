import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// Core components
import Hero from "./components/Hero";
import Bikelogo from "./components/Bikelogo";
import Carlogo from "./components/Carlogo";
import VideoComponent from "./components/VideoComponent";
import Favourite from "./components/Favourite";
import Contact from "./components/contact";
import Home from "./components/Home";

// Pages
import Bikes from "./pages/Bikes";
import Cars from "./pages/Cars";

// Car Brands
import Tesla from "./pages/brands/Tesla";
import BMW from "./pages/brands/bmw";
import Ferrari from "./pages/brands/Ferrari ";
import Hyundai from "./pages/brands/Hyundai";
import Kia from "./pages/brands/Kia";
import Lamborghini from "./pages/brands/Lamborghini";
import Maruti from "./pages/brands/Maruti";
import MercedesBenz from "./pages/brands/MercedesBenz";
import MG from "./pages/brands/MG";
import Porsche from "./pages/brands/Porsche";
import Tata from "./pages/brands/Tata";
import Toyota from "./pages/brands/Toyota";

// Bike Brands
import BajajAuto from "./pages/BikeBrands/BajajAuto";
import BMWMotorrad from "./pages/BikeBrands/BMWMotorrad";
import CFMoto from "./pages/BikeBrands/CFMoto";
import Ducati from "./pages/BikeBrands/Ducati";
import HarleyDavidson from "./pages/BikeBrands/HarleyDavidson";
import HeroMotoCorp from "./pages/BikeBrands/HeroMotoCorp";
import Kawasaki from "./pages/BikeBrands/Kawasaki";
import KTM from "./pages/BikeBrands/KTM";
import RoyalEnfield from "./pages/BikeBrands/RoyalEnfield";
import Suzuki from "./pages/BikeBrands/Suzuki";
import TVSMotor from "./pages/BikeBrands/TVSMotor";
import Yamaha from "./pages/BikeBrands/Yamaha";

export default function App() {
  return (
    <div className="font-serif">
      <Routes>
        {/* Contact page - without Layout */}
        <Route path="/contact" element={<Contact />} />

        {/* All other pages - with Navbar/Footer */}
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Hero />
                      <Bikelogo />
                      <Carlogo />
                      <VideoComponent />
                      <Favourite />
                    </>
                  }
                />
                <Route path="/home" element={<Home />} />
                <Route path="/bikes" element={<Bikes />} />
                <Route path="/cars" element={<Cars />} />
                <Route path="/hero" element={<Hero />} />
                <Route path="/bikelogo" element={<Bikelogo />} />
                <Route path="/carlogo" element={<Carlogo />} />
                <Route path="/video" element={<VideoComponent />} />
                <Route path="/favourites" element={<Favourite />} />

                {/* Car Brands */}
                <Route path="/brands/Tesla" element={<Tesla />} />
                <Route path="/brands/Bmw" element={<BMW />} />
                <Route path="/brands/Ferrari" element={<Ferrari />} />
                <Route path="/brands/Hyundai" element={<Hyundai />} />
                <Route path="/brands/Kia" element={<Kia />} />
                <Route path="/brands/Lamborghini" element={<Lamborghini />} />
                <Route path="/brands/Maruti" element={<Maruti />} />
                <Route path="/brands/MercedesBenz" element={<MercedesBenz />} />
                <Route path="/brands/MG" element={<MG />} />
                <Route path="/brands/Porsche" element={<Porsche />} />
                <Route path="/brands/Tata" element={<Tata />} />
                <Route path="/brands/Toyota" element={<Toyota />} />

                {/* Bike Brands */}
                <Route path="/bikebrands/BajajAuto" element={<BajajAuto />} />
                <Route path="/bikebrands/BMWMotorrad" element={<BMWMotorrad />} />
                <Route path="/bikebrands/CFMoto" element={<CFMoto />} />
                <Route path="/bikebrands/Ducati" element={<Ducati />} />
                <Route path="/bikebrands/HarleyDavidson" element={<HarleyDavidson />} />
                <Route path="/bikebrands/HeroMotoCorp" element={<HeroMotoCorp />} />
                <Route path="/bikebrands/Kawasaki" element={<Kawasaki />} />
                <Route path="/bikebrands/KTM" element={<KTM />} />
                <Route path="/bikebrands/RoyalEnfield" element={<RoyalEnfield />} />
                <Route path="/bikebrands/Suzuki" element={<Suzuki />} />
                <Route path="/bikebrands/TVSMotor" element={<TVSMotor />} />
                <Route path="/bikebrands/Yamaha" element={<Yamaha />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </div>
  );
}
