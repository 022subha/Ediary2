import React from "react";
import { Link } from "react-router-dom";

export default function HomeBanner() {
  return (
    <div className="bg-[#131110] w-[100%] h-[100%] pt-16">
      <div className="absolute w-80 h-80 bg-[rgba(255,255,255,0.5)] blur-[100px] z-0"></div>
      <div className="flex flex-wrap gap-y-20 justify-around items-center max-lg:px-[30px] py-[80px] h-[100%]">
        <div className="flex flex-col items-start max-lg:items-center max-lg:text-center">
          <p className="text-white font-semibold text-[4rem]">Learn From The</p>
          <p className="text-white font-semibold text-[4rem]">Experts</p>
          <span className="text-[#8c8b8b] text-[1.5rem]">
            The Ultimate Guide to Ace Coding Interviews
          </span>
          <Link to="/courses">
            <button className="bg-custom-gradient px-[20px] py-[10px] mt-[20px] rounded-[10px] text-[20px] text-white hover:scale-110 transition ease-in duration-300">
              View Courses
            </button>
          </Link>
        </div>
        <img
          src="/assets/images/banner.png"
          alt=""
          loading="lazy"
          width={500}
          className="rounded-t-[20rem] border border-[8px] border-[rgba(255,255,255,.12)] py-[80px]"
        />
      </div>
    </div>
  );
}
