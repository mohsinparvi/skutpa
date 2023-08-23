import React from "react";
import ShopingCart from "@/assets/icons/shopping-cart-icon.svg";
import Person from "@/assets/home/header.webp";

import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex items-center my-8 gap-20">
      <div className="w-2/5 space-y-4">
        <p className="bg-blue-300 text-blue-500 rounded-md p-4  font-semibold w-1/4">
          Sale 70%
        </p>
        <h1 className="font-bold text-6xl ">
          An Industrial Take on Streetwear
        </h1>
        <p>
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <button className="flex items-center justify-center bg-slate-300 py-4 rounded-md gap-4 w-2/5">
          <Image src={ShopingCart} alt="Shoping Cart" className="w-1/6" />
          <p>Shopping Cart</p>
        </button>
      </div>
      <div className="w-1/2 bg-pink-100 rounded-full">
        <Image
          src={Person}
          alt="Model image"
          className="relative bottom-8 left-14 w-full h-[150%] "
        />
      </div>
    </div>
  );
}
