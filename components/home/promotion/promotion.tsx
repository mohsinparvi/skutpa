import React from "react";
import promo1 from "@/assets/home/promotion/promo-1.webp";
import promo2 from "@/assets/home/promotion/promo-2.webp";
import promo3 from "@/assets/home/promotion/promo-3.webp";
import Image from "next/image";

export default function Promotion() {
  return (
    <div className="my-40">
      <div className="text-center space-y-4">
        <p className="font-bold text-blue-800 uppercase">promotion</p>
        <h1 className="font-extrabold text-4xl">Our Promotions Events</h1>
      </div>
      <div className="grid  grid-cols-3 gap-x-4 my-8">
        <div className="space-y-4">
          <div className="flex items-center  bg-gray-300 px-8 w-full">
            <div className="">
              <h2 className="font-bold text-2xl">GET UP TO 60%</h2>
              <p className="font-medium text-base">For the summer season</p>
            </div>
            <Image src={promo1} alt="promo image" />
          </div>
          <div className="bg-black flex flex-col justify-center items-center text-white  py-8 space-y-4">
            <h2 className="text-4xl font-extrabold">GET 30% Off</h2>
            <p className="font-semibold text-lg">USE PROMO CODE</p>
            <p className="bg-gray-400 uppercase p-4 rounded-lg w-2/3 text-center">
              dineweekendsales
            </p>
          </div>
        </div>
        <div className="bg-pink-100 flex flex-col justify-center ">
          <div className="space-y-2 p-4">
            <h3>Flex Sweatshirt</h3>
            <div className="flex gap-8 ">
              <p>$100.00</p>
              <p className="font-bold ">$75.00</p>
            </div>
          </div>
          <Image src={promo3} alt="promo image" className="mx-auto mt-3" />
        </div>
        <div className="bg-gray-300 space-y-2">
          <div className="space-y-2 p-4">
            <h3>Flex Sweatshirt</h3>
            <div className="flex gap-8 ">
              <p>$100.00</p>
              <p className="font-bold ">$75.00</p>
            </div>
          </div>
          <Image src={promo2} alt="promo image" className="mx-auto mt-3" />
        </div>
      </div>
    </div>
  );
}
