import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
<div className='bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200 flex flex-col sm:flex-row justify-around gap-12 sm:gap-6 text-center py-20 text-sm md:text-base text-black-800'>
       <div>
        <p className='font-semibold text-lg mb-2'>Experienced Guides</p>
        <p className='text-black-500'>Travel with knowledgeable local guides who ensure a safe and unforgettable safari experience.</p>
      </div>

      <div>
        <p className='font-semibold text-lg mb-2'>Tailored Experiences</p>
        <p className='text-black-500'>Choose from a variety of tours or customize your journey to match your adventure style.</p>
      </div>

      <div>
        <p className='font-semibold text-lg mb-2'>Secure Payments</p>
        <p className='text-black-500'>Enjoy seamless and secure payments with M-Pesa for all your bookings.</p>
      </div>
   
  </div>
  )
}
export default OurPolicy
