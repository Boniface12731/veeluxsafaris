import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
    const [currentState, setCurrentState] = useState('Reset Password');
    const {token, setToken, navigate, backendUrl} = useContext(ShopContext)
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const onSubmitHandler = async (e) => {
      
     }

    useEffect(()=> {
      if(token){
        //navigate('/home')
      }
    },[token])


  return (
    <form 
    onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
    <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>Reset Your Password</p>
        <hr className=' border-none h-[1.5px] w-8 bg-gray-800'/>
    </div>
       <input onChange={(e)=>setEmail(e.target.value)} value={email} className='w-full px-3 py-2 border border-gray-800' type="email" placeholder='Email' required />
 
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
      </div>
      <button type='submit' className='bg-black text-white font-light px-8 py-2 mt-4'>Reset Password</button>
   </form>
  )
}
export default ForgotPassword