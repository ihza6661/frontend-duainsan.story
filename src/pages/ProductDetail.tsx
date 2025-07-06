import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Product, getProductById } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useCart } from "@/components/ui/Cart";
import BrandSlider from "@/components/ui/BrandSlider";
import LuxuryFashionSlider from "@/components/ui/LuxuryFashionSlider";
import ProductServices from "@/components/product/ProductServices";
import ProductHero from "@/components/product/ProductHero";
import SustainabilityBanner from "@/components/product/SustainabilityBanner";
import RelatedProducts from "@/components/product/RelatedProducts";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
          <ProductHero
            product={product}
            quantity={quantity}
            onQuantityChange={handleQuantityChange}
            onAddToCart={handleAddToCart}
          />

          <ProductServices />

          {/* <SustainabilityBanner /> */}

          <RelatedProducts product={product} />

          <BrandSlider />
          {/* <LuxuryFashionSlider /> */}

          {/* PRODUCT RECOMENDATION */}
          
          <div className="px-4 sm:px-8 my-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/products">Products</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{product.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
