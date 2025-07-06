import { Link } from "react-router-dom";
import Newsletter from "@/components/ui/Newsletter";
import { products } from "@/lib/data";
import VogueQuote from "@/components/layout/VogueQuote";
import ExploreTheNewestTrend from "@/components/layout/ExploreTheNewestTrend";
import BrandSlider from "@/components/ui/BrandSlider";
import ActualBrandSlider from "@/components/ui/ActualBrandSlider";

const Home = () => {
  const categories = [
    { id: 1, name: "", image: "/hantaran.jpg", itemCount: 45 },
    { id: 2, name: "Undangan Cetak", image: "/hero.jpg", itemCount: 32 },
    { id: 3, name: "", image: "/undangan-digital.jpg", itemCount: 32 },

  ];

  const journalPosts = [
    {
      id: 1,
      title: "Spring Fashion Trends",
      image: "/journal/journal1.webp",
    },
    { id: 2, title: "Summer Style Guide", image: "/journal/journal2.webp" },
    {
      id: 3,
      title: "Autumn Collection Preview",
      image: "/journal/journal3.webp",
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
    
    {/* <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 mb-6">
      Invitation Design Made Simple & Beautiful
    </h2>
    
    <p className="text-base sm:text-lg text-gray-600 mb-6 px-4 sm:px-8">
      Pick a design, personalize it, and wow your guests.
    </p> */}
    
    <p className="text-sm sm:text-base font-medium text-gray-700 mb-8 px-4 sm:px-8">
      Instant downloads & custom orders available.
    </p>

    {/* CTA Button */}
    <a
      href="/shop"
      className="inline-block font-semibold py-3 px-6 rounded-2xl shadow-lg hover:bg-gray-100 transition duration-300"
    >
      Consult now
    </a>
    <a
      href="/shop"
      className="inline-block font-semibold py-3 px-6 rounded-2xl shadow-lg hover:bg-gray-100 transition duration-300"
    >
      Browse Designs
    </a>
  </div>
</section>

    {/* Sale Banner */}
      <section className="min-h-screen py-12 sm:py-16 md:py-20 lg:py-24 bg-[#f1ede9] flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          {/* <p className="mb-6 text-base sm:text-lg">Discover the best deal</p> */}
          <h2 className="text-black text-3xl sm:text-4xl md:text-7xl font-normal mb-4 sm:mb-6 tracking-wide">
            Bermacam Pilihan Tema Beragam Kategori Acara
          </h2>
          <h3>
            Cocok untuk Kamu yang ingin membuat website undangan nikah & acara apapun. Tersedia banyak tema undangan beragam kategori tinggal pilih, edit, dan kirim undangan websitemu.
          </h3>
          {/* <Link
            to="/sale"
            className="inline-block px-4 py-3 sm:py-4 bg-black/90 text-white tracking-wider text-sm sm:text-base"
          >
            CHECK NOW
          </Link> */}
        </div>
      </section>


      {/* Categories Section */}
      <section className="w-full">
  <div className="w-full">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      {categories.map((category) => (
        <Link
          key={category.id}
          to={`/category/${category.id}`}
          className="group"
        >
          <div className="relative aspect-square">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-5 md:bottom-8 lg:bottom-15 left-0 right-0 flex items-center justify-center">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal tracking-wide text-black px-4 md:px-6 py-2 relative group">
                {category.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full shadow-xl"></span>
              </h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>

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
                    <div className="relative w-full overflow-hidden">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <h4 className="mt-2 text-base sm:text-md font-normal text-gray-800">
                      {item.name}
                    </h4>
                    <p className="text-sm sm:text-base">${item.price}</p>
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

  

      {/* <ExploreTheNewestTrend /> */}

      {/* <VogueQuote /> */}

      {/* Journal */}
      {/* <section className="pt-10 sm:pt-12 md:pt-16">
        <div className="">
          <h4 className="text-center font-normal text-xs sm:text-sm">
            Fashion Blog
          </h4>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-6 sm:mb-8 text-center uppercase tracking-widest">
            Journal
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {journalPosts.map((post) => (
              <Link key={post.id} to={`/journal/${post.id}`} className="group">
                <div className="relative aspect-[3/4]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-white/80 backdrop-blur-sm">
                    <p className="text-xs sm:text-sm font-light">
                      {post.title}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section> */}
      {/* <ActualBrandSlider/> */}
      {/* <Newsletter /> */}
    </div>
  );
};

export default Home;
