import React from "react";
import feature from "@/assets/home/feature/feature.webp";
import Image from "next/image";

export default function Feature() {
  return (
    <div className="my-40">
      <div className="flex lg:justify-end ">
        <h2 className="font-bold text-5xl lg:w-1/3 ">
          Unique and Authentic Vintage Designer Jewellery
        </h2>
      </div>
      <div className="grid lg:grid-cols-2 xs:grid-cols-1 gap-14 my-4">
        <div className="grid grid-cols-2 justify-between items-center relative gap-4 lg:my-0 xs:my-10 ">
          <p className="font-bold lg:text-9xl xs:text-8xl  absolute opacity-20 z-10">
            Different from other
          </p>
          <div className="space-y-4 ">
            <h3 className="font-bold text-2xl">Using Good Quality Materials</h3>
            <p className="font-medium text-base ">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
          <div className="space-y-4 ">
            <h3 className="font-bold text-2xl">100% Handmade Products</h3>
            <p className="font-medium text-base">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-2xl">Modern Fashion Design</h3>
            <p className="font-medium text-base">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-2xl">Discount for Bulk Orders</h3>
            <p className="font-medium text-base">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="flex lg:flex-row xs:flex-col items-center gap-4">
          <Image src={feature} alt="feature" />
          <div>
            <p className="text-justify space-y-4 font-medium text-base">
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </p>
            <button className="lg:w-full xs:w-2/3 bg-gray-300 rounded-lg p-4 my-4">
              See All Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
