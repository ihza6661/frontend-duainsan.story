
const VogueQuote = () => {
  return (
    <div className="min-h-32 flex flex-col justify-center items-center text-center px-4 py-4 relative">
      {/* VOGUE Title */}
      <img
        src="/brand_logo/duainsan.png"
        alt="vogue"
        className="w-[100px] md:w-[140px]"
      />

      {/* Quote */}
      <div className="w-[340px] md:w-[500px] lg:w-[900px] xl:w-[1000px]">
        <p className="my-6 text-center text-[1.1rem] md:text-2xl max-w-5xl  text-black font-normal leading-relaxed tracking-wide>">
          “A small Grapic design studio, Specialising in wedding stationery. <br /> Created With Love. Let's begin our STORY”
        </p>
      </div>

      {/* Dots */}
      {/* <div className="flex items-center gap-2 mt-10">
        <span className="w-2 h-2 rounded-full bg-black inline-block"></span>
        <span className="w-2 h-2 rounded-full bg-gray-300 inline-block"></span>
      </div> */}

      {/* Right Arrow */}
      {/* <button className="absolute right-12 top-1/2 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md">
        <ChevronRight className="w-5 h-5" />
      </button> */}
    </div>
  );
};

export default VogueQuote;
