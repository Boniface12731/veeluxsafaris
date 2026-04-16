import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import lionsHero from '../assets/lionsHero.png';
import diani from '../assets/diani.png'
import beach from '../assets/beach.png'
import maasaimara from '../assets/maasaimara.png'
import caravan from '../assets/caravan.png'
import road from '../assets/road.png'
import tree from '../assets/tree.png'
import elephant from '../assets/elephant.png'
import elephantgroup from '../assets/elephantgroup.png'
import lion from '../assets/lion.png'
import lioness from '../assets/lioness.png'
import lionpride from '../assets/lionpride.png'
import collage from '../assets/collage.png'
import longonot from '../assets/longonot.png'
import longonottwo from '../assets/longonottwo.png'
import longonotthree from '../assets/longonotthree.png'
import aberdareranges from '../assets/aberdareranges.png'
import horizon from '../assets/horizon.png'
import hellsgate from '../assets/hellsgate.png'
import escarpments from '../assets/escarpments.png'
import hellgate from '../assets/hellgate.png'
import hellgateride from '../assets/hellgateride.png'
import  mtkenyafar from '../assets/mtkenyafar.png'
import mtkenyaclose from '../assets/mtkenyaclose.png'
import waterfallone from '../assets/waterfallone.png'
import waterfalltwo from '../assets/waterfalltwo.png'

const Hero = () => {
      const {navigate} = useContext(ShopContext);
  
  const tourismImages = [
    lionsHero,
    aberdareranges,
    lion,
    waterfalltwo,
    longonottwo,
    beach,
    elephant,
    lioness,
    maasaimara,
    caravan,
    hellsgate,
    mtkenyaclose,
    road,
    tree,
    lionpride,
    hellgateride,
    longonotthree,
    diani,
    elephantgroup,  
    collage,
    longonot,
    horizon,
    escarpments,
    waterfallone,
    hellgate,
    mtkenyafar,
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div
      className="relative overflow-hidden rounded-xl min-h-[90vh] flex items-center"
      style={{
        backgroundImage: `url(${diani})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
          {/* Hero Left Side */}
          <div className="text-white">
            <div className="flex items-center gap-3 mb-4">
              <p className="w-10 md:w-14 h-[2px] bg-[#f4c84c]"></p>
              <p className="font-medium text-sm md:text-base uppercase tracking-wide text-[#f4c84c]">
                Explore Kenya
              </p>
            </div>

            <h1 className="prata-regular text-4xl sm:text-5xl lg:text-6xl leading-tight mb-5">
              Veeluxe Safaris
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-gray-200 max-w-xl leading-7 mb-6">
              Discover unforgettable wildlife adventures, luxury safaris,
              coastal escapes, and breathtaking tours across Kenya.
            </p>

            <div className="flex items-center gap-3">
              <button 
                      onClick={()=> navigate('/collection')} 
                      className="bg-[#f4c84c] text-black font-semibold px-6 py-3 rounded-full hover:bg-[#e8ba34] transition">
                Explore Tours
              </button>

              <button 
                onClick={() => {window.scrollBy({
                  top: 620,
                  behavior: "smooth",
                  });
                }}
                  className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
                Book Now
              </button>
            </div>
          </div>

          {/* Hero Right Side */}
          <div className="w-full">
            <Slider {...settings}>
              {tourismImages.map((img, index) => (
                <div key={index} className="px-2">
                  <div className="overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={img}
                      alt={`Kenya tourism ${index + 1}`}
                      className="w-full h-[280px] sm:h-[360px] object-cover"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;