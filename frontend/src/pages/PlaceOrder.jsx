import React, { useContext, useEffect, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import html2pdf from 'html2pdf.js';  
import Mpesa from '../mpesa/Mpesa'
import veeluxelogo from '../assets/veeluxelogo.png'

  
const PlaceOrder = () => {
    const [method, setMethod] = useState('cod');
    const [cartData, setCartData] = useState([]);
    const {paymentStatus, updateQuantity ,currency,navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zipcode: '',
        country: '',
        phone: ''
    })
    
    const totalAmount = getCartAmount() === 0 ? 0 : getCartAmount();
    const userPhone =  formData.phone;
    localStorage.setItem('userPhone', userPhone);


    //functions from cart
    useEffect(() => {
    if(products.length > 0){
    const tempData = []
    for (const items in cartItems) {
    for (const item in cartItems[items]) {
    if (cartItems[items][item] > 0) {
    tempData.push({
    _id: items,
    size: item,
    quantity: cartItems[items][item]
    })
    }
    }
    }
    setCartData(tempData)
    }
    },[cartItems,products])

    const makePDF = () => {
    const pdfContent = document.createElement('div');
    pdfContent.style.padding = '30px';
    pdfContent.style.fontFamily = 'Arial, sans-serif';
    pdfContent.style.color = '#1f2937';
    pdfContent.style.backgroundColor = '#ffffff';
    const bookingItemsHTML = cartData.map((item) => {
    const productData = products.find((product) => product._id === item._id);
    if (!productData) return '';
    return `
        <tr>
        <td style="padding: 10px; border: 1px solid #ddd;">${productData.name}</td>
        <td style="padding: 10px; border: 1px solid #ddd;">${item.size}</td>
        <td style="padding: 10px; border: 1px solid #ddd;">${item.quantity}</td>
        <td style="padding: 10px; border: 1px solid #ddd;">${currency}${productData.price}</td>
        </tr>
    `;
    }).join('');

    pdfContent.innerHTML = `
    <div style="max-width: 800px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 25px;">
        <img src="${veeluxelogo}" alt="Veelux Safaris Logo" style="width: 180px; margin-left: 240px; margin-bottom: 10px;" />
        <h1 style="margin: 0; color: #8B5E3C;">Booking Summary</h1>
        <p style="margin-top: 8px; color: #6b7280;">Veelux Safaris</p>
        </div>

        <div style="margin-bottom: 25px;">
        <h2 style="color: #8B5E3C; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px;">Traveller Information</h2>
        <p><strong>Full Name:</strong> ${formData.firstName} ${formData.lastName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Country:</strong> ${formData.country}</p>
        <p><strong>City:</strong> ${formData.city}</p>
        <p><strong>Estate:</strong> ${formData.street}</p>
        </div>

        <div style="margin-bottom: 25px;">
        <h2 style="color: #8B5E3C; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px;">Booking Details</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
            <thead>
            <tr style="background-color: #f3f4f6;">
                <th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Tour</th>
                <th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Package</th>
                <th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Travellers</th>
                <th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Price</th>
            </tr>
            </thead>
            <tbody>
            ${bookingItemsHTML}
            </tbody>
        </table>
        </div>

        <div style="margin-top: 25px; padding: 18px; background: #f9fafb; border-radius: 10px;">
        <p style="margin: 0 0 8px 0;"><strong>Subtotal:</strong> ${currency}${getCartAmount()}</p>
        <p style="margin: 0 0 8px 0;"><strong>Total:</strong> ${currency}${totalAmount}</p>
        <p style="margin: 0;"><strong>Payment Method:</strong> M-Pesa</p>
        </div>

        <div style="margin-top: 30px; font-size: 14px; color: #6b7280; text-align: center;">
        <p>Thank you for booking with Veelux Safaris.</p>
        <p>Please keep this document for your records.</p>
        </div>
    </div>
    `;

    const options = {
        margin: 0.5,
        filename: `veelux-booking-summary-${formData.firstName || 'guest'}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().from(pdfContent).set(options).save();
    };

    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setFormData(data => ({ ...data, [name]: value }))
    }

    const [emailData, setEmailData] = useState({
        to: 'bonyosuks12731@gmail.com',
        subject: 'Veelux Safaris - Booking Confirmation',
        text: 'Payment Received Successfully'
    });

     const sendEmail = async ()=> {
        const emailToSend = [formData.email, emailData.to];
        try {
          const response = await fetch(backendUrl + '/api/email/send',
            {
            method: 'POST',
            headers:{
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                to: emailToSend, 
                subject: emailData.subject,
                text: emailData.text, 
            }),
          });
          const data  = await response.json();
          if(response.ok){
            toast.success('Booking reserved successfully');
          }else{
             toast.error('Booking Email Failed');
          }
        } 
        catch (error) {
          console.error('Error:', error);
          toast.error('Error  occured  while  sending the email');
        }
     };

    const onSubmitHandler = async (event) => {  
        //makePDF();  
        event.preventDefault()
        try {
            let orderItems = []
            for (const items in cartItems) {
                for (const item in cartItems[items]) {
                    if (cartItems[items][item] > 0) {
                        const itemInfo = structuredClone(products.find(product => product._id === items))
                        if (itemInfo) {
                            itemInfo.size = item
                            itemInfo.quantity = cartItems[items][item]
                            orderItems.push(itemInfo)
                        }
                    }
                }
            }
            let orderData = {
                address: formData,
                items: orderItems,
                amount: getCartAmount()
            }        
            switch (method) {
                // API Calls for Cash On Delivery
                case 'cod':
                    const response = await axios.post(backendUrl + '/api/order/place',orderData, 
                        {
                            headers: {token}
                        })
                    console.log(response.data)
                    if (response.data.success) {
                        setCartItems({})
                        navigate('/orders')
                    } 
                    else {
                        toast.error(response.data.message)
                    }
                    break;
                default:
                    break;
            }
        } 
        catch (error) {
            console.log(error)
            toast.error(error.message)
        } 
        //sendEmail();
    }

    const payHandler = () => {
        axios.post(
            backendUrl + '/api/mpesa/pay', 
            { totalAmount, userPhone},
            { headers: { token }}
        )
        .then((res) => {
            console.log('Response:', res.data);
            toast.success('Payment initiated successfully');
        })
        .catch((error) => {
            console.error('Error:', error.response ? error.response.data : error.message);
            toast.error('Payment initiation failed');
        });
    };
      
   const handlePaymentWithPDF = () => {
//   if (
//     !formData.firstName ||
//     !formData.lastName ||
//     !formData.email ||
//     !formData.country ||
//     !formData.city ||
//     !formData.street ||
//     !formData.phone
//   ) {
//     toast.error('Please fill in all the details first');
//     return;
//   }
  makePDF();
};

    return (
    <>
        <div className='border-t pt-14'>
        <div id="cart-content"> 
        {
        cartData.map((item, index) => {
        const productData = products.find((product) => product._id === item._id);
        return(
        <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
        <div className='flex items-start gap-6'>
        <img className='w-16 sm:w-20' src={productData.image[0]} alt=""/>
        <div>
        <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
        <div className='flex items-center gap-5 mt-2'>
        <p>{currency}{productData.price}</p>
        <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
        </div>
        </div>
        </div>
        <input onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type="number" min={1} defaultValue={item.quantity} />
        <img onClick={() => updateQuantity(item._id, item.size, 0)} className={'w-4 mr-4 sm:w-5 cursor-pointer bin-icon'} src={assets.bin_icon} alt="" />
        </div>
        )
        })
        }
        <div className='flex justify-end my-20 w-full sm:w-[450px]'>
            <CartTotal/>
        </div>
        </div>
        </div>

        <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
            {/* ------------- Left Side ---------------- */}
            <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>

            <div className='text-xl sm:text-2xl my-3'>
                <Title text1={'BOOKING'} text2={'DETAILS'} />
            </div>
            <div className='flex gap-3'>
                <input required onChange={onChangeHandler} name='firstName' value={formData.firstName} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First name' />
                <input required onChange={onChangeHandler} name='lastName' value={formData.lastName} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last name' />
            </div>
            <input required onChange={onChangeHandler} name='email' value={formData.email} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email address' />
            <input required onChange={onChangeHandler} name='country' value={formData.country} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country' />
            <input required onChange={onChangeHandler} name='city' value={formData.city} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' />

            <div className='flex gap-3'>
            {/*
                <input onChange={onChangeHandler} name='state' value={formData.state} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State'/>
            */}
            <input required onChange={onChangeHandler} name='street' value={formData.street} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Estate'/>

            </div>

            <div className='flex gap-3'>
                {/*
                    <input required onChange={onChangeHandler} name='zipcode' value={formData.zipcode} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Zipcode' />
                */}
            </div>        
            </div>

            {/* ------------- Right Side ------------------ */}
            <div className='mt-8'>
                <div className='mt-12'>
                    <Title text1={'Payment'} text2={'Method'}/>
                        <div className='text-sm text-gray-500 mt-6 flex flex-col gap-2'>
                            <p>✔ Secure M-Pesa payment</p>
                            <p>✔ Local team support available</p>
                            <p>✔ Booking confirmation sent by email</p>
                        </div>

                    <input required onChange={onChangeHandler} name='phone' value={formData.phone} className='border border-gray-300 rounded py-1.5 px-3.5 w-full mt-4' type="number" placeholder='Enter Mpesa Number'/>
                    {/* --------------- Payment Method Selection ------------- */}
                    <div className='flex gap-3 flex-col lg:flex-row mt-6'>   
                        <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
                            <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
                        </div> 
                    </div>   

                <div className='flex justify-start my-20 w-full sm:w-[450px]'>
                    <Mpesa onPay={handlePaymentWithPDF}/>
                </div>
                    
                <p>Check for the payment promt on your mobile device and enter your mpesa pin</p>

                <div className='w-full text-end mt-8 flex justify-start'>   
                <button
                type="submit"
                disabled={!paymentStatus}
                className={`bg-green-500 rounded-full text-white px-16 py-3 text-sm hover:bg-green-600 transition-all ${
                    !paymentStatus ? 'opacity-50 cursor-not-allowed' : ''
                }`}> Reserve Your Safari
                </button>
                    
                    </div>
                </div>
            </div>
        </form> 
    </>   
   )
}
export default PlaceOrder
 