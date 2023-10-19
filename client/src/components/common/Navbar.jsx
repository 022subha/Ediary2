import React, { useEffect, useState } from "react";
import {
  AiFillHome,
  AiOutlineCaretDown,
  AiOutlineCaretUp,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import { MdMail, MdOutlineComputer, MdSpaceDashboard } from "react-icons/md";
import { useSelector } from "react-redux";
import { matchPath, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { NavbarLinks } from "../../data/navbar-links";
import ProfileDropdown from "../core/Auth/ProfileDropdown";

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showResProfileMenu, setShowResProfileMenu] = useState(false);

  const { user } = useSelector((state) => state.profile);
  const totalItems = 1;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  const toogleMenu = () => {
    setShowMenu(!showMenu);
    setShowResProfileMenu(false);
  };

  const toogleResProfileMenu = () => {
    setShowResProfileMenu(!showResProfileMenu);
  };

  return (
    <>
      {showMenu && (
        <div
          className="fixed z-10 h-[100%] w-[100vw] bg-[#00000053] top-20"
          onClick={toogleMenu}
        ></div>
      )}

      {showMenu && (
        <div
          className={
            !showMenu
              ? "w-[100%] bg-white fixed top-20 z-20 py-[15px]"
              : "w-[100%] bg-white fixed top-20 z-20  py-[15px] animation-showMenu"
          }
        >
          <ul className="flex flex-col items-center gap-y-[30px]">
            <li>
              <Link
                to="/"
                onClick={toogleMenu}
                className="flex items-center gap-x-2 text-[#4066ff]"
              >
                <AiFillHome className="text-[32px]" />
                <span className="text-[24px]">Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                className="flex items-center gap-x-2 text-[#4066ff]"
                onClick={toogleMenu}
              >
                <MdOutlineComputer className="text-[32px]" />
                <span className="text-[24px]">Courses</span>
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="flex items-center gap-x-2 text-[#4066ff]"
                onClick={toogleMenu}
              >
                <FaUser className="text-[32px]" />
                <span className="text-[24px]"> About</span>
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="flex items-center gap-x-2 text-[#4066ff]"
                onClick={toogleMenu}
              >
                <MdMail className="text-[32px]" />
                <span className="text-[24px]">Contact</span>
              </Link>
            </li>
            <li>
              {user === null ? (
                <Link to="/login">
                  <button className="text-[24px] rounded-[5px] bg-custom-gradient text-white px-[28px] py-[6px] text-richblack-100">
                    Login
                  </button>
                </Link>
              ) : (
                <div
                  className="flex gap-x-1 items-center text-[#4066ff] cursor-pointer"
                  onClick={toogleResProfileMenu}
                >
                  <img
                    src="/assets/images/IMG_8913.jpg"
                    alt=""
                    className="w-[40px] aspect-square object-cover rounded-full"
                  />
                  <span className="text-[24px]">Subhajit</span>
                  {showResProfileMenu ? (
                    <AiOutlineCaretUp />
                  ) : (
                    <AiOutlineCaretDown />
                  )}
                </div>
              )}
            </li>
            {showResProfileMenu && (
              <>
                <li>
                  <Link
                    to="/dashboard/my-profile"
                    onClick={toogleMenu}
                    className="flex items-center gap-x-2 text-black"
                  >
                    <MdSpaceDashboard className="text-[24px]" />
                    <span className="text-[18px]">Dashboard</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/courses"
                    className="flex items-center gap-x-2 text-[#ff0000]"
                    onClick={toogleMenu}
                  >
                    <FaSignOutAlt className="text-[24px]" />
                    <span className="text-[18px]">Logout</span>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
      <nav
        className={`flex items-center justify-center ${
          !scrolled
            ? location.pathname === "/"
              ? "bg-transparent"
              : "bg-[#000]"
            : "bg-[#000]"
        } h-20 fixed z-10 w-[100vw] text-[18px]`}
      >
        <div className="flex items-center justify-between max-w-maxContent w-[94%] mx-auto">
          <Link to-="/" className="flex items-center gap-3">
            <img
              src="/assets/images/logo.png"
              alt=""
              loading="lazy"
              width={50}
            />
            <span className="text-[32px] text-white">Ediary</span>
          </Link>

          <ul className="flex gap-x-[19px] max-md:hidden">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                <Link to={link?.path}>
                  <p
                    className={
                      matchRoute(link?.path)
                        ? "text-[#4066ff]"
                        : "text-white relative after:content-[''] after:w-[0] after:h-[1px] after:bg-[#4066ff] after:absolute after:left-0 after:-bottom-[2px] hover:after:w-[100%] after:duration-500"
                    }
                  >
                    {link.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-x-5">
            {user && user?.accountType === "Student" && (
              <Link to="/dashboard/cart" className="relative">
                <AiOutlineShoppingCart className="text-[25px] text-[#fff]" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-custom-gradient text-[14px]  text-white text-center">
                    {totalItems}
                  </span>
                )}
              </Link>
            )}

            {user !== null && <ProfileDropdown />}

            {user === null && (
              <Link to="/login">
                <button className="text-[16px] rounded-[5px] bg-custom-gradient text-white px-[20px] py-[6px] text-richblack-100">
                  Login
                </button>
              </Link>
            )}
          </div>
          <div className="flex items-center gap-x-2 md:hidden">
            {user !== null && (
              <Link to="/dashboard/cart" className="relative mr-4 md:hidden">
                <AiOutlineShoppingCart className="text-[25px] text-[#fff]" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-custom-gradient text-[14px]  text-white text-center">
                    {totalItems}
                  </span>
                )}
              </Link>
            )}

            <button className="mr-4 md:hidden" onClick={toogleMenu}>
              {showMenu ? (
                <AiOutlineClose fontSize={24} fill="#fff" />
              ) : (
                <AiOutlineMenu fontSize={24} fill="#fff" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
