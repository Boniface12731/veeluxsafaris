import React, { useState, useContext} from 'react';
import { toast } from 'react-toastify'
import { ShopContext } from '../context/ShopContext'

const NewsletterBox = () => {
  const {backendUrl} = useContext(ShopContext);
  const [emailData, setEmailData] = useState({
    to: '',
    subject: 'Picture Mart Subscription Added',
    text: 'Congratulations, your subscription to Picture Mart Monthly emails has been added.Share your experience with other interested users with this link https://picture-mart.vercel.app/',
  });

  const handleChange = (e) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  };
    const sendEmail = async ()=> {
      try {
        const response = await fetch(backendUrl + '/api/email/send',
          {
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body:JSON.stringify(emailData)
        });
        const data  = await response.json();
        if(response.ok){
          toast.success('Email Subscription Added');
        }else{
           toast.error('Email Subscription Failed');
        }
      } 
      catch (error) {
        console.error('Error:', error);
        alert('An error  occured while sennding email');
      }
    };

    const onSubmitHandler  = () =>{
      event.preventDefault();
    }

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe to  our  Newsletter</p>
      <p className='text-gray-400 mt-3'>Bringing art to life, one canvas at a time.</p>
      <div  className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
      </div>

      <div>
      <input className="w-half sm:flex-1 outline-none border border-black rounded-md focus:ring-2 focus:ring-black px-10 py-3" type="email" name="to" placeholder="Enter Your Email" onChange={handleChange}/>
      <button className='bg-black text-white text-xs px-10 py-4 rounded-md' onClick={sendEmail}>Subscribe</button>
      </div>
    </div>
  )
}
export default NewsletterBox
