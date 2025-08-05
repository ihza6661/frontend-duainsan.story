import apiClient from "@/lib/api";

// =================================================================================
// --- DEFINISI TIPE DATA (SESUAI DOKUMENTASI OPENAPI) ---
// =================================================================================

/**
 * Mendefinisikan struktur data untuk Kategori Produk.
 */
export interface ProductCategory {
  id: number;
  name: string;
  slug: string;
  description: string | null;
}

/**
 * Mendefinisikan struktur data untuk Gambar Produk.
 */
export interface ProductImage {
  id: number;
  url: string;
  alt_text: string | null;
  is_featured: boolean;
}

/**
 * Mendefinisikan struktur data untuk Opsi Produk.
 * Contoh: Ukuran (Besar, Kecil), Warna (Merah, Biru).
 * Opsi ini dapat menyesuaikan harga dasar produk.
 */
export interface ProductOption {
  id: number;
  price_adjustment: number; // Nilai bisa positif atau negatif
  value: {
    id: number;
    value: string; // Misal: "Kecil", "Besar"
  };
}

/**
 * Mendefinisikan struktur data untuk Tambahan (Add-On) Produk.
 * Contoh: Denah Lokasi, Tali Rami.
 * Tambahan ini memiliki harga sendiri.
 */
export interface AddOn {
  id: number;
  name: string;
  price: number;
}

/**
 * Mendefinisikan struktur data dasar untuk sebuah Produk.
 * Ini adalah data yang biasanya ditampilkan di halaman daftar produk.
 */
export interface Product {
  id: number;
  name: string;
  description: string | null;
  base_price: number;
  min_order_quantity: number;
  is_active: boolean;
  featured_image: ProductImage;
}

/**
 * Mendefinisikan struktur data LENGKAP untuk sebuah Produk.
 * Tipe ini menggabungkan tipe `Product` dasar dengan semua relasi detailnya.
 * Digunakan di halaman detail produk.
 */
export interface ProductDetail extends Product {
  category: ProductCategory;
  images: ProductImage[];   // Galeri semua gambar produk
  options: ProductOption[]; // Daftar semua opsi yang tersedia
  add_ons: AddOn[];         // Daftar semua tambahan yang tersedia
}


// --- Tipe Data untuk Pembungkus Respons API ---

/**
 * Tipe untuk respons API yang berisi daftar produk dengan paginasi.
 */
export interface PaginatedProducts {
  data: Product[]; // Array dari produk dasar
  links: Record<string, string | null>;
  meta: Record<string, any>;
}

/**
 * Tipe untuk respons API yang berisi satu detail produk.
 */
interface ProductDetailResponse {
    data: ProductDetail;
}


// =================================================================================
// --- FUNGSI-FUNGSI UNTUK MENGAMBIL DATA DARI API ---
// =================================================================================

/**
 * Mengambil daftar semua kategori produk dari API.
 * Digunakan untuk filter di halaman produk.
 * @returns Promise yang resolve dengan array ProductCategory.
 */
export const fetchCategories = async (): Promise<ProductCategory[]> => {
  const response = await apiClient.get<{ data: ProductCategory[] }>("/customer/product-categories");
  return response.data.data;
};

// Interface untuk parameter fungsi fetchProducts
interface FetchProductsParams {
  category?: string; // slug dari kategori
  search?: string;
  // Anda bisa menambahkan parameter lain di sini jika backend mendukung,
  // seperti 'sort', 'page', dll.
}

/**
 * Mengambil daftar produk dari API, mendukung filter dan paginasi.
 * @param params - Objek yang berisi parameter query (misal: { category: 'undangan-pernikahan' }).
 * @returns Promise yang resolve dengan objek PaginatedProducts.
 */
export const fetchProducts = async (params: FetchProductsParams): Promise<PaginatedProducts> => {
  const response = await apiClient.get<PaginatedProducts>("/customer/products", {
    params: params, // Axios akan mengubah objek ini menjadi query string, misal: ?category=...
  });
  return response.data;
};

/**
 * Mengambil data detail lengkap untuk satu produk berdasarkan ID-nya.
 * @param productId - ID dari produk yang ingin diambil.
 * @returns Promise yang resolve dengan objek ProductDetail.
 */
export const fetchProductById = async (productId: string): Promise<ProductDetail> => {
  const response = await apiClient.get<ProductDetailResponse>(`/customer/products/${productId}`);
  return response.data.data;
};

