import React from "react";
import { whyEdiary } from "../../../data/whyEdiary";

export default function HomeWhy() {
  return (
    <div className="relative bg-[#f7f8fc]">
      <img
        src="/assets/images/zigzag-style.png"
        alt=""
        loading="lazy"
        className="absolute left-0 top-16 z-[1]"
      />
      <div className="mx-auto max-w-[1300px] py-12 px-6 md:px-0 z-[100]">
        <div className="w-full text-center md:py-14 py-10">
          <p className="md:text-3xl text-2xl uppercase font-semibold text-[#4066ff]">
            Why Ediary?
          </p>
          <p className="font-black text-[36px] max-w-[36rem] text-center mx-auto py-6 font-rubix">
            Making learning easier and more convenient for you.
          </p>
        </div>
        <div className="grid w-fit justify-center lg:grid-cols-2 xl:grid-cols-3 mx-auto gap-x-6 gap-y-16 ">
          {whyEdiary.map((item, index) => (
            <div className="" key={index}>
              <div
                className="flex flex-col min-h-[350px] max-w-[380px] items-center gap-y-4 px-4 py-12 rounded-lg border-b-[10px] shadow-lg z-[20] hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 bg-white"
                style={{ borderColor: item.color }}
              >
                <div
                  className="grid place-content-center rounded-full p-4"
                  style={{ backgroundColor: item.color }}
                >
                  <img src={item.logo} alt="" loading="lazy" />
                </div>
                <p className="text-lg font-bold text-center">{item.title}</p>
                <p className="text-center max-w-[80%] text-[#82878f]">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
