// Props = Mengirim sebuah fungsi sebagai parameter
// Props = nilai dinamis
// Langkah langkah Props
// 1. Isi Di Parameter
// 2. Isi Di bagian elemennya (Attribut) = (props. ...) / {props.(width/height)}
// Props == Distactoring Data

"use client"

import React from 'react'
import Image from 'next/image'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function Itemlogo(props) {
    return (
        <div>
            <Image src={props.image} width={props.width} height={props.height} alt=""/>
        </div>
    )
}



export default function Listlogo() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]    
  }
    return (
      <div className='bg-yellowcustom py-[20px]  items-center gap-5 justify-between ym-10'>
          <div>
            <Slider {...settings}>
              <Itemlogo image="/logo/logo1.png" width={119} height={71}/>
              <Itemlogo image="/logo/logo2.png" width={119} height={71}/>
              <Itemlogo image="/logo/logo3.png" width={119} height={71}/>
              <Itemlogo image="/logo/logo4.png" width={119} height={71}/>
              <Itemlogo image="/logo/logo5.png" width={119} height={71}/>
              <Itemlogo image="/logo/logo6.png" width={119} height={71}/>
            </Slider>
          </div>
      </div>
    )
  }

