import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
import veeluxelogo from '../assets/veeluxelogo.png'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px] rounded-xl' src={veeluxelogo} alt=""/>

        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 leading-7'>
          <p>
            At Veeluxe Safaris, we create unforgettable travel experiences across Kenya by connecting travelers with breathtaking destinations, wildlife adventures, coastal escapes, and scenic outdoor tours. From the iconic Maasai Mara to the beautiful beaches of Diani, our goal is to help our guests discover the beauty, diversity, and excitement that Kenya has to offer.
          </p>

          <p>
            We are passionate about making travel planning simple, secure, and enjoyable. Whether you are looking for a luxury safari, a day trip to Hell’s Gate, a hiking adventure on Mount Longonot, or a relaxing coastal getaway, we provide curated tour options designed to suit different travel styles and budgets. With convenient booking and reliable customer support, Veeluxe Safaris is committed to giving every traveler a smooth and memorable journey.
          </p>

          <b className='text-gray-800'>Our Mission</b>
          <p>
            Our mission is to provide authentic, seamless, and inspiring safari and travel experiences that showcase the natural beauty, adventure, and hospitality of Kenya.
          </p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Experienced Local Knowledge:</b>
          <p className='text-gray-600'>
            We understand Kenya’s top destinations and carefully design tours that combine adventure, comfort, and unforgettable memories.
          </p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Flexible Tour Options:</b>
          <p className='text-gray-600'>
            From wildlife safaris and mountain hikes to beach holidays and custom trips, we offer experiences tailored to different preferences and travel needs.
          </p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Reliable Customer Support:</b>
          <p className='text-gray-600'>
            Our team is dedicated to assisting you throughout your booking journey, ensuring a smooth, secure, and stress-free travel experience.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default About