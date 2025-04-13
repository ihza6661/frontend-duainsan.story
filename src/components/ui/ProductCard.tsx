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
      className={`group product-card block bg-white rounded-lg overflow-hidden transition-all duration-300 h-full ${
        featured
          ? "shadow-md hover:shadow-lg"
          : "border border-shop-medium-gray hover:border-shop-accent"
      }`}
    >
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="product-card-image w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="text-base font-medium text-shop-text mt-2 mb-1">
          {product.name}
        </h3>
        <p className="text-shop-accent font-medium mb-3">
          ${product.price.toFixed(2)}
        </p>

        <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            onClick={handleAddToCart}
            className="w-full bg-shop-accent hover:bg-shop-accent/90 text-white btn-transition"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
