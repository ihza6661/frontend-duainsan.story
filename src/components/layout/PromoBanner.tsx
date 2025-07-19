const PromoBanner = () => {
  return (
    <div className="bg-gradient-to-br from-[#f8f6f3] to-[#e9e4dd] min-h-96 flex flex-col justify-center items-center text-center px-6 py-16 relative shadow-inner rounded-xl">
      <h1 className="text-4xl font-extrabold text-gray-800 tracking-wide mb-4">PROMO</h1>

      {/* Quote */}
      <div className="w-[340px] md:w-[500px] lg:w-[900px] xl:w-[1000px]">
        <p className="my-6 text-center text-lg md:text-2xl text-gray-900 font-medium leading-relaxed tracking-wide">
          “8 Terrarium Glass Box, 1 Dome, 1 Ring Bearer, Hanya <span className="font-bold text-[#c94c4c]">Rp.1.200.000</span>”
        </p>
      </div>

      {/* Dots */}
      <div className="flex items-center gap-2 mt-10">
        <span className="w-3 h-3 rounded-full bg-gray-800 inline-block transition-all duration-300 hover:scale-110"></span>
        <span className="w-3 h-3 rounded-full bg-gray-300 inline-block transition-all duration-300 hover:scale-110"></span>
      </div>

      {/* Right Arrow (Optional, for future use) */}
      {/* <button className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center shadow-md transition">
        <ChevronRight className="w-5 h-5 text-gray-600" />
      </button> */}
    </div>
  );
};

export default PromoBanner;
