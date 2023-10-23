import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { MdLocationOn, MdMail, MdMailOutline } from "react-icons/md";

export default function Contact() {
  return (
    <div className="pt-20">
      <div className="banner text-white max-sm:pt-10 max-sm:justify-start">
        <p className="text-[50px] w-[80vw] font-bold max-sm:text-center max-sm:w-[80vw] ">
          Get In Touch
        </p>
        <p className="w-[80vw] text-[25px] max-sm:text-center max-sm:w-[80vw] ">
          The Ultimate Guide to Ace SDE Interviews.
        </p>
      </div>
      <div className="w-[80vw] mx-auto bg-white shadow-custom rounded-xl overflow-hidden translate-y-[-100px] flex flex-col lg:flex-row justify-between">
        <div className="w-3/5 p-[30px] max-lg:w-[100%] ">
          <div className="m-2.5 flex flex-col max-sm:gap-[10px] sm:flex-row items-center justify-between">
            <h3 className="text-[30px] max-sm:text-center">
              Send us a message
            </h3>
            <MdMailOutline className="text-[#4066ff] text-[40px]" />
          </div>
          <form className="flex flex-col">
            <ul className="flex flex-wrap justify-between gap-[20px] contact-form-style">
              <li className="flex flex-col w-[100%] lg:w-[46%] relative my-[15px]">
                <input
                  type="text"
                  id="name"
                  className="h-[40px] border-b border-black outline-none"
                />
                <label
                  htmlFor="name"
                  className="absolute top-[50%] -translate-y-[50%] duration-500 pointer-events-none "
                >
                  Name
                </label>
              </li>
              <li className="flex flex-col w-[100%] lg:w-[46%] relative my-[15px]">
                <input
                  type="email"
                  id="email"
                  className="h-10 border-b border-black outline-none"
                />
                <label
                  htmlFor="email"
                  className="absolute top-[50%] -translate-y-[50%] duration-500 pointer-events-none "
                >
                  Email
                </label>
              </li>
              <li className="flex flex-col w-[100%] lg:w-[46%] relative my-[15px]">
                <input
                  type="text"
                  id="phone"
                  className="h-10 border-b border-black outline-none"
                />
                <label
                  htmlFor="phone"
                  className="absolute top-[50%] -translate-y-[50%] duration-500 pointer-events-none "
                >
                  Phone Number
                </label>
              </li>
              <li className="flex flex-col w-[100%] lg:w-[46%] relative my-[15px]">
                <input
                  type="text"
                  id="subject"
                  className="h-10 border-b border-black outline-none"
                />
                <label
                  htmlFor="subject"
                  className="absolute top-[50%] -translate-y-[50%] duration-500 pointer-events-none "
                >
                  Subject
                </label>
              </li>
              <li className="flex flex-col w-[100%] relative my-[15px]">
                <input
                  id="message"
                  className="h-10 border-b border-black outline-none"
                />
                <label
                  htmlFor="message"
                  className="absolute top-[50%] -translate-y-[50%] duration-500 pointer-events-none "
                >
                  Message
                </label>
              </li>
            </ul>
            <button
              type="submit"
              className="max-lg:w-[100%] max-lg:justify-center px-[20px] py-[15px] bg-custom-gradient rounded-lg text-white text-[25px] flex items-center gap-[20px] self-end mt-[50px] "
            >
              <span>Submit</span>
              <FaPaperPlane />
            </button>
          </form>
        </div>
        <div className="bg-custom-gradient w-[100%] lg:w-2/5 flex flex-col p-[20px]">
          <h3 className="mx-[10px] mt-[20px] mb-[50px] text-white text-center text-[30px]">
            Contact Information
          </h3>
          <div className="flex flex-col items-center gap-[10px] text-white text-[20px] gap-y-10">
            <div className="flex flex-col items-center gap-y-2">
              <MdMail className="text-[60px] p-[10px] rounded-md bg-[#657bd4]" />
              <span className="text-center">support@ediary.in</span>
            </div>
            <div className="flex flex-col items-center gap-y-2">
              <MdLocationOn className="text-[60px] p-[10px] rounded-md bg-[#657bd4]" />
              <span className="text-center">
                IIEST, Shibpur <br /> Botanic Garden, Howrah-711103
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
