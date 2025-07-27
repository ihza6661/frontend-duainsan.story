import { FaCheckCircle } from "react-icons/fa";

const steps = [
  {
    number: 1,
    title: "Pilih Undangan Favoritmu",
    description:
      "Masuk ke website invitationery.asia dan pilih desain undangan yang paling cocok dengan tema pernikahanmu.",
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
    <div className="w-full bg-[#F9FAFB] py-24 px-4">
      <div className="max-w-4xl mx-auto font-sans">
        <h2 className="text-shop-text text-center text-3xl font-serif italic mb-12">
          Cara <span className="">Memesan</span>?
        </h2>
        <div className="space-y-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="text-shop-dark-gray flex items-start gap-4 p-4 rounded-lg backdrop-blur-md"
            >
              <div className="bg-[#F3F0EA] rounded-full flex items-center justify-center w-10 h-10 font-bold ">
                {step.number}
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                <p className="text-sm text-shop-dark-gray">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderSteps;
