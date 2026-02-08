import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from './components/Layout/UserLayout';

const App = () => {

  return (
    <div className='h-screen w-full bg-background text-foreground dark:bg-neutral-900 font-inter'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLayout />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App