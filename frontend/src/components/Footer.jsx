import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  const [showFeedbackModal, setShowFeedbackModal] = useState(false)
  const [showEmergencyModal, setShowEmergencyModal] = useState(false)

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

      <a className="block text-xl"
        href="/documents/emergency-contact.pdf"
        target="_blank"
        rel="noopener noreferrer">Emergency Contact
      </a>

      <button
          onClick={() => setShowFeedbackModal(true)}
          className="block text-xl text-left">
          Customer Feedback
      </button>

    </div>

    <div>
      <hr/>
      <p className='py-5 text-sm text-center'>Copyright 2026@veeluxesafaris - All Right Reserved.</p>
    </div>

  {/*Modal for Customer Feedback*/}
    {showFeedbackModal && (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-lg w-[90%] max-w-2xl max-h-[90vh] overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">
          Customer Feedback
        </h2>

        <button
          onClick={() => setShowFeedbackModal(false)}
          className="text-2xl">×
        </button>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const form = new FormData(e.target);
          const message = `CUSTOMER FEEDBACK
                            Name: ${form.get("name")}
                            Email: ${form.get("email")}
                            Phone: ${form.get("phone")}
                            Tour Package: ${form.get("package")}
                            Travel Date: ${form.get("date")}

                            Enjoyed Most:
                            ${form.get("enjoyed")}

                            Areas For Improvement:
                            ${form.get("improve")}

                            Travel Again:
                            ${form.get("travelAgain")}

                            Recommend Us:
                            ${form.get("recommend")}

                            Comments:
                            ${form.get("comments")}`;
        window.open(
            `https://wa.me/254713486157?text=${encodeURIComponent(message)}`,
            "_blank"
          );
        }}
        
        className="space-y-4">
        <input
          name="name"
          placeholder="Full Name"
          className="w-full border p-3 rounded"
          required/>

        <input
          name="email"
          type="email"
          placeholder="Email Address"
          className="w-full border p-3 rounded"
          required/>

        <input
          name="phone"
          placeholder="Phone Number"
          className="w-full border p-3 rounded"/>

        <input
          name="package"
          placeholder="Tour Package Booked"
          className="w-full border p-3 rounded"/>

        <input
          name="date"
          type="date"
          className="w-full border p-3 rounded"/>

        <textarea
          name="enjoyed"
          placeholder="What did you enjoy most about the tour?"
          className="w-full border p-3 rounded"/>

        <textarea
          name="improve"
          placeholder="What areas can we improve?"
          className="w-full border p-3 rounded"/>

        <select
          name="travelAgain"
          className="w-full border p-3 rounded">
          <option>Would you travel with us again?</option>
          <option>Yes</option>
          <option>No</option>
        </select>

        <select
          name="recommend"
          className="w-full border p-3 rounded">
          <option>Would you recommend us?</option>
          <option>Yes</option>
          <option>No</option>
        </select>

        <textarea
          name="comments"
          placeholder="Additional Comments"
          className="w-full border p-3 rounded"/>

         <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">
          Submit Feedback
        </button>
      </form>
    </div>
  </div>
    )}
   {/*Modal for Customer Feedback*/}

  </div>
  )
}
export default Footer
