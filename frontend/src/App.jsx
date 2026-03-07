import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Toaster } from "sonner";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import CollectionPage from "./pages/CollectionPage";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";

const App = () => {
  return (
    <div className="h-screen w-full bg-background text-foreground dark:bg-neutral-900 font-inter">
      <BrowserRouter>
        <Toaster position="top-right" />
        <Header />

        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/collections/:collection" element={<CollectionPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
