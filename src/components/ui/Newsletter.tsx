
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribed with email:", email);
    setEmail("");
  };
  
  return (
    <section className="py-16 bg-shop-light-gray">
      <div className="container">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-2xl uppercase tracking-wider font-medium mb-3">Join our newsletter</h2>
          <p className="text-shop-dark-gray mb-6">
            Be the first to know about new collections and exclusive offers.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow px-4 py-2 border border-shop-medium-gray focus:outline-none focus:border-black"
              required
            />
            <Button 
              type="submit" 
              className="bg-black hover:bg-black/90 text-white px-6 py-2 rounded-none sm:rounded-r mt-2 sm:mt-0"
            >
              SUBSCRIBE
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
