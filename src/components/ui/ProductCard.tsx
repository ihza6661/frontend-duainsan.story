import { Link } from "react-router-dom";
import { Product } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { useCart } from "./Cart";

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

const ProductCard = ({ product, featured = false }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group product-card block bg-white overflow-hidden transition-all duration-300 h-full"
    >
      <div className="aspect-square relative w-full overflow-hidden bg-gray-100">
        <img
          src={product.images[0]}
          alt={product.name}
          className="product-card-image w-full h-full object-cover"
        />
      </div>

      <div className="">
        <h3 className="text-base font-medium text-shop-text mt-2 mb-1">
          {product.name}
        </h3>

        <p className="text-shop-accent font- mb-3">
          {new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
          }).format(product.price)}
        </p>

        <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </Link>
  );
};

export default ProductCard;
