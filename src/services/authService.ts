// src/services/authService.ts

import apiClient from "../lib/api"; // Mengimpor instance Axios terpusat kita.

/**
 * Interface untuk mendefinisikan struktur data (payload)
 * yang dibutuhkan saat mendaftarkan pengguna baru.
 * Diekspor agar bisa digunakan kembali di komponen atau hook.
 */
export interface RegisterPayload {
  full_name: string;
  email: string;
  password: string;
  password_confirmation: string;
  phone_number?: string;
}

/**
 * Interface untuk mendefinisikan struktur data yang diterima dari API
 * setelah registrasi berhasil. Sesuai dengan skema UserResponse di OpenAPI.
 */
interface RegisterResponse {
  message: string;
  data: {
    id: number;
    full_name: string;
    email: string;
    phone_number: string | null;
    role: 'customer' | 'admin';
  };
}

/**
 * Fungsi untuk mengirim permintaan registrasi ke backend.
 * Fungsi ini bersifat 'async' karena panggilan API bersifat asynchronous.
 * * @param data - Objek yang berisi data pengguna baru, sesuai dengan tipe RegisterPayload.
 * @returns Sebuah Promise yang akan resolve dengan data response dari API jika berhasil.
 * Jika gagal, apiClient akan secara otomatis melempar (throw) error.
 */
export const registerUser = async (data: RegisterPayload): Promise<RegisterResponse> => {
  // Menggunakan metode .post() dari apiClient untuk mengirim data ke endpoint '/register'.
  // apiClient sudah memiliki baseURL, jadi kita hanya perlu path relatifnya.
  // Tipe <RegisterResponse> memberikan type-safety untuk data yang diterima.
  const response = await apiClient.post<RegisterResponse>("/register", data);

  // Mengembalikan hanya bagian 'data' dari response Axios.
  return response.data;
};


// login 

/**
 * Interface untuk mendefinisikan struktur data (payload)
 * yang dibutuhkan saat login.
 */
export interface LoginPayload {
  email: string;
  password: string;
}

/**
 * Interface untuk mendefinisikan data Pengguna (User)
 * sesuai skema OpenAPI.
 */
export interface User {
  id: number;
  full_name: string;
  email: string;
  phone_number: string | null;
  role: 'customer' | 'admin';
}

/**
 * Interface untuk mendefinisikan struktur data yang diterima dari API
 * setelah login berhasil. Sesuai skema LoginSuccessResponse di OpenAPI.
 */
interface LoginResponse {
  message: string;
  data: {
    user: User;
    token: string;
  };
}

/**
 * Fungsi untuk mengirim permintaan login ke backend.
 * @param credentials - Objek yang berisi email dan password.
 * @returns Sebuah Promise yang resolve dengan data user dan token jika berhasil.
 */
export const loginUser = async (credentials: LoginPayload): Promise<LoginResponse> => {
  const response = await apiClient.post<LoginResponse>("/login", credentials);
  return response.data;
};


// export const getMyProfile = async (): Promise<User> => {
//   // API ini akan otomatis menggunakan token dari header yang disisipkan oleh interceptor apiClient.
//   const response = await apiClient.get<User>("/user"); 
//   // Berdasarkan banyak API, data user langsung menjadi body response, bukan di dalam { data: ... }
//   return response.data;
// };

/**
 * [BARU & PENTING]
 * Fungsi untuk memanggil endpoint logout di server.
 * Ini akan membatalkan token di sisi server.
 */
export const logoutUser = async (): Promise<{ message: string }> => {
  const response = await apiClient.post("/logout");
  return response.data;
};
