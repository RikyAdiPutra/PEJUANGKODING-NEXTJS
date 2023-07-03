import React from "react";
import Image from "next/image";

export default function ItemProducts(props) {
     return (
          <div className="w-4/12 p-5">
               <div>
                    <div classNmae="relative">
                         <Image
                              src="/arrival1.png"
                              width={484}
                              height={704}
                              alt=""
                         />
                    </div>
                    <h4 className="text-[30px]">{props.title}</h4>
                    <p>{props.desc}</p>
                    <div className="flex items-center justify-between">
                         <div className="text-[30px]">Rp.{props.price}</div>
                         <div className="bg-slate-400 flex items-center px-7 py-3 rounded-full justify-center mt-5 text-white cursor-pointer">
                              Add Cart
                         </div>
                    </div>
               </div>
          </div>
     );
}
