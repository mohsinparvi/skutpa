import React from "react";
import skutpa from "@/assets/home/skutpa-logo.png";
import Image from "next/image";
import Link from "next/link";
import search from "@/assets/icons/search.svg";
import ShopingCart from "@/assets/icons/shoping-cart.png";

export default function NavBar() {
  return (
    <div className="flex justify-between items-center ">
      <Image src={skutpa} alt="skutpa logo" className="w-1/12" />
      {/* <ul className="flex gap-4"> */}

      <Link href={"/"} className="font-medium text-base">
        Female
      </Link>
      <Link href={"/"} className="font-medium text-base">
        Male
      </Link>
      <Link href={"/"} className="font-medium text-base">
        Kids
      </Link>
      <Link href={"/"} className="font-medium text-base">
        All Products
      </Link>
      {/* </ul> */}
      {/* <div className="flex gap-4"> */}
      <div className="flex border border-gray-300 rounded-md">
        <Image src={search} alt="search icons" className="w-1/12" />
        <input
          type="text"
          placeholder="What you looking for"
          className="bg-transparent outline-none"
        />
      </div>
      <div className="bg-gray-300 rounded-full p-2">
        <Image src={ShopingCart} alt="Shoping Cart" />
      </div>
      {/* </div> */}
    </div>
  );
}
