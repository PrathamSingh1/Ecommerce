import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

const Hero = () => {
  return (
    <div className='h-[70%] w-full flex items-center'>
        <div className='w-1/2 h-full pr-10 pt-10 pl-10'>
            <div className='text-5xl text-neutral-800 dark:text-neutral-200 font-semibold leading-13 mb-5'>
                <h2>Unleash Your Style</h2>
                <h2>Shop the Latest</h2>
                <h2>Trends</h2>
            </div>
            <p className='text-sm text-neutral-400'>Discover the latest trends & express your style effortlessly. Shop exclusive <br /> collections with premium designs, just for you.</p>
            <div className='flex items-center mt-10'>
            <button className='text-sm text-neutral-200 dark:text-neutral-300 rounded-full px-8 py-2 bg-neutral-800 dark:bg-neutral-700 cursor-pointer'>Shop Now</button>
            <div className='p-2 w-fit bg-neutral-800 dark:bg-neutral-700 text-neutral-200 dark:text-neutral-300 rounded-full cursor-pointer'>
                <FiArrowUpRight className='h-5 w-5' />
            </div>
            </div>
            <h3 className='text-xl font-semibold mt-15 pl-10'>25 Million+</h3>
            <div className='flex items-center justify-between pl-10'>
                <p className='text-sm text-neutral-400 w-1/2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque ad ab eum quos eligendi ullam.</p>
                <div className='mt-5 flex items-center'>
                    <div className='p-2 h-15 w-15 rounded-full'>
                        <img className='rounded-full h-full w-full object-center object-cover' src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className='p-2 h-15 w-15 rounded-full -ml-5'>
                        <img className='rounded-full h-full w-full object-center object-cover' src="https://images.unsplash.com/photo-1628563694622-5a76957fd09c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className='p-2 h-15 w-15 rounded-full -ml-5'>
                        <img className='rounded-full h-full w-full object-center object-cover' src="https://plus.unsplash.com/premium_photo-1682095672918-234595db1df8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className='p-2 h-15 w-15 rounded-full -ml-5'>
                        <img className='rounded-full h-full w-full object-center object-cover' src="https://images.unsplash.com/photo-1553984658-d17e19aa281a?q=80&w=684&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className='w-1/2 h-full pr-10 pl-10'>
            <img className='object-center object-cover h-full w-full rounded-4xl' src="https://images.unsplash.com/photo-1613915617430-8ab0fd7c6baf?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
    </div>
  )
}

export default Hero