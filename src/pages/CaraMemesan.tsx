import { FaCheckCircle } from "react-icons/fa";

const steps = [
  {
    number: 1,
    title: "Pilih Undangan Favoritmu",
    description:
      "Masuk ke website DuaInsan.Story dan pilih desain undangan yang paling cocok dengan tema pernikahanmu.",
  },
  {
    number: 2,
    title: "Booking 30% dari Total Pesanan",
    description:
      "Lakukan pembayaran 30% untuk mengamankan harga dan slot produksi. Booking ini jadi tanda jadi untuk mulai proses.",
  },
  {
    number: 3,
    title: "Isi Data Pengantin",
    description:
      "Sebelum Lanjut ke pembayaran, Anda akan diminta untuk mengisi form data undangan.",
  },
  {
    number: 4,
    title: "Fix Desain & Bayar Sisa 70%",
    description:
      "Setelah kamu setuju dengan desain akhir, CS akan kirim invoice sisa pelunasan. Pesananmu akan masuk ketahap produksi.",
  },
  {
    number: 5,
    title: "Undangan Diproduksi & Dikirim",
    description:
      "Setelah selesai diproduksi, kamu akan dihubungi untuk pelunasan dan pengiriman. Kami juga akan infokan resi pengiriman.",
  },
];

const OrderSteps = () => {
  return (
    <div className="w-full bg-[#F9FAFB] py-32 px-4 sm:px-6 md:px-8">
      <div className="max-w-4xl mx-auto font-sans">
        <h2 className="text-shop-text text-center text-2xl sm:text-3xl lg:text-4xl font-serif italic mb-10">
          Cara <span className="">Memesan</span>?
        </h2>
        <div className="space-y-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex items-start gap-4 p-4 rounded-lg backdrop-blur-md bg-white/60 shadow-sm"
            >
              <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#F3F0EA] flex items-center justify-center font-bold text-shop-text text-sm sm:text-base">
                {step.number}
              </div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-1">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-shop-dark-gray">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderSteps;
