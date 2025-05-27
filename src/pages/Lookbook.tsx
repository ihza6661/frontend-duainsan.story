import { Link } from "react-router-dom";
import { products } from "@/lib/data";
import Newsletter from "@/components/ui/Newsletter";

const lookbookItems = Array.from(
  { length: 15 },
  (_, i) => `/lookbook/look${i + 1}.webp`
);

export default function LookbookPage() {
  return (
    <div className="pt-24 w-full">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-normal tracking-wide">SHOP THE LOOK</h1>
        <p className="text-sm pb-8 text-gray-600">
          Explore our fashion inspirations for fine perfect style
        </p>
      </div>

      <div className="columns-[500px]">
        {lookbookItems.map((src, index) => (
          <div key={index} className="relative overflow-hidden">
            <img src={src} alt={`Look ${index + 1}`} className="py-2" />
            <div className="absolute top-4 right-2 bg-white p-2 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-6 h-6 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M12 5v14m7-7H5"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>

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




      <div className="flex flex-col md:flex-row w-full h-[70vh]">
        {/* Left Side - Cosy & Comfort */}
        <div className="w-full md:w-1/2 bg-[#cbbbaa] flex items-end justify-start relative">
          <img
            src="BANNER-wonder.webp"
            alt="Cosy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 text-white text-left p-8 max-w-md">
            <p className="text-sm mb-2">
              Most-loved collections
            </p>
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

      <div className="px-4 pb-16">
        <h2 className="text-lg sm:text-xl font-normal mb-4 sm:mb-6 text-center uppercase tracking-widest pt-6 sm:pt-16">
          Fall into Comfort
        </h2>
        <div className="custom-scrollbar flex space-x-2 overflow-x-scroll pb-6 sm:pb-10">
          {products
            .filter((item) => item.bestseller)
            .map((item) => (
              <div
                key={item.id}
                className="flex-none w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/4 h-full"
              >
                <Link to={`/product/${item.id}`} className="group block">
                <div className="relative w-full overflow-hidden">
  {item.images && item.images.length > 0 ? (
    <img
      src={item.images[0]} // Only show the first image for card preview
      alt={item.name}
      className="w-full h-auto object-cover"
    />
  ) : (
    <div className="w-full h-48 flex items-center justify-center text-gray-400">
      No image
    </div>
  )}
</div>

                  <h4 className="mt-2 text-sm sm:text-md font-normal text-gray-800">
                    {item.name}
                  </h4>
                  <p className="text-sm sm:text-base">${item.price}</p>
                </Link>
              </div>
            ))}
        </div>

       
      </div>
        <Newsletter/>
    </div>
  );
}
