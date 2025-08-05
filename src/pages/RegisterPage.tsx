// src/pages/RegisterPage.tsx (Lengkap dan Berkomentar)

import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { useRegister } from "../hooks/useRegister"; // Mengimpor custom hook
import type { RegisterPayload } from "../services/authService"; // Mengimpor tipe untuk konsistensi

const RegisterPage = () => {
  // State untuk mengelola data dari form. State ini tetap di komponen karena bersifat lokal untuk UI.
  const [formData, setFormData] = useState<RegisterPayload>({
    full_name: "",
    email: "",
    password: "",
    password_confirmation: "",
    phone_number: "",
  });
  
  // Memanggil custom hook `useRegister` untuk mendapatkan semua state dan fungsi yang dibutuhkan.
  // Ini adalah inti dari pemisahan logika.
  const { isLoading, error, validationErrors, successMessage, performRegister } = useRegister();
  
  // State khusus untuk error yang divalidasi di sisi klien (sebelum dikirim ke server).
  const [clientError, setClientError] = useState<string | null>(null);

  // Handler untuk memperbarui state formData setiap kali ada perubahan pada input.
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handler untuk submit form. Fungsinya menjadi sangat sederhana.
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault(); // Mencegah refresh halaman.
    setClientError(null); // Reset error dari validasi klien sebelumnya.

    // Contoh validasi di sisi klien sebelum memanggil API.
    if (formData.password !== formData.password_confirmation) {
      setClientError("Password dan konfirmasi password tidak cocok.");
      return; // Hentikan proses jika tidak cocok.
    }

    // Mendelegasikan seluruh proses registrasi ke fungsi dari hook.
    await performRegister(formData);
  };
  
  // `useEffect` ini dijalankan setiap kali `successMessage` berubah.
  // Tujuannya untuk membersihkan form secara otomatis setelah registrasi berhasil.
  useEffect(() => {
    if (successMessage) {
      setFormData({
        full_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        phone_number: "",
      });
    }
  }, [successMessage]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-sans">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg"
        noValidate // Mencegah validasi HTML5 bawaan browser agar kita bisa kontrol penuh.
      >
        <h2 className="text-3xl font-bold text-center text-gray-800">Buat Akun Baru</h2>
        
        {/* Blok untuk menampilkan pesan sukses */}
        {successMessage && <div className="p-3 text-sm text-center text-green-800 bg-green-100 rounded-md">{successMessage}</div>}

        {/* Blok untuk menampilkan pesan error umum (dari server atau network) */}
        {error && <div className="p-3 text-sm text-center text-red-800 bg-red-100 rounded-md">{error}</div>}
        
        {/* Blok untuk menampilkan error validasi dari klien */}
        {clientError && <div className="p-3 text-sm text-center text-red-800 bg-red-100 rounded-md">{clientError}</div>}

        {/* Input Nama Lengkap */}
        <div className="space-y-1">
          <label htmlFor="full_name" className="text-sm font-medium text-gray-700">Nama Lengkap</label>
          <input id="full_name" type="text" name="full_name" placeholder="Masukkan nama lengkap Anda" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition" value={formData.full_name} onChange={handleChange} />
          {validationErrors?.full_name && <p className="text-red-600 text-xs mt-1">{validationErrors.full_name[0]}</p>}
        </div>

        {/* Input Email */}
        <div className="space-y-1">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
          <input id="email" type="email" name="email" placeholder="contoh@email.com" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition" value={formData.email} onChange={handleChange} />
          {validationErrors?.email && <p className="text-red-600 text-xs mt-1">{validationErrors.email[0]}</p>}
        </div>
        
        {/* Input Password */}
        <div className="space-y-1">
          <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
          <input id="password" type="password" name="password" placeholder="Minimal 8 karakter" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition" value={formData.password} onChange={handleChange} />
          {validationErrors?.password && <p className="text-red-600 text-xs mt-1">{validationErrors.password[0]}</p>}
        </div>

        {/* Input Konfirmasi Password */}
        <div className="space-y-1">
          <label htmlFor="password_confirmation" className="text-sm font-medium text-gray-700">Konfirmasi Password</label>
          <input id="password_confirmation" type="password" name="password_confirmation" placeholder="Ulangi password Anda" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition" value={formData.password_confirmation} onChange={handleChange} />
        </div>

        {/* Input Nomor Telepon */}
        <div className="space-y-1">
            <label htmlFor="phone_number" className="text-sm font-medium text-gray-700">Nomor Telepon <span className="text-gray-500">(Opsional)</span></label>
            <input id="phone_number" type="tel" name="phone_number" placeholder="081234567890" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition" value={formData.phone_number || ""} onChange={handleChange} />
            {validationErrors?.phone_number && <p className="text-red-600 text-xs mt-1">{validationErrors.phone_number[0]}</p>}
        </div>
        
        <button
          type="submit"
          disabled={isLoading} // Tombol dinonaktifkan saat isLoading bernilai true.
          className="w-full bg-blue-600 text-white font-semibold py-2.5 rounded-md hover:bg-blue-700 transition-colors duration-300 disabled:bg-blue-300 disabled:cursor-not-allowed"
        >
          {/* Teks pada tombol berubah sesuai dengan status isLoading. */}
          {isLoading ? "Mendaftar..." : "Daftar"}
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
