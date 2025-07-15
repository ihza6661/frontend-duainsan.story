import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-10 bg-[#f7f7f7]">
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-normal mb-3 uppercase tracking-wider">
            Shop by Collection
          </h2>
          <p className="text-shop-dark-gray mb-2">
            Discover the Latest Design Collections and Shop with Ease.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
