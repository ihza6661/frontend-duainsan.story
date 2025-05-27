import { ChevronRight } from "lucide-react";

const VogueQuote = () => {
  return (
    <div className="bg-[#f1ede9] min-h-96 flex flex-col justify-center items-center text-center px-4 py-12 relative">
      {/* VOGUE Title */}
<img
  src="/logo/vogue-logo.avif"
  alt="vogue"
  className="w-[100px] md:w-[140px]"
/>

      {/* Quote */}
      <div className="w-[340px] md:w-[500px] lg:w-[900px] xl:w-[1200px]">
      <p className="my-6 text-center text-[1.1rem] md:text-2xl max-w-5xl  text-black font-normal leading-relaxed tracking-wide>">
        “A brand that challenges the industry. A brand that has a chance to stage a revolution. A brand whose creators see it as a step towards a better world”
      </p>
      </div>

      {/* Dots */}
      <div className="flex items-center gap-2 mt-10">
        <span className="w-2 h-2 rounded-full bg-black inline-block"></span>
        <span className="w-2 h-2 rounded-full bg-gray-300 inline-block"></span>
      </div>

      {/* Right Arrow */}
      {/* <button className="absolute right-12 top-1/2 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md">
        <ChevronRight className="w-5 h-5" />
      </button> */}
    </div>
  );
};

export default VogueQuote;
