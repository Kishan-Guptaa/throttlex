import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 bg-[#F9F3EF]">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between bg-white rounded-2xl shadow-xl p-6 sm:p-10 gap-10">

        {/* Left Section */}
        <div className="lg:w-1/2 w-full space-y-5">
          <p className="text-[#1B3C53] font-medium text-lg">ThrottleX Support</p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Have a Question About Cars or Bikes?
          </h1>
          <p className="text-gray-700 text-base sm:text-[15px]">
            Whether you're curious about the newest bikes, fastest supercars, or just need help — we’re here for you!
          </p>

          {/* Contact Info */}
          <div className="space-y-2 text-gray-800 text-sm">
            <p>Beohari, Madhya Pradesh, India</p>
            <p>+91 898232****</p>
            <p>
              ✉️{" "}
              <a
                href="mailto:timewithtitu@gmail.com"
                className="text-blue-600 underline hover:text-blue-800 transition"
              >
                timewithtitu@gmail.com
              </a>
            </p>
          </div>

          {/* Contact Form (non-functional) */}
          <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              required
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Last Name"
              required
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Mobile Number"
              required
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 col-span-1 sm:col-span-2"
            />
            <textarea
              placeholder="Your Message"
              required
              rows="5"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 col-span-1 sm:col-span-2"
            />
            <button
              type="button"
              onClick={() => alert("Form submission is currently disabled.")}
              className="col-span-1 sm:col-span-2 mt-2 bg-gradient-to-r from-[#1B3C53] to-[#456882] hover:from-[#12303F] hover:to-[#35506A] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Section - Image */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <img
            src={`${import.meta.env.BASE_URL}profile1.jpg`}
            alt="Bike & Car Contact Illustration"
            className="w-full max-w-sm rounded-xl shadow-md object-cover"
          />
        </div>
      </div>
    </div>
  );
}
