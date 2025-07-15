import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon, RotateCcwIcon } from "lucide-react";

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
  return (
    <div className="flex items-center mb-6">
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

        <span className="w-10 text-center">{quantity}</span>

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
  );
};

export default ProductQuantitySelector;
