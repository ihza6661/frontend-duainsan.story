import { useState } from "react";
import { Link } from "react-router-dom";
import ShoppingBag from "/svg/shopping-bag.svg";
import UserIcon from "/svg/user.svg";
import Search from "/svg/search.svg";
import MenuIcon from "/svg/menu.svg";
import { useCart } from "@/components/ui/Cart";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import Sidebar from "./Sidebar";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { cartItems } = useCart();
  const { isVisible } = useScrollDirection();
  const location = useLocation();
  const path = location.pathname;
  const isProductDetailPage = path.startsWith("/product/");
  const baseHeaderClasses =
    "fixed top-0 left-0 right-0 z-40 w-full transition-transform duration-300";
  const showHideClass = isVisible ? "translate-y-0" : "-translate-y-full";
  const pageStyle = isProductDetailPage
    ? "bg-transparant text-black"
    : "bg-white/95 text-black backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b";

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <header className={`${baseHeaderClasses} ${showHideClass} ${pageStyle}`}>
        <div className="px-0 sm:px-8 flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center pl-3 black">
            <button
              className="text-shop-text md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <img src={MenuIcon} alt="Menu Icon" className="w-6" />
            </button>
            <button className="flex items-center justify-center w-6 h-6 md:hidden ml-1">
              <img src={Search} alt="Search Icon" />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                className="text-shop-text"
                onClick={() => setSidebarOpen(true)}
              >
                <img src={MenuIcon} alt="Search Icon" />
              </button>
              <nav className="hidden tablet-custom:flex items-center space-x-4 tracking-widest">
                <Link
                  to="/shop"
                  className="text-sm uppercase link-underline-animation"
                >
                  Shop
                </Link>
                <Link
                  to="/lookbook"
                  className="text-sm uppercase link-underline-animation"
                >
                  Lookbook
                </Link>
                <Link
                  to="/sale"
                  className="text-sm uppercase link-underline-animation"
                >
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
            <div className="flex items-center justify-center pr-2 gap-0 sm:gap-1">
              <button className="hidden md:flex items-center justify-center w-8 h-10">
                <img src={Search} alt="Search Icon" />
              </button>
              <button className="relative flex items-center justify-center w-8 h-10">
                <img src={UserIcon} alt="User Icon" />
              </button>
              <Link to="/cart">
                <button className="relative flex items-center justify-center w-8 h-10">
                  <img src={ShoppingBag} alt="Shopping Bag" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] md:text-xs rounded-full h-4 w-4 md:h-5 md:w-5 flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
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
