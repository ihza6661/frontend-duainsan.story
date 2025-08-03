import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Trash2Icon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useCart } from "@/components/ui/Cart";
import InvitationNameModal from "../components/modal/InvitationForm";

interface CartItem {
  product: any;
  quantity: number;
  selectedVariant: string; // ✅ new
}

export default function Cart() {
  const { cartItems, updateQuantity, removeItem, clearCart } = useCart();

  const total = cartItems.reduce((sum, item) => {
    const variant = item.product.variants?.find(
      (v) => v.type === item.selectedVariant
    );
    const price = variant?.price ?? item.product.price ?? 0;
    return sum + price * item.quantity;
  }, 0);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="container mt-20 mx-auto px-4 py-8">
      <h1 className="text-xl py-2">Keranjang Belanja Anda</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {cartItems.map((item) => (
            <Card key={item.product.id} className="mb-4">
              <CardContent className="flex items-start gap-4 p-4">
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.product.name}</h3>
                  <p className="text-gray-600">
                    Rp{" "}
                    {(
                      item.product.variants?.find(
                        (v) => v.type === item.selectedVariant
                      )?.price ??
                      item.product.price ??
                      0
                    ).toLocaleString("id-ID")}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-1 flex-1 max-w-[200px]">
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-8 h-8"
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                      >
                        -
                      </Button>
                      <Input
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(
                            item.product.id,
                            parseInt(e.target.value) || 1
                          )
                        }
                        className="text-center w-full h-8"
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-8 h-8"
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                      >
                        +
                      </Button>
                    </div>

                    {/* Delete Button */}
                    <Button
                      variant="outline"
                      size="default"
                      onClick={() => removeItem(Number(item.product.id))}
                      className="ml-auto sm:ml-0 sm:mt-0 mt-2 w-full sm:w-auto"
                    >
                      Hapus
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Ringkasan Belanja</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>Rp {total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Pengiriman</span>
                  <span>Dihitung Nanti</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>Rp {total.toLocaleString()}</span>
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={clearCart}
                    className="my-2 self-start flex items-center gap-2 rounded"
                  >
                    <Trash2Icon className="w-4 h-4" />
                    Kosongkan Keranjang
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={openModal} className="w-full">
                Lanjut ke Pembayaran
              </Button>
              {/* Modal opens conditionally */}
              <InvitationNameModal isOpen={showModal} onClose={closeModal} />
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
