"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Banner() {
  return (
    <Carousel
    autoPlay
    infiniteLoop
    showStatus={false}
    showIndicators={false}
    showThumbs={false}
    interval={5000}
    >
        <div>
            <img src="https://links.papareact.com/gi1" alt="" />
        </div>
        <div>
            <img src="https://links.papareact.com/6ff" alt="" />
        </div>
        <div>
            <img src="https://links.papareact.com/7ma" alt="" />
        </div>
       
    </Carousel>
  )
}

export default Banner
