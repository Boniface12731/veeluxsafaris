import React from 'react'
import { assets } from '../assets/assets'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const imageArray = Object.values(assets);

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }; 

  return (
    <div>
    <Slider className='w-full sm:w-1/2' {...settings}>
      {imageArray.map((img, index) => (
        <div key={index}>
          <img src={img} alt={`Slide ${index + 1}`} style={{ width: "100%", height: "auto" }} />
        </div>
      ))}
    </Slider>
  </div>
  )
}
export default ImageSlider
