import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import Philosophy from "@/components/Philosophy";
import BtoB from "@/components/BtoB";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F3EE]">
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Philosophy />
      <BtoB />
      <Footer />
    </main>
  );
}
