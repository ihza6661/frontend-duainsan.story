
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-shop-light-gray py-12 mt-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">ShopIfy</h3>
            <p className="text-shop-dark-gray">
              Creating beautiful, minimal shopping experiences for the modern consumer.
            </p>
          </div>
          
          <div>
            <h4 className="text-base font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-shop-dark-gray hover:text-shop-accent transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products/category/electronics" className="text-shop-dark-gray hover:text-shop-accent transition-colors">
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/products/category/home-office" className="text-shop-dark-gray hover:text-shop-accent transition-colors">
                  Home Office
                </Link>
              </li>
              <li>
                <Link to="/products/category/accessories" className="text-shop-dark-gray hover:text-shop-accent transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-shop-dark-gray hover:text-shop-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-shop-dark-gray hover:text-shop-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-shop-dark-gray hover:text-shop-accent transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-shop-dark-gray hover:text-shop-accent transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shipping" className="text-shop-dark-gray hover:text-shop-accent transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-shop-dark-gray hover:text-shop-accent transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-shop-dark-gray hover:text-shop-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-shop-dark-gray hover:text-shop-accent transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-shop-medium-gray mt-10 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-shop-dark-gray">
            © {new Date().getFullYear()} ShopIfy. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-shop-dark-gray hover:text-shop-accent transition-colors">
              Privacy
            </a>
            <a href="#" className="text-shop-dark-gray hover:text-shop-accent transition-colors">
              Terms
            </a>
            <a href="#" className="text-shop-dark-gray hover:text-shop-accent transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
