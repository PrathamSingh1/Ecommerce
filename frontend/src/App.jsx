import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from './components/Layout/UserLayout';
import { IoIosSunny } from "react-icons/io";
import { IoMoon } from "react-icons/io5";

const App = () => {

  const handleThemeChange = () => {
    const currentTheme = document.documentElement.classList.contains("dark")
      ? "light"
      : "dark"
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", currentTheme);
  }
  return (
    <div className='h-screen w-full bg-background text-foreground dark:bg-neutral-900 font-inter'>
      <BrowserRouter>
      <button onClick={handleThemeChange} className='absolute top-8 p-4 border border-neutral-200 dark:border-neutral-800 rounded-md right-7 flex items-center justify-center cursor-pointer'>
        <IoIosSunny className='absolute inset-0 size-5 shrink-0 dark:scale-0 scale-100 dark:rotate-45 transition-all duration-300 m-auto' />
        <IoMoon className='absolute inset-0 size-5 shrink-0 dark:scale-100 scale-0 dark:rotate-0 rotate-45 transition-all duration-300 m-auto' />
      </button>
        <Routes>
          <Route path="/" element={<UserLayout />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App