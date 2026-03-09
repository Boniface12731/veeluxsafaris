import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>

    <div>
      <img className='w-12 m-auto mb-5' src={assets.exchange_icon} alt="" />
      <p className='font-semibold'>Shipping and Delivery Policy</p>
      <p className='text-gray-400'>We offer countrywide delivery across Kenya within 2-3 business days</p>
    </div>

    <div>
      <img className='w-12 m-auto mb-5' src={assets.support_img} alt="" />
      <p className='font-semibold'>Best customer support</p>
      <p className='text-gray-400'>we provide 24/7 customer support for shipments</p>
    </div>

    <div>
      <img className='w-12 m-auto mb-5' src={assets.quality_icon} alt="" />
      <p className='font-semibold'>Privacy Policy</p>
      <p className='text-gray-400'>Personal information will  only be used  to process your orders.</p>
    </div>
   
  </div>
  )
}
export default OurPolicy
