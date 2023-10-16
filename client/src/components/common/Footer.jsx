import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative w-full min-h-[280px] bg-[#29347a] text-[#fff] p-8">
      <img
        src="/assets/images/dot-style.svg"
        alt=""
        loading="lazy"
        className="absolute right-0 bottom-0"
      ></img>
      <div className="max-w-[1300px] mx-auto">
        <div className="flex flex-col md:flex-row justify-around items-center md:items-start gap-12 md:gap-18 my-6">
          <div className="flex flex-col md:items-start items-center text-center md:text-start">
            <div className="">
              <img
                src="/assets/images/logo.png"
                alt=""
                loading="lazy"
                className="h-[120px] pb-[5px]"
              />
              <span className="text-[28px] font-semibold uppercase">
                Ediary
              </span>
            </div>
            <span className="mt-3 text-base max-w-[300px]">
              The Ultimate Guide To Ace SDE Interviews.
            </span>
          </div>
          <div className="flex flex-col text-center text-base md:text-start">
            <p className="mb-2 md:mb-6 text-[24px] text-center md:text-start uppercase">
              Menu
            </p>
            <div className="flex flex-col gap-y-3">
              <Link to="/about">About Us</Link>
              <Link to="/courses">Courses</Link>
              <Link to="/blogs">Blogs</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
          <div className="flex flex-col text-center text-base md:text-start">
            <p className="mb-2 md:mb-6 text-[24px] text-center md:text-start uppercase">
              Services
            </p>
            <div className="flex flex-col gap-y-3">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="term-of-use">Term of Use</Link>
              <Link to="/refund-cancellation-policy">
                Refund & cancellation Policy
              </Link>
            </div>
          </div>
          <div className="w-0 h-[190px] border-r-[1px] border-[#6f7bc7] hidden md:block"></div>
          <div className="text-center md:text-start">
            <p className="mb-2 md:mb-6 text-[24px] uppercase">GET IN TOUCH</p>
            <p>Email: support@ediary.in</p>
          </div>
        </div>
        <div className="mt-4 pt-10 border-t border-[#6f7bc7] text-center">
          Copyright © 2023 Sorting Ediary Technologies Pvt Ltd. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
}
