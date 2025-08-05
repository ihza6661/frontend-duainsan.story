import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Product, getProductById } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useCart } from "@/components/ui/Cart";
import ProductServices from "@/components/product/ProductServices";
import ProductHero from "@/components/product/ProductHero";
import RelatedProducts from "@/components/product/RelatedProducts";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ActualBrandSlider from "@/components/ui/ActualBrandSlider";
import { toast } from "@/hooks/use-toast";

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

  const handleAddToCart = (quantity: number, selectedVariantType: string) => {
    if (product) {
      if (quantity < 100) {
        toast({
          title: "Minimal pemesanan 1000 lembar",
          variant: "destructive",
        });
        return;
      }

      const selectedVariant = product.variants?.find(
        (v) => v.type === selectedVariantType
      );

      addToCart(product, quantity, selectedVariantType);
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
            <h1 className="text-3xl font-medium mb-6">Produk tidak ditemukan</h1>
            <p className="text-shop-dark-gray mb-8">
              Kami tidak bisa menemukan produk yang anda cari.
            </p>
            <Button asChild>
              <Link to="/products">
                <ArrowLeftIcon className="mr-2 h-4 w-4" />
                Kembali ke halaman produk
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

        {/* <RelatedProducts product={product} /> */}

        <ActualBrandSlider />

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
