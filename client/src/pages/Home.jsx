import React from "react";
import HomeBanner from "../components/core/Home/HomeBanner";
import HomeWhy from "../components/core/Home/HomeWhy";
import InstructorDetail from "../components/core/Home/InstructorDetail";
import PopularBlogs from "../components/core/Home/PopularBlogs";
import PopularCourses from "../components/core/Home/PopularCourses";

export default function Home() {
  return (
    <div className="">
      <HomeBanner />
      <HomeWhy />
      <PopularCourses />
      <InstructorDetail />
      <PopularBlogs />
    </div>
  );
}
