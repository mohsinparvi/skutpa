import React from "react";
import Product from "@/components/home/Product/Product";
import Feature from "@/components/home/aboutproduct/Feature";
import HeroSection from "@/components/home/hero-section/HeroSection";
import Promotion from "@/components/home/promotion/promotion";
import NavBar from "@/components/navbar/NavBar";
import Newsletter from "../../components/home/newsletter/Newsletter";
import Footer from "../../components/home/footer/Footer";
import Navbar from "../navbar/Navbar";
export default function HomePage() {
  return (
    <>
      {/* <div> */}
      {/* <Navbar /> */}
      {/* </div> */}
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
      <div>
        <Newsletter />
      </div>
      {/* <div>
        <Footer />
      </div> */}
    </>
  );
}
