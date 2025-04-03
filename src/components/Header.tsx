import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/components/ui/Cart';

const Header = () => {
  const { cartItems } = useCart();
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-blue-600">Shopify</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium transition-colors hover:text-blue-600">
              Beranda
            </Link>
            <Link to="/shop" className="text-sm font-medium transition-colors hover:text-blue-600">
              Toko
            </Link>
            <Link to="/products" className="text-sm font-medium transition-colors hover:text-blue-600">
              Produk
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative">
            <ShoppingCart className="h-6 w-6" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header; 