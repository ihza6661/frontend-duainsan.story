import { Link } from "react-router-dom";
const categories = [
  { id: 1, name: "Hantaran", image: "/hantaran.jpg", itemCount: 45 },
  { id: 2, name: "Undangan Cetak", image: "/hero.jpg", itemCount: 32 },
];
const Categories = () => {
  return (
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
  );
};

export default Categories;
