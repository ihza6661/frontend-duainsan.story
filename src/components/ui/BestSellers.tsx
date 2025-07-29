import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Product, products } from "@/lib/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const BestSellers = () => {
  // Filter some products to showcase as bestsellers
  const bestSellerProducts = products.slice(0, 6);

  return (
    <section className="py-10 bg-white">
      <div className="">
        <div className="text-center mb-6">
          <h2 className="text-xl uppercase tracking-wider font-normal">
            our bestseller
          </h2>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="m-2">
            {bestSellerProducts.map((product) => (
              <CarouselItem
                key={product.id}
                className="md:basis-1/2 lg:basis-1/4 h-auto"
              >
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="static mx-2 transform-none" />
            <CarouselNext className="static mx-2 transform-none" />
          </div>
        </Carousel>

        <div className="text-center mt-8">
          <Link
            to="/products"
            className="text-sm uppercase tracking-wider border-b border-black pb-1 hover:opacity-70 transition-opacity"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="flex flex-col h-[550px]">
      {/* Square Image */}
      <div className="w-full aspect-square overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </Link>
      </div>

      {/* Content area — stretch to fill remaining space */}
      <CardContent className="flex flex-col justify-between flex-grow px-4 py-4">
        <div>
          <div className="text-xs uppercase text-gray-500">New</div>
          <h3 className="font-medium text-sm mt-1">
            <Link to={`/product/${product.id}`} className="hover:underline">
              {product.name}
            </Link>
          </h3>
          <p className="text-sm font-medium">
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
              minimumFractionDigits: 0,
            }).format(product.price)}
          </p>
        </div>

        {/* Color dots at bottom */}
        <div className="flex mt-2 space-x-1">
          {["black", "red", "blue"].map((color) => (
            <span
              key={color}
              className={`w-3 h-3 rounded-full ${
                color === "black"
                  ? "bg-black"
                  : color === "red"
                  ? "bg-red-500"
                  : "bg-blue-600"
              }`}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default BestSellers;
