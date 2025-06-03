import React from "react";

const MostLovedCollections = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-[70vh]">
      {/* Left Side - Cosy & Comfort */}
      <div className="w-full md:w-1/2 bg-[#cbbbaa] flex items-end justify-start relative">
        <img
          src="BANNER-wonder.webp"
          alt="Cosy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 text-white text-left p-8 max-w-md">
          <p className="text-sm mb-2">Most-loved collections</p>
          <h1 className="text-white text-5xl md:text-6xl font-normal leading-tight tracking-wider mb-4">
            COSY & COMFORT
          </h1>
          <button className="bg-white text-black px-6 py-3 mt-4 uppercase tracking-wide font-normal hover:bg-gray-200 transition-all">
            Check Now
          </button>
        </div>
      </div>

      {/* Right Side - Fashion Woman */}
      <div className="w-full md:w-1/2 relative">
        <video
          src="/banner-videos.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default MostLovedCollections;
