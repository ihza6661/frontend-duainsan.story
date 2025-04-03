
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import CategoryGrid from "@/components/ui/CategoryGrid";
import BestSellers from "@/components/ui/BestSellers";
import Newsletter from "@/components/ui/Newsletter";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <CategoryGrid />
        <BestSellers />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
