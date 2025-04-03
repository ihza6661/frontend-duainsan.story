
import { PlusIcon, MinusIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartItem as CartItemType } from "@/lib/data";

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (itemId: string, newQuantity: number) => void;
  onRemove: (itemId: string) => void;
}

const CartItem = ({ item, onUpdateQuantity, onRemove }: CartItemProps) => {
  const handleQuantityChange = (change: number) => {
    const newQuantity = item.quantity + change;
    if (newQuantity > 0) {
      onUpdateQuantity(item.product.id, newQuantity);
    }
  };
  
  return (
    <div className="flex items-center py-4 border-b border-shop-medium-gray">
      <div className="w-20 h-20 flex-shrink-0 bg-shop-light-gray rounded-md overflow-hidden">
        <img 
          src={item.product.image} 
          alt={item.product.name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="ml-4 flex-grow">
        <h3 className="text-shop-text font-medium">{item.product.name}</h3>
        <p className="text-shop-accent">${item.product.price.toFixed(2)}</p>
      </div>
      
      <div className="flex items-center border border-shop-medium-gray rounded-md">
        <Button 
          type="button" 
          variant="ghost" 
          size="icon"
          onClick={() => handleQuantityChange(-1)}
          className="h-8 w-8 text-shop-dark-gray hover:text-shop-accent"
        >
          <MinusIcon className="h-4 w-4" />
        </Button>
        
        <span className="w-8 text-center">{item.quantity}</span>
        
        <Button 
          type="button" 
          variant="ghost" 
          size="icon"
          onClick={() => handleQuantityChange(1)}
          className="h-8 w-8 text-shop-dark-gray hover:text-shop-accent"
        >
          <PlusIcon className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="ml-4 w-20 text-right">
        <p className="font-medium">${(item.product.price * item.quantity).toFixed(2)}</p>
      </div>
      
      <Button 
        type="button" 
        variant="ghost" 
        size="icon"
        onClick={() => onRemove(item.product.id)}
        className="ml-2 text-shop-dark-gray hover:text-shop-accent"
      >
        <XIcon className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default CartItem;
