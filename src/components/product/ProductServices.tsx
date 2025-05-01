
import payment from "/logo/payment.avif";
import returnIcon from "/logo/return.avif";
import shipping from "/logo/shipping.avif";
import wonderCard from "/logo/wonder-card.avif";

const services = [
  {
    icon: <img src={payment} alt="Payment" className="w-16 h-16"/>,
    title: "PAYMENT",
    description: "Credit card, Klarna or PayPal",
  },
  {
    icon: <img src={shipping} alt="Shipping" className="w-14 h-14" />,
    title: "SHIPPING & DELIVERY",
    description: "24h Green delivery",
  },
  {
    icon: <img src={returnIcon} alt="Return" className="w-14 h-14"/>,
    title: "FREE RETURN",
    description: "We have free return & exchange",
  },
  {
    icon: <img src={wonderCard} alt="Wonder Card" className="w-14 h-14" />,
    title: "WONDER CARD",
    description: "Special discount club card",
  },
];

const ProductServices = () => {
  return (
    <div className="flex flex-wrap justify-around gap-12 py-12 px-14">
      {services.map((service, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center max-w-xs"
        >
          <div className="mb-4 text-black">{service.icon}</div>
          <h3 className="text-lg font-normal tracking-widest">{service.title}</h3>
          <p className="mt-2 text-black">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductServices;
