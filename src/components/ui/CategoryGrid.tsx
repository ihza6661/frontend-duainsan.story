import { Link } from "react-router-dom";

interface Category {
  id: string;
  name: string;
  image: string;
  link: string;
}

const categories: Category[] = [
  {
    id: "dress",
    name: "DRESS",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1020&q=80",
    link: "/products/category/dress",
  },
  {
    id: "blazers",
    name: "BLAZERS",
    image:
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1020&q=80",
    link: "/products/category/blazers",
  },
  {
    id: "trousers",
    name: "TROUSERS",
    image:
      "https://images.unsplash.com/photo-1551048632-24e444b48a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1020&q=80",
    link: "/products/category/trousers",
  },
  {
    id: "jumpers",
    name: "JUMPERS",
    image:
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1020&q=80",
    link: "/products/category/jumpers",
  },
  {
    id: "skirt",
    name: "SKIRT",
    image:
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1020&q=80",
    link: "/products/category/skirt",
  },
  {
    id: "sale",
    name: "SALE",
    image:
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1020&q=80",
    link: "/products/category/sale",
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
                    <span className="text-sm uppercase tracking-wider">
                      VIEW ALL
                    </span>
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
