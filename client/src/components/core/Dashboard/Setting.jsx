import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";

export default function Setting() {
  const { user } = useSelector((state) => state.profile);
  const [imagePrev, setImagePrev] = useState(user?.image);
  const [imageFile, setImageFile] = useState();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // console.log(file)
    if (file) {
      setImageFile(file);
      previewFile(file);
    }
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePrev(reader.result);
    };
  };

  return (
    <div className="py-10">
      <h1 className="text-4xl font-semibold text-[#4066ff] mb-14 ">
        Edit Profile
      </h1>
      <div className="flex items-center justify-center sm:justify-between px-10 py-8 rounded-lg  bg-custom-gradient">
        <div className="flex max-sm:flex-col max-sm:gap-y-2 gap-x-4 items-center">
          <img
            src={imagePrev}
            alt=""
            className="object-cover aspect-square w-[78px] rounded-full border-white border-2"
          />
          <div className="">
            <p className="text-lg font-medium text-white mb-2">
              Change Profile Picture
            </p>
            <div className="text-black text-sm mt-1 flex gap-x-4">
              <label
                className="px-6 py-2 bg-white rounded-md cursor-pointer"
                htmlFor="upload"
              >
                Select
                <input
                  type="file"
                  accept="image/*"
                  id="upload"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
              <button className="px-6 py-2 bg-yellow-300 rounded-md">
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col px-10 py-8 rounded-lg  bg-custom-gradient my-10">
        <p className="text-xl font-semibold text-white">Profile Information</p>
        <div className="mt-10 text-slate-300 flex flex-col gap-y-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-[48%]">
              <label className="after:content-['*'] after:text-[#fff]">
                First Name
              </label>
              <input className="w-full mt-2 h-12 rounded md px-4 py-2 text-black outline-none" />
            </div>
            <div className="w-full md:w-[48%]">
              <label className="after:content-['*'] after:text-[#fff]">
                Last Name
              </label>
              <input className="w-full mt-2 h-12 rounded md px-4 py-2 text-black outline-none" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-[48%]">
              <label>Date of Birth</label>
              <input
                type="Date"
                className="w-full mt-2 h-12 rounded md px-4 py-2 text-black outline-none cursor-pointer"
              />
            </div>
            <div className="w-full md:w-[48%]">
              <label>Gender</label>
              <select className="block w-full mt-2 h-12 rounded md px-4 py-2 text-black outline-none cursor-pointer">
                <option>Prefer not to say</option>
                <option>Male</option>
                <option>Female</option>
                <option>Non-Binary</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-[48%]">
              <label>Contact Number</label>
              <input className="w-full mt-2 h-12 rounded md px-4 py-2 text-black outline-none" />
            </div>
            <div className="w-full md:w-[48%]">
              <label>About</label>
              <input className="w-full mt-2 h-12 rounded md px-4 py-2 text-black outline-none" />
            </div>
          </div>
          <button className="px-6 py-2 bg-white text-[#4066ff] rounded-md w-fit self-end">
            Save
          </button>
        </div>
      </div>

      <div className="flex flex-col px-10 py-8 rounded-lg  bg-custom-gradient my-10">
        <p className="text-xl font-semibold text-white">Password</p>
        <div className="mt-10 text-slate-300 flex flex-col gap-y-6">
          <div className="w-[100%]">
            <label className="after:content-['*'] after:text-[#fff]">
              Old Password
            </label>
            <input
              type="Date"
              className="w-full mt-2 h-12 rounded md px-4 py-2 text-black outline-none cursor-pointer"
            />
          </div>
          <div className="w-[100%]">
            <label className="after:content-['*'] after:text-[#fff]">
              New Password
            </label>
            <input
              type="Date"
              className="w-full mt-2 h-12 rounded md px-4 py-2 text-black outline-none cursor-pointer"
            />
          </div>
          <div className="w-[100%]">
            <label className="after:content-['*'] after:text-[#fff]">
              Confirm New Password
            </label>
            <input
              type="Date"
              className="w-full mt-2 h-12 rounded md px-4 py-2 text-black outline-none cursor-pointer"
            />
          </div>

          <button className="px-6 py-2 bg-white text-[#4066ff] rounded-md w-fit self-end">
            Save
          </button>
        </div>
      </div>

      <div className="flex gap-x-4 md:gap-x-10 p-4 md:px-10 md:py-8 bg-[#8d1b1b] rounded-lg">
        <div className="w-fit h-fit p-2 rounded-full bg-[#dd3d3d]">
          <MdDelete className="text-white text-3xl" />
        </div>

        <div className="max-w-[600px]">
          <h1 className="text-white text-2xl mb-2">Delete Acccount</h1>
          <p className="text-[#e7c0d0]">Would you like to delete account?</p>
          <p className="text-[#e7c0d0]">
            This account may contain Paid Courses. Deleting your account is
            permanent and will remove all the contain associated with it.
          </p>
          <button className="mt-2 text-[#f58484] italic">
            I want to delete my account.
          </button>
        </div>
      </div>
    </div>
  );
}
