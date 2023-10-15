import React, { useRef, useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { VscDashboard, VscSignOut } from "react-icons/vsc";
import { Link } from "react-router-dom";
import useOnClickOutside from "../../../hooks/useOnClickOutside";

export default function ProfileDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setOpen(false));

  return (
    <button
      className="relative text-white"
      onClick={() => {
        setOpen(!open);
      }}
    >
      <div className="flex gap-x-1 items-center">
        <img
          src="/assets/images/IMG_8913.jpg"
          alt=""
          className="w-[40px] aspect-square object-cover rounded-full"
        />
        {open ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
      </div>

      {open && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute top-[118%] bg-custom-gradient -right-[24px] z-1000 divide-y-[1px] divide-richblack-700 overflow-hidden rounded-md border-[1px] border-richblack-700"
          ref={ref}
        >
          <Link to="/dashboard/my-profile" onClick={() => setOpen(false)}>
            <div className="flex w-full items-center gap-x-1 py-[12px] px-[18px] text-sm text-richblack-100 hover:bg-white hover:text-black">
              <VscDashboard className="text-[24px]" />
              Dashboard
            </div>
          </Link>
          <div
            className="flex w-full items-center gap-x-1 py-[12px] px-[18px] text-sm text-richblack-100 hover:bg-white hover:text-black"
            onClick={() => {
              setOpen(false);
            }}
          >
            <VscSignOut className="text-[24px]" />
            Logout
          </div>
        </div>
      )}
    </button>
  );
}
