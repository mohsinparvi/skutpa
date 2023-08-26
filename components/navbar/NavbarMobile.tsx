import React from "react";
import skutpa from "@/assets/home/skutpa-logo.png";
import Image from "next/image";

export default function NavbarMobile() {
  return (
    <>
      <Image src={skutpa} alt="skutpa logo" className="w-1/12" />
    </>
  );
}
