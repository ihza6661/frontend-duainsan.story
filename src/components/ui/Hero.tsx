
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-slide-up">
            <h1 className="text-4xl lg:text-5xl font-medium mb-4">
              Modern design for modern living
            </h1>
            <p className="text-lg text-shop-dark-gray mb-8 max-w-lg">
              Discover our curated collection of minimal, high-quality products 
              designed to enhance your everyday life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                className="bg-shop-accent hover:bg-shop-accent/90 text-white btn-transition py-6 px-8 rounded-md"
              >
                <Link to="/products">
                  Shop Collection
                </Link>
              </Button>
              
              <Button 
                asChild
                variant="outline" 
                className="border-shop-accent text-shop-accent hover:bg-shop-accent/10 btn-transition py-6 px-8 rounded-md"
              >
                <Link to="/products/category/featured">
                  View Featured
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1511401139252-f158d3209c17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="Modern workspace with minimalist design" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-md hidden md:block">
                <p className="text-shop-accent font-medium">New Collection</p>
                <p className="text-sm text-shop-dark-gray">Discover our latest arrivals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
