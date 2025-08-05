// src/context/AuthContext.tsx (Perbaikan Final Sesuai OpenAPI)

import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { User, logoutUser } from '../services/authService'; // Kita masih butuh User dan logoutUser

// --- Definisi Tipe & Konteks (tidak berubah) ---
interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoading: boolean; // Tetap berguna untuk mencegah "kedipan" UI
  login: (newToken: string, newUser: User) => void;
  logout: () => Promise<void>;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// --- Komponen Provider (Logika Baru yang Disederhanakan) ---
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // 1. Inisialisasi state LANGSUNG dari localStorage.
  // Jika ada data user di localStorage, kita anggap dia login.
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem('user');
    try {
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Gagal parse data user dari localStorage", error);
      return null;
    }
  });

  const [token, setToken] = useState<string | null>(localStorage.getItem("authToken"));
  
  // 2. State isLoading sekarang hanya untuk formalitas agar tidak ada kedipan UI awal.
  // Kita set `false` setelah jeda singkat untuk memastikan semua rendering awal selesai.
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Tidak ada lagi validasi API di sini.
    // Kita hanya menandakan bahwa proses loading inisial selesai.
    setIsLoading(false);
  }, []);

  /**
   * Fungsi login. Tugasnya adalah menyimpan data ke localStorage dan state React.
   * Ini menjadi satu-satunya "pintu masuk" untuk memulai sesi.
   */
  const login = (newToken: string, newUser: User) => {
    localStorage.setItem("authToken", newToken);
    localStorage.setItem("user", JSON.stringify(newUser));
    setToken(newToken);
    setUser(newUser);
  };
  
  /**
   * Fungsi logout. Tugasnya memanggil API logout dan membersihkan localStorage & state.
   */
  const logout = async () => {
    setIsLoading(true);
    try {
      // Memanggil API server untuk membatalkan token di sisi backend
      await logoutUser();
    } catch (error) {
      console.error("Gagal logout dari server (mungkin karena token sudah tidak valid), tetap melanjutkan logout di klien.", error);
    } finally {
      // Membersihkan semua data sesi dari sisi klien, apapun yang terjadi
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
      setToken(null);
      setUser(null);
      setIsLoading(false);
      // Arahkan kembali ke halaman login untuk pengalaman pengguna yang jelas
      window.location.href = '/login'; 
    }
  };

  const value = { user, token, isLoading, login, logout };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// --- Hook useAuth (tidak berubah) ---
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth harus digunakan di dalam AuthProvider');
  }
  return context;
};
