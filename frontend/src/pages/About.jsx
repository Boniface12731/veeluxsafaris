import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'


const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.hero_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>At Picture Mart, we offer a seamless online experience for customers looking to decorate their spaces with high-quality printed pictures on canvas. Our platform allows you to easily browse through a wide range of stunning images, select your favorites, and place an order for printing. Whether you're looking for artwork for your home, office, or any other space, we provide various print sizes (A1, A2, A3) to suit your needs.</p>
          <p>Our simple ordering process ensures that once you've selected your picture and size, you can easily make payments via Mpesa, making the transaction quick and convenient. We pride ourselves on offering countrywide delivery throughout Kenya, so you can receive your artwork no matter where you are. Picture Mart is dedicated to bringing beautiful art to your doorstep, hassle-free.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At Picture Mart, our mission is to provide a seamless and convenient platform for customers to select and order high-quality canvas prints.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience: </b>
          <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping for canvas prints  has never been easier.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About
