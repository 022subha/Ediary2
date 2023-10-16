import React from "react";
import { MdReadMore } from "react-icons/md";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { popularBlogs as blogs } from "../../../data/popularBlogs";

const BlogCard = ({ item, index }) => {
  return (
    <Link to={item.route} className="" key={index}>
      <div
        className="flex flex-col min-h-[300px] max-w-[480px] items-center gap-y-4 px-4 py-12 pt-4 rounded-lg  shadow-lg shadow-inner z-[20] hover:shadow-xl bg-white"
        style={{
          borderColor: item.color,
        }}
      >
        <img src={item.banner} alt="" loading="lazy" className="rounded-md" />
        <div className="">
          <p className="text-2xl font-bold text-center">{item.title}</p>
          <p className="text-center max-w-[80%] text-[#82878f] mx-auto my-4"></p>
        </div>
      </div>
    </Link>
  );
};

export default function PopularBlogs() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow:
      window.innerWidth > 1300 ? 3 : window.innerWidth > 800 ? 2 : 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className="bg-[#f7f8fc]">
      <div className="mx-auto max-w-[1300px] py-12 px-6 md:px-0 z-[100]">
        <div className="w-full text-center md:py-14 py-10">
          <p className="md:text-5xl text-3xl font-semibold text-[#4066aa]">
            Recent Blogs
          </p>
        </div>
        <div className="w-11/12 mx-auto">
          <Slider {...settings}>
            {blogs.map((item, index) => (
              <BlogCard item={item} index={index} />
            ))}{" "}
          </Slider>
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
