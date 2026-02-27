import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from 'react-router-dom';
import CartDrawer from './CartDrawer';
import { IoIosSunny } from "react-icons/io";
import { IoMoon } from "react-icons/io5";


const Topbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [open, setOpen] = useState(false);

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  }

  const handleThemeChange = () => {
    const currentTheme = document.documentElement.classList.contains("dark")
      ? "light"
      : "dark"
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", currentTheme);
  }
  return (
    <div className='w-full relative'>
        <div className='flex items-center justify-between'>
            <RxHamburgerMenu onClick={() => setOpen(!open)} className='h-4 w-4 cursor-pointer sm:hidden flex' />
            <h2 className='uppercase sm:flex hidden cursor-pointer font-bold'>Stylehive</h2>
            <div className='flex items-center justify-between gap-10'>
                <div className='sm:flex hidden items-center justify-between gap-5'>
                    <Link to={"/about"}>
                    <p className='cursor-pointer text-sm'>About Us</p>
                    </Link>
                    <Link to={"/#"}>
                    <p className='cursor-pointer text-sm'>FAQ</p>
                    </Link>
                </div>
                <div className='flex items-center justify-between sm:gap-6 gap-3 sm:pr-2 pr-0'>
                    <Link to={"/profile"}>
                    <div className='bg-neutral-200 dark:bg-neutral-800 p-2 rounded-full cursor-pointer'>
                    <AiOutlineUser className='h-4 w-4' />
                    </div>
                    </Link>
                    <div onClick={toggleCartDrawer} className='bg-neutral-200 relative dark:bg-neutral-800 p-2 rounded-full cursor-pointer'>
                    <HiOutlineShoppingBag className='h-4 w-4' />
                    <div className='text-xs absolute px-[5px] py-[0.2px] rounded-full -bottom-[2px] -right-1 bg-neutral-700 text-neutral-200'>2</div>
                    </div>
                    <button onClick={handleThemeChange} className='relative p-4 border border-neutral-300 dark:border-neutral-700 rounded-md flex items-center justify-center cursor-pointer'>
                      <IoIosSunny className='absolute inset-0 size-5 shrink-0 dark:scale-0 scale-100 dark:rotate-45 transition-all duration-300 m-auto' />
                      <IoMoon className='absolute inset-0 size-5 shrink-0 dark:scale-100 scale-0 dark:rotate-0 rotate-45 transition-all duration-300 m-auto' />
                    </button>
                </div>
            </div>
        </div>
        <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
        {open && (
          <div className="absolute flex justify-center inset-x-0 top-10 max-w-[70%] h-[calc(100vh-10rem)] bg-neutral-200 dark:bg-neutral-800 rounded-md shadow-aceternity">
            <div className="md:hidden flex flex-col items-start gap-2 text-sm font-semibold p-4 pt-8 text-neutral-600 hover:text-neutral-500 cursor-pointer w-full h-full">
              <Link to={"/"}>
              <h2 className='text-2xl font-semibold mb-4 tracking-wider text-neutral-800 dark:text-neutral-200'>Stylehive</h2>
              </Link>
              <h2 className='text-lg font-medium text-neutral-800 dark:text-neutral-200'>Menu</h2>
              <Link to={"/new-arrivals"}>
              <h3>New Arrivals</h3>
              </Link>
              <Link to={"/men"}>
              <h3>Men</h3>
              </Link>
              <Link to={"/women"}>
              <h3>Women</h3>
              </Link>
              <Link to={"/kid's"}>
              <h3>Kids</h3>
              </Link>
              <Link to={"/top-wear"}>
              <h3>Top Wear</h3>
              </Link>
              <Link to={"/bottom-wear"}>
              <h3>Bottom Wear</h3>
              </Link>
              <Link to={"/about"}>
              <h3>About</h3>
              </Link>
              <Link to={"/faq"}>
              <h3>FAQ</h3>
              </Link>
            </div>
          </div>
        )}
    </div>
  )
}

export default Topbar