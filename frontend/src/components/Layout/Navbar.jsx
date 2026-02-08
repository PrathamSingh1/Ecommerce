import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Search Term: ", searchTerm);
    }
  return (
    <div className='flex mt-5 items-center justify-between w-full gap-4'>
        <div className='flex items-center justify-around gap-20 sm:w-[50%] w-full pl-5'>
            <form onSubmit={handleSearch} className='flex items-center pr-5 w-full border border-neutral-300 shadow-sm rounded-full'>
                <input onChange={(e)=> setSearchTerm(e.target.value)} className='flex items-center justify-center outline-none py-2 px-4  w-full' type="text" placeholder='Search...' value={searchTerm} />
                <button className='cursor-pointer' type='submit'>
                <IoSearchOutline className='h-5 w-5' />
                </button>
            </form>
            <select className='lg:flex hidden appearance-none py-2 px-3 pr-0 border w-1/2 outline-none shadow-sm border-neutral-300 rounded-full' defaultValue="">
                <option value="" disabled>Select</option>
                <option value="new-arrivals">New Arrivals</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="kids">Kids</option>
                <option value="top-wear">Top Wear</option>
                <option value="bottom-wear">Bottom Wear</option>
            </select>
        </div>
        <div className='md:flex hidden items-center lg:gap-8 gap-3'>
            <h3 className='text-sm px-2 py-2 flex-nowrap shrink-0 bg-neutral-200 dark:bg-neutral-800 rounded-full'>New Arrivals</h3>
            <h3 className='text-sm px-2 py-2 bg-neutral-200 dark:bg-neutral-800 rounded-full'>Men</h3>
            <h3 className='text-sm px-2 py-2 bg-neutral-200 dark:bg-neutral-800 rounded-full'>Women</h3>
            <h3 className='text-sm px-2 py-2 bg-neutral-200 dark:bg-neutral-800 rounded-full'>Kids</h3>
            <h3 className='text-sm px-2 py-2 flex-nowrap shrink-0 bg-neutral-200 dark:bg-neutral-800 rounded-full'>Top Wear</h3>
            <h3 className='text-sm px-2 py-2 flex-nowrap shrink-0 bg-neutral-200 dark:bg-neutral-800 rounded-full'>Bottom Wear</h3>
        </div>
    </div>
  )
}

export default Navbar