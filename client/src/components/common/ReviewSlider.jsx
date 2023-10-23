import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Slider from "react-slick";
import { popularBlogs } from "../../data/popularBlogs";

const ReviewCard = ({ item }) => {
  return (
    <div className="flex flex-col min-h-[300px] max-w-[550px] items-center justify-between gap-y-4 px-4 py-12 pt-4 rounded-lg shadow-lg z-[20] hover:shadow-xl bg-white">
      <p className="text-md max-md:text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius hic
        officiis enim necessitatibus dolorum vero odio, nesciunt mollitia
        laboriosam asperiores neque, atque fugit delectus eos voluptatibus
        dignissimos reiciendis odit ut.
      </p>
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-y-4">
          <div className="flex items-center gap-x-4">
            <img
              src={item.banner}
              alt=""
              loading="lazy"
              className="rounded-full h-[40px] aspect-square object-cover"
            />
            <div className="">
              <p className="font-semibold text-sm">Subhajit Samanta</p>
              <p className="text-sm">DSA Batch</p>
            </div>
          </div>

          <div className="flex items-center gap-x-2 pl-3 pr-1">
            {[...Array(item.rating)].map((item, index) => (
              <FaStar className="text-yellow-600 text-[14px]" key={index} />
            ))}
            {[...Array(5 - item.rating)].map((item, index) => (
              <FaRegStar className="text-[#676665] text-[14px] " key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ReviewSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: window.innerWidth > 1000 ? 2 : 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };
  return (
    <div className="bg-[rgba(0,0,255,0.1)] pb-10">
      <div className="mx-auto max-w-[1300px] py-12 px-6 md:px-0 z-[100]">
        <div className="w-full text-center md:py-14 py-10">
          <p className="md:text-5xl text-3xl font-semibold text-[#4066dd]">
            Recent Reviews
          </p>
        </div>
        <div className="w-11/12 mx-auto">
          <Slider {...settings}>
            {popularBlogs.map((item, index) => (
              <ReviewCard item={item} key={index} />
            ))}{" "}
          </Slider>
        </div>
      </div>
    </div>
  );
}
