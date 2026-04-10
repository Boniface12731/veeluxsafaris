import React, { useState, useContext } from 'react';
import axios from 'axios';
import Hero from '../components/Hero';
import LatestCollections from '../components/LatestCollections';
import BestSeller from '../components/BestSeller';
import OurPolicy from '../components/OurPolicy';
import NewsletterBox from '../components/NewsletterBox';
import { ShopContext } from '../context/ShopContext';
import { toast } from 'react-toastify';
// import lionsHero from '../assets/lionsHero.png'

const Home = () => {
  // const [showModal, setShowModal] = useState(false);
  // const [selectedImage, setSelectedImage] = useState(null);
  // const [file, setFile] = useState(null); 
  // const [name, setName] = useState('');
  // const [phone, setPhone] = useState('');
  // const [email, setEmail] = useState('');
  // const [size, setSize] = useState('A1');
  // const [loading, setLoading] = useState(false); 
  const { backendUrl } = useContext(ShopContext);

    // const [inputData, setInputData] = useState({
    //       email: '',   
    //   })

    // const onChangeHandler = (event) => {
    //     const name = event.target.name
    //     const value = event.target.value
    //     setInputData(data => ({ ...data, [name]: value }))
    // }
    //console.log(inputData.email);
    // const [emailData, setEmailData] = useState({
    //         to: 'bonyosuks12731@gmail.com',
    //         subject: 'Booking Confirmed',
    //         text: 'Booking Confirmed',
    //      });
    
    // const sendEmail = async ()=> {
    //   const emailToSend = [inputData.email, emailData.to];
    //   try {
    //     const response = await fetch(backendUrl + '/api/email/send',
    //       {
    //       method: 'POST',
    //       headers:{
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify({
    //           to: emailToSend, 
    //           subject: emailData.subject,
    //           text: emailData.text, 
    //       }),
    //     });
    //     if(response.ok){
    //       toast.success('Email Sent successfully');
    //     }else{
    //         toast.error('Boking Email Failed');
    //     }
    //   } 
    //   catch (error) {
    //     console.error('Error:', error);
    //     toast.error('Error  occured  while  sending the email');
    //   }
    // };

  // Handle Image Selection
  // const handleImageChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     setFile(file);
  //     setSelectedImage(URL.createObjectURL(file));
  //   }
  // };

  // Handle Submit Action
  // const handleSubmit = async () => {
  //   sendEmail();
  //   if (!file || !name || !phone || !size) {
  //     alert('Please fill in all the fields and select an image.');
  //     return;
  //   }

  //   const formData = new FormData();
  //   formData.append('image', file);
  //   formData.append('name', name);
  //   formData.append('phone', phone);
  //   formData.append('size', size);
    
  //   try {
  //     setLoading(true);   
  //     const response = await axios.post(backendUrl + '/api/image/submit',
  //       formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data', 
  //       },
  //     });
  //     toast.success('Image uploaded successfully!');
  //     setSelectedImage(null);
  //     setName('');
  //     setPhone('');
  //     setSize('A1');
  //     setShowModal(false);
  //   } catch (error) {
  //     console.error('Upload failed:', error.response?.data || error.message || error);
  //     toast.error('Failed to upload image. Please try again.');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
  <div>
      {/* Main Components */}
      <Hero />
      {/* <LatestCollections /> */}
      <BestSeller/>
      <OurPolicy />
      <NewsletterBox />

      {/* Whatsapp Button */}

     <button
      onClick={() =>
        window.open(
          'https://wa.me/254713486157?text=Hello%20Veelux%20Safaris,%20I%20would%20like%20to%20book%20a%20tour',
          '_blank')}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 w-14 h-14 flex items-center justify-center rounded-full shadow-2xl transition-all hover:scale-110">
      <img
        src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
        alt="WhatsApp"
        className="w-7 h-7"/>
      </button>
    </div>    
  );
};
export default Home;
