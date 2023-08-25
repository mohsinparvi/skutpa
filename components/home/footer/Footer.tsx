import Image from "next/image";
import React from "react";
import skutpa from "@/assets/home/skutpa-logo.png";
import facebook from "@/assets/icons/facebook.svg";
import linkedIn from "@/assets/icons/linkedin.svg";
import instagram from "@/assets/icons/instagram.svg";
import twitter from "@/assets/icons/instagram.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="grid grid-cols-4  justify-evenly gap-8 my-8">
        <div className="space-y-4 w-full ">
          <div className="flex  gap-4 ">
            <Image src={skutpa} alt="logo" className="w-1/4 -mt-4" />
            <h2 className="font-bold text-2xl text-gray-800">Skutpa</h2>
          </div>
          <p className="py-3 text-base font-medium">
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>
          <div className="flex gap-4 ">
            <Image src={facebook} alt="facebook" className="w-1/12" />
            <Image src={linkedIn} alt="linkedIn" className="w-1/12" />
            <Image src={instagram} alt="instagram" className="w-1/12" />
            <Image src={twitter} alt="twitter" className="w-1/12" />
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="font-bold text-2xl text-gray-800">Company</h2>
          <Link href={"/"}>
            <p className="pt-4 text-base font-medium">About</p>
          </Link>
          <Link href={"/"}>
            <p className="pt-2 text-base font-medium">Terms of Use</p>
          </Link>
          <Link href={"/"}>
            <p className="pt-2 text-base font-medium">Privacy Policy</p>
          </Link>
          <Link href={"/"}>
            <p className="pt-2 text-base font-medium">How it Works</p>
          </Link>
          <Link href={"/"}>
            <p className="pt-2 text-base font-medium">Contact Us</p>
          </Link>
        </div>
        <div>
          <h2 className="font-bold text-2xl text-gray-800">Support</h2>
          <Link href={"/"}>
            <p className="pt-4 text-base font-medium">Support Carrer</p>
          </Link>
          <Link href={"/"}>
            <p className="pt-2 text-base font-medium">24h Service</p>
          </Link>
          <Link href={"/"}>
            <p className="pt-2 text-base font-medium">Quick Chat</p>
          </Link>
        </div>
        <div>
          <h2 className="font-bold text-2xl text-gray-800">Contact</h2>
          <Link href={"/"}>
            <p className="pt-4 text-base font-medium">Whatsapp</p>
          </Link>
          <Link href={"/"}>
            <p className="pt-2 text-base font-medium">Support 24h</p>
          </Link>
        </div>
      </div>
      <hr />
      <div className="flex justify-between my-4 items-center ">
        <p>Copyright © 2023 Skupta</p>
        <p>
          Design by.
          <Link
            href={"https://www.linkedin.com/in/aboutmohsin/"}
            className="font-bold "
          >
            Mohsin Hassan
          </Link>
        </p>
        <p>
          Code by.
          <Link href={"https://github.com/aboutmohsin"} className="font-bold ">
            aboutmohsin on github
          </Link>
        </p>
      </div>
    </>
  );
}
