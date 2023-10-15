import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { matchPath, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { NavbarLinks } from "../../data/navbar-links";
import ProfileDropdown from "../core/Auth/ProfileDropdown";

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const token = "null";
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
  return (
    <nav
      className={`flex items-center justify-center ${
        !scrolled ? "bg-transparent" : "bg-[#000]"
      } h-20 fixed w-[100vw] text-[18px]`}
    >
      <div className="flex items-center justify-between max-w-maxContent w-[94%] mx-auto">
        <Link to-="/" className="flex items-center gap-3">
          <img src="/assets/images/logo.png" alt="" loading="lazy" width={50} />
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
          {token !== null && (
            <Link to="/dashboard/cart" className="relative">
              <AiOutlineShoppingCart className="text-[25px] text-[#fff]" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-custom-gradient text-[14px]  text-white text-center">
                  {totalItems}
                </span>
              )}
            </Link>
          )}

          {token !== null && <ProfileDropdown />}

          {token === null && (
            <Link to="/login">
              <button className="text-[16px] rounded-[5px] bg-custom-gradient text-white px-[20px] py-[6px] text-richblack-100">
                Login
              </button>
            </Link>
          )}
        </div>

        <button className="mr-4 md:hidden">
          <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
        </button>
      </div>
    </nav>
  );
}
