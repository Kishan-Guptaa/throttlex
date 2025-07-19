import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Footer from "./components/footer";

// Core components
import Hero from "./components/Hero";
import Bikelogo from "./components/Bikelogo";
import Carlogo from "./components/Carlogo";
import VideoComponent from "./components/VideoComponent";
import Favourite from "./components/Favourite";
import Contact from "./components/contact";
import Home from "./components/Home"; // ✅ New component added

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
      <BrowserRouter >
        <Routes>
          {/* Homepage layout */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Bikelogo />
                <Carlogo />
                <VideoComponent />
                <Favourite />
                <Footer />
              </>
            }
          />

          {/* New Home route */}
          <Route
            path="/home"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />

          {/* Layout-wrapped routes */}
          <Route
            path="/bikes"
            element={
              <Layout>
                <Bikes />
              </Layout>
            }
          />
          <Route
            path="/cars"
            element={
              <Layout>
                <Cars />
              </Layout>
            }
          />
          <Route
            path="/hero"
            element={
              <Layout>
                <Hero />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />
          <Route
            path="/bikelogo"
            element={
              <Layout>
                <Bikelogo />
              </Layout>
            }
          />
          <Route
            path="/carlogo"
            element={
              <Layout>
                <Carlogo />
              </Layout>
            }
          />
          <Route
            path="/video"
            element={
              <Layout>
                <VideoComponent />
              </Layout>
            }
          />
          <Route
            path="/favourites"
            element={
              <Layout>
                <Favourite />
              </Layout>
            }
          />

          {/* Car Brands */}
          <Route path="/brands/Tesla" element={<Layout><Tesla /></Layout>} />
          <Route path="/brands/Bmw" element={<Layout><BMW /></Layout>} />
          <Route path="/brands/Ferrari" element={<Layout><Ferrari /></Layout>} />
          <Route path="/brands/Hyundai" element={<Layout><Hyundai /></Layout>} />
          <Route path="/brands/Kia" element={<Layout><Kia /></Layout>} />
          <Route path="/brands/Lamborghini" element={<Layout><Lamborghini /></Layout>} />
          <Route path="/brands/Maruti" element={<Layout><Maruti /></Layout>} />
          <Route path="/brands/MercedesBenz" element={<Layout><MercedesBenz /></Layout>} />
          <Route path="/brands/MG" element={<Layout><MG /></Layout>} />
          <Route path="/brands/Porsche" element={<Layout><Porsche /></Layout>} />
          <Route path="/brands/Tata" element={<Layout><Tata /></Layout>} />
          <Route path="/brands/Toyota" element={<Layout><Toyota /></Layout>} />

          {/* Bike Brands */}
          <Route path="/bikebrands/BajajAuto" element={<Layout><BajajAuto /></Layout>} />
          <Route path="/bikebrands/BMWMotorrad" element={<Layout><BMWMotorrad /></Layout>} />
          <Route path="/bikebrands/CFMoto" element={<Layout><CFMoto /></Layout>} />
          <Route path="/bikebrands/Ducati" element={<Layout><Ducati /></Layout>} />
          <Route path="/bikebrands/HarleyDavidson" element={<Layout><HarleyDavidson /></Layout>} />
          <Route path="/bikebrands/HeroMotoCorp" element={<Layout><HeroMotoCorp /></Layout>} />
          <Route path="/bikebrands/Kawasaki" element={<Layout><Kawasaki /></Layout>} />
          <Route path="/bikebrands/KTM" element={<Layout><KTM /></Layout>} />
          <Route path="/bikebrands/RoyalEnfield" element={<Layout><RoyalEnfield /></Layout>} />
          <Route path="/bikebrands/Suzuki" element={<Layout><Suzuki /></Layout>} />
          <Route path="/bikebrands/TVSMotor" element={<Layout><TVSMotor /></Layout>} />
          <Route path="/bikebrands/Yamaha" element={<Layout><Yamaha /></Layout>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
