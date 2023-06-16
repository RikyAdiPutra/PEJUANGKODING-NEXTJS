// Langkah Demi Langkah State
// 1. Masukan "use client"
// 2. Import { useState } from 'react' jika pake react = import React, { useState } from 'react'
// 3. Membuat variabel = const [data (nama boleh bebas), setData (nama boleh bebas)] = useState(0)
// Penamaan variabel tidak harus camelCase === bebas
// - firstValue = Nilai awal
// - setValue = Merubah nilai

// PR buat fungsi add cart, jika lebih dari 10 gabisa di tambah (limit 10) === Done

"use client";

import { useState } from "react";

export default function BelajarState() {
     const [firstValue, setValue] = useState(0);

     // Kondisi jika di kurang
     const lessValue = () => {
          firstValue > 0 ? setValue(firstValue - 1) : setValue(0);
     };

     // Kondisi jika di tambah
     const addValue = () => {
          firstValue < 10 ? setValue(firstValue + 1) : setValue(10);
     };

     return (
          <div className="container">
               <div className="flex bg-yellowcustom max-w-[100px] items-center justify-between mx-auto">
                    <span
                         className="bg-red-600 p-2 w-7 cursor-pointer text-white"
                         onClick={() => setValue(lessValue)}
                    >
                         -
                    </span>
                    <label for="">{firstValue}</label>
                    <span
                         className="bg-red-600 p-2 w-7 cursor-pointer text-white"
                         onClick={() => setValue(addValue)}
                    >
                         +
                    </span>
               </div>
          </div>
     );
}
