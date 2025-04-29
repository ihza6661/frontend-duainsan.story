
import { FaCreditCard, FaTruck, FaUndo, FaGift } from "react-icons/fa";

const services = [
  {
    icon: <FaCreditCard size={40} />,
    title: "PAYMENT",
    description: "Credit card, Klarna or PayPal",
  },
  {
    icon: <FaTruck size={40} />,
    title: "SHIPPING & DELIVERY",
    description: "24h Green delivery",
  },
  {
    icon: <FaUndo size={40} />,
    title: "FREE RETURN",
    description: "We have free return & exchange",
  },
  {
    icon: <FaGift size={40} />,
    title: "WONDER CARD",
    description: "Special discount club card",
  },
];

const ProductServices = () => {
  return (
    <div className="flex flex-wrap justify-around gap-12 py-12">
      {services.map((service, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center max-w-xs"
        >
          <div className="mb-4 text-black">{service.icon}</div>
          <h3 className="text-lg font-semibold tracking-widest">{service.title}</h3>
          <p className="mt-2 text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductServices;
