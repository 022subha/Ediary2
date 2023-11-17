import React from "react";
import { FiEdit } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function MyProfile() {
  const { user } = useSelector((state) => state.profile);

  return (
    <div className="py-10">
      <h1 className="text-4xl font-semibold text-[#4066ff] mb-14 ">
        My Profile
      </h1>
      <div className="flex flex-col md:flex-row max-md:gap-y-6 items-center justify-between px-10 py-8 rounded-lg  bg-custom-gradient">
        <div className="flex flex-col sm:flex-row max-sm:gap-y-2 gap-x-4 items-center">
          <img
            src={user?.image}
            alt=""
            className="object-cover aspect-square w-[78px] rounded-full border-white border-2"
          />
          <div className="">
            <p className="text-xl font-medium text-white">
              {user?.firstName} {user?.lastName}
            </p>
            <p className="text-slate-300 text-sm mt-1">{user?.email}</p>
          </div>
        </div>

        <Link
          to="/dashboard/settings"
          className="flex max-md:self-end gap-x-2 items-center px-6 py-2 text-[#4066ff] bg-white rounded-md  text-lg"
        >
          <span>Edit</span>
          <FiEdit className="text-xl" />
        </Link>
      </div>

      <div className="flex flex-col px-10 py-8 rounded-lg  bg-custom-gradient my-10">
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold text-white">About</p>
          <Link
            to="/dashboard/settings"
            className="flex gap-x-2 items-center px-6 py-2 text-[#4066ff] bg-white rounded-md  text-lg"
          >
            <span>Edit</span>
            <FiEdit className="text-xl" />
          </Link>
        </div>
        <div className="mt-10 text-slate-300">
          Write Something About Yourself ...
        </div>
      </div>

      <div className="flex flex-col px-10 py-8 rounded-lg  bg-custom-gradient my-10">
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold text-white">Personal Details</p>
          <Link
            to="/dashboard/settings"
            className="flex gap-x-2 items-center px-6 py-2 text-[#4066ff] bg-white rounded-md  text-lg"
          >
            <span>Edit</span>
            <FiEdit className="text-xl" />
          </Link>
        </div>
        <div className="mt-10 text-slate-300 flex flex-col md:flex-row justify-between max-w-[500px]">
          <div className="flex flex-col gap-y-5">
            <div className="">
              <p className="text-sm mb-2">First Name</p>
              <p className="text-white text-md">{user?.firstName}</p>
            </div>
            <div className="">
              <p className="text-sm mb-2">Email</p>
              <p className="text-white text-md">{user?.email}</p>
            </div>
            <div className="">
              <p className="text-sm mb-2">Gender</p>
              <p className="text-white text-md">
                {user?.additionalDetails?.gender}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-5 ">
            <div className="">
              <p className="text-sm mb-2">Last Name</p>
              <p className="text-white text-md">{user?.lastName}</p>
            </div>
            <div className="">
              <p className="text-sm mb-2">Contact Number</p>
              <p className="text-white text-md">
                {user?.additionalDetails?.contactNumber
                  ? user?.additionalDetails?.contactNumber
                  : "Add Contact Number"}
              </p>
            </div>

            <div className="">
              <p className="text-sm mb-2">Date of Birth</p>
              <p className="text-white text-md">
                {user?.additionalDetails?.dob
                  ? user?.additionalDetails?.dob
                  : "Add Date of Birth"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
