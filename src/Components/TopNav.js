import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag} from 'react-icons/ai'
import {BsFillCartFill, BsPerson} from 'react-icons/bs'

export default function TopNav() {
  const [sideNav, setSideNav] = useState(false)
  return (
    //specify custom value [value]
    <div className='max-w-[1520] mx-auto flex justify-between items-center p-4 bg-gray-200'>
        <div className='flex items-center'>
            <div onClick={()=>setSideNav(!sideNav)} className='cursor-pointer'>
                <AiOutlineMenu size={25}/>
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-[8px]'>Yum
                <span>Eats</span>
            </h1>
            <div className='hidden lg:flex items-center bg-gray-300 rounded-lg p-1 text-[14px]'>
              <p className='bg-orange-700 text-white rounded-full p-2 text-bold'>Free</p>
              <p className='p-2 text-bold'>Delivery</p>
            </div>
        </div>
        <div className='bg-white rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
          <AiOutlineSearch size={25}/>
          <input className='bg-transparent p-2 w-full focus:outline-none'
            type='text'
            placeholder='search meals'
          />
        </div>
        <button className='bg-orange-700 text-white hidden md:flex items-center py-2 rounded-full text-bold'>
          <div className='pr-3'>
            <BsFillCartFill size={20}/> 
          </div>
          Cart
        </button>
          {
            sideNav ? (
              <div className='bg-black/60 fixed w-full h-screen z-10 top-0 left-0'></div>
            ):("")
          }
          <div className={
            //duration of 200 wont work because its a quick transition.
            //With duration-200, the transition is so fast that the browser may skip rendering frames, so it looks like it “sticks.”
            //With duration-300, the extra time makes the change visible, so it looks like it works — but really you’re just seeing the abrupt jump more clearly.
            sideNav ? 
          'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' 
            : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
          </div>
    </div>
  )
}
