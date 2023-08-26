"use client";
import NavBar from "@/components/navbar/NavBar";
import NavbarMobile from "@/components/navbar/NavbarMobile";
import React, { useState } from "react";
import skutpa from "@/assets/home/skutpa-logo.png";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center lg:hidden xs:flex">
        <Image src={skutpa} alt="skutpa logo" className="w-1/12" />
        <NavbarMobile />
      </div>

      <div className="flex justify-between items-center xs:hidden md:flex ">
        <Image src={skutpa} alt="skutpa logo" className="w-1/12" />
        <NavBar />
      </div>
    </>
  );
}
