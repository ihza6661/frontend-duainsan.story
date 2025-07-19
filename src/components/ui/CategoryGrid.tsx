import { Link } from "react-router-dom";

interface Category {
  id: string;
  name: string;
  image: string;
  link: string;
}

const categories: Category[] = [
  {
    id: "1",
    name: "Undangan Cetak",
    image:
      "/hantaran.jpg",
    link: "/products/category/dress",
  },
  {
    id: "2",
    name: "Undangan Digital",
    image:
      "/hero.jpg",
    link: "/products/category/blazers",
  },
  {
    id: "3",
    name: "Hantaran",
    image:
      "/hantaran.jpg",
    link: "/products/category/trousers",
  },
];

const CategoryGrid = () => {
  return (
    <section className="">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {categories.map((category) => (
            <div key={category.id} className="relative group overflow-hidden">
              <Link to={category.link} className="block">
                <div className="relative h-[550px] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/20">
                    <h3 className="text-3xl text-white shadow-sm font-medium mb-2 tracking-wider">
                      {category.name}
                    </h3>
                    {/* <span className="text-sm uppercase tracking-wider">
                      VIEW ALL
                    </span> */}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
