import React from 'react'
import Topbar from '../Layout/Topbar'
import Navbar from '../Layout/Navbar'


const Header = () => {
 
  return (
    <div className='p-8'>
        {/* Topbar */}
        <Topbar />
        {/* Navbar */}
        <Navbar />
        {/* Cart Drawer */}
    </div>
  )
}

export default Header