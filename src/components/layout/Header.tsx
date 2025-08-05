import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

// --- Impor Aset & Komponen Anak ---
import ShoppingBag from "/svg/shopping-bag.svg";
import UserIcon from "/svg/user.svg";
import Search from "/svg/search.svg";
import MenuIcon from "/svg/menu.svg";
import Sidebar from "./Sidebar";

// --- Impor Hook Kustom & Konteks ---
import { useCart } from "@/components/ui/Cart"; // Asumsi path ini benar
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useAuth } from "@/context/AuthContext"; // <-- 1. Mengimpor useAuth sebagai sumber kebenaran

const Header = () => {
  // State yang berhubungan dengan UI internal komponen Header
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // --- Menggunakan Hook ---
  // 2. Mengambil state & fungsi global dari AuthContext
  const { user, logout, isLoading } = useAuth();
  
  // State dari hook/konteks lain
  const { cartItems } = useCart();
  const { isVisible } = useScrollDirection();
  const location = useLocation();

  // --- Logika Internal Komponen ---
  const path = location.pathname;
  const isProductDetailPage = path.startsWith("/product/");
  const totalItems = cartItems.length;

  // Efek untuk menangani gaya header saat scroll (tidak berubah)
  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };
    handleScroll(); // Panggil sekali di awal untuk set state
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Efek untuk menutup dropdown saat klik di luar (tidak berubah)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowUserDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 3. Fungsi logout menjadi sangat sederhana, hanya memanggil fungsi dari konteks
  const handleLogout = async () => {
    setShowUserDropdown(false); // Tutup dropdown
    await logout(); // Panggil fungsi logout global
  };

  // --- Kalkulasi Class untuk Styling Dinamis (tidak berubah) ---
  const baseHeaderClasses =
    "fixed top-0 left-0 right-0 z-40 w-full transition-transform duration-300";
  const showHideClass = isVisible ? "translate-y-0" : "-translate-y-full";
  const pageStyle = isProductDetailPage
    ? isAtTop
      ? "bg-white/50 text-black"
      : "bg-white/95 text-black backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b"
    : "bg-white/95 text-black backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b";

  return (
    <>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <header className={`${baseHeaderClasses} ${showHideClass} ${pageStyle}`}>
        <div className="px-0 sm:px-8 flex items-center justify-between h-16 md:h-20">
          {/* ================== Sisi Kiri (Navigasi) ================== */}
          <div className="flex items-center pl-3">
            <button
              className="text-shop-text md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <img src={MenuIcon} alt="Menu Icon" className="w-6" />
            </button>
            {/* <button className="flex items-center justify-center w-6 h-6 md:hidden ml-1">
              <img src={Search} alt="Search Icon" />
            </button> */}

            <div className="hidden md:flex items-center space-x-8">
              <button
                className="text-shop-text"
                onClick={() => setSidebarOpen(true)}
              >
                <img src={MenuIcon} alt="Menu Icon" />
              </button>
              <nav className="hidden tablet-custom:flex items-center space-x-6 tracking-normal">
                <Link to="/products" className="text-sm uppercase link-underline-animation">
                  All Products
                </Link>
                <Link to="/gallery" className="text-sm uppercase link-underline-animation">
                  Gallery
                </Link>
                <Link to="/collection" className="text-sm uppercase link-underline-animation">
                  Shop By Collection
                </Link>
              </nav>
            </div>
          </div>

          {/* ================== Logo Tengah ================== */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link
              to="/"
              className="text-md md:text-4xl font-semibold font-fancy tracking-widest text-start text-nowrap italic text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"
            >
              DuaInsan.Story
            </Link>
          </div>

          {/* ================== Sisi Kanan (Aksi Pengguna) ================== */}
          <div className="flex items-center">
            <div className="flex items-center justify-center pr-2 gap-0 sm:gap-1">
              {/* <button className="hidden md:flex items-center justify-center w-8 h-10">
                <img src={Search} alt="Search Icon" />
              </button> */}

              {/* 4. Logika render ikon pengguna yang cerdas dan reaktif */}
              {isLoading ? (
                // Saat aplikasi sedang memvalidasi token, tampilkan placeholder agar tidak berkedip
                <div className="relative flex items-center justify-center w-8 h-10">
                   <div className="w-5 h-5 bg-gray-200 rounded-full animate-pulse"></div>
                </div>
              ) : user ? (
                // Jika pengguna sudah login, tampilkan ikon dengan dropdown
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setShowUserDropdown(!showUserDropdown)}
                    className="relative flex items-center justify-center w-8 h-10"
                  >
                    <img src={UserIcon} alt="User Icon" />
                  </button>
                  {showUserDropdown && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-xl z-50 py-2 text-sm">
                      <div className="px-4 py-2 border-b font-medium text-gray-700 truncate">
                        {user.full_name}
                      </div>
                      <Link
                        to="/profile"
                        onClick={() => setShowUserDropdown(false)}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700"
                      >
                        Profil Saya
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600 font-medium"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                // Jika tidak ada pengguna, tampilkan link ke halaman login
                <Link to="/login" className="relative flex items-center justify-center w-8 h-10">
                  <img src={UserIcon} alt="Login Icon" />
                </Link>
              )}

              {/* Ikon Keranjang Belanja */}
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
