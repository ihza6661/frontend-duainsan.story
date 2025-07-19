import { Link } from "react-router-dom";
import { products } from "@/lib/data";
import Newsletter from "@/components/ui/Newsletter";
import ExploreTheNewestTrend from "@/components/layout/ExploreTheNewestTrend";

const Gallery = Array.from(
  { length: 15 },
  (_, i) => `/lookbook/look${i + 1}.webp`
);

export default function AllProductsPage() {
  return (
    <div className="pt-24 w-full">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-normal tracking-wide">SHOP THE LOOK</h1>
        <p className="text-sm pb-8 text-gray-600">
          Explore our design inspirations for fine perfect style
        </p>
      </div>

      <div className="columns-[500px]">
        {Gallery.map((src, index) => (
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

      <ExploreTheNewestTrend />

     

      <div className="px-4 pb-16">
        <h2 className="text-lg sm:text-xl font-normal mb-4 sm:mb-6 text-center uppercase tracking-widest pt-6 sm:pt-16">
          Bestseller
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
      <Newsletter />
    </div>
  );
}
