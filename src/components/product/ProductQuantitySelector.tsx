import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon, RotateCcwIcon, Trash2Icon } from "lucide-react";
import { useCart } from "@/components/ui/Cart"; // Make sure path is correct

interface ProductQuantitySelectorProps {
  quantity: number;
  onQuantityChange: (change: number) => void;
  onReset?: () => void;
}

const ProductQuantitySelector = ({
  quantity,
  onQuantityChange,
  onReset,
}: ProductQuantitySelectorProps) => {
  const { clearCart } = useCart(); // Use cart context

  return (
    <div className="flex flex-col gap-4 mb-6">
      <div className="flex items-center">
        <span className="mr-4">Jumlah</span>
        <div className="flex items-center border border-shop-medium-gray rounded">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => onQuantityChange(-100)}
            className="h-10 w-10 text-shop-dark-gray"
            disabled={quantity <= 100}
          >
            <MinusIcon className="h-4 w-4" />
          </Button>

          <span className="w-14 text-center">{quantity}</span>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => onQuantityChange(100)}
            className="h-10 w-10 text-shop-dark-gray"
          >
            <PlusIcon className="h-4 w-4" />
          </Button>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={onReset}
            className="h-10 w-10 text-shop-dark-gray"
          >
            <RotateCcwIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <Button
        type="button"
        variant="destructive"
        onClick={clearCart}
        className="self-start flex items-center gap-2 rounded"
      >
        <Trash2Icon className="w-4 h-4" />
        Kosongkan Keranjang
      </Button>
    </div>
  );
};

export default ProductQuantitySelector;
