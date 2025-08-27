// src/pages/ProductDetail.tsx (Updated & Final)

import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

// --- Imports from Service Layer & Contexts ---
import { fetchProductById } from "@/services/productService";
import type { ProductDetail as ProductDetailType } from "@/services/productService";
import { AddToCartPayload, useCart } from "@/components/ui/Cart";
import { toast } from "@/hooks/use-toast";

// --- Import UI & Layout Components ---
import { ArrowLeftIcon } from "lucide-react";
import ActualBrandSlider from "@/components/ui/ActualBrandSlider";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ProductHero from "@/components/product/ProductHero";
import ProductServices from "@/components/product/ProductServices";
import RelatedProducts from "@/components/product/RelatedProducts";
import { log } from "console";
// import ProductDetailSkeleton from "@/components/ui/ProductDetailSkeleton"; // Ensure this import is active

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();

  // Fetch product data from the API using React Query
  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useQuery<ProductDetailType>({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id!),
    enabled: !!id,
    retry: false,
  });

  // Handler to add the product to the cart, passed down to ProductHero
  const handleAddToCart = (payload: AddToCartPayload) => {
    if (!product) return;

    if (payload.quantity < product.min_order_quantity) {
      toast({
        title: `Minimal pemesanan ${product.min_order_quantity} lembar`,
        variant: "destructive",
      });
      return;
    }

    addToCart(payload, {
      onSuccess: () => {
        // Optional: You can add success actions here, e.g., opening a cart drawer
      },
    });
  };

  // ================= RENDER LOGIC =================

  // 1. Display skeleton while data is loading
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-8">
          {/* <ProductDetailSkeleton /> */}
        </main>
        <Footer />
      </div>
    );
  }

  // 2. Display error message if fetching fails or product is not found
  if (isError || !product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow py-16">
          <div className="container text-center">
            <h1 className="text-3xl font-medium mb-6">
              Produk Tidak Ditemukan
            </h1>
            <p className="text-shop-dark-gray mb-8">
              {error instanceof Error
                ? error.message
                : "Kami tidak dapat menemukan produk yang Anda cari."}
            </p>
            <Button asChild>
              <Link to="/products">
                <ArrowLeftIcon className="mr-2 h-4 w-4" />
                Kembali ke Halaman Produk
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // 3. Display the main content if data is loaded successfully
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <ProductHero product={product} onAddToCart={handleAddToCart} />
        <ProductServices />
        <RelatedProducts
          categorySlug={product.category.slug}
          currentProductId={product.id}
        />
        <div className=" py-4 px-4 sm:px-8">
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

        <ActualBrandSlider />
      </main>
    </div>
  );
};

export default ProductDetail;
