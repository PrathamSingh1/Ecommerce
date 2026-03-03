import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name || formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters long.";
    }

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    const password = formData.password;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
    if (!password) {
      newErrors.password = "Password is required.";
    } else if (!passwordRegex.test(password)) {
      newErrors.password =
        "Password must contain uppercase, lowercase, number, special char, and be 6+ chars long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Signup Data:", formData);
      alert("Signup successful!");
    }
  };

  return (
    <div className="bg-blue-300 min-h-screen w-full flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="flex flex-col items-center w-full md:w-1/2 bg-white min-h-screen py-5 px-5 md:px-0">
        {/* Company Logo */}
        <div className="w-full mb-5 md:mb-10">
          <Link to={`/`}>
            <h1 className="font-medium text-2xl px-5 md:px-10 text-center md:text-left">
              Stylehive
            </h1>
          </Link>
        </div>

        {/* Card */}
        <div className="flex-grow flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-4xl mb-4 text-center font-medium">
            Welcome back!
          </h2>
          <p className="text-gray-600 text-center text-[15px] md:text-[16px] px-4">
            The faster you fill up, the faster you get
          </p>

          <div className="mt-8 w-full max-w-sm sm:max-w-md md:w-[400px] px-4">
            <form onSubmit={handleSubmit} className="flex flex-col">
              {/* Name */}
              <label className="text-[16px] font-medium" htmlFor="name">
                Name
              </label>
              <input
                className="text-[16px] border px-3 py-2"
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <div className="h-5">
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <label className="text-[16px] font-medium" htmlFor="email">
                Email
              </label>
              <input
                className="text-[16px] border px-3 py-2"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <div className="h-5">
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              {/* Password */}
              <label className="text-[16px] font-medium" htmlFor="password">
                Password
              </label>
              <input
                className="text-[16px] border px-3 py-2"
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <div className="h-5 mb-5">
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}
              </div>

              {/* Checkbox */}
              <div className="flex flex-wrap gap-2 items-center justify-between mb-3 mt-2">
                <label className="flex items-center gap-2">
                  <input
                    className="scale-125 accent-black"
                    type="checkbox"
                    id="remember"
                  />
                  <p className="text-[14px]">Remember me</p>
                </label>
                <p className="text-[14px] cursor-pointer text-gray-600 hover:underline">
                  Forget Password
                </p>
              </div>

              {/* Signup Button */}
              <button
                type="submit"
                className="bg-black text-white px-2 py-3 cursor-pointer text-[16px] mb-3 hover:bg-gray-800 transition"
              >
                Signup
              </button>

              {/* Google Signup */}
              <div className="bg-white text-black px-2 py-3 cursor-pointer text-[16px] border flex items-center justify-center hover:bg-gray-100 transition select-none">
                <img className="w-6 mr-3" src="./google.svg" alt="" />
                Signup with Google
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="py-6">
          <div className="flex items-center gap-2 justify-center">
            <h3 className="text-gray-500 text-[15px]">
              Already have an account?
            </h3>
            <Link to={"/login"}>
              <button className="text-black font-medium cursor-pointer hover:underline">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 h-[300px] md:h-auto">
        <div className="w-full bg-[url('https://images.unsplash.com/photo-1609084413848-4808dfe1d3cf?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=687')] bg-cover bg-center h-full text-white relative">
          <div className="h-full w-full relative flex flex-col justify-between">
            <div className="absolute top-5 right-5 md:right-10">
              <h1 className="text-3xl md:text-4xl">Own the Look</h1>
            </div>
            <div className="absolute left-5 md:left-20 bottom-8 md:bottom-10">
              <h2 className="text-2xl md:text-4xl font-medium mb-4 md:mb-10">
                Style Meets You
              </h2>
              <p className="text-md md:text-md font-light w-[90%] md:w-[80%] opacity-80">
                Where every click brings you closer to styles that speak your
                confidence, trends that match your energy, and outfits that make
                every moment yours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
