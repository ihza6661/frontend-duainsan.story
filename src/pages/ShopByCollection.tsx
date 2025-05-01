import Hero from "@/components/ui/Hero";
import CategoryGrid from "@/components/ui/CategoryGrid";
import BestSellers from "@/components/ui/BestSellers";
import Newsletter from "@/components/ui/Newsletter";

const ShopByCollection = () => {
  return (
    <div className="min-h-screen flex flex-col pt-16">
      <main className="flex-grow">
        <Hero />
        <CategoryGrid />
        <BestSellers />
        <Newsletter />
      </main>
    </div>
  );
};

export default ShopByCollection;
