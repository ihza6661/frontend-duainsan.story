
import { Link } from "react-router-dom";
import { Product, products } from "@/lib/data";
import ProductCard from "@/components/ui/ProductCard";

interface RelatedProductsProps {
  product: Product; // Changed from products: Product[] to product: Product
}

const RelatedProducts = ({ product }: RelatedProductsProps) => {
  // Find products in the same category as the current product, excluding the current product
  const relatedProducts = products
    .filter(item => item.id !== product.id && item.category === product.category)
    .slice(0, 4); // Limit to 4 related products

  // If no related products in the same category, show bestseller products
  const productsToShow = relatedProducts.length > 0 
    ? relatedProducts 
    : products.filter(item => item.bestseller && item.id !== product.id).slice(0, 4);

  return (
    <section className="py-10 bg-white">

      <h2 className="text-lg sm:text-2xl font-normal mb-4 sm:mb-6 text-center uppercase tracking-widest pt-6 sm:pt-16">
        You May Also Like
      </h2>
      <div className="custom-scrollbar flex space-x-2 overflow-x-scroll pb-6 sm:pb-10 m-6">
        {productsToShow.map((item) => (
          <div
            key={item.id}
            className="flex-none w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/4 h-full"
          >
            <ProductCard product={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
