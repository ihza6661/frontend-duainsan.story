// src/components/CartItem.tsx

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, Plus, Minus } from "lucide-react";
import { formatRupiah } from "@/lib/utils";
import { CartItem as CartItemType } from "@/services/cartService";

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (itemId: number, quantity: number) => void;
  onRemoveItem: (itemId: number) => void;
}

export function CartItem({ item, onUpdateQuantity, onRemoveItem }: CartItemProps) {
  const STORAGE_URL = import.meta.env.VITE_PUBLIC_STORAGE_URL;
  const placeholderImage = "/images/placeholder.svg";

  // --- ROBUST IMAGE LOGIC ---
  // 1. Prioritize the featured image from the variant.
  let imageToDisplay = item.variant?.images?.find(img => img.is_featured);

  // 2. If not found, fall back to the main product's featured image.
  if (!imageToDisplay) {
    imageToDisplay = item.product.featured_image;
  }

  // 3. If still no image, take the VERY FIRST image from the variant's gallery.
  if (!imageToDisplay && item.variant?.images?.length > 0) {
    imageToDisplay = item.variant.images[0];
  }

  // 4. Construct the final URL safely.
  const imageUrl = imageToDisplay?.image
    ? `${STORAGE_URL}${imageToDisplay.image}`
    : placeholderImage;

  const variantDescription = item.variant?.options?.map(opt => opt.value).join(' / ');

  return (
    <Card key={item.id} className="overflow-hidden">
      <CardContent className="flex items-start gap-4 p-4">
        <img
          src={imageUrl}
          alt={item.product.name}
          className="w-24 h-24 object-cover rounded-md border"
          onError={(e) => (e.currentTarget.src = placeholderImage)}
        />
        <div className="flex-1">
          <h3 className="font-semibold">{item.product.name}</h3>
          {variantDescription && (
            <p className="text-sm text-gray-500">{variantDescription}</p>
          )}
          <p className="text-gray-600 font-medium mt-1">{formatRupiah(item.unit_price)}</p>
          <div className="flex items-center gap-2 mt-2">
            <Button
              variant="outline" size="icon" className="w-8 h-8"
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              disabled={item.quantity <= item.product.min_order_quantity}
              aria-label="Kurangi kuantitas"
            >
              <Minus className="w-4 h-4" />
            </Button>
            <Input
              type="number"
              value={item.quantity}
              min={item.product.min_order_quantity}
              onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value) || item.product.min_order_quantity)}
              className="text-center w-20 h-8"
              aria-label={`Kuantitas untuk ${item.product.name}`}
            />
            <Button
              variant="outline" size="icon" className="w-8 h-8"
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              aria-label="Tambah kuantitas"
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="text-right">
          <p className="font-bold">{formatRupiah(item.sub_total)}</p>
          <Button
            variant="ghost" size="icon" className="text-gray-400 hover:text-red-500 mt-4"
            onClick={() => onRemoveItem(item.id)}
            aria-label={`Hapus ${item.product.name} dari keranjang`}
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}