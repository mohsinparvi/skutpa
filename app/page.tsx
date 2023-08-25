import Product from "@/components/home/Product/Product";
import Feature from "@/components/home/aboutproduct/Feature";
import HeroSection from "@/components/home/hero-section/HeroSection";
import Promotion from "@/components/home/promotion/promotion";
import NavBar from "@/components/navbar/NavBar";

export default function Home() {
  return (
    <div className="">
      <div className="max-w-[1200px] mx-auto space-y-10">
        <div>
          <NavBar />
        </div>
        <div>
          <HeroSection />
        </div>
        <div>
          <Promotion />
        </div>
        <div>
          <Product />
        </div>
        <div>
          <Feature />
        </div>
      </div>
    </div>
  );
}
