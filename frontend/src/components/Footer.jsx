import React from 'react'
import { assets } from '../assets/assets'


const Footer = () => {
  return (
    <div>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

<div>
  <img className='mb-5 w-32' src={assets.logo} alt="" />
  <p className='w-full md:w-2/3 text-gray-600'>
      Experience Kenya through unforgettable safaris, scenic landscapes, wildlife encounters, and premium travel planning
  </p>
</div>

<div>
  <p className='text-xl font-medium mb-5'>VEELUXE SAFARIS</p>
  <ul className='flex flex-col gap-1 text-gray-600'>
    <li>Nairobi,</li>
    <li>Kenya</li>
  </ul>
</div>

<div>
  <p className='text-xl font-medium mb-5'>CONTACT US</p>
  <ul className='flex flex-col gap-1 text-gray-600'>
    <li>+254 702 873131</li>
    <li>veeluxesafaris@gmail.com</li>
  </ul>
</div>

</div>

<div>
<hr />
<p className='py-5 text-sm text-center'>Copyright 2026@veeluxesafaris - All Right Reserved.</p>
</div>

    </div>
  )
}

export default Footer
