import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";


const Topbar = () => {
  return (
    <div className='w-full'>
        <div className='flex items-center justify-between'>
            <RxHamburgerMenu className='h-4 w-4 cursor-pointer' />
            <h2 className='uppercase ml-35'>Stylehive</h2>
            <div className='flex items-center justify-between gap-10'>
                <div className='flex items-center justify-between gap-10'>
                    <p>About Us</p>
                    <p>FAQ</p>
                </div>
                <div className='flex items-center justify-between gap-6 mr-12'>
                    <div className='bg-neutral-200 dark:bg-neutral-800 p-2 rounded-full'>
                    <AiOutlineUser className='h-4 w-4' />
                    </div>
                    <div className='bg-neutral-200 dark:bg-neutral-800 p-2 rounded-full'>
                    <HiOutlineShoppingBag className='h-4 w-4' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar