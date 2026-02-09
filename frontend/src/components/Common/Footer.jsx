import React from 'react'
import { Link } from 'react-router-dom'
import { TbBrandMeta } from 'react-icons/tb'
import { IoLogoInstagram } from 'react-icons/io'
import { RiTwitterXLine } from 'react-icons/ri'
import { FiPhoneCall } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="bg-neutral-100 dark:bg-neutral-800 py-12 pl-12">
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 lg:px-0 px-4 gap-8'>
            <div>
                <h3 className='text-lg text-neutral-800 dark:text-neutral-500 font-semibold'>Newsletter</h3>
                <p className='text-neutral-500 dark:text-neutral-400 mb-4'>Be the first to hear about new products, exclusive events, and online offers.</p>
                <p className='font-medium text-sm text-neutral-500 mb-6'>Sign up and get 10% off your first order.</p>
                <form className='flex'>
                    <input className='p-3 w-full text-sm border-t border-l border-b border-neutral-300 dark:border-neutral-600 rounded-l-md outline-none' type="email" placeholder='Enter your email' required />
                    <button className='bg-neutral-900 text-neutral-500  dark:text-neutral-500 cursor-pointer px-6 py-3 text-sm rounded-r-md hover:bg-gray-800 dark:hover:bg-neutral-800 transition-all' type='submit'>Subscribe</button>
                </form>
            </div>
            {/* Shop Links */}
            <div>
                <h3 className='text-lg text-neutral-500 mb-4'>Shop</h3>
                <ul className='space-y-2 text-neutral-600'>
                    <li>
                        <Link className='hover:text-neutral-500 dark:text-neutral-400 transition-colors' to={"#"}>Men's Top Wear</Link>
                    </li>
                    <li >
                        <Link className='hover:text-neutral-500 dark:text-neutral-400 transition-colors' to={"#"}>Women's Top Wear</Link>
                    </li>
                    <li >
                        <Link className='hover:text-neutral-500 dark:text-neutral-400 transition-colors' to={"#"}>Men's Bottom Wear</Link>
                    </li> 
                    <li >
                        <Link className='hover:text-neutral-500 dark:text-neutral-400 transition-colors' to={"#"}>Women's Bottom Wear</Link>
                    </li> 
                </ul>
            </div>
            {/* Support Links */}
            <div>
                <h3 className='text-lg text-neutral-500 mb-4'>Shop</h3>
                <ul className='space-y-2 text-neutral-500'>
                    <li>
                        <Link className='hover:text-neutral-500 dark:text-neutral-400 transition-colors' to={"#"}>Contact Us</Link>
                    </li>
                    <li >
                        <Link className='hover:text-neutral-500 dark:text-neutral-400 transition-colors' to={"#"}>About Us</Link>
                    </li>
                    <li >
                        <Link className='hover:text-neutral-500 dark:text-neutral-400 transition-colors' to={"#"}>FAQ's</Link>
                    </li> 
                    <li >
                        <Link className='hover:text-neutral-500 dark:text-neutral-400 transition-colors' to={"#"}>Features</Link>
                    </li> 
                </ul>
            </div>

            {/* Follow Links */}
            <div>
                <h3 className='text-lg text-neutral-500 dark:text-neutral-400 mb-4'>Follow Us</h3>
                <div className='flex items-center space-x-4 mb-6'>
                    <a className='hover:text-gray-300' href="https://www.facebook.com" target='_blank' rel='noopener noreferrer'>
                        <TbBrandMeta className='h-5 w-5' />
                    </a>
                    <a className='hover:text-gray-300' href="https://www.facebook.com" target='_blank' rel='noopener noreferrer'>
                        <IoLogoInstagram className='h-5 w-5' />
                    </a>
                    <a className='hover:text-gray-300' href="https://www.facebook.com" target='_blank' rel='noopener noreferrer'>
                        <RiTwitterXLine className='h-4 w-4' />
                    </a>
                </div>
                <p className='text-neutral-500 dark:text-neutral-400'>Call Us</p>
                <p>
                    <FiPhoneCall className='inline-block mr-2' />
                    0123-456-789
                </p>
            </div>
        </div>
            {/* Footer Bottom */}
            <div className='container mx-auto mt-12 px-4 lg:px-0 border-t border-neutral-200 pt-6'>
                <p className='text-neutral-500 text-sm tracking-tighter text-center'>
                   © 2026, Pratham Singh. All Rights Reserved.
                </p>
            </div>
    </footer>                                       
  )
}

export default Footer