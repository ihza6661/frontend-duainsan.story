// src/services/productService.ts (Sesuai API v1.1.0)

import apiClient from "@/lib/api";

// =================================================================================
// --- DEFINISI TIPE DATA (SESUAI DOKUMENTASI OPENAPI v1.1.0) ---
// =================================================================================

/**
 * Mendefinisikan struktur data untuk Kategori Produk.
 * ✅ BENAR: `image` telah ditambahkan.
 */
export interface ProductCategory {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  image: string | null;
}

/**
 * Mendefinisikan struktur data untuk Gambar Produk.
 * ✅ BENAR: Properti sekarang adalah `image`.
 */
export interface ProductImage {
  id: number;
  image: string; // Sebelumnya `url` atau `image_url`
  alt_text: string | null;
  is_featured: boolean;
}

/**
 * [BARU] Mendefinisikan nilai atribut tunggal.
 * Contoh: "Merah", atau "Ukuran M".
 */
export interface AttributeValue {
  id: number;
  value: string;
}

/**
 * [BARU] Mendefinisikan Varian Produk yang spesifik.
 * Sebuah varian adalah kombinasi dari beberapa pilihan (AttributeValue)
 * dan memiliki harga serta stok sendiri.
 */
export interface ProductVariant {
  id: number;
  price: number;
  stock: number;
  options: AttributeValue[];
  images: ProductImage[];
}

// Biar link dari sidebar bisa bekerja
interface FetchProductsParams {
  category?: string;
  search?: string;
  sort?: string; // Add this line
}


/**
 * Mendefinisikan struktur data untuk Tambahan (Add-On) Produk.
 * (Tidak ada perubahan di sini)
 */
export interface AddOn {
  id: number;
  name: string;
  price: number;
}

/**
 * Mendefinisikan struktur data dasar untuk sebuah Produk.
 * ✅ BENAR: `featured_image` dibuat opsional.
 */
export interface Product {
  id: number;
  name: string;
  description: string | null;
  base_price: number;
  min_order_quantity: number;
  is_active: boolean;
  featured_image?: ProductImage; // Dibuat opsional
}

/**
 * [PERUBAHAN BESAR] Mendefinisikan struktur data LENGKAP untuk sebuah Produk.
 * Menggunakan sistem `variants` dan `grouped_options` yang baru.
 */
export interface ProductDetail extends Product {
  category: ProductCategory;
  add_ons: AddOn[];
  grouped_options: Record<string, AttributeValue[]>; // Contoh: { "Warna": [...], "Ukuran": [...] }
  variants: ProductVariant[];
}

// --- Tipe Data untuk Pembungkus Respons API (Tidak ada perubahan) ---
export interface PaginationMeta {
    current_page: number;
    from: number;
    last_page: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
}

export interface PaginatedProducts {
  data: Product[];
  links: Record<string, string | null>;
  meta: PaginationMeta;
}

interface ProductDetailResponse {
  data: ProductDetail;
}

/**
 * Mengambil daftar semua kategori produk dari API.
 */
export const fetchCategories = async (): Promise<ProductCategory[]> => {
  const response = await apiClient.get<{ data: ProductCategory[] }>("/customer/product-categories");
  return response.data.data;
};

interface FetchProductsParams {
  category?: string;
  search?: string;
}

/**
 * Mengambil daftar produk dari API, mendukung filter dan paginasi.
 */
export const fetchProducts = async (params: FetchProductsParams): Promise<PaginatedProducts> => {
  const response = await apiClient.get<PaginatedProducts>("/customer/products", {
    params: params,
  });
  return response.data;
};

/**
 * Mengambil data detail lengkap untuk satu produk berdasarkan ID-nya.
 */
export const fetchProductById = async (productId: string): Promise<ProductDetail> => {
  const response = await apiClient.get<ProductDetailResponse>(`/customer/products/${productId}`);
  return response.data.data;
};