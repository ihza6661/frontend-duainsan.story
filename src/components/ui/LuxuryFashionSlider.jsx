import React, { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const slides = [
  {
    image: "/journal/journal1.webp",
    title: "Elegant Evening Wear",
    subtitle: "Experience the Art of Couture",
  },
  {
    image: "/journal/journal2.webp",
    title: "Sophisticated Street Style",
    subtitle: "Urban Elegance Redefined",
  },
  {
    image: "/journal/journal2.webp",
    title: "Timeless Classic",
    subtitle: "Where Tradition Meets Innovation",
  },
];

export default function LuxuryFashionSlider() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: { perView: 2 },
    breakpoints: {
      1024: {
        slides: { perView: 1 }, // On tablet and smaller devices, show 1 slide
      },
      768: {
        slides: { perView: 1 }, // On smaller mobile screens, show 1 slide
        spacing: 10, // Optional: add spacing between slides on mobile
      },
    },
  });

  useEffect(() => {
    if (!instanceRef.current) return;

    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup
  }, [instanceRef]);

  return (
    <div>
      <div ref={sliderRef} className="keen-slider h-[80vh] sm:h-[70vh] md:h-[80vh] lg:h-[100vh] relative">
        {slides.map((slide, idx) => (
          <div key={idx} className="keen-slider__slide relative flex items-center justify-center bg-black">
            <img
              src={slide.image}
              alt={slide.title}
              className="object-cover w-full h-full opacity-70"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
              <h2 className="text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide mb-2">
                {slide.title}
              </h2>
              <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">{slide.subtitle}</p>
            </div>
          </div>
        ))}
       <div className="absolute bottom-0 w-full flex justify-center">
  <button className="bg-black/80 text-white text-lg py-2 px-6 shadow-lg transition w-full sm:w-auto uppercase">
    Check Collection
  </button>
</div>

      </div>
    </div>
  );
}
