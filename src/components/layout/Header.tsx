import { useState } from "react";
import { Link } from "react-router-dom";
import { SearchIcon, ShoppingBag, UserIcon, MenuIcon } from "lucide-react";
import { useCart } from "@/components/ui/Cart";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import Sidebar from "./Sidebar";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { cartItems } = useCart();
  const { isVisible } = useScrollDirection();

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <header
        className={`fixed top-0 left-0 right-0 z-40 w-full transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border border-b`}
      >
        <div className="container px-4 flex items-center justify-between h-14 md:h-16">
          <div className="flex items-center">
            <button
              className="text-shop-text md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <MenuIcon className="h-5 w-5" />
            </button>
            <button className="flex items-center justify-center w-4 h-4 md:hidden ml-4">
              <SearchIcon className="h-4 w-4" />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 ml-8">
              <button
                className="text-shop-text"
                onClick={() => setSidebarOpen(true)}
              >
                <MenuIcon className="h-4 w-4" />
              </button>
              <nav className="flex items-center space-x-8">
                <Link to="/shop" className="text-xs uppercase tracking-wider">
                  Shop
                </Link>
                <Link
                  to="/lookbook"
                  className="text-xs uppercase tracking-wider"
                >
                  Lookbook
                </Link>
                <Link to="/sale" className="text-xs uppercase tracking-wider">
                  Sale
                </Link>
              </nav>
            </div>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link
              to="/"
              className="text-xl md:text-2xl font-normal uppercase tracking-widest text-start"
            >
              CASABLANCAS
            </Link>
          </div>

          <div className="flex items-center">
            <div className="flex items-center">
              <button className="hidden md:flex items-center justify-center w-10 h-10">
                <SearchIcon  strokeWidth={1} className="h-5 w-5" />
              </button>
              <button className="flex items-center justify-center w-6 h-6 md:w-10 md:h-10">
                <UserIcon strokeWidth={1} className="h-4 w-4 md:h-5 md:w-5" />
              </button>
              <Link to="/cart">
                <button className="relative flex items-center justify-center w-6 h-6 md:w-10 md:h-10">
                  <ShoppingBag strokeWidth={1} className="h-5 w-5" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] md:text-xs rounded-full h-4 w-4 md:h-5 md:w-5 flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
