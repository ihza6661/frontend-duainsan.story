// src/pages/Products.tsx (Refactored)

import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts, fetchCategories } from "@/services/productService";
import ProductCard from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/button";
import ProductCardSkeleton from "@/components/ui/ProductCardSkeleton"; // Komponen skeleton untuk loading

const Products = () => {
  const { category: categorySlugFromUrl } = useParams<{ category?: string }>();
  const navigate = useNavigate();

  // State untuk interaksi pengguna di halaman ini
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(categorySlugFromUrl);
  // const [sortOption, setSortOption] = useState<string>("default"); // Jika backend mendukung sorting

  // 1. Fetching Kategori menggunakan React Query
  const { data: categories, isLoading: isLoadingCategories } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  // 2. Fetching Produk menggunakan React Query
  // queryKey akan menyertakan filter. Jika filter berubah, React Query otomatis refetch.
  const { data: paginatedProducts, isLoading, isError, error } = useQuery({
    queryKey: ['products', { category: selectedCategory }],
    queryFn: () => fetchProducts({ category: selectedCategory }),
  });

  const products = paginatedProducts?.data || [];

  const handleCategoryChange = (categorySlug: string | undefined) => {
    setSelectedCategory(categorySlug);
    // Update URL tanpa reload halaman untuk UX yang lebih baik
    if (categorySlug) {
      navigate(`/products/category/${categorySlug}`);
    } else {
      navigate('/products');
    }
  };

  if (isError) {
    return <div className="text-center py-20 text-red-500">Terjadi kesalahan: {error.message}</div>;
  }
  
  const activeCategory = categories?.find(cat => cat.slug === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col pt-16">
      <main className="flex-grow py-8">
        <div className="container">
          <h1 className="text-3xl font-medium mb-8">
             {activeCategory ? activeCategory.name : "Semua Produk"}
          </h1>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* --- Sisi Kiri: Filter Kategori --- */}
            <div className="lg:w-1/4">
              <div className="bg-white p-6 rounded-lg border border-shop-medium-gray mb-6">
                <h2 className="text-lg font-medium mb-4">Kategori</h2>
                <div className="space-y-2">
                  <Button
                    variant={!selectedCategory ? "default" : "ghost"}
                    onClick={() => handleCategoryChange(undefined)}
                    // ... (className sama seperti di bawah)
                  >
                    Semua Produk
                  </Button>
                  {isLoadingCategories ? (
                    <p>Loading kategori...</p>
                  ) : (
                    categories?.map((cat) => (
                      <Button
                        key={cat.id}
                        variant={selectedCategory === cat.slug ? "default" : "ghost"}
                        onClick={() => handleCategoryChange(cat.slug)}
                         // ... (className sama seperti kode asli Anda)
                      >
                        {cat.name}
                      </Button>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* --- Sisi Kanan: Daftar Produk --- */}
            <div className="lg:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <p className="text-shop-dark-gray">
                  {/* Menampilkan jumlah produk dari data paginasi */}
                  Menampilkan {paginatedProducts?.meta?.total || 0} produk
                </p>
                {/* Opsi sorting bisa ditambahkan kembali jika backend mendukung */}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {isLoading ? (
                  // 3. Tampilkan Skeleton saat loading
                  Array.from({ length: 6 }).map((_, index) => <ProductCardSkeleton key={index} />)
                ) : products.length > 0 ? (
                  products.map((product) => (
                    <div key={product.id} className="animate-fade-in">
                      <ProductCard product={product} />
                    </div>
                  ))
                ) : (
                  // Tampilan jika tidak ada produk
                  <div className="col-span-full py-12 text-center">
                    <p className="text-lg text-shop-dark-gray">Produk tidak ditemukan.</p>
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
