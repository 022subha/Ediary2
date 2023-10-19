import { Modal } from "antd";
import React, { useRef, useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { VscDashboard, VscSignOut } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import { logout } from "../../../services/operations/authAPI";

export default function ProfileDropdown() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.profile);
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setOpen(false));

  const handleLogout = () => {
    Modal.confirm({
      title: "Confirm",
      content: "Are you sure you want to logout?",
      onOk() {
        setOpen(false);
        dispatch(logout(navigate));
      },
      okButtonProps: {
        className: "bg-custom-gradient",
      },
    });
  };

  return (
    <button
      className="relative text-white"
      onClick={() => {
        setOpen(!open);
      }}
      ref={ref}
    >
      <div className="flex gap-x-1 items-center">
        <img
          src={user?.image}
          alt={user?.firstName}
          className="w-[40px] aspect-square object-cover rounded-full"
        />
        {open ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
      </div>

      {open && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute top-[118%] bg-custom-gradient -right-[24px] z-50 divide-y-[1px] divide-richblack-700 overflow-hidden rounded-md border-[1px] border-richblack-700"
        >
          <Link to="/dashboard/my-profile" onClick={() => setOpen(false)}>
            <div className="flex w-full items-center gap-x-1 py-[12px] px-[18px] text-sm text-richblack-100 hover:bg-white hover:text-black">
              <VscDashboard className="text-[24px]" />
              Dashboard
            </div>
          </Link>
          <div
            className="flex w-full items-center gap-x-1 py-[12px] px-[18px] text-sm text-richblack-100 hover:bg-white hover:text-black"
            onClick={handleLogout}
          >
            <VscSignOut className="text-[24px]" />
            Logout
          </div>
        </div>
      )}
    </button>
  );
}
