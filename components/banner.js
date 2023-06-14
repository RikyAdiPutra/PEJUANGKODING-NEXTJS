import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Banner() {
  return (
    <div className="container bg-blue-600 rounded-3xl justify-between flex items-center pt-10 px-20 gap-7">
      <div>
        <h1 className="font-black text-[70px] max-w-[400px]">
          <div
            className='relative leading-[77px] before:content-[""] before:z-0 before:ml-[-10px] 
          before:absolute before:min-w-full before:h-full before:bg-white before:-rotate-2'
          >
            <span className="relative z-10">LET'S</span>
          </div>
          EXPLORE
          <div
            className='relative leading-[77px] before:content-[""] before:z-0 before:ml-[-10px] 
          before:absolute before:min-w-full before:h-full before:bg-yellowcustom before:-rotate-2'
          >
            <span className="relative z-10">UNIQUE</span>
          </div>
          CLOTHES.
        </h1>
        <p>Live for Influential and Innovative fashion!</p>
        <div className="flex items-center gap-5 mt-5">
          <Image src="/shape.svg" width={190} height={32} alt="" />
          <Link href="#" className="bg-black text-white rounded-md px-7 py-3">
            Shop Now
          </Link>
        </div>
      </div>
      <div>
        <Image src="/imagebanner.svg" width={891} height={784} alt="banner" />
      </div>
    </div>
  );
}
