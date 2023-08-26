import React from "react";
import product1 from "@/assets/home/products/product-1.png";
import product2 from "@/assets/home/products/product-2.png";
import product3 from "@/assets/home/products/product-3.png";
import Link from "next/link";

import Image from "next/image";

export default function Product() {
  return (
    <div className="my-40">
      <div className="text-center space-y-4">
        <p className="font-bold text-blue-800 uppercase">product</p>
        <h1 className="font-extrabold text-4xl">Our Products Events</h1>
      </div>
      <div className="grid md:grid-cols-3 xs:grid-cols-1 my-14">
        <Link
          href={"productorder"}
          className="hover:scale-110 space-y-1 ease-out duration-700   z-10"
        >
          <Image
            src={product1}
            alt="Product image"
            className="h-full w-full  object-cover"
          />
          <h2 className="font-bold text-xl">Brushed Raglan Sweatshirt</h2>
          <p className="text-base">$195</p>
        </Link>
        <Link
          href={"productorder"}
          className="hover:scale-110 space-y-1 ease-out duration-700 md:block xs:hidden z-20"
        >
          <Image
            src={product2}
            alt="Product image"
            className="h-full w-full  object-cover"
          />
          <h2 className="font-bold text-xl">Cameryn Sash Tie Dress</h2>
          <p className="text-base">$195</p>
        </Link>
        <Link
          href={"productorder"}
          className="hover:scale-110 space-y-1 ease-out duration-700 md:block xs:hidden z-30"
        >
          <Image
            src={product3}
            alt="Product image"
            className="h-full w-full  object-cover"
          />
          <h2 className="font-bold text-xl">Flex Sweatshirt</h2>
          <p className="text-base">$195</p>
        </Link>
      </div>
    </div>
  );
}
