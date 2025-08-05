// src/lib/api.ts

import axios from "axios";

/**
 * Membuat instance Axios yang akan digunakan di seluruh aplikasi.
 * Ini adalah 'Single Source of Truth' untuk semua konfigurasi terkait API.
 * Dengan pendekatan ini, kita tidak perlu mengulang-ulang konfigurasi
 * seperti base URL atau header di setiap panggilan fetch/axios.
 */
const apiClient = axios.create({
  // Mengambil base URL dari environment variable.
  // Ini adalah best practice agar aplikasi fleksibel untuk environment
  // yang berbeda (development, staging, production).
  // Pastikan Anda memiliki file .env.local di root proyek.
  baseURL: import.meta.env.VITE_API_BASE_URL,
  
  // Header default yang akan dikirim pada setiap request.
  headers: {
    // Memberitahu backend bahwa kita ingin menerima response dalam format JSON.
    "Accept": "application/json",
    // Memberitahu backend bahwa body request yang kita kirim (jika ada) adalah JSON.
    "Content-Type": "application/json",
  },
});

/**
 * Interceptor Request.
 * Ini adalah fungsi 'middleware' yang akan dijalankan oleh Axios
 * SEBELUM setiap request dikirim.
 *
 * Kegunaan utamanya di sini adalah untuk secara dinamis menyisipkan
 * token otorisasi ke dalam header setiap request yang memerlukan autentikasi.
 * Ini menghindarkan kita dari keharusan menambahkan token secara manual.
 */
apiClient.interceptors.request.use(
  (config) => {
    // Mencoba mengambil token dari localStorage.
    // Kita akan menyimpan token di sini setelah pengguna berhasil login.
    const token = localStorage.getItem("authToken");

    // Jika token ditemukan di localStorage...
    if (token) {
      // ...maka tambahkan token tersebut ke header 'Authorization'
      // dengan format "Bearer <token>", sesuai standar (dan skema Sanctum).
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    // Kembalikan objek konfigurasi yang sudah dimodifikasi agar request dapat dilanjutkan.
    return config;
  },
  (error) => {
    // Jika terjadi error pada saat konfigurasi request, reject promise-nya.
    return Promise.reject(error);
  }
);

// Di sini kita juga bisa menambahkan interceptor untuk RESPONSE.
// Contohnya: jika server mengembalikan status 401 (Unauthorized),
// kita bisa secara otomatis menghapus token dan me-redirect pengguna ke halaman login.
// apiClient.interceptors.response.use(...)

// Ekspor instance apiClient yang sudah lengkap dan siap pakai.
export default apiClient;
