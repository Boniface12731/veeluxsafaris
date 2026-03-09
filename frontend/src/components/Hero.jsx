import React from 'react'
import { sliders } from '../assets/assets'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const Hero = () => {
    const imageArray = Object.values(sliders);
    const settings = {
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };     

  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
        {/* Hero Left Side */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
           <div className='text-[#414141]'>
            <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            <p className='font-medium text-sm md:text-base falling-text-1'>Bring Art To Life</p>
            </div>
        <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed sliding-text'>Picture Mart</h1>
        <div className='flex items-center gap-2'>
            <p className='font-semibold text-sm md:text-base rising-text'>SHOP NOW</p>
            <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
        </div>
    </div>
        </div>

      {/*Hero Right Side*/}
        <Slider className='w-full sm:w-1/2' {...settings}>
      {imageArray.map((img, index) => (
        <div key={index}>
          <img src={img}/>
        </div>
      ))}
    </Slider>  

    </div>
  )
}
export default Hero
