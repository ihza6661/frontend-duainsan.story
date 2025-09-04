import api from '@/lib/api';

/**
 * Mengirimkan data checkout ke server.
 * @param checkoutData Data dari form checkout, harus dalam bentuk FormData.
 * @returns Respon dari server.
 */
export const createOrder = async (checkoutData: FormData) => {
  try {
    const response = await api.post('/checkout', checkoutData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    const orderData = response.data.data;

    return orderData;
  } catch (error) {
    // Biarkan error ditangani oleh pemanggil fungsi ini
    // agar bisa menampilkan notifikasi yang sesuai di UI.
    throw error;
  }
};
