import React from "react";
import * as Icons from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { Link, matchPath, useLocation } from "react-router-dom";

export default function SidebarLink({ item }) {
  const Icon = Icons[item.icon];
  const location = useLocation();
  const dispatch = useDispatch();

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <Link
      to={item.path}
      className={`relative px-3 md:px-10 py-3 text-md font-medium ${
        matchRoute(item.path)
          ? "bg-yellow-800 text-yellow-50"
          : "bg-opacity-0 text-white"
      } transition-all duration-200`}
    >
      <span
        className={`absolute max-md:bottom-0 left-0 md:top-0 md:h-full h-[5px] w-full md:w-[10px]  bg-yellow-400 ${
          matchRoute(item.path) ? "opacity-100" : "opacity-0"
        }`}
      ></span>
      <div className="flex items-center gap-x-2">
        <Icon className="max-md:text-3xl text-lg" />
        <span className="max-md:hidden">{item.name}</span>
      </div>
    </Link>
  );
}
