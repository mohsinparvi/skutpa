import React from "react";
import product1 from "@/assets/home/products/product-1.png";
import product2 from "@/assets/home/products/product-2.png";
import product3 from "@/assets/home/products/product-3.png";
import Image from "next/image";

export default function Product() {
  return (
    <div className="my-14">
      <div className="text-center">
        <p className="font-bold text-blue-800 uppercase">product</p>
        <h1 className="font-extrabold text-4xl">Our Products Events</h1>
      </div>
      <div className="grid grid-cols-3 my-14">
        <div className="hover:scale-110 space-y-1 transition-all delay-100">
          <Image
            src={product1}
            alt="Product image"
            className="h-full w-full object-cover"
          />
          <h2 className="font-bold text-xl">Brushed Raglan Sweatshirt</h2>
          <p className="text-base">$195</p>
        </div>
        <div className="hover:scale-110 space-y-1 transition-all delay-100">
          <Image
            src={product2}
            alt="Product image"
            className="h-full w-full object-cover"
          />
          <h2 className="font-bold text-xl">Cameryn Sash Tie Dress</h2>
          <p className="text-base">$195</p>
        </div>
        <div className="hover:scale-110 space-y-1 transition-all delay-100">
          <Image
            src={product3}
            alt="Product image"
            className="h-full w-full object-cover"
          />
          <h2 className="font-bold text-xl">Flex Sweatshirt</h2>
          <p className="text-base">$195</p>
        </div>
      </div>
    </div>
  );
}
