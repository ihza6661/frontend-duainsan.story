// src/pages/Products.tsx (Refactored & Final)

import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts, fetchCategories } from "@/services/productService";
import type { ProductCategory } from "@/services/productService";
import ProductCard from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/button";
import ProductCardSkeleton from "@/components/ui/ProductCardSkeleton";
import { useState } from "react";

const Products = () => {
  // --- PERBAIKAN: Gunakan parameter URL secara langsung ---
  // Kita tidak lagi menggunakan state lokal untuk menyimpan kategori yang dipilih.
  const { category: categorySlugFromUrl } = useParams<{ category?: string }>();
  const navigate = useNavigate();

  // State lokal sekarang hanya untuk sorting (jika ada)
  const [sortOption, setSortOption] = useState<string>("default");

  const { data: categories, isLoading: isLoadingCategories } = useQuery<
    ProductCategory[]
  >({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  // --- PERBAIKAN: useQuery bergantung langsung pada parameter URL ---
  const {
    data: paginatedProducts,
    isLoading,
    isError,
    error,
  } = useQuery({
    // queryKey sekarang langsung menggunakan `categorySlugFromUrl`
    queryKey: ["products", { category: categorySlugFromUrl, sort: sortOption }],
    queryFn: () =>
      fetchProducts({ category: categorySlugFromUrl, sort: sortOption }),
  });

  const products = paginatedProducts?.data || [];

  // --- PERBAIKAN: handleCategoryChange sekarang mengubah URL ---
  // Mengubah URL akan otomatis memicu useQuery untuk me-fetch data baru.
  const handleCategoryChange = (categorySlug: string | undefined) => {
    if (categorySlug) {
      navigate(`/products/category/${categorySlug}`);
    } else {
      navigate("/products");
    }
  };

  if (isError) {
    return (
      <div className="text-center py-20 text-red-500">
        Terjadi kesalahan: {error?.message}
      </div>
    );
  }

  const activeCategory = categories?.find(
    (cat) => cat.slug === categorySlugFromUrl,
  );

  return (
    <div className="min-h-screen flex flex-col pt-16">
      <main className="flex-grow py-8">
        <div className="container">
          <h1 className="text-3xl font-medium mb-8">
            {activeCategory ? activeCategory.name : "Semua Produk"}
          </h1>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sisi Kiri: Filter Kategori */}
            <div className="lg:w-1/4">
              <div className="bg-white p-6 rounded-lg border border-shop-medium-gray mb-6">
                <h2 className="text-lg font-medium mb-4">Kategori</h2>
                <div className="space-y-2">
                  <Button
                    variant={!categorySlugFromUrl ? "default" : "ghost"}
                    onClick={() => handleCategoryChange(undefined)}
                    className={`w-full justify-start text-left ${!categorySlugFromUrl ? "bg-shop-accent text-white" : ""}`}
                  >
                    Semua Produk
                  </Button>
                  {isLoadingCategories ? (
                    <p>Memuat kategori...</p>
                  ) : isError ? (
                    <p className="text-red-500">Gagal memuat kategori.</p>
                  ) : (
                    categories?.map((cat) => (
                      <Button
                        key={cat.id}
                        variant={
                          categorySlugFromUrl === cat.slug ? "default" : "ghost"
                        }
                        onClick={() => handleCategoryChange(cat.slug)}
                        className={`w-full justify-start text-left ${categorySlugFromUrl === cat.slug ? "bg-shop-accent text-white" : ""}`}
                      >
                        {cat.name}
                      </Button>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* Sisi Kanan: Daftar Produk */}
            <div className="lg:w-3/4">
              {/* ... (bagian sorting & jumlah produk) ... */}
              <div className="flex justify-between items-center mb-6">
                <p className="text-shop-dark-gray">
                  Menampilkan {paginatedProducts?.meta?.total || 0} produk
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {isLoading ? (
                  Array.from({ length: 6 }).map((_, index) => (
                    <ProductCardSkeleton key={index} />
                  ))
                ) : products.length > 0 ? (
                  products.map((product) => (
                    <div key={product.id} className="animate-fade-in">
                      <ProductCard product={product} />
                    </div>
                  ))
                ) : (
                  <div className="col-span-full py-12 text-center">
                    <p className="text-lg text-shop-dark-gray">
                      Produk tidak ditemukan.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Products;

