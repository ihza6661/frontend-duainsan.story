import { Link } from "react-router-dom";
import { XIcon } from "lucide-react";
import { useState } from "react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const [productsOpen, setProductsOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  const shopItems = [
    { name: "Undangan Cetak", path: "/shop/cetak" },
    { name: "Undangan Digital Statis", path: "/shop/statis" },
    { name: "Hantaran", path: "/shop/hantaran" },
  ];

  const priceItems = [
    { name: "Undangan Cetak", path: "shop/cetak" },
    { name: "Undangan Digital Statis", path: "/shop/statis" },
    { name: "Latest Promo", path: "/shop/promo" },
  ];

  const companyItems = [
    { name: "Contact", path: "/contact" },
    { name: "Gallery", path: "/gallery" },
    { name: "Collection", path: "/collection" },
    { name: "About", path: "/about" },
          
  ];

  const renderDropdown = (
    label: string,
    isOpen: boolean,
    toggleOpen: () => void,
    items: { name: string; path: string }[]
  ) => (
    <div>
      <button
        className={`text-shop-accent w-full text-left text-base uppercase tracking-widest flex items-center justify-between ${
          isOpen ? "text-gray-400" : ""
        }`}
        onClick={toggleOpen}
      >
        {label}
        <span
          className="text-lg transform transition-transform duration-200"
          style={{ transform: isOpen ? "rotate(45deg)" : "none" }}
        >
          +
        </span>
      </button>
      <div
        className={`space-y-4 overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-96 opacity-100 mt-4 mb-8" : "max-h-0 opacity-0"
        }`}
      >
        {items.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="block text-sm text-shop-text"
            onClick={onClose}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-full sm:w-[500px] bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-center mb-6 border-b pb-2">
            <h2 className="text-lg uppercase tracking-wider">Menu</h2>
            <button onClick={onClose}>
              <XIcon className="h-4 w-4" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-4 tracking-widest">
            {renderDropdown(
              "Products",
              productsOpen,
              () => setProductsOpen(!productsOpen),
              shopItems
            )}
            {renderDropdown(
              "Price",
              priceOpen,
              () => setPriceOpen(!priceOpen),
              priceItems
            )}
            {renderDropdown(
              "Company",
              companyOpen,
              () => setCompanyOpen(!companyOpen),
              companyItems
            )}
          </nav>

        

          {/* Footer */}
          <div className="mt-8 space-y-3 text-sm">
            <Link to="/login" className="block" onClick={onClose}>
              Log in
            </Link>
            <Link to="/faq" className="block" onClick={onClose}>
              FAQ
            </Link>
            <Link to="/shipping" className="block" onClick={onClose}>
              Shipping
            </Link>
            <Link to="/contact" className="block" onClick={onClose}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
