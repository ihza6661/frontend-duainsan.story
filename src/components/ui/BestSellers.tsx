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
                className="pl-2 md:basis-1/2 lg:basis-1/4"
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
    <Card className="border-none overflow-hidden rounded-none h-full">
      <div className="aspect-[3/4] overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
          />
        </Link>
      </div>
      <CardContent className="px-0 pt-4 pb-6 space-y-2">
        <div className="text-xs uppercase text-gray-500">New</div>
        <h3 className="font-medium text-sm">
          <Link to={`/product/${product.id}`} className="hover:underline">
            {product.name}
          </Link>
        </h3>
        <p className="text-sm font-medium">${product.price.toFixed(2)}</p>
        <div className="flex mt-1 space-x-1">
          {["black", "red", "blue"].map((color) => (
            <span
              key={color}
              className={`w-3 h-3 rounded-full bg-${
                color === "black"
                  ? "black"
                  : color === "red"
                  ? "red-500"
                  : "blue-600"
              }`}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default BestSellers;
