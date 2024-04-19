import React, { useState } from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {

const [nav,setNav]=useState(false)
const handleNav =()=>{
    setNav(!nav)
}
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white relative z-10'>
        <h1 className='w-full text-3xl font-bold text-[#CD853F]'>Santhosh.</h1>
        <ul className='hidden md:flex'>
            <li className='p-4 cursor-pointer hover:text-[#CD853F] duration-300'><a href="#hero">Home</a></li>
            <li className='p-4 cursor-pointer hover:text-[#CD853F] duration-300'><a href="#About">About</a></li>
            <li className='p-4 cursor-pointer hover:text-[#CD853F] duration-300'><a href="#Education">Education</a></li>
            <li className='p-4 cursor-pointer hover:text-[#CD853F] duration-300'><a href="#Project">Projects</a></li>
            <li className='p-4 cursor-pointer hover:text-[#CD853F] duration-300'><a href="#Contact">Contact</a></li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineMenu size={20}/>: <AiOutlineClose size={20}/>}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-300':'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#CD853F] m-5 pt-2 z-10 inset-2'>Santhosh.</h1>
            <ul onClick={()=> setNav(!nav)} className='uppercase p-4 inset-2'>
            <li className='p-4 cursor-pointer border-b border-gray-600 hover:bg-[#CD853F] text-white duration-300'><a href="#hero">Home</a></li>
            <li className='p-4 cursor-pointer border-b border-gray-600 hover:bg-[#CD853F] text-white duration-300'><a href="#About">About</a></li>
            <li className='p-4 cursor-pointer border-b border-gray-600 hover:bg-[#CD853F] text-white duration-300'><a href="#Education">Education</a></li>
            <li className='p-4 cursor-pointer border-b border-gray-600 hover:bg-[#CD853F] text-white duration-300'><a href="#Project">Projects</a></li>
            <li className='p-4 cursor-pointer border-b border-gray-600 hover:bg-[#CD853F] text-white duration-300'><a href="#Contact">Contact</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
