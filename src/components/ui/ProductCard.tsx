// src/components/ui/ProductCard.tsx

import { Link } from "react-router-dom";
import { Product } from "@/services/productService";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const STORAGE_URL = import.meta.env.VITE_PUBLIC_STORAGE_URL;
  const placeholderImage = "/placeholder.svg";

  // This is the critical part that prevents errors.
  const imageUrl = product.featured_image?.image
    ? `${STORAGE_URL}${product.featured_image.image}`
    : placeholderImage;

  return (
    <Link
      to={`/product/${product.id}`}
      className="group product-card block bg-white overflow-hidden transition-all duration-300 h-full border rounded-lg hover:shadow-md"
    >
      <div className="aspect-square relative w-full overflow-hidden bg-gray-100">
        <img
          src={imageUrl}
          alt={product.featured_image?.alt_text ?? product.name}
          className="product-card-image w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => (e.currentTarget.src = placeholderImage)}
        />
      </div>

      <div className="p-3">
        <h3
          className="text-base font-medium text-shop-text mt-1 mb-1 truncate"
          title={product.name}
        >
          {product.name}
        </h3>
        <p className="text-shop-accent font-semibold mb-2">
          {new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
          }).format(product.base_price)}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;