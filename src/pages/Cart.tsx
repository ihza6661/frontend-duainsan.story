import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/hooks/useCart";  ;
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Trash2, Loader2, ShoppingCart } from "lucide-react";
import { useDebouncedCallback } from "use-debounce";
import { formatRupiah } from "@/lib/utils"; // Import utilitas
import { CartItem } from "@/components/CartItem"; // Import komponen baru

export default function CartPage() {
  const { cart, isLoading, updateQuantity, removeItem, clearCart, isMutating } =
    useCart();
  const navigate = useNavigate();

  const debouncedUpdateQuantity = useDebouncedCallback(updateQuantity, 500);

  if (isLoading) {
    return (
      <div className="container mt-20 mx-auto text-center py-20">
        <Loader2 className="h-12 w-12 animate-spin mx-auto text-gray-400" />
        <p className="mt-4 text-lg">Memuat Keranjang Anda...</p>
      </div>
    );
  }

  if (!cart || cart.items.length === 0) {
    return (
      <div className="container mt-20 mx-auto text-center py-20">
        <ShoppingCart className="h-20 w-20 mx-auto text-gray-300" />
        <h1 className="text-3xl font-semibold mt-4">Keranjang Anda Kosong</h1>
        <p className="text-gray-500 mt-2">
          Jelajahi produk kami dan temukan produk yang Anda sukai!
        </p>
        <Button asChild className="mt-6">
          <Link to="/products">Mulai Belanja</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mt-20 mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Keranjang Belanja Anda</h1>
        <Button variant="outline" onClick={clearCart} disabled={isMutating}>
          <Trash2 className="w-4 h-4 mr-2" />
          Kosongkan Keranjang
        </Button>
      </div>

      <div
        className={`grid grid-cols-1 lg:grid-cols-3 gap-8 relative ${isMutating ? "opacity-50 pointer-events-none" : ""}`}
      >
        {/* Kolom Kiri: Daftar Item */}
        <div className="lg:col-span-2 space-y-4">
          {cart.items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onUpdateQuantity={debouncedUpdateQuantity}
              onRemoveItem={removeItem}
            />
          ))}
        </div>

        {/* Kolom Kanan: Ringkasan Belanja */}
        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle>Ringkasan Belanja</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  {/* Gunakan fungsi formatRupiah */}
                  <span>{formatRupiah(cart.subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Pengiriman</span>
                  <span>Akan dihitung saat checkout</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    {/* Gunakan fungsi formatRupiah */}
                    <span>{formatRupiah(cart.subtotal)}</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                onClick={() => navigate("/checkout")}
                className="w-full"
                disabled={isMutating}
              >
                Lanjut ke Checkout
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

