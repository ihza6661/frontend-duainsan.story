import { Link } from "react-router-dom";
import Newsletter from "@/components/ui/Newsletter";
import { products } from "@/lib/data";


const Home = () => {
  const categories = [
    { id: 1, name: "DRESSES", image: "/banner1.webp", itemCount: 45 },
    { id: 2, name: "TOPS", image: "/banner2.webp", itemCount: 32 },
  ];

  // const bestSellers = [
  //   {
  //     id: 1,
  //     name: "Cobalt trousers with wide-down leg",
  //     image: "/products/Cobalt-trousers-with-wide-down-leg.webp",
  //     price: 79.99,
  //   },
  //   {
  //     id: 2,
  //     name: "Cobalt trousers with wide-down leg",
  //     image: "/products/Cobalt-trousers-with-wide-down-leg.webp",
  //     price: 79.99,
  //   },
  //   {
  //     id: 3,
  //     name: "Cobalt trousers with wide-down leg",
  //     image: "/products/Cobalt-trousers-with-wide-down-leg.webp",
  //     price: 79.99,
  //   },
  //   {
  //     id: 4,
  //     name: "Cobalt trousers with wide-down leg",
  //     image: "/products/Cobalt-trousers-with-wide-down-leg.webp",
  //     price: 79.99,
  //   },
  //   {
  //     id: 5,
  //     name: "Cobalt trousers with wide-down leg",
  //     image: "/products/Cobalt-trousers-with-wide-down-leg.webp",
  //     price: 79.99,
  //   },
  //   {
  //     id: 6,
  //     name: "Cobalt trousers with wide-down leg",
  //     image: "/products/Cobalt-trousers-with-wide-down-leg.webp",
  //     price: 79.99,
  //   },
  // ];

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
      <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen">
        <img
          src="https://images.unsplash.com/photo-1742475701265-c55a6506722b?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-white font-light tracking-widest text-center px-4">
            CASABLANCAS
          </h1>
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
                <div className="relative aspect-[4/3]">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full object-cover"
                  />
                  <div className="absolute bottom-5 md:bottom-8 lg:bottom-40 left-0 right-0 flex items-center justify-center">
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal tracking-wide text-white px-4 md:px-6 py-2 relative group">
                      {category.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
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
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="w-full h-auto object-cover"
                />
              </div>
              <h4 className="mt-2 text-sm sm:text-md font-normal text-gray-800">
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
              className="inline-block font-normal border-b border-black text-gray-800 hover:text-black transition duration-200"
            >
              View All
            </Link>
          </div>
        </div>
      </section>
      {/* Sale Banner */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-neutral-100">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 sm:mb-6">
            SALE UP TO 50% FOR ALL COLLECTIONS
          </h2>
          <p className="text-xs sm:text-sm mb-6 sm:mb-8 font-light">
            From elegant dresses to chic skirts and cozy jumpers!
          </p>
          <Link
            to="/sale"
            className="inline-block px-4 py-3 sm:py-4 bg-black/90 text-white tracking-wider text-sm sm:text-base"
          >
            CHECK NOW
          </Link>
        </div>
      </section>

      {/* Journal */}
      <section className="pt-10 sm:pt-12 md:pt-16">
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
      </section>
      <Newsletter />
    </div>
  );
};

export default Home;
