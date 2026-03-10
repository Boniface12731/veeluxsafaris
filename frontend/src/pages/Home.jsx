import React, { useState, useContext } from 'react';
import axios from 'axios';
import Hero from '../components/Hero';
import LatestCollections from '../components/LatestCollections';
import BestSeller from '../components/BestSeller';
import OurPolicy from '../components/OurPolicy';
import NewsletterBox from '../components/NewsletterBox';
import { ShopContext } from '../context/ShopContext';
import { toast } from 'react-toastify';

import lionsHero from '../assets/lionsHero.png'

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [file, setFile] = useState(null); 
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [size, setSize] = useState('A1');
  const [loading, setLoading] = useState(false); 
  const { backendUrl } = useContext(ShopContext);

    const [inputData, setInputData] = useState({
          email: '',   
      })

      const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputData(data => ({ ...data, [name]: value }))
    }
    console.log(inputData.email);


    const [emailData, setEmailData] = useState({
            to: 'bonyosuks12731@gmail.com',
            subject: 'Image Submission Received',
            text: 'We confirm reception of  your Image. It will be printed and delivered to  your location',
         });
    
    const sendEmail = async ()=> {
      const emailToSend = [inputData.email, emailData.to];
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
        if(response.ok){
          toast.success('Email Sent successfully');
        }else{
            toast.error('Order Email Failed');
        }
      } 
      catch (error) {
        console.error('Error:', error);
        toast.error('Error  occured  while  sending the email');
      }
    };

  // Handle Image Selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  // Handle Submit Action
  const handleSubmit = async () => {
    sendEmail();
    if (!file || !name || !phone || !size) {
      alert('Please fill in all the fields and select an image.');
      return;
    }

    const formData = new FormData();
    formData.append('image', file);
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('size', size);
    
    try {
      setLoading(true);   
      const response = await axios.post(backendUrl + '/api/image/submit',
        formData, {
        headers: {
          'Content-Type': 'multipart/form-data', 
        },
      });
      toast.success('Image uploaded successfully!');
      setSelectedImage(null);
      setName('');
      setPhone('');
      setSize('A1');
      setShowModal(false);
    } catch (error) {
      console.error('Upload failed:', error.response?.data || error.message || error);
      toast.error('Failed to upload image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
  <div>
      {/* Main Components */}
      <Hero />
      <LatestCollections />
      <BestSeller />
      <OurPolicy />
      <NewsletterBox />

      {/* Upload Button */}
      <button
        className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
        onClick={() => setShowModal(true)}>
        <span>Upload Photo</span>
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-11/12 max-w-lg shadow-xl relative">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>

            {/* Image Preview */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-40 h-40 bg-gray-100 border rounded flex items-center justify-center">
                {selectedImage ? (
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="w-full h-full object-cover rounded"
                  />
                ) : (
                  <label className="cursor-pointer flex flex-col items-center gap-2 text-gray-400">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageChange}
                    />
                    <span className="text-xl">📷</span>
                    <span>Upload Image</span>
                  </label>
                )}
              </div>

              {/* Name Input */}
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border p-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
              />

              {/* Phone Number Input */}
              <input
                type="text"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border p-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
              />

            <input required onChange={onChangeHandler} name='email' value={inputData.email} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email address'/>

              {/* Size Selector */}
              <select
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="w-full border p-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
              >
                <option value="A1">A1</option>
                <option value="A2">A2</option>
                <option value="A3">A3</option>
              </select>

              {/* Submit Button */}
              <button
                className={`bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 ${
                  loading ? 'cursor-not-allowed opacity-50' : ''
                }`}
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? 'Uploading...' : 'Submit'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>    
  );
};
export default Home;
