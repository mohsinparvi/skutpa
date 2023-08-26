import React from "react";
import skutpa from "@/assets/home/skutpa-logo.png";
import Image from "next/image";
import Link from "next/link";
import ShopingCart from "@/assets/icons/shoping-cart.png";

export default function NavbarMobile() {
  return (
    <div>
      <Image src={skutpa} alt="skutpa logo" className="w-1/12" />
    </div>
  );
}
