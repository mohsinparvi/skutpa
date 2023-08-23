import Product from "@/components/home/Product/Product";
import HeroSection from "@/components/home/hero-section/HeroSection";
import Promotion from "@/components/home/promotion/promotion";
import NavBar from "@/components/navbar/NavBar";

export default function Home() {
  return (
    <div>
      <div className="max-w-[1100px] mx-auto">
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
      </div>
      {/* {data.map((item, index) => (
        <div key={item.id}>
          title:{item.title}
          discription:{item.description}
        </div>
      ))} */}
    </div>
  );
}
