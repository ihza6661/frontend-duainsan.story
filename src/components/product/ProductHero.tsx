import { useEffect } from "react";
import { Product } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import ProductGallery from "./ProductGallery";
import ProductQuantitySelector from "./ProductQuantitySelector";
import PaperTypeSelect from "./PaperTypeSelect";
import InvitationSizeSelect from "./InvitationSizeSelect";
import ExtraItems from "../layout/ExtraItemSelector";
import GuestbookSizeSelect from "./GuestbookTypeSelect";
import GuestbookVariantSelect from "../layout/ProductVariantSelect";
import ExtraItemSelector from "../layout/ExtraItemSelector";
import { toast } from "@/hooks/use-toast";

interface ProductHeroProps {
  product: Product;
  quantity: number;
  onQuantityChange: (change: number) => void;
  onAddToCart: (quantity: number, selectedVariantType: string) => void; // ✅ updated
}

const ProductHero = ({ product, onAddToCart }: ProductHeroProps) => {
  const [showDescription, setShowDescription] = useState(false);
  const [quantity, setQuantity] = useState(100);
  const [paperType, setPaperType] = useState("");
  const [size, setSize] = useState("");
  const [selectedVariantType, setSelectedVariantType] = useState("");
  const selectedVariant = product.variants?.find(
    (v) => v.type === selectedVariantType
  );

  useEffect(() => {
    if (
      product.type === "guestbook" &&
      product.variants &&
      product.variants.length > 0 &&
      !selectedVariantType
    ) {
      setSelectedVariantType(product.variants[0].type);
    }
  }, [product, selectedVariantType]);

  const [guestbookSize, setGuestbookSize] = useState("");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ProductGallery images={product.images} productName={product.name} />

      <div className="pt-10 sm:pt-0 px-4 sm:px-44 sticky top-20 self-start">
        <p className="border-2 border-gray-200 bg-gray-200 inline-block px-4 py-1 rounded text-xs">
          PRE-ORDER 25 HARI
        </p>

        <h1 className="text-xl tracking-wide my-4 uppercase">{product.name}</h1>

        <div className="mt-2 py-4 border-y">
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
              {product.description.split("\n").map((line, index) => {
                const trimmed = line.trim().toLowerCase();
                const isBold =
                  trimmed.startsWith("jenis bahan:") ||
                  trimmed.startsWith("lama pengerjaan:");
                return (
                  <span key={index}>
                    {isBold ? <strong>{line}</strong> : line}
                    <br />
                  </span>
                );
              })}
            </p>
          </div>
        </div>

        <p className="text-lg text-shop-accent pt-2">
          {new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
          }).format(selectedVariant ? selectedVariant.price : product.price)}
        </p>

        <div className="pb-6 my-4">
          {product.type === "guestbook" && (
            <div className="">
              <GuestbookVariantSelect
                value={selectedVariantType}
                onChange={setSelectedVariantType}
                variants={product.variants}
              />
            </div>
          )}

          {product?.category === "Wedding" && (
            <div className="">
              <InvitationSizeSelect value={size} onChange={setSize} />
              {/* <p className="text-sm text-gray-600 pb-4">
      Ukuran dipilih: {size || "Belum dipilih"}
    </p> */}
            </div>
          )}

          <div>
            {product?.category === "guestbook" && (
              <GuestbookSizeSelect
                value={guestbookSize}
                onChange={setGuestbookSize}
              />
            )}
          </div>

          <div className="">
            <PaperTypeSelect value={paperType} onChange={setPaperType} />
            {/* <p className="text-sm text-gray-600 pb-4">
              Jenis kertas dipilih: {paperType || "Belum dipilih"}
            </p> */}
          </div>

          <ProductQuantitySelector
            quantity={quantity}
            onQuantityChange={(change) =>
              setQuantity((prev) => Math.max(100, prev + change))
            }
            onReset={() => setQuantity(100)}
          />

          {product.category === "Wedding" && (
            <ExtraItemSelector quantity={quantity} />
          )}

          <div className="flex justify-center items-center">
            <Button
              onClick={() => {
                // If product has variants, ensure one is selected
                if (product.variants?.length && !selectedVariantType) {
                  toast({
                    title: "Pilih varian terlebih dahulu",
                    variant: "destructive",
                  });
                  return;
                }

                onAddToCart(quantity, selectedVariantType || "");
              }}
              className="bg-shop-accent hover:bg-shop-accent/90 text-white py-4 w-full rounded tracking-widest flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              Keranjang
            </Button>
          </div>
        </div>

        <div>
          <ul className="text-sm list-disc list-inside mb-10">
            <li>Minimal Pemesanan 100 lembar</li>
            <li>Beragam Opsi Kertas</li>
            <li>Gratis E-Invitation Static</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
