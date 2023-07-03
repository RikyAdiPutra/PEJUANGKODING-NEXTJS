// GET = menampilkan data
// PUT = update data
// DELETE = hapus data
// POST = create data

import React from "react";
import { apiURL } from "@/lib/utils";

export default async function Products2() {
     async function getData() {
          try {
               const res = await fetch(`${apiURL}/posts`);
               return res.json();
          } catch (error) {
               console.log(error);
          }
     }

     const getPost = await getData();
     console.log(getPost);

     return (
          <div>
               {getPost.map((item) => {
                    return (
                         <div className="container p-7" key={item.id}>
                              <h1 className="font-black bg-red-300 mb-4 p-3 rounded-xl">{item.title}</h1>
                              <p className="bg-cyan-500 px-3 rounded-xl">{item.body}</p>
                         </div>
                    );   
               })}
          </div>
     );
}
