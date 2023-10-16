import React from "react";
import { Link } from "react-router-dom";

export default function InstructorDetail() {
  return (
    <div className="relative overflow-y-hidden bg-[#f7f8fc]">
      <img
        src="/assets/images/background/bg1.svg"
        alt=""
        className="absolute top-0 left-0 h-[850px] w-[100vw] object-cover md:-translate-y-72 -translate-y-52 "
      />
      <div className="relative mx-auto max-w-[1300px] px-6 py-12">
        <div className="flex items-center justify-between py-6">
          <p class="section_heading md:text-[42px] text-[24px] font-bold">
            Meet your <span class="text-[#4066ff]">Instructor</span>
          </p>
          <Link to="/about">
            <button class="cursor-pointer rounded-md bg-custom-gradient text-[#fff] xl:text-lg text-sm border md:px-7 md:py-3 px-4 py-2 text-sm md:text-base whitespace-nowrap">
              Know more
            </button>
          </Link>
        </div>
        <div class="h-[1px] w-full bg-[#4066ff]"></div>
        <div class="space-y-4 py-16">
          <div class="mx-auto h-52 w-52 overflow-hidden rounded-full md:h-64 md:w-64">
            <img src="/assets/images/about.jpg" alt="" />
          </div>
          <div class="text-center">
            <p class="text-3xl font-bold">Subhajit Samanta</p>
            <p class="text-2xl">IIEST, Shibpur</p>
            <p class="text-2xl">Founder, Ediary</p>
          </div>
        </div>
      </div>
    </div>
  );
}
