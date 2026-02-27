import React from 'react'
import Topbar from '../Layout/Topbar'
import Navbar from '../Layout/Navbar'


const Header = () => {
 
  return (
    <div className='px-8 pt-8 pb-3  bg-background text-foreground'>
        {/* Topbar */}
        <Topbar />
        {/* Navbar */}
        <Navbar />
    </div>
  )
}

export default Header