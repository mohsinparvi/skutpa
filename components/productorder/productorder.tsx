import React from "react";
import P12 from "@/assets/products/p12.png";
import Image from "next/image";
export default function ProductOrder() {
  return (
    <>
      <div className="flex  gap-4 ">
        <div className="w-1/6">
          <Image src={P12} alt="Product image" />
        </div>
        <div className="w-10/12  flex lg:flex-row xs:flex-col items-center gap-2">
          <Image src={P12} alt="Product image" className="w-3/5" />

          <div className="space-y-10">
            <h2 className="font-semibold text-xl">Brushed Raglan Sweatshirt</h2>
            <span className="font-semibold text-base text-gray-300">
              Sweater
            </span>
            <h3 className="uppercase font-bold">Select size</h3>
            <div className="flex gap-x-4">
              <p className="rounded-full flex justify-center items-center cursor-pointer w-8 h-8 text-center hover:bg-gray-300">
                XS
              </p>
              <p className="rounded-full flex justify-center items-center cursor-pointer w-8 h-8 hover:bg-gray-300 hover:shadow-md">
                S
              </p>
              <p className="rounded-full flex justify-center items-center cursor-pointer w-8 h-8 hover:bg-gray-300">
                M
              </p>
              <p className="rounded-full flex justify-center items-center cursor-pointer w-8 h-8 hover:bg-gray-300">
                L
              </p>
              <p className="rounded-full flex justify-center items-center cursor-pointer w-8 h-8 hover:bg-gray-300">
                XL
              </p>
            </div>
            <div className="flex gap-x-3 items-center">
              <h3 className="font-bold">Quantity:</h3>
              <span className="flex justify-center items-center h-8 w-8 rounded-full bg-gray-300 text-lg">
                -
              </span>
              <p>3</p>
              <span className="flex justify-center items-center h-8 w-8 rounded-full bg-gray-300 text-lg">
                +
              </span>
            </div>
            <p className="font-semibold text-base ">$195</p>
            <button className="w-full bg-gray-300 p-4"> Add to Card</button>
          </div>
        </div>
      </div>
      <div className="my-44 relative bg-gray-100">
        {/* <div className="relative"> */}
        {/* <p className="absolute font-extrabold text-9xl text-gray-100 -top-14 z-10">
          Overview
        </p> */}
        <p className="z-10 opacity-10 text-center font-extrabold g:text-9xl sm:text-8xl xs:text-5xl  absolute -top-2">
          Overview
        </p>
        {/* </div> */}
        <div className="space-y-10 p-4">
          <h4 className="font-bold text-4xl">Product Information</h4>
          <hr />
          <div className="flex justify-between gap-8">
            <h2 className="w-2/5 font-bold">PRODUCT DETAILS</h2>
            <p className="w-3/5 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="flex justify-between gap-8">
            <h2 className="w-2/5 font-bold">PRODUCT CARE</h2>
            <ul className="w-3/5 space-y-2">
              <li className="font-semibold">Hand wash using cold water.</li>
              <li className="font-semibold">Do not using bleach.</li>
              <li className="font-semibold">Hang it to dry.</li>
              <li className="font-semibold">Iron on low temperature.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
