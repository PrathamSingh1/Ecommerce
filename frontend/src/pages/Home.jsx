import React from 'react'
import Hero from '../components/Layout/Hero'

const Home = () => {
  return (
    <div className='h-full w-full bg-background text-foreground'>
        <Hero />
        <div className='flex items-center justify-start pl-10 gap-10 mt-5'>
            <div className='h-50 w-100 rounded-4xl'>
                <img className='h-50 w-100 object-center object-cover rounded-4xl' src="https://plus.unsplash.com/premium_photo-1673734626655-0c1dc4be0e9c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className='h-50 w-100 rounded-4xl'>
                <img className='h-50 w-100 object-center object-cover rounded-4xl' src="https://plus.unsplash.com/premium_photo-1760179325525-ec3edff26677?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className='h-50 w-100 rounded-4xl bg-neutral-100 dark:bg-neutral-700 shadow-3xl flex flex-col'>
                <h3 className='text-2xl font-semibold text-center mt-10'>Wear Classy <span className='block text-xl font-bold'>Look Classy</span></h3>
                <button className='px-3 mt-8 py-1 text-sm bg-neutral-800 dark:bg-neutral-800 text-neutral-200 dark:text-neutral-200 mx-auto rounded-full cursor-pointer'>Collection</button>
            </div>
        </div>
    </div>
  )
}

export default Home