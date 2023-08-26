import React, { ReactNode } from "react";
import Image from "next/image";
import P1 from "@/assets/products/p1.png";

interface ProductCard {
  image: string;
  title: string;
  type: string;
  price: string;
}
export default function ProductCard({
  image,
  title,
  type,
  price,
}: ProductCard) {
  return (
    <div className="space-y-2">
      <Image src={image} alt="Product image" className="w-full object-cover" />
      <h2 className="font-semibold text-xl">{title}</h2>
      <span className="font-semibold text-base text-gray-300">{type}</span>
      <p className="font-semibold text-base ">{price}</p>
    </div>
  );
}
