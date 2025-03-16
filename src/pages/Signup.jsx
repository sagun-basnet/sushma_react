import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    // console.log(`${e.target.name} : ${e.target.value}`);

    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // console.log(formData);
  };

  return (
    <div className="w-full h-screen bg-gradient-to-bl from-pink-300 to-blue-400 flex items-center justify-center">
      <div className="w-[40%] bg-amber-50 h-5/6 flex flex-col items-center justify-center rounded-md shadow-2xl">
        <h1 className="text-2xl text-blue-700 font-semibold font-sans">
          Sign Up to get started today
        </h1>
        <div className="w-full flex flex-col">
          <form onSubmit={handleSubmit} action="">
            <div className="flex flex-col items-center">
              <div className="flex flex-col my-3 gap-2 w-[70%]">
                <label
                  htmlFor="fname"
                  className="text-[16px] font-sans text-stone-700"
                >
                  Full Name
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="name"
                  id="fname"
                  className="outline-0 border-1 border-blue-600 rounded-md py-2 px-2"
                />
              </div>

              <div className="flex flex-col my-3 gap-2 w-[70%]">
                <label
                  htmlFor="username"
                  className="text-[16px] font-sans text-stone-700"
                >
                  Email
                </label>
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  id="username"
                  className="outline-0 border-1 border-blue-600 rounded-md py-2 px-2"
                />
              </div>

              <div className="flex flex-col my-3 gap-2 w-[70%]">
                <label
                  htmlFor="pw"
                  className="text-[16px] font-sans text-stone-700"
                >
                  Password
                </label>
                <input
                  onChange={handleChange}
                  type="password"
                  name="password"
                  id="pw"
                  className="outline-0 border-1 border-blue-600 rounded-md py-2 px-2"
                />
              </div>

              <div className="flex flex-col my-3 gap-2 w-[70%]">
                <button
                  type="submit"
                  className="bg-blue-600 text-white text-center text-xl py-2 rounded-md cursor-pointer"
                >
                  Sign Up
                </button>
              </div>

              <div className="mt-2">
                <p>
                  Have an account?{" "}
                  <Link to="/login" className="text-blue-700">
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
