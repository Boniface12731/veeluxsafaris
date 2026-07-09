import React, { useState } from 'react'
import {assets} from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Add = ({token}) => {

  const [image1,setImage1] = useState(false)
  const [image2,setImage2] = useState(false)
  const [image3,setImage3] = useState(false)
  const [image4,setImage4] = useState(false)

   const [name, setName] = useState("");
   const [tagLine, setTagLine] = useState("");
   const [location, setLocation] = useState("");
   const [duration, setDuration] = useState("");
   const [included, setIncluded] = useState("");
   const [excluded, setExcluded] = useState("");
   const [description, setDescription] = useState("");
   const [price, setPrice] = useState("");
   const [category, setCategory] = useState("Safari");
   const [subCategory, setSubCategory] = useState("Scenes");
   const [bestseller, setBestseller] = useState(false);
   const [sizes, setSizes] = useState([]);
   const [loading, setLoading] = useState(false);

   const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData()
      formData.append("name", name)
      formData.append("description",description)
      formData.append("price",price)
      formData.append("tagLine",tagLine)
      formData.append("location",location)
      formData.append("duration",duration)
      formData.append("included",included)
      formData.append("excluded",excluded) 
      formData.append("category",category)
      formData.append("subCategory",subCategory)
      formData.append("bestseller",bestseller)
      formData.append("sizes",JSON.stringify(sizes))

      image1 && formData.append("image1",image1)
      image2 && formData.append("image2",image2)
      image3 && formData.append("image3",image3)
      image4 && formData.append("image4",image4)

      setLoading(true);
      const response = await axios.post(backendUrl + "/api/product/add",formData,{headers:{token}})
      console.log(response.data);

      if (response.data.success) {
        toast.success(response.data.message)
        setName('')
        setDescription('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setPrice('')
        setTagLine('')
        setLocation('')
        setDuration('')
        setIncluded('')
        setExcluded('')
      } else {
        toast.error(response.data.message)
      }
      setLoading(false);

    } catch (error) {
      console.log(error);
      toast.error(error.message)
      setLoading(false);
    }
   }

  return (
    <>
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
        <div>
          <p className='mb-2'>Upload Image</p>

          <div className='flex gap-2'>
            <label htmlFor="image1">
              <img className='w-20' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
              <input onChange={(e)=>setImage1(e.target.files[0])} type="file" id="image1" hidden/>
            </label>
            <label htmlFor="image2">
              <img className='w-20' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
              <input onChange={(e)=>setImage2(e.target.files[0])} type="file" id="image2" hidden/>
            </label>
            <label htmlFor="image3">
              <img className='w-20' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
              <input onChange={(e)=>setImage3(e.target.files[0])} type="file" id="image3" hidden/>
            </label>
            <label htmlFor="image4">
              <img className='w-20' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
              <input onChange={(e)=>setImage4(e.target.files[0])} type="file" id="image4" hidden/>
            </label>
          </div>
        </div>

        <div className='w-full'>
          <p className='mb-2'>Destination name</p>
          <input onChange={(e)=>setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Destination Name' required/>
        </div>

        <div className='w-full'>
          <p className='mb-2'>Tagline</p>
          <input onChange={(e)=>setTagLine(e.target.value)} value={tagLine} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Tagline' required/>
        </div>

         <div className='w-full'>
          <p className='mb-2'>Location</p>
          <input onChange={(e)=>setLocation(e.target.value)} value={location} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Location' required/>
        </div>

         <div className='w-full'>
          <p className='mb-2'>Duration</p>
          <input onChange={(e)=>setDuration(e.target.value)} value={duration} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Duration' required/>
        </div>

        <div className='w-full'>
          <p className='mb-2'>What's Included</p>
          <input onChange={(e)=>setIncluded(e.target.value)} value={included} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Whats Included' required/>
        </div>

         <div className='w-full'>
          <p className='mb-2'>What's Excluded</p>
          <input onChange={(e)=>setExcluded(e.target.value)} value={excluded} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Whats Excluded' required/>
        </div>

        <div className='w-full'>
          <p className='mb-2'>Destination description</p>
          <textarea onChange={(e)=>setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Write content here' required/>
        </div>

        <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
            <div>
              <p className='mb-2'>Destination category</p>
              <select onChange={(e) => setCategory(e.target.value)} className='w-full px-3 py-2'>
                <option value="Safari">Safari</option>
                <option value="Beach">Beach</option>
                <option value="Hiking">Hiking</option>
                <option value="Camping">Camping</option>
                <option value="Wildlife">Wildlife</option>
                <option value="Cultural">Cultural</option>
                <option value="Historical">Historical</option>
                <option value="City Tour">City Tour</option>
                <option value="Road Trip">Road Trip</option>
                <option value="Mountain Climbing">Mountain Climbing</option>
                <option value="Nature Walk">Nature Walk</option>
                <option value="Bird Watching">Bird Watching</option>
                <option value="Marine Tour">Marine Tour</option>
                <option value="Boat Cruise">Boat Cruise</option>
                <option value="Island Tour">Island Tour</option>
                <option value="Photography">Photography</option>
                <option value="Luxury">Luxury</option>
                <option value="Family">Family</option>
                <option value="Honeymoon">Honeymoon</option>
                <option value="Weekend Getaway">Weekend Getaway</option>
                <option value="Educational">Educational</option>
                <option value="Team Building">Team Building</option>
                <option value="Camping & Bonfire">Camping & Bonfire</option>
                <option value="Water Sports">Water Sports</option>
                <option value="Eco Tourism">Eco Tourism</option>
                <option value="Festival">Festival</option>
                <option value="Religious">Religious</option>
                <option value="Food & Culinary">Food & Culinary</option>
              </select>
            </div>

            {/* <div>
              <p className='mb-2'>Sub category</p>
              <select onChange={(e) => setSubCategory(e.target.value)} className='w-full px-3 py-2'>
                  <option value="Scenes">Scenes</option>
                  <option value="Inspirational">Inspirational</option>
                  <option value="Lifestyle">Lifestyle</option>
              </select>
            </div> */}

            <div>
              <p className='mb-2'>Destination Price</p>
              <input onChange={(e) => setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px]' type="Number" placeholder='25' />
            </div>
        </div>

        <div>
          <p className='mb-2'>Package Type</p>
          <div className='flex gap-3'>
            <div onClick={()=>setSizes(prev => prev.includes("Individual") ? prev.filter( item => item !== "Individual") : [...prev,"Individual"])}>
              <p className={`${sizes.includes("Individual") ? "bg-pink-100" : "bg-slate-200" } px-3 py-1 cursor-pointer`}>Individual</p>
            </div>
            
            <div onClick={()=>setSizes(prev => prev.includes("Group") ? prev.filter( item => item !== "Group") : [...prev,"Group"])}>
              <p className={`${sizes.includes("Group") ? "bg-pink-100" : "bg-slate-200" } px-3 py-1 cursor-pointer`}>Group</p>
            </div>

            {/* <div onClick={()=>setSizes(prev => prev.includes("A3") ? prev.filter( item => item !== "A3") : [...prev,"A3"])}>
              <p className={`${sizes.includes("A3") ? "bg-pink-100" : "bg-slate-200" } px-3 py-1 cursor-pointer`}>A3</p>
            </div> */}

          {/*   
            <div onClick={()=>setSizes(prev => prev.includes("XL") ? prev.filter( item => item !== "XL") : [...prev,"XL"])}>
              <p className={`${sizes.includes("XL") ? "bg-pink-100" : "bg-slate-200" } px-3 py-1 cursor-pointer`}>XL</p>
            </div>

            <div onClick={()=>setSizes(prev => prev.includes("XXL") ? prev.filter( item => item !== "XXL") : [...prev,"XXL"])}>
              <p className={`${sizes.includes("XXL") ? "bg-pink-100" : "bg-slate-200" } px-3 py-1 cursor-pointer`}>XXL</p>
            </div>
         */}
         
          </div>
        </div>

        <div className='flex gap-2 mt-2'>
          <input onChange={() => setBestseller(prev => !prev)} checked={bestseller} type="checkbox" id='bestseller' />
          <label className='cursor-pointer' htmlFor="bestseller">Add to Popular packages</label>
        </div>

        {/* <button 
          className='mt-8 bg-amber-500 text-white px-8 py-3 text-sm rounded-full hover:bg-amber-600 hover:shadow-xl hover:-translate-y-1 transition transform duration-300'
          type="submit">
          ADD
        </button> */}

        <button
            type="submit"
            disabled={loading}
            className={`mt-8 px-8 py-3 rounded-full text-white text-sm flex items-center justify-center gap-2 transition duration-300
            ${loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-amber-500 hover:bg-amber-600 hover:shadow-xl hover:-translate-y-1"
            }`}
            >
            {loading ? (
            <>
            <div className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            Uploading...
            </>
            ) : (
            "ADD"
            )}
        </button>

    </form>
    </>
  )
}
export default Add