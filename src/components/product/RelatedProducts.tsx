
import { Link } from "react-router-dom";
import { Product } from "@/lib/data";
import ProductCard from "@/components/ui/ProductCard";

interface RelatedProductsProps {
  products: Product[];
}

const RelatedProducts = ({ products }: RelatedProductsProps) => {
  return (
    <div className="px-4 pb-16">
      <h2 className="text-lg sm:text-2xl font-normal mb-4 sm:mb-6 text-center uppercase tracking-widest pt-6 sm:pt-16">
        You May Also Like
      </h2>
      <div className="custom-scrollbar flex space-x-2 overflow-x-scroll pb-6 sm:pb-10">
        {products
          .filter((item) => item.bestseller)
          .map((item) => (
            <div
              key={item.id}
              className="flex-none w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/4 h-full"
            >
              <ProductCard product={item} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
