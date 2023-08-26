import P1 from "@/assets/products/p1.png";
import P2 from "@/assets/products/p2.png";
import P3 from "@/assets/products/p3.png";
import P4 from "@/assets/products/p4.png";
import P5 from "@/assets/products/p5.png";
import P6 from "@/assets/products/p6.png";
import P7 from "@/assets/products/p7.png";
import P8 from "@/assets/products/p8.png";
import P9 from "@/assets/products/p9.png";
import P10 from "@/assets/products/p10.png";
import P11 from "@/assets/products/p11.png";
import Image from "next/image";

export const productData = [
  {
    productId: Math.random().toString(10),
    title: "Brushed Raglan Sweatshirt",
    image: (
      <Image src={P1} alt="Product image" className="w-full object-cover" />
    ),
    type: "Sweater",
    price: "$195",
  },
  {
    productId: Math.random().toString(10),
    title: "Cameryn Sash Tie Dress",
    image: (
      <Image src={P2} alt="Product image" className="w-full object-cover" />
    ),
    type: "Dress",
    price: "$545",
  },
  {
    productId: Math.random().toString(10),
    title: "Flex Sweatshirt",
    image: (
      <Image src={P3} alt="Product image" className="w-full object-cover" />
    ),
    type: "Sweater",
    price: "$175",
  },
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
    title: "Pink Fleece Sweatpants",
    image: (
      <Image src={P5} alt="Product image" className="w-full object-cover" />
    ),
    type: "Pants",
    price: "$195",
  },
  {
    productId: Math.random().toString(10),
    title: "Lite Sweatpants",
    image: (
      <Image src={P6} alt="Product image" className="w-full object-cover" />
    ),
    type: "Pants",
    price: "$150",
  },
  {
    productId: Math.random().toString(10),
    title: "Imperial Alpaca Hoodie",
    image: (
      <Image src={P7} alt="Product image" className="w-full object-cover" />
    ),
    type: "Jacket",
    price: "$545",
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
    title: "Muscle Tank",
    image: (
      <Image src={P9} alt="Product image" className="w-full object-cover" />
    ),
    type: "T Shirts",
    price: "$75",
  },
  {
    productId: Math.random().toString(10),
    title: "Brushed Bomber ",
    image: (
      <Image src={P10} alt="Product image" className="w-full object-cover" />
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
