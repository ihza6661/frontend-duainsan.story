import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import payment from "/logo/payment.avif";
import returnIcon from "/logo/return.avif";
import shipping from "/logo/shipping.avif";
import wonderCard from "/logo/wonder-card.avif";

const services = [
  {
    icon: <img src={payment} alt="Payment" className="w-8 h-8" />,
    title: "PAYMENT",
    description: "Credit card, Klarna or PayPal",
  },
  {
    icon: <img src={shipping} alt="Shipping" className="w-8 h-8" />,
    title: "SHIPPING & DELIVERY",
    description: "24h Green delivery",
  },
  {
    icon: <img src={returnIcon} alt="Return" className="w-8 h-8" />,
    title: "FREE RETURN",
    description: "We have free return & exchange",
  },
  {
    icon: <img src={wonderCard} alt="Wonder Card" className="w-8 h-8" />,
    title: "WONDER CARD",
    description: "Special discount club card",
  },
];

const ProductServices = () => {
  return (
    <div className="py-6 px-10">
      {/* Slider for mobile */}
      <div className="block md:hidden w-full">
        <Swiper
  spaceBetween={20}
  slidesPerView={1.2}
  centeredSlides={true}
  pagination={{ clickable: true }}
  autoplay={{ delay: 2500, disableOnInteraction: false }}
  modules={[Autoplay, Pagination]}
>

          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center text-center bg-white py-8">
                <div className="text-black">{service.icon}</div>
                <h3 className="pt-2 text-sm font-normal tracking-widest">{service.title}</h3>
                <p className="text-xs text-black">{service.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Flex layout for desktop */}
      <div className="hidden md:flex flex-wrap justify-around gap-12">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="text-black">{service.icon}</div>
            <h3 className="pt-2 text-sm font-normal tracking-widest">{service.title}</h3>
            <p className="text-xs text-black">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductServices;
