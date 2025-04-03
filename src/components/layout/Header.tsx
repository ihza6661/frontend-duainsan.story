
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SearchIcon, ShoppingCartIcon, UserIcon, MenuIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/ui/Cart";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartItems } = useCart();
  
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`py-4 w-full transition-all duration-300 ${
        isSticky ? "sticky-header shadow-sm" : "bg-white"
      }`}
    >
      <div className="container px-4 flex items-center justify-between">
        <div className="flex items-center">
          <button 
            className="mr-4 block md:hidden" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <XIcon className="h-5 w-5 text-shop-text" />
            ) : (
              <MenuIcon className="h-5 w-5 text-shop-text" />
            )}
          </button>
          
          <nav className={`
            ${mobileMenuOpen 
              ? "absolute top-16 left-0 w-full bg-white shadow-md py-4 px-6 z-50 border-y" 
              : "hidden"
            } md:flex md:static md:shadow-none md:border-0 md:w-auto md:bg-transparent md:p-0
          `}>
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 uppercase text-sm tracking-wider">
              <li>
                <Link 
                  to="/products" 
                  className="text-shop-text hover:text-shop-accent transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link 
                  to="/lookbooks" 
                  className="text-shop-text hover:text-shop-accent transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Lookbooks
                </Link>
              </li>
              <li>
                <Link 
                  to="/sale" 
                  className="text-shop-text hover:text-shop-accent transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sale
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link to="/" className="text-2xl font-medium uppercase tracking-widest">
            Couture
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-shop-text">
            <SearchIcon className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-shop-text">
            <UserIcon className="h-4 w-4" />
          </Button>
          <Link to="/cart" className="relative">
            <Button variant="ghost" size="icon" className="text-shop-text">
              <ShoppingCartIcon className="h-4 w-4" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-shop-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
