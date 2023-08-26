import P4 from "@/assets/products/p4.png";

import P8 from "@/assets/products/p8.png";

import P11 from "@/assets/products/p11.png";
import Image from "next/image";

export const productData = [
  {
    productId: Math.random().toString(10),
    title: "Flex Sweatpants    ",
    image: (
      <Image src={P4} alt="Product image" className="w-full object-cover" />
    ),
    type: "Pants",
    price: "$175",
  },

  {
    productId: Math.random().toString(10),
    title: "Flex Push Button Bomber",
    image: (
      <Image src={P8} alt="Product image" className="w-full object-cover" />
    ),
    type: "Jacket",
    price: "$225",
  },

  {
    productId: Math.random().toString(10),
    title: "Raglan Sweatshirt ",
    image: (
      <Image src={P11} alt="Product image" className="w-full object-cover" />
    ),
    type: "Sweater",
    price: "$195",
  },
];
