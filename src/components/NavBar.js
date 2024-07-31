import React, { useState } from 'react'
import { AiOutlineArrowUp, AiOutlineClose, AiOutlineHeart, AiOutlineMenu, AiOutlineQuestion, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineStar, AiOutlineTruck, AiOutlineUserAdd, AiOutlineWallet } from 'react-icons/ai'

const NavBar = () => {
    const [nav, setNav] = useState(false);
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        <div className='flex items-center'>
         <div className='cursor-pointer' onClick={()=> setNav(!nav)}>
            <AiOutlineMenu size={30}/>
            </div>
         <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Best <span className='font-bold'>Eats</span></h1>
         <div className='hidden lg:flex text-[14px] bg-gray-200 rounded-full p-1 '>
            <p className='p-2 bg-black text-white rounded-full font-bold'>Delivery</p>
            <p className='p-2 font-bold'>Pickup</p>
        </div>
       </div>
       <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25} className='cursor-pointer'/>
        <input className='bg-transparent rounded-full p-2 w-full focus:outline-none' type='text' placeholder='search food'/>
       </div>
       <button className='bg-black text-white font-bold  hidden md:flex items-center py-2 rounded-full'>
        <AiOutlineShoppingCart className='mr-2'  size={25}/> Cart
       </button>

       {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
       

       <div  className={nav ? 'bg-white fixed w-[300px] duration-300 h-screen z-10 top-0 left-0' : 'bg-white fixed w-[300px] duration-300 h-screen z-10 top-0 left-[-100%]'}>
        <AiOutlineClose onClick={()=> setNav(!nav)} size={25} className='absolute right-4 top-4 cursor-pointer duration-300'/>
        <h2 className='text-2xl p-4'>Best <span className='font-bold'>Eats</span></h2>
        <ul>
            <li className='text-xl py-4 flex ml-4 cursor-pointer'><AiOutlineTruck size={25} className='mr-4 '/> Orders</li>
            <li className='text-xl py-4 flex ml-4 cursor-pointer'><AiOutlineHeart size={25} className='mr-4 '/>Favourites</li>
            <li className='text-xl py-4 flex ml-4 cursor-pointer'><AiOutlineWallet size={25} className='mr-4 '/> Wallet</li>
            <li className='text-xl py-4 flex ml-4 cursor-pointer'><AiOutlineQuestion size={25} className='mr-4 '/> Help</li>
            <li className='text-xl py-4 flex ml-4 cursor-pointer'><AiOutlineArrowUp size={25} className='mr-4 '/> Promotions</li>
            <li className='text-xl py-4 flex ml-4 cursor-pointer'><AiOutlineStar size={25} className='mr-4 '/> Best One</li>
            <li className='text-xl py-4 flex ml-4 cursor-pointer'><AiOutlineUserAdd size={25} className='mr-4 '/> Invite Friends</li>
        </ul>
       </div>

    </div>
    
  )
}

export default NavBar