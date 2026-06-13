import React from 'react'
import { assets } from '../assets/assets'


const Footer = () => {
  return (
<div>
  <div className='flex flex-col sm:grid grid-cols-3 gap-14 my-10 mt-40 text-sm'>
      <div>
      <img className='mb-5 w-32' src={assets.logo} alt=""/>
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

  <div className='flex flex-col sm:grid grid-cols-4 gap-14 my-10 mt-20 text-sm'>
      <a className="block text-xl" 
        href="/documents/terms-and-conditions.pdf"
        target="_blank"
        rel="noopener noreferrer">Terms & Conditions
      </a>

      <a className="block text-xl"
        href="/documents/privacy-policy.pdf"
        target="_blank"
        rel="noopener noreferrer">Privacy policy
      </a>

        <a className="block text-xl"
        href="/documents/frequently-asked-questions.pdf"
        target="_blank"
        rel="noopener noreferrer">FAQs
      </a>

      <a className="block text-xl"
        href="/documents/cancellation-and-refund-policy.pdf"
        target="_blank"
        rel="noopener noreferrer">Cancellation Policy
      </a>
 

  </div>

    <div>
      <hr/>
      <p className='py-5 text-sm text-center'>Copyright 2026@veeluxesafaris - All Right Reserved.</p>
    </div>

  </div>

  )
}
export default Footer
