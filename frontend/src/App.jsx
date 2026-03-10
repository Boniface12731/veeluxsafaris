import React from 'react'
import { Route, Routes } from 'react-router-dom'
//import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Collection from './pages/Collection.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact'
import Cart from './pages/Cart.jsx'
import Product from './pages/Product.jsx'
import Login from './pages/Login.jsx'
import PlaceOrder from './pages/PlaceOrder.jsx'
import Orders from './pages/Orders.jsx'
import Footer from './components/Footer.jsx'
import SearchBar from './components/SearchBar'
import TopBar from './components/TopBar.jsx'
import ForgotPassword from './pages/ForgotPassword.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  

import lionsHero from '../src/assets/lionsHero.png'
import diani from '../src/assets/diani.png'


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'
    //  style={{backgroundImage: `url(${lionsHero})`,}}
    >
            
    <ToastContainer/>
      {/*<Navbar/>*/}
      <TopBar/>
     <SearchBar/>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/home' element={<Home />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/forgot-password' element={<ForgotPassword/>} />
      </Routes>
      <Footer/>
    </div>
  )
}
export default App
