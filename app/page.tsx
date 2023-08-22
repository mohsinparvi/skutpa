import HeroSection from "@/components/home/HeroSection";
import NavBar from "@/components/navbar/NavBar";
import { client } from "@/lib/SanityClient";
import Image from "next/image";
export const getProductData = async () => {
  const res = await client.fetch(`*[_type=="product"]{
    _id,
    title,
    description,

  }`);
  return res;
};
interface IProduct {
  id: string;
  title: string;
  description: string;
}
export default async function Home() {
  const data: IProduct[] = await getProductData();
  console.log("Sanity Product data:", data);
  return (
    <div className="mx-16">
      {/* {data.map((item, index) => (
        <div key={item.id}>
          title:{item.title}
          discription:{item.description}
        </div>
      ))} */}
      <NavBar />
      <HeroSection />
    </div>
  );
}
