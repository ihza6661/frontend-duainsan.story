
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Product, getProductsByCategory, categories } from "@/lib/data";
import ProductCard from "@/components/ui/ProductCard";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const Products = () => {
  const { category } = useParams<{ category?: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>(category || "All");
  const [sortOption, setSortOption] = useState<string>("default");

  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    }

    let filteredProducts = getProductsByCategory(selectedCategory);

    // Apply sorting
    switch (sortOption) {
      case "price-low-high":
        filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
        break;
      case "price-high-low":
        filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
        break;
      case "name-a-z":
        filteredProducts = [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-z-a":
        filteredProducts = [...filteredProducts].sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        // Default sorting (featured first)
        break;
    }

    setProducts(filteredProducts);
  }, [category, selectedCategory, sortOption]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen flex flex-col pt-16">
      <main className="flex-grow py-8">
        <div className="container">
          <h1 className="text-3xl font-medium mb-8">
            {selectedCategory === "All" ? "Semua Produk" : selectedCategory}
          </h1>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters */}
            <div className="lg:w-1/4">
              <div className="bg-white p-6 rounded-lg border border-shop-medium-gray mb-6">
                <h2 className="text-lg font-medium mb-4">Kategori</h2>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <Button
                      key={cat}
                      variant={selectedCategory === cat ? "default" : "ghost"}
                      className={`w-full justify-start text-left ${selectedCategory === cat
                        ? "bg-shop-accent text-white hover:bg-shop-accent/80"
                        : "text-shop-dark-gray hover:text-shop-text hover:bg-shop-light-gray"
                        }`}
                      onClick={() => handleCategoryChange(cat)}
                    >
                      {cat}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Products */}
            <div className="lg:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <p className="text-shop-dark-gray">
                  Menampilkan {products.length} produk
                </p>

                <select
                  className="border border-shop-medium-gray rounded-md px-3 py-2"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="default">Featured</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                  <option value="name-a-z">Name: A to Z</option>
                  <option value="name-z-a">Name: Z to A</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {products.map((product) => (
                  <div key={product.id} className="animate-fade-in">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>

              {products.length === 0 && (
                <div className="py-12 text-center">
                  <p className="text-lg text-shop-dark-gray">
                    No products found for this category.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Products;
