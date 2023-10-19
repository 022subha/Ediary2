import { Modal } from "antd";
import React from "react";
import { VscSignOut } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sidebarLinks } from "../../../data/dashboard-links";
import { logout } from "../../../services/operations/authAPI";
import SidebarLink from "./SidebarLink";

export default function Sidebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.profile);

  const handleLogout = () => {
    Modal.confirm({
      title: "Confirm",
      content: "Are you sure you want to logout?",
      onOk() {
        dispatch(logout(navigate));
      },
      okButtonProps: {
        className: "bg-custom-gradient",
      },
    });
  };

  return (
    <>
      <div className="max-lg:hidden flex flex-col min-w-[250px] border-r-[1px] border-t-[1px] border-white bg-black py-10">
        <div className="flex flex-col">
          {sidebarLinks.map((item, index) =>
            item.type && item.type !== user?.accountType ? (
              <></>
            ) : (
              <SidebarLink key={index} item={item} />
            )
          )}
        </div>
        <div className="mx-auto mt-12 mb-6 h-[1px] w-11/12 bg-gray-500"></div>
        <div className="flex flex-col">
          <SidebarLink
            item={{
              name: "Settings",
              path: "/dashboard/settings",
              icon: "VscSettingsGear",
            }}
          />
          <button
            onClick={handleLogout}
            className="hidden lg:block px-10 py-3 text-md font-medium text-[#f00]"
          >
            <div className="flex items-center gap-x-2 text-md ">
              <VscSignOut className="text-lg" />
              <span>Logout</span>
            </div>
          </button>
        </div>
      </div>

      <div className="lg:hidden h-fit py-2 bg-black fixed bottom-0 left-0 w-[100vw] z-[10] flex items-center justify-center">
        <div className="flex flex-row items-center md:justify-between justify-evenly w-full">
          {sidebarLinks.map((item, index) =>
            item.type && item.type !== user?.accountType ? (
              <></>
            ) : (
              <SidebarLink key={index} item={item} />
            )
          )}
          <SidebarLink
            item={{
              name: "Settings",
              path: "/dashboard/settings",
              icon: "VscSettingsGear",
            }}
          />
        </div>
      </div>
    </>
  );
}
