
import { Product } from "@/lib/data";
import { Button } from "@/components/ui/button";
import ProductGallery from "./ProductGallery";
import ProductQuantitySelector from "./ProductQuantitySelector";

interface ProductHeroProps {
  product: Product;
  quantity: number;
  onQuantityChange: (change: number) => void;
  onAddToCart: () => void;
}

const ProductHero = ({
  product,
  quantity,
  onQuantityChange,
  onAddToCart,
}: ProductHeroProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ProductGallery images={product.images} productName={product.name} />

      <div className="sticky container top-24 self-start max-w-[500px]">
        <h1 className="text-3xl font-medium mb-2">{product.name}</h1>
        <p className="text-2xl text-shop-accent font-medium mb-6">
          ${product.price.toFixed(2)}
        </p>

        <div className="border-t border-b border-shop-medium-gray py-6 my-6">
          <p className="text-shop-dark-gray mb-6">{product.description}</p>

          <ProductQuantitySelector
            quantity={quantity}
            onQuantityChange={onQuantityChange}
          />

          <div className="flex justify-center items-center">
            <Button
              onClick={onAddToCart}
              className="bg-shop-accent hover:bg-shop-accent/90 text-white py-6 w-full font-normal tracking-widest"
            >
              ADD TO CART
            </Button>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-3">Product Details</h3>
          <ul className="list-disc list-inside text-shop-dark-gray space-y-2">
            <li>Premium quality materials</li>
            <li>Designed for everyday use</li>
            <li>30-day money-back guarantee</li>
            <li>Free shipping on orders over $50</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
