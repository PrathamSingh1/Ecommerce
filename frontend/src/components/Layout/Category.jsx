import React from 'react'
import { Link } from 'react-router-dom'
import NewArrivals from '../Products/NewArrivals'

const Category = () => {
  return (
    <div className='w-full bg-background text-foreground pt-20'>
        <h2 className='text-3xl font-semibold pl-10'>Our Category</h2>
        <div className='flex items-center justify-center pl-10 gap-10 mt-10'>
            <div className='h-130 w-100 rounded-4xl'>
                <div className='bg-[url("https://images.unsplash.com/photo-1635205383325-aa3e6fb5ba55?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] h-130 w-100 bg-center bg-cover rounded-4xl'>
                    <div className='flex items-center justify-center h-full'>
                        <Link to={"#"} className='text-md w-1/2 justify-center text-neutral-800 font-bold bg-neutral-300 h-10 flex items-center rounded-lg'>Men Collection</Link>
                    </div>
                </div>
            </div>
            <div className='h-140 w-100 rounded-4xl'>
                <div className='bg-[url("https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] h-140 w-100 bg-center bg-cover rounded-4xl'>
                    <div className='flex items-center justify-center h-full'>
                        <Link to={"#"} className='text-md w-1/2 justify-center text-neutral-800 font-bold bg-neutral-300 h-10 flex items-center rounded-lg'>Women Collection</Link>
                    </div>
                </div>
            </div>
            <div className='h-130 w-100 rounded-4xl'>
                <div className='bg-[url("https://plus.unsplash.com/premium_photo-1707816501026-e618c34026da?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] h-130 w-100 bg-center bg-cover rounded-4xl'>
                    <div className='flex items-center justify-center h-full'>
                        <Link to={"#"} className='text-md w-1/2 justify-center text-neutral-800 font-bold bg-neutral-300 h-10 flex items-center rounded-lg'>Kid Collection</Link>
                    </div>
                </div>
            </div>
        </div>
        <NewArrivals />
    </div>
  )
}

export default Category