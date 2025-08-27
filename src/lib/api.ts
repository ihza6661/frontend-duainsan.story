// src/lib/api.ts

import axios from "axios";

// ===================================================================
// --- Manajemen Session ID In-Memory ---
// ===================================================================

// 1. Baca session ID dari localStorage HANYA SEKALI saat modul ini dimuat.
let inMemoryCartSessionId: string | null = localStorage.getItem('cartSessionId');

// 2. Buat helper yang bekerja dengan variabel in-memory.
const getCartSessionId = (): string | null => {
  return inMemoryCartSessionId;
};

// 3. Saat menyimpan, update variabel in-memory DAN localStorage.
const setCartSessionId = (id: string) => {
  inMemoryCartSessionId = id;
  localStorage.setItem('cartSessionId', id);
};
// ===================================================================

const getAuthToken = () => localStorage.getItem("authToken");

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: true,
});


// --- Request Interceptor ---
apiClient.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else if (config.url?.includes('/cart')) {
      // Sekarang membaca dari variabel in-memory yang cepat
      const sessionId = getCartSessionId();
      if (sessionId) {
        config.headers['X-Session-ID'] = sessionId;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// --- Response Interceptor ---
apiClient.interceptors.response.use(
  (response) => {
    const newSessionId = response.headers['x-session-id'];
    // Selalu gunakan helper untuk menyimpan, yang akan mengupdate in-memory dan localStorage
    if (newSessionId && newSessionId !== getCartSessionId()) {
      setCartSessionId(newSessionId);
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;