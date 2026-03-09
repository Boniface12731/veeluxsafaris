import React from 'react'
import { assets } from '../assets/assets'


const Footer = () => {
  return (
    <div>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

<div>
  <img className='mb-5 w-32' src={assets.logo} alt="" />
  <p className='w-full md:w-2/3 text-gray-600'>Bringing art to life, one canvas at a time. Picture Mart transforms your space with stunning, high-quality prints designed to inspire and captivate</p>
</div>

<div>
  <p className='text-xl font-medium mb-5'>PICTURE MART</p>
  <ul className='flex flex-col gap-1 text-gray-600'>
    <li>Nairobi,</li>
    <li>Kenya</li>
  </ul>
</div>

<div>
  <p className='text-xl font-medium mb-5'>CONTACT US</p>
  <ul className='flex flex-col gap-1 text-gray-600'>
    <li>+254-713486157</li>
    <li>picturemart@gmail.com</li>
  </ul>
</div>

</div>

<div>
<hr />
<p className='py-5 text-sm text-center'>Copyright 2024@picturemart - All Right Reserved.</p>
</div>

    </div>
  )
}

export default Footer
