import HeroSection from "@/components/home/HeroSection";
import NavBar from "@/components/navbar/NavBar";
import { client } from "@/lib/SanityClient";
import Image from "next/image";

export default async function Home() {
  return (
    <div>
      <div className="max-w-[1100px] mx-auto">
        <NavBar />
        <HeroSection />
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
