import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import ReviewSlider from "../components/common/ReviewSlider";

const About = () => {
  return (
    <div className="pt-20">
      <section className="flex items-center bg-black min-h-[calc(100vh-3.5rem)]">
        <div className="flex items-center mx-auto w-11/12 h-full max-w-[1300px] text-center text-white  ">
          <div className="mx-auto px-6 py-20 font-semibold lg:w-[70%]">
            <p className="text-xl lg:text-3xl">
              Driving Innovation in Online Education for a
            </p>
            <p className="py-8 text-4xl lg:text-7xl bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold">
              Brighter Future
            </p>
            <p className="mx-auto mt-4 text-center text-lg lg:text-xl font-medium text-richblack-300 lg:w-[85%] leading-6">
              Ediary is at the forefront of driving innovation in online
              education. We're passionate about creating a brighter future by
              offering cutting-edge courses, leveraging emerging technologies,
              and nurturing a vibrant learning community.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto flex w-11/12 max-w-[1300px] flex-col justify-between gap-10 pt-[200px] px-4">
          <div className="flex flex-col items-center gap-x-20 md:flex-row justify-center">
            <div className="w-fit">
              <img
                src="/assets/images/about/me.jpg"
                alt=""
                className="shadow-[0_0_20px_0] shadow-[#4066ff] h-[600px] object-cover rounded-3xl"
              />
            </div>

            <div className="my-24 flex md:w-[45%] flex-col max-md:text-center">
              <h1 className="py-2 bg-gradient-to-br from-[#4066ff] via-[#4509fa]  to-[#0f2b9a] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%]">
                About Us
              </h1>
              <p className="text-2xl font-medium lg:w-[95%] mt-10 mb-6">
                Hello! Welcome to <b>Ediary!</b> Really happy to see you here.
              </p>
              <p className="text-[#232323] text-lg lg:w-[95%]">
                Thinking of taking a step towards a mentorship programme? It
                definitely seems a bit daunting at first. It is never easy to
                ask for someone's counsel or guidance be it for studies or just
                in general. So, at <b>Ediary</b> we are here to provide all the
                necessary counsel you might need for{" "}
                <b>
                  placement preparations, interview experiences, programming
                </b>
                , et cetera! For any additional questions, feel free to email us
                at <b>supprt@ediary.in</b>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto flex w-11/12 max-w-[1300px] flex-col justify-between gap-10 pt-[100px] px-4">
          <div className="flex flex-col-reverse items-center gap-x-20 md:flex-row justify-center">
            <div className="my-24 flex md:w-[45%] flex-col max-md:text-center ">
              <h1 className="py-2 bg-gradient-to-br from-[#4066ff] via-[#4509fa]  to-[#0f2b9a] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Founding Story
              </h1>
              <p className="text-lg text-[#232323] lg:w-[95%] mt-10 mb-4">
                Our e-learning platform was born out of a shared vision and
                passion for transforming education. It all began with a group of
                educators, technologists, and lifelong learners who recognized
                the need for accessible, flexible, and high-quality learning
                opportunities in a rapidly evolving digital world.
              </p>
              <p className="text-lg text-[#232323] lg:w-[95%]">
                As experienced educators ourselves, we witnessed firsthand the
                limitations and challenges of traditional education systems. We
                believed that education should not be confined to the walls of a
                classroom or restricted by geographical boundaries. We
                envisioned a platform that could bridge these gaps and empower
                individuals from all walks of life to unlock their full
                potential.
              </p>
            </div>

            <div>
              <img
                src="/assets/images/about/about4.avif"
                alt=""
                className="shadow-[0_0_20px_0] shadow-[#4066ff] h-[600px] object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e5e5ff] px-4">
        <div className="mx-auto w-11/12 max-w-[1300px] mt-20 max-md:text-center">
          <div className="flex flex-col items-center md:gap-10 md:flex-row justify-between w-[90%] mx-auto">
            <div className="my-24 flex md:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Vision
              </h1>
              <p className="text-lg text-[#232323] md:w-[95%]">
                With this vision in mind, we set out on a journey to create an
                e-learning platform that would revolutionize the way people
                learn. Our team of dedicated experts worked tirelessly to
                develop a robust and intuitive platform that combines
                cutting-edge technology with engaging content, fostering a
                dynamic and interactive learning experience.
              </p>
            </div>
            <div className="my-24 flex md:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
                Our Mission
              </h1>
              <p className="text-lg text-[#232323] md:w-[95%]">
                Our mission goes beyond just delivering courses online. We
                wanted to create a vibrant community of learners, where
                individuals can connect, collaborate, and learn from one
                another. We believe that knowledge thrives in an environment of
                sharing and dialogue, and we foster this spirit of collaboration
                through forums, live sessions, and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 flex max-w-[1300px] flex-col justify-between gap-10 text-white">
        <div className="w-[90vw] md:w-[80vw] mx-auto bg-white text-black rounded-xl p-10 max-md:px-4">
          <div className="flex flex-col items-center">
            <p className="text-center text-4xl text-[#4066ff]">Get In Touch</p>
            <p className="text-center text-xl pt-4 pb-8">
              The Ultimate Guide to Ace Coding Interviews
            </p>
          </div>
          <div className="md:p-[30px] w-[100%]">
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
        </div>
      </section>

      <div className="mt-20">
        <ReviewSlider />
      </div>
    </div>
  );
};

export default About;
