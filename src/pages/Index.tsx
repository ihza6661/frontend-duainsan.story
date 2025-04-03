
import Hero from "@/components/ui/Hero";
import FeaturedProducts from "@/components/ui/FeaturedProducts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturedProducts />
        
        {/* Benefits Section */}
        <section className="py-12 bg-shop-light-gray">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-shop-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Quality Materials</h3>
                <p className="text-shop-dark-gray">
                  Premium products crafted with attention to detail and durable materials.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-shop-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="M7 15h0"></path>
                    <path d="M12 15h0"></path>
                    <path d="M17 15h0"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Secure Checkout</h3>
                <p className="text-shop-dark-gray">
                  Fast, easy, and secure payment process with multiple options.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-shop-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Free Returns</h3>
                <p className="text-shop-dark-gray">
                  30-day hassle-free return policy for all purchases.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-16">
          <div className="container max-w-4xl">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-md text-center">
              <h2 className="text-2xl md:text-3xl font-medium mb-4">
                Join our newsletter
              </h2>
              <p className="text-shop-dark-gray mb-6 max-w-lg mx-auto">
                Subscribe to get special offers, free giveaways, and product launches.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 rounded-md border border-shop-medium-gray focus:outline-none focus:ring-2 focus:ring-shop-accent/50"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-shop-accent hover:bg-shop-accent/90 text-white px-6 py-3 rounded-md transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
