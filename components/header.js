import { Divide } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="flex py-3">
      <div className="container flex justify-between items-center">
        <Image src="/logo.svg" width={237} height={60} alt="logo" />
        <div className="flex items-center gap-7">
          <ul className="flex items-center gap-7">
            <li>
              <Link href="#">CATALOG</Link>
            </li>
            <li>
              <Link href="#">ARRIVALS</Link>
            </li>
            <li>
              <Link href="#">FAVORITE</Link>
            </li>
            <li>
              <Link href="#">DWONLOAD</Link>
            </li>
          </ul>
          <Link href="#" className="bg-black text-white rounded-md px-4 py-2">
            SIGN UP
          </Link>
        </div>
      </div>
    </div>
  );
}
