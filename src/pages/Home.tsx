import { Link } from "react-router-dom";
import Newsletter from "@/components/ui/Newsletter";
import { products } from "@/lib/data";
import ExploreTheNewestTrend from "@/components/layout/ExploreTheNewestTrend";
import ActualBrandSlider from "@/components/ui/ActualBrandSlider";
import CategoryGrid from "@/components/ui/CategoryGrid";
import WhyDuaInsan from "@/components/layout/WhyDuaInsan";
import OrderSteps from "@/pages/CaraMemesan";
import DuaInsanQuotes from "@/components/layout/DuaInsanQuotes";
import BestSeller from "@/components/product/BestSeller";

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
      <section className="relative min-h-screen flex items-center justify-center font-serif bg-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/hero/5.png"
            alt="Elegant Invitation Background"
            className="w-full h-full object-cover brightness-90 saturate-75"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/70" />
        </div>

        {/* Main Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
          {/* Glass Card */}
          <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-lg p-8 sm:p-12 animate-fadeIn border border-white/40">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-wide">
              Create Your Perfect Invitation
            </h1>
            <p className="text-base sm:text-lg text-gray-700 italic mb-10">
              Make every event unforgettable — starting with the invitation.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${phoneNumber.replace("+", "")}`}
                className="inline-block border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition px-6 py-3 rounded-full shadow-sm text-sm font-medium"
              >
                Chat Admin
              </a>
              <a
                href="/shop"
                className="inline-block bg-gray-900 text-white hover:bg-gray-700 transition px-6 py-3 rounded-full shadow-sm text-sm font-medium"
              >
                Lihat Koleksi
              </a>
            </div>
          </div>

          {/* Decorative Secondary Image */}
          <div className="relative hidden lg:block animate-slideIn">
            <div className="absolute -top-10 -right-10 w-80 h-96 rounded-2xl overflow-hidden shadow-xl transform rotate-3">
              <img
                src="/hero/7.jpg"
                alt="Invitation Sample"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Animations */}
        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(40px) rotate(5deg);
            }
            to {
              opacity: 1;
              transform: translateX(0) rotate(3deg);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
          }
          .animate-slideIn {
            animation: slideIn 1.2s ease-out forwards;
          }
        `}</style>
      </section>


      <CategoryGrid />
      <BestSeller/>
      <ExploreTheNewestTrend />

      <WhyDuaInsan />

      <OrderSteps />

      <DuaInsanQuotes />

      {/* Termin Pembayaran dan Free items Information */}
      <section className="pt-10 sm:pt-12 md:pt-16">
        <div className="bg-[#f1ede9]">
          <p className="text-center pt-10 text-xl">Cara Order via WhatsApp</p>
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
