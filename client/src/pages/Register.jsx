import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setSignupData } from "../redux/slices/authSlice";
import { register } from "../services/operations/authAPI";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPass, setShowPass] = useState(false);
  const [showConPass, setShowConPass] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { firstName, lastName, email, password, confirmPassword } = formData;

  // Handle input fields, when some value changes
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const isStrongPassword = (password) => {
    const strongPasswordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
    return strongPasswordRegex.test(password);
  };

  // Handle Form Submission
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!isStrongPassword(password)) {
      toast.error("Please enter a strong password", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords Do Not Match", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    dispatch(setSignupData(formData));
    dispatch(register(formData, navigate));

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="pt-20 w-[100%]">
      <div className="max-w-[1300px] mx-auto pt-8 pb-14 flex flex-col-reverse xl:flex-row justify-evenly items-center gap-y-12 xl:gap-y-0 md:gap-x-12">
        <div className="w-11/12 mx-auto md:mx-0 max-w-[500px]">
          <p className="text-[32px] font-semibold pb-4 text-[#4066ff] text-center">
            Join the millions learning to code with Ediary
          </p>
          <p className="text-[20px] text-[#abadb8] text-center">
            Build skills for today, tomorrow, and beyond.
          </p>
          <form
            className="flex flex-wrap py-12 gap-y-6"
            onSubmit={handleOnSubmit}
          >
            <div className="flex w-[100%] flex-col sm:flex-row justify-between gap-x-10 gap-y-6">
              <div className="flex flex-col items-start">
                <label className="after:content-['*'] after:text-[#f00]">
                  First Name
                </label>
                <input
                  required
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={handleOnChange}
                  placeholder="Enter first name"
                  className="bg-slate-300 h-[44px] rounded-md pl-4 max-sm:w-[100%]"
                />
              </div>
              <div className="flex flex-col items-start">
                <label className="after:content-['*'] after:text-[#f00]">
                  Last Name
                </label>
                <input
                  required
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={handleOnChange}
                  placeholder="Enter last name"
                  className="bg-slate-300 h-[44px] rounded-md pl-4 max-sm:w-[100%]"
                />
              </div>
            </div>
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
            <div className="flex flex-col sm:flex-row w-[100%] justify-between gap-x-10 gap-y-6">
              <div className="flex flex-col items-start relative">
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
                  className="bg-slate-300 h-[44px] rounded-md pl-4 max-sm:w-[100%]"
                />
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
              <div className="flex flex-col items-start relative">
                <label className="after:content-['*'] after:text-[#f00]">
                  Confirm Password
                </label>
                <input
                  required
                  type={showConPass ? "text" : "password"}
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleOnChange}
                  placeholder="Confirm password"
                  className={`bg-slate-300 h-[44px] rounded-md pl-4 max-sm:w-[100%] ${
                    confirmPassword
                      ? confirmPassword === password
                        ? "outline-[#0f0]"
                        : "outline-[#f00]"
                      : "outline-0"
                  }`}
                />
                <div
                  className="absolute right-2 top-9 cursor-pointer"
                  onClick={() => {
                    setShowConPass(!showConPass);
                  }}
                >
                  {showConPass ? (
                    <AiFillEyeInvisible className="text-xl" />
                  ) : (
                    <AiFillEye className="text-xl" />
                  )}
                </div>
              </div>
            </div>
            <button className="bg-custom-gradient text-white w-full py-[14px] rounded-lg">
              Create Account
            </button>
          </form>
          <p className="text-center -my-3">
            Already have an account?{" "}
            <Link to="/login" className="text-[#4066ff] underline">
              Sign In
            </Link>
          </p>
        </div>
        <div className="hidden xl:block border-2 h-[550px] w-0"></div>
        <div className="w-11/12 mx-auto md:mx-0 max-w-[500px]">
          <img
            src="/assets/images/register-banner.avif"
            alt=""
            className="rounded-md object-cover h-[500px] w-full"
          />
        </div>
      </div>
    </div>
  );
}
