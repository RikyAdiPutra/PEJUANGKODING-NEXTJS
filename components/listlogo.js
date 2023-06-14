// Props = Mengirim sebuah fungsi sebagai parameter
// Props = nilai dinamis
// Langkah langkah Props
// 1. Isi Di Parameter
// 2. Isi Di bagian elemennya (Attribut)

import React from 'react'
import Image from 'next/image'

function Itemlogo(props) {
    return (
        <div>
            <Image src={props.image} width={props.width} height={props.height} alt=""/>
        </div>
    )
}

export default function Listlogo() {
    return (
        <div className='bg-yellowcustom py-[20px] flex items-center gap-5 justify-between'>
            <div className="container flex items-center justify-between">
                <Itemlogo image="/logo/logo1.png" width={119} height={71}/>
                <Itemlogo image="/logo/logo2.png" width={151} height={53}/>
                <Itemlogo image="/logo/logo3.png" width={177} height={63}/>
                <Itemlogo image="/logo/logo4.png" width={236} height={71}/>
                <Itemlogo image="/logo/logo5.png" width={128} height={71}/>
                <Itemlogo image="/logo/logo6.png" width={167} height={64}/>
            </div>
        </div>
    )
}

