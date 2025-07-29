import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ShoppingBag from "/svg/shopping-bag.svg";
import UserIcon from "/svg/user.svg";
import Search from "/svg/search.svg";
import MenuIcon from "/svg/menu.svg";
import { useCart } from "@/components/ui/Cart";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import Sidebar from "./Sidebar";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const { cartItems } = useCart();
  console.log("Header sees cartItems:", cartItems);

  const { isVisible } = useScrollDirection();
  const location = useLocation();
  const path = location.pathname;
  const isProductDetailPage = path.startsWith("/product/");

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const baseHeaderClasses =
    "fixed top-0 left-0 right-0 z-40 w-full transition-transform duration-300";
  const showHideClass = isVisible ? "translate-y-0" : "-translate-y-full";

  const pageStyle = isProductDetailPage
    ? isAtTop
      ? "bg-white/50 text-black" // transparan saat di atas halaman
      : "bg-white/95 text-black backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b"
    : "bg-white/95 text-black backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b";

  const totalItems = cartItems.length;

  return (
    <>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <header className={`${baseHeaderClasses} ${showHideClass} ${pageStyle}`}>
        <div className="px-0 sm:px-8 flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center pl-3">
            <button
              className="text-shop-text md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <img src={MenuIcon} alt="Menu Icon" className="w-6" />
            </button>
            <button className="flex items-center justify-center w-6 h-6 md:hidden ml-1">
              <img src={Search} alt="Search Icon" />
            </button>

            <div className="hidden md:flex items-center space-x-8">
              <button
                className="text-shop-text"
                onClick={() => setSidebarOpen(true)}
              >
                <img src={MenuIcon} alt="Menu Icon" />
              </button>
              <nav className="hidden tablet-custom:flex items-center space-x-6 tracking-normal">
                <Link
                  to="/products"
                  className="text-sm uppercase link-underline-animation"
                >
                  All Products
                </Link>
                <Link
                  to="/gallery"
                  className="text-sm uppercase link-underline-animation"
                >
                  Gallery
                </Link>
                <Link
                  to="/collection"
                  className="text-sm uppercase link-underline-animation"
                >
                  Shop By Collection
                </Link>
              </nav>
            </div>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link
              to="/"
              className="text-md md:text-4xl font-semibold font-fancy tracking-widest text-start text-nowrap italic text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"
            >
              DuaInsan.Story
            </Link>



          </div>

          <div className="flex items-center">
            <div className="flex items-center justify-center pr-2 gap-0 sm:gap-1">
              <button className="hidden md:flex items-center justify-center w-8 h-10">
                <img src={Search} alt="Search Icon" />
              </button>
              <Link
                to="/login"
                className="relative flex items-center justify-center w-8 h-10"
              >
                <img src={UserIcon} alt="User Icon" />
              </Link>
              <Link to="/cart">
                <button className="relative flex items-center justify-center w-8 h-10">
                  <img src={ShoppingBag} alt="Shopping Bag" />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 sm:-top-3 -right-1 bg-black text-white text-[10px] md:text-xs rounded-full h-4 w-3 md:h-5 md:w-4 flex items-center justify-center min-w-[30px] px-[2px]">
                      {totalItems > 99 ? "99+" : totalItems}
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
