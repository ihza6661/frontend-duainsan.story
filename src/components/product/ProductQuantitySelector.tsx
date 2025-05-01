
import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";

interface ProductQuantitySelectorProps {
  quantity: number;
  onQuantityChange: (change: number) => void;
}

const ProductQuantitySelector = ({
  quantity,
  onQuantityChange,
}: ProductQuantitySelectorProps) => {
  return (
    <div className="flex items-center mb-6">
      <span className="mr-4 text-shop-dark-gray">Quantity</span>
      <div className="flex items-center border border-shop-medium-gray">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => onQuantityChange(-1)}
          className="h-10 w-10 text-shop-dark-gray"
          disabled={quantity <= 1}
        >
          <MinusIcon className="h-4 w-4" />
        </Button>

        <span className="w-10 text-center">{quantity}</span>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => onQuantityChange(1)}
          className="h-10 w-10 text-shop-dark-gray"
        >
          <PlusIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ProductQuantitySelector;
