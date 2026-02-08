import React from 'react'
import { IoMdClose } from 'react-icons/io';
import CartContents from '../Cart/CartContents';

const CartDrawer = ({drawerOpen, toggleCartDrawer}) => {
    
  return (
    <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-neutral-100 dark:bg-neutral-800 shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className='flex justify-end p-4'>
            <button className='cursor-pointer' onClick={toggleCartDrawer}>
                <IoMdClose className='h-5 w-5' />
            </button>
        </div>
        <div className='flex-grow p-4 overflow-y-auto'>
            <h2 className='text-2xl font-semibold'>Shopping Bag</h2>
            {/* Component for Cart Showing */}
            <CartContents />
        </div>
        {/* Checkout button */}
        <div className='p-4 sticky bottom-5'>
            <button className='w-full bg-neutral-800 dark:bg-neutral-200 text-neutral-200 dark:text-neutral-800 py-3 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-500 transition cursor-pointer'>Checkout</button>
            <p className='text-sm tracking-tighter text-gray-500 dark:text-gray-400 mt-2 text-center'>Shipping, taxes, and discount codes calculated at checkout.</p>
        </div>
    </div>
  )
}

export default CartDrawer