"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

// atau bisa satu satu
// import React from 'react'
// import useState from 'react'

export default function Header() {
     const [data, setData] = useState(5);
     // data, setData === State
     // membuat variabel state
     // data = memanggil nilai (nama data boleh apa aja, selagi pas di panggil namanya sama)
     // setData = untuk merubah nilai

     return (
          <div className="flex py-3">
               <div className="container flex justify-between items-center">
                    <div>
                         <Image
                              src="/logo.svg"
                              width={237}
                              height={60}
                              alt="logo"
                         />
                         {data}
                         <button
                              className="bg-blue-500"
                              onClick={() => setData(0)}
                         >
                              Klik saya
                         </button>
                    </div>
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
                         <Link
                              href="#"
                              className="bg-black text-white rounded-md px-4 py-2"
                         >
                              SIGN UP
                         </Link>
                    </div>
               </div>
          </div>
     );
}
