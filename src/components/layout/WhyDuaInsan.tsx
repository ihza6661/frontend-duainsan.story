import { FaHandshake, FaPaintBrush, FaStar, FaLightbulb, FaBoxes, FaHeadset, FaGift, FaGlobe } from "react-icons/fa";

const features = [
  {
    icon: <FaHandshake className="text-shop-gray text-3xl" />,
    title: "Legacy of Trust Since 2015",
    desc: "Pilihan Terbaik di Kota Pontianak. Sejak 2015.",
  },
  {
    icon: <FaPaintBrush className="text-shop-gray text-3xl" />,
    title: "Original Designs, Crafted with Meaning",
    desc: "Desain eksklusif, bukan sekadar undangan. Setiap koleksi di Invitationery diciptakan dari konsep orisinal menggabungkan estetika klasik-modern dalam satu karya penuh makna.",
  },
  {
    icon: <FaStar className="text-shop-gray text-3xl" />,
    title: "Premium Quality, Affordable Beauty",
    desc: "Kualitas premium, harga yang lebih bersahabat. Kami menghadirkan standar tinggi dalam bahan, cetak, dan finishing tanpa membuatmu khawatir soal budget.",
  },
  {
    icon: <FaLightbulb className="text-shop-gray text-3xl" />,
    title: "Tailored to Your Love Story",
    desc: "Kami percaya setiap kisah itu unik. Dari pilihan warna hingga detail kecil, semuanya dirancang untuk mencerminkan siapa kamu dan perjalanan cintamu.",
  },
  {
    icon: <FaBoxes className="text-shop-gray text-3xl" />,
    title: "Low MOQ, High Personalization",
    desc: "Pernikahan intim? Tidak masalah. Bisa pesan mulai dari quantity kecil, tetap dengan personalisasi penuh. Karena yang berarti bukan jumlahnya, tapi ceritanya.",
  },
  {
    icon: <FaHeadset className="text-shop-gray text-3xl" />,
    title: "Seamless Process, Heartfelt Service",
    desc: "Dari konsultasi hingga pengiriman semua dibuat mudah dan nyaman. Tim kami hadir dengan kehangatan, profesionalisme, dan perhatian pada setiap detail.",
  },
  // {
  //   icon: <FaGift className="text-shop-gray text-3xl" />,
  //   title: "From Invitations to Souvenirs, All in One Harmony",
  //   desc: "Undangan & souvenir berterima serasi dalam satu klik. Bersama Souvenery, kami menghadirkan solusi wedding set lengkap, dengan packaging yang selaras dan estetik.",
  // },
  // {
  //   icon: <FaGlobe className="text-shop-gray text-3xl" />,
  //   title: "Delivered Wherever You Are",
  //   desc: "Tak peduli kamu di kota besar atau pelosok daerah, undanganmu akan sampai dengan aman, tepat waktu, dan dalam kondisi sempurna. Didukung layanan pelacakan dan pengemasan rapi untuk kenyamananmu.",
  // },
];

const WhyDuaInsan = () => {
  return (
    <section className=" py-12 px-4 md:px-12 lg:px-24 bg-gray-50">
      <h2 className="text-shop-text text-center text-3xl font-serif italic mb-12">
        Why <span className="">DuaInsan.story</span>?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
        {features.map((feature, index) => (
          <div key={index} className="flex gap-4 items-start">
            <div>{feature.icon}</div>
            <div>
              <h3 className=" font-semibold mb-2">{feature.title}</h3>
              <p className="text-shop-dark-gray text-sm">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyDuaInsan

