import { Link } from "react-router-dom";
import Newsletter from "@/components/ui/Newsletter";
import { products } from "@/lib/data";
import ExploreTheNewestTrend from "@/components/layout/ExploreTheNewestTrend";
import ActualBrandSlider from "@/components/ui/ActualBrandSlider";
import CategoryGrid from "@/components/ui/CategoryGrid";
import WhyDuaInsan from "@/components/layout/WhyDuaInsan";
import OrderSteps from "@/pages/CaraMemesan";
import DuaInsanQuotes from "@/components/layout/DuaInsanQuotes";

const Home = () => {
  const phoneNumber = "+6283151770146";
  const highlight = [
    {
      id: 1,
      title: "Green",
      image: "/highlight/2.png",
    },
    {
      id: 2,
      title: "Brown",
      image: "/highlight/3.png",
    },
  ];

  return (
    <div className="min-h-screen w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* Background Image */}
        <img
          src="hero.jpg"
          alt="Invitation Background"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-pink-200/10 via-white/10 to-white z-10" />

        {/* Content */}
        <div className="relative z-20 text-center max-w-2xl w-full pt-24 sm:pt-32 lg:pt-48">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-4 leading-tight">
            Create Your Perfect Invitation
          </h1>

          <p className="text-sm sm:text-base font-medium text-gray-700 mb-8 px-4 sm:px-8">
            Instant downloads & custom orders available.
          </p>

          {/* CTA Button */}
          <a
            href={`https://wa.me/${phoneNumber.replace("+", "")}`} // wa.me doesn't support "+" symbol
            className="inline-block font-semibold py-3 px-6 rounded-2xl shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Chat Admin
          </a>
          <a
            href="/shop"
            className="inline-block font-semibold py-3 px-6 rounded-2xl shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Lihat Koleksi
          </a>
        </div>
      </section>

      <CategoryGrid />
      {/* Bestsellers */}
      <section className="w-full">
        <div className="px-4">
          <h2 className="text-lg sm:text-xl font-normal mb-4 sm:mb-8 text-center uppercase tracking-widest pt-6 sm:pt-8">
            Our Bestsellers
          </h2>
          <div className="flex space-x-2 overflow-x-scroll pb-6 sm:pb-10">
            {products
              .filter((item) => item.bestseller)
              .map((item) => (
                <div
                  key={item.id}
                  className="flex-none w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/4 h-full"
                >
                  <Link to={`/product/${item.id}`} className="group block">
                    <div className="aspect-square relative w-full overflow-hidden bg-gray-100">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <h4 className="mt-2 text-base sm:text-md font-normal text-gray-800">
                      {item.name}
                    </h4>

                    <p className="text-sm sm:text-base">
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        minimumFractionDigits: 0,
                      }).format(item.variants?.[0]?.price ?? item.price ?? 0)}
                    </p>
                  </Link>
                </div>
              ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-4 pb-8 sm:pb-12">
            <Link
              to="/collection/bestsellers"
              className="text-lg inline-block font-normal border-b border-black text-gray-800 hover:text-black transition duration-200"
            >
              VIEW ALL
            </Link>
          </div>
        </div>
      </section>

      <ExploreTheNewestTrend />

      <WhyDuaInsan />

      <OrderSteps />

      <DuaInsanQuotes />

      {/* Termin Pembayaran dan Free items Information */}
      <section className="pt-10 sm:pt-12 md:pt-16">
        <div className="bg-[#f1ede9]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
            {highlight.map((post) => (
              <Link
                key={post.id}
                to={`/highlights/${post.id}`}
                className="group"
              >
                <div className="relative aspect-[2/3] p-5 sm:p-20 m-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full object-contain rounded-2xl"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ActualBrandSlider />

      <Newsletter />

    </div>
  );
};

export default Home;
