import { Product } from "@/lib/data";
import { Button } from "@/components/ui/button";
import ProductGallery from "./ProductGallery";
import ProductQuantitySelector from "./ProductQuantitySelector";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

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
  const [showDescription, setShowDescription] = useState(false);
  const [showWashAndCare, setShowWashAndCare] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ProductGallery images={product.images} productName={product.name} />

      <div className="px-4 sm:px-44 sticky top-20 self-start">
        <h1 className="text-lg tracking-wide font-normal my-4 uppercase">
          {product.name}
        </h1>
        <p className="text-xl text-shop-accent font-medium">
          ${product.price.toFixed(2)}
        </p>

        <div className="pb-6 my-4">
      <p className="mb-6">
  {product.description.split('\n').map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ))}
</p>


          <ProductQuantitySelector
            quantity={quantity}
            onQuantityChange={onQuantityChange}
          />

          <div className="flex justify-center items-center">
            <Button
              onClick={onAddToCart}
              className="bg-shop-accent hover:bg-shop-accent/90 text-white py-4 w-full font-normal tracking-widest"
            >
              ADD TO CART
            </Button>
          </div>
        </div>

        <div>
          <ul className="text-sm list-disc list-inside mb-10">
            <li>Premium quality Pappers Available</li>
            <li>Gratis Ongkir Untuk Orderan Diatas Rp.500.000</li>
          </ul>
        </div>

        <div className="py-4 border-y">
          <button
            onClick={() => setShowDescription(!showDescription)}
            className="text-black flex flex-row justify-between w-full items-center"
          >
            <p className="text-base tracking-widest">DESCRIPTION</p>
            {showDescription ? (
              <Minus className="w-5 h-5" />
            ) : (
              <Plus className="w-5 h-5" />
            )}
          </button>
          {showDescription && (
            <p className="mt-6 text-xs text-gray-700">
              This is the description text that appears when the button is
              clicked.
            </p>
          )}
        </div>
        <div className="py-4 border-y">
          <button
            onClick={() => setShowWashAndCare(!showWashAndCare)}
            className="text-black flex flex-row justify-between w-full items-center"
          >
            <p className="text-base tracking-widest">WASH & CARE</p>
            {showWashAndCare ? (
              <Minus className="w-5 h-5" />
            ) : (
              <Plus className="w-5 h-5" />
            )}
          </button>
          {showWashAndCare && (
            <p className="mt-6 text-xs text-gray-700">
              This is the WashAndCare text that appears when the button is
              clicked.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
