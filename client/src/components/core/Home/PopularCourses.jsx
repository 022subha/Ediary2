import React from "react";
import { BiRupee } from "react-icons/bi";
import {
  FaRegStar,
  FaStar,
  FaStarHalfAlt,
  FaUserClock,
  FaVideo,
} from "react-icons/fa";
import { MdReadMore } from "react-icons/md";
import { Link } from "react-router-dom";
import { popularCourses as courses } from "../../../data/popularCourses";

const CourseCard = ({ item }) => {
  return (
    <Link to="" className="">
      <div
        className="flex flex-col min-h-[490px] max-w-[480px] items-center gap-y-4 px-4 py-12 pt-4 rounded-lg  border-[2px] border-b-[10px] shadow-lg shadow-inner z-[20] hover:shadow-xl"
        style={{
          borderColor: item.color,
        }}
      >
        <img src={item.banner} alt="" loading="lazy" className="rounded-md" />
        <div className="">
          <p className="text-2xl font-bold text-center">{item.title}</p>
          <p className="text-center max-w-[80%] text-[#82878f] mx-auto my-4"></p>
        </div>
        <div className="flex items-center w-11/12 justify-around flex-wrap gap-x-10 mx-auto">
          <p className="flex items-center gap-x-3 text-[18px]">
            <FaVideo className="text-[22px]" />
            {item.lectureCount} lectures
          </p>
          <p className="flex items-center gap-x-3 text-[18px]">
            <FaUserClock className="text-[22px]" />
            {item.playbackTime} total hours
          </p>
        </div>
        <div className="flex flex-wrap items-center text-[20px] justify-center">
          <p className="text-yellow-600">{item.rating.toFixed(1)}</p>
          <div className="flex items-center gap-x-2 pl-3 pr-1">
            {[...Array(Math.floor(item.rating))].map((item, index) => (
              <FaStar className="text-yellow-600 text-[24px]" key={index} />
            ))}
            {item.rating !== Math.floor(item.rating) && (
              <FaStarHalfAlt className="text-yellow-600 text-[24px]" />
            )}
            {[...Array(5 - Math.ceil(item.rating))].map((item, index) => (
              <FaRegStar className="text-[#676665] text-[24px] " key={index} />
            ))}
          </div>
          <p>({item.ratingCount} Ratings)</p>
        </div>
        <p className="flex items-center mt-1 text-[28px] text-[#f00]">
          <BiRupee />
          {item.price}
        </p>
      </div>
    </Link>
  );
};

export default function PopularCourses() {
  return (
    <div className="">
      <div className="mx-auto max-w-[1300px] py-12 px-6 md:px-0 z-[100]">
        <div className="w-full text-center md:py-14 py-10">
          <p className="md:text-5xl text-3xl font-semibold text-[#4066ff]">
            Popular Courses
          </p>
        </div>
        <div className="   grid w-fit justify-center lg:grid-cols-1 xl:grid-cols-3 mx-auto gap-x-6 gap-y-16 ">
          {courses.map((item, index) => (
            <CourseCard item={item} key={index} />
          ))}
        </div>
        <Link to="/courses" className="mt-16 flex items-center justify-center">
          <button className="flex items-center gap-x-3 text-center px-[20px] py-[10px] rounded-md bg-custom-gradient text-[#fff] hover:scale-110 transition-all duration-300 ease-in">
            <span className="text-2xl">View More</span>
            <MdReadMore className="text-3xl" />
          </button>
        </Link>
      </div>
    </div>
  );
}
