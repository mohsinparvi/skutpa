import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/home/footer/Footer";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("@/modules/navbar/Navbar"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skutpa",
  description: "Clothes Ecommerce Site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-[1200px] mx-auto`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
