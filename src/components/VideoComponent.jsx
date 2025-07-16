import React from "react";

export default function VideoComponent() {
  return (
    <div className="w-full mx-auto px-4 py-6">
      <div className="relative overflow-hidden rounded-2xl shadow-lg">
        {/* 🎬 Video Background */}
        <video
          src="/videos/myvideo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-60 sm:h-72 md:h-80 lg:h-[420px] object-cover"
        >
          Your browser does not support the video tag.
        </video>

        
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-black/40 rounded-md">
          <p className="text-white text-lg sm:text-sm md:text-2xl sm:font-sm font-bold tracking-wide uppercase text-center">
            Ride it. Love it. Flex it.
          </p>
        </div>
      </div>
    </div>
  );
}
