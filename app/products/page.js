import React from "react";
import Link from "next/link";
import ItemProducts from "./itemProduct";

export default function Products() {
     const myProduct = {
          data: [
               {
                    id: 1,
                    title: "Sweeter",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab ullam enim soluta repudiandae ducimus.",
                    price: 20000,
               },
               {
                    id: 2,
                    title: "Topi",
                    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, labore. Laborum, illo molestiae nam voluptate eaque hic facilis, cumque quasi expedita cum quos necessitatibus et!",
                    price: 10000,
               },
          ],
     };

     return (
          <div className="container my-12">
               <div className="bg-blue-400 flex justify-between rounded-lg p-7 mb-10">
                    <Link href="/">Logo</Link>l
                    <div>Cart: 0 | 20.000</div>
               </div>
               <div className="flex flex-wrap">
                    {myProduct.data.map((item, i) => {
                         return (
                              <ItemProducts
                                   title={item.title}
                                   desc={item.desc}
                                   price={item.price}
                              />
                         );
                    })}
               </div>
          </div>
     );
}
