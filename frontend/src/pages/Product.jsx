import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
      return null;
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        
        {/* Tour Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.image.map((item, index) => (
              <img
                key={index}
                onClick={() => setImage(item)}
                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer rounded-lg'
                src={item}
                alt=""
              />
            ))}
          </div>

          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto rounded-xl shadow-md' src={image} alt="" />
          </div>
        </div>

        {/* Tour Info */}
        <div className='flex-1'>
          <p className='text-amber-700 uppercase tracking-wide text-sm font-semibold'>
            Luxury Safari Experience
          </p>

          <h1 className='font-semibold text-3xl mt-2 text-gray-900'>
            {productData.name}
          </h1>

          <div className='flex items-center gap-1 mt-3'>
            <img className='w-3.5' src={assets.star_icon} alt="" />
            <img className='w-3.5' src={assets.star_icon} alt="" />
            <img className='w-3.5' src={assets.star_icon} alt="" />
            <img className='w-3.5' src={assets.star_icon} alt="" />
            <img className='w-3.5' src={assets.star_dull_icon} alt="" />
            <p className='pl-2 text-sm text-gray-500'>(Trusted by travelers)</p>
          </div>

          <p className='mt-5 text-3xl font-semibold text-gray-900'>
            {currency}{productData.price}
            <span className='text-base text-gray-500 font-normal'> / person</span>
          </p>

          <p className='mt-5 text-gray-600 leading-7 md:w-4/5'>
            {productData.description}
          </p>

          <div className='mt-6 flex flex-wrap gap-3'>
              <span className='bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm'>
              Big Five Safari
              </span>
              <span className='bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm'>
              Professional Guides
              </span>
              <span className='bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm'>
              Scenic Destinations
              </span>
              <span className='bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm'>
              Photography Friendly
              </span>
          </div>


          {/* Highlights */}
          <div className='mt-6 flex flex-wrap gap-3'>
            <span className='bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm'>
              Wildlife Safari
            </span>
            <span className='bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm'>
              Guided Tour
            </span>
            <span className='bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm'>
              Scenic Destinations
            </span>
          </div>

          {/* Tour Option */}
          <div className='flex flex-col gap-4 my-8'>
            <p className='font-medium'>Choose Tour Option</p>
            <div className='flex gap-2 flex-wrap'>
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 rounded-lg transition ${
                    item === size
                      ? "border-amber-500 bg-amber-50 text-amber-700"
                      : "bg-gray-100 border-gray-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => addToCart(productData._id, size)}
            className='bg-amber-500 text-white px-8 py-3 text-sm rounded-full hover:bg-amber-600 hover:shadow-xl hover:-translate-y-1 transition transform duration-300'
          >
            Book Tour
          </button>

          <hr className='mt-8 sm:w-4/5' />

          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-2'>
            <p>✔ Local guides and curated safari experiences included.</p>
            <p>✔ Flexible travel planning and inquiry support available.</p>
            <p>✔ Secure booking and payment options provided.</p>
          </div>
        </div>
      </div>

      {/* Tour Overview Section */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Tour Overview</b>
          {/* <p className='border px-5 py-3 text-sm'>Traveler Reviews</p> */}
        </div>

        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-600 leading-7'>
          <p>
            Experience Kenya through unforgettable safaris, scenic landscapes,
            wildlife encounters, and premium travel planning. This tour is designed
            to give travelers comfort, adventure, and memorable moments across some
            of the country’s most breathtaking destinations.
          </p>
          <p>
            Ideal for couples, families, solo travelers, and groups looking for a
            unique safari experience with flexible options and trusted local support.
          </p>
        </div>
      </div>

      {/* Related Tours */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : <div className='opacity-0'></div>;
};

export default Product;