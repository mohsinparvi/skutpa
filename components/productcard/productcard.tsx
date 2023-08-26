import React, { ReactNode } from "react";
import Image from "next/image";
import P1 from "@/assets/products/p1.png";
import Link from "next/link";

interface ProductCard {
  image: ReactNode;
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
    <Link href={"productorder"} className="space-y-2">
      {image}
      <h2 className="font-semibold text-xl">{title}</h2>
      <span className="font-semibold text-base text-gray-300">{type}</span>
      <p className="font-semibold text-base ">{price}</p>
    </Link>
  );
}
