import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Product, getProductById } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon, ArrowLeftIcon } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useCart } from "@/components/ui/Cart";
import { FaCreditCard, FaTruck, FaUndo, FaGift } from "react-icons/fa";
import { products } from "@/lib/data";
import CenterModeSlider from "@/components/ui/CenterModeSlider";
import LuxuryFashionSlider from "@/components/ui/LuxuryFashionSlider";
import BrandSlider from "@/components/ui/BrandSlider";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const { addToCart } = useCart();

  useEffect(() => {
    if (id) {
      const foundProduct = getProductById(id);
      setProduct(foundProduct || null);
    }
    setLoading(false);
  }, [id]);

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-pulse">Loading...</div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow py-16">
          <div className="container text-center">
            <h1 className="text-3xl font-medium mb-6">Product Not Found</h1>
            <p className="text-shop-dark-gray mb-8">
              We couldn't find the product you're looking for.
            </p>
            <Button asChild>
              <Link to="/products">
                <ArrowLeftIcon className="mr-2 h-4 w-4" />
                Back to Products
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const services = [
    {
      icon: <FaCreditCard size={40} />,
      title: "PAYMENT",
      description: "Credit card, Klarna or PayPal",
    },
    {
      icon: <FaTruck size={40} />,
      title: "SHIPPING & DELIVERY",
      description: "24h Green delivery",
    },
    {
      icon: <FaUndo size={40} />,
      title: "FREE RETURN",
      description: "We have free return & exchange",
    },
    {
      icon: <FaGift size={40} />,
      title: "WONDER CARD",
      description: "Special discount club card",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-8">
        <div className="">
          <div className="mb-8">
            <Button
              asChild
              variant="ghost"
              className="text-shop-dark-gray hover:text-shop-accent"
            >
              <Link to="/products">
                <ArrowLeftIcon className="mr-2 h-4 w-4" />
                Back to Products
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="bg-shop-light-gray rounded-lg overflow-hidden">
              {product.images && product.images.length > 1 ? (
                <div className="grid grid-cols-1 gap-2">
                  {product.images.map((imgSrc, index) => (
                    <img
                      key={index}
                      src={imgSrc}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  ))}
                </div>
              ) : product.images && product.images.length === 1 ? (
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-auto object-cover"
                />
              ) : (
                <div className="w-full h-48 flex items-center justify-center text-gray-400">
                  No image available
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="sticky container top-24 self-start">
              <h1 className="text-3xl font-medium mb-2">{product.name}</h1>
              <p className="text-2xl text-shop-accent font-medium mb-6">
                ${product.price.toFixed(2)}
              </p>

              <div className="border-t border-b border-shop-medium-gray py-6 my-6">
                <p className="text-shop-dark-gray mb-6">
                  {product.description}
                </p>

                <div className="flex items-center mb-6">
                  <span className="mr-4 text-shop-dark-gray">Quantity</span>
                  <div className="flex items-center border border-shop-medium-gray rounded-md">
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => handleQuantityChange(-1)}
                      className="h-10 w-10 text-shop-dark-gray hover:text-shop-accent"
                      disabled={quantity <= 1}
                    >
                      <MinusIcon className="h-4 w-4" />
                    </Button>

                    <span className="w-10 text-center">{quantity}</span>

                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => handleQuantityChange(1)}
                      className="h-10 w-10 text-shop-dark-gray hover:text-shop-accent"
                    >
                      <PlusIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex justify-center items-center">
                  <Button
                    onClick={handleAddToCart}
                    className="bg-shop-accent hover:bg-shop-accent/90 text-white py-6 w-full font-normal tracking-widest"
                  >
                    ADD TO CART
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Product Details</h3>
                <ul className="list-disc list-inside text-shop-dark-gray space-y-2">
                  <li>Premium quality materials</li>
                  <li>Designed for everyday use</li>
                  <li>30-day money-back guarantee</li>
                  <li>Free shipping on orders over $50</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-around gap-12 py-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center max-w-xs"
              >
                <div className="mb-4 text-black">{service.icon}</div>
                <h3 className="text-lg font-semibold tracking-widest">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="relative w-full h-screen overflow-hidden bg-gray-100">
            {/* Background Image */}
            {/* <img
        src="/path-to-your-image/banner.png" // <- update this path
        alt="Banner Background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      /> */}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Pause Button */}
            <button className="absolute top-4 left-4 bg-gray-700 bg-opacity-70 text-white p-2 rounded">
              ❚❚
            </button>

            {/* Centered Text */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
              <span className="text-sm mb-2">Sustainability</span>
              <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
                OUR FABRICS ARE DEVELOPED
                <br />
                SPECIFICALLY FOR US AND WE
                <br />
                ONLY PRODUCE QUALITY
                <br />
                APPAREL THAT LASTS.
              </h1>
            </div>
          </div>

          <div className="px-4 pb-16">
            <h2 className="text-lg sm:text-2xl font-normal mb-4 sm:mb-6 text-center uppercase tracking-widest pt-6 sm:pt-16">
              You May Also Like
            </h2>
            <div className="custom-scrollbar flex space-x-2 overflow-x-scroll pb-6 sm:pb-10">
              {products
                .filter((item) => item.bestseller)
                .map((item) => (
                  <div
                    key={item.id}
                    className="flex-none w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/4 h-full"
                  >
                    <Link to={`/product/${item.id}`} className="group block">
                      <div className="relative w-full overflow-hidden">
                        {item.images && item.images.length > 0 ? (
                          <img
                            src={item.images[0]}
                            alt={item.name}
                            className="w-full h-auto object-cover"
                          />
                        ) : (
                          <div className="w-full h-48 flex items-center justify-center text-gray-400">
                            No image
                          </div>
                        )}
                      </div>

                      <h4 className="mt-2 text-sm sm:text-md font-normal text-gray-800">
                        {item.name}
                      </h4>
                      <p className="text-sm sm:text-base">${item.price}</p>
                    </Link>
                  </div>
                ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row w-full min-h-[80vh]">
  {/* Left Side */}
  <div className="w-full md:w-1/2 relative">
    <img
      src="/banner-evening-dress.webp"
      alt="Evening Dress"
      className="w-full h-[50vh] md:h-full object-cover"
    />
  </div>

  {/* Right Side */}
  <div className="w-full md:w-1/2 bg-[#cbbbaa] flex items-center justify-center p-8">
    <div className="text-center">
      <p className="text-white text-sm md:text-base mb-2">The brand's latest campaign</p>
      <h1 className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-normal leading-tight tracking-wider mb-6">
        EVENING <br /> DRESS
      </h1>
      <button className="bg-white text-black px-6 py-3 mt-4 uppercase tracking-wide font-semibold hover:bg-gray-200 transition-all">
        Check Now
      </button>
    </div>
  </div>
</div>

          <BrandSlider />
          {/* <CenterModeSlider /> */}
          <LuxuryFashionSlider />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
