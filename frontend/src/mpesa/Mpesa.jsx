import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { ShopContext } from '../context/ShopContext'

const Mpesa = () => {
    const [loading, setLoading] = useState(false); 
    const [formData, setFormData] = useState({
        phone: ''
    })
    const { getCartAmount, delivery_fee, setPaymentStatus } = useContext(ShopContext);
    const  amount = getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee;
    const phone = localStorage.getItem('userPhone');  
    
    const payHandler = () => {
        setLoading(true);
        axios.post('https://pm-backend-kappa.vercel.app/api/mpesa/pay', 
            { amount, phone},
        )
        .then((res) => {
            console.log('Response:', res.data);
            toast.success('Payment initiated successfully');
            setLoading(false); 
            setTimeout(() => {
              setPaymentStatus(true);
          }, 25000); 
        })
        .catch((error) => {
            console.error('Error:', error.response ? error.response.data : error.message);
            toast.error('Payment failed, check mobile number');
            setLoading(false); 
        });
    };

  return (
    <div className="relative flex flex-col items-center justify-center">
      {loading && (
        <div className="absolute">
          <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <button onClick={payHandler}  disabled={loading} className={`bg-green-500 rounded-full text-white px-16 py-3 text-sm  hover:bg-green-600 transition-all ${loading ? 'opacity-50 cursor-not-allowed' : '' }`}>{loading ? 'Processing...' : 'Make Payment'}</button>
    </div>
  )
}
export default Mpesa


