import React from "react";

const ExploreTheNewestTrend = () => {
  return (
    <div className="text-center py-12 px-4 sm:px-8 md:px-16 max-w-7xl mx-auto space-y-2 sm:space-y-8">
      <p className="text-xs sm:text-base">
        Nothing has inspired you? Check out our collections
      </p>

      <p className="p-1 text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-wide leading-tight break-words">
        From elegant dresses
        <span className="inline-block mx-2 align-middle">
          <img
            src="1.avif"
            alt=""
            className="w-10 h-10 sm:w-14 sm:h-14 md:w-[72px] md:h-[72px] lg:w-[89px] lg:h-[89px] rounded-full object-cover"
          />
        </span>
        to chic skirts
        <span className="inline-block mx-2 align-middle">
          <img
            src="2.avif"
            alt=""
            className="w-10 h-10 sm:w-14 sm:h-14 md:w-[72px] md:h-[72px] lg:w-[89px] lg:h-[89px] rounded-full object-cover"
          />
        </span>
        and cozy
        <span className="inline-block mx-2 align-middle">
          <img
            src="3.avif"
            alt=""
            className="w-10 h-10 sm:w-14 sm:h-14 md:w-[72px] md:h-[72px] lg:w-[89px] lg:h-[89px] rounded-full object-cover"
          />
        </span>
        jumpers!
      </p>

      <button className="relative py-1 text-sm text-black border-b border-black transition-all duration-300 group hover:border-transparent">
        VIEW ALL COLLECTIONS
        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
      </button>
    </div>
  );
};

export default ExploreTheNewestTrend;
