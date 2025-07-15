import { Product } from "@/lib/data";
import { Button } from "@/components/ui/button";
import ProductGallery from "./ProductGallery";
import ProductQuantitySelector from "./ProductQuantitySelector";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
// import PaperSizeInput from "./PaperSizeInput";
import PaperTypeSelect from "./PaperTypeSelect";
import InvitationSizeSelect from "./InvitationSizeSelect";
import { ShoppingCart } from "lucide-react";

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

  const handleSizeChange = (size) => {
    console.log("Selected paper size:", size);
    // size = { width: number, height: number, unit: "cm" | "inch" }
  };

  const [paperType, setPaperType] = useState("");
  const [size, setSize] = useState("");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ProductGallery images={product.images} productName={product.name} />

      <div className="px-4 sm:px-44 sticky top-36 self-start">
        <p className="border-2 border-gray-200 bg-gray-200 inline-block px-6 py-2">
          PRE-ORDER 25 HARI
        </p>

        <h1 className="text-xl tracking-wide my-4 uppercase">{product.name}</h1>
        <p className="text-lg text-shop-accent">${product.price.toFixed(2)}</p>

        <div className="pb-6 my-4">
          <p className="mb-6"></p>
          <div className="space-y-4">
            <InvitationSizeSelect value={size} onChange={setSize} />
            <p className="text-sm text-gray-600 pb-4">
              Ukuran dipilih: {size || "Belum dipilih"}
            </p>
          </div>

          <div className="space-y-4">
            <PaperTypeSelect value={paperType} onChange={setPaperType} />
            <p className="text-sm text-gray-600 pb-4">
              Jenis kertas dipilih: {paperType || "Belum dipilih"}
            </p>
          </div>
          <ProductQuantitySelector
            quantity={quantity}
            onQuantityChange={onQuantityChange}
            onReset={() => onQuantityChange(100 - quantity)} // makes it 100
          />

          <div className="flex justify-center items-center">
            <Button
              onClick={onAddToCart}
              className="bg-shop-accent hover:bg-shop-accent/90 text-white py-4 w-full rounded tracking-widest flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              Keranjang
            </Button>
          </div>
        </div>

        <div>
          <ul className="text-sm list-disc list-inside mb-10">
            <li>Kertas kualitas terbaik tersedia</li>
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
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              showDescription ? "max-h-[1000px] mt-6" : "max-h-0"
            }`}
          >
            <p className="text-normal text-gray-700">
              {product.description.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
