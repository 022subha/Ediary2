import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/operations/authAPI";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData, navigate));
  };

  return (
    <div className="pt-20 w-[100%]">
      <div className="max-w-[1300px] mx-auto pt-8 pb-14 flex flex-col-reverse xl:flex-row-reverse justify-evenly items-center gap-y-12 xl:gap-y-0 md:gap-x-12">
        <div className="w-11/12 mx-auto md:mx-0 max-w-[500px]">
          <p className="text-[36px] font-semibold pb-2 text-[#4066ff] text-center">
            Welcome to Ediary
          </p>
          <form
            className="flex flex-wrap py-6 gap-y-6"
            onSubmit={handleOnSubmit}
          >
            <div className="flex flex-col items-start w-[100%]">
              <label className="after:content-['*'] after:text-[#f00]">
                Email
              </label>
              <input
                required
                type="email"
                name="email"
                value={email}
                onChange={handleOnChange}
                placeholder="Enter email"
                className="w-full bg-slate-300 h-[44px] rounded-md px-4"
              />
            </div>
            <div className="flex flex-col items-start relative w-[100%]">
              <label className="after:content-['*'] after:text-[#f00]">
                Password
              </label>
              <input
                required
                type={showPass ? "text" : "password"}
                name="password"
                value={password}
                onChange={handleOnChange}
                placeholder="Enter password"
                className="bg-slate-300 h-[44px] rounded-md pl-4 w-[100%]"
              />
              <Link
                to="/forgot-password"
                className="text-sm text-[#4066ff] underline pt-2 self-end"
              >
                Forgot Password?
              </Link>
              <div
                className="absolute right-2 top-9 cursor-pointer"
                onClick={() => {
                  setShowPass(!showPass);
                }}
              >
                {showPass ? (
                  <AiFillEyeInvisible className="text-xl" />
                ) : (
                  <AiFillEye className="text-xl" />
                )}
              </div>
            </div>

            <button className="bg-custom-gradient text-white w-full py-[14px] rounded-lg  ">
              Sign In
            </button>
          </form>
          <div className="flex items-center justify-around gap-x-4">
            <div className="w-1/3 border-b-[1px] border-black"></div>
            <p>OR</p>
            <div className="w-1/3 border-b-[1px] border-black"></div>
          </div>
          <div className="flex gap-x-3 my-6 px-[15px] py-[10px] rounded-xl cursor-pointer w-fit mx-auto border-2 items-center justify-center shadow-lg">
            <img src="/assets/images/google.svg" alt="" className="h-[30px]" />
            <p className="text-lg">Sign In with Google</p>
          </div>

          <p className="text-center">
            New to Ediary?{" "}
            <Link to="/register" className="text-[#4066ff] underline">
              Sign Up
            </Link>
          </p>
        </div>
        <div className="hidden xl:block border-2 h-[550px] w-0"></div>
        <div className="w-11/12 mx-auto md:mx-0 max-w-[500px]">
          <img
            src="/assets/images/login-banner.avif"
            alt=""
            className="rounded-md object-cover h-[500px] w-full"
          />
        </div>
      </div>
    </div>
  );
}
