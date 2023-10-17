import React, { useState } from "react";
import OtpInput from "react-otp-input";

export default function VerifyEmail() {
  const [otp, setOtp] = useState("");

  return (
    <div className="pt-20 w-[100%] min-h-[100vh] flex items-center">
      <div className="max-w-[1300px] mx-auto py-8 flex">
        <div
          className="max-w-[450px] min-h-[400px] bg-custom-gradient mx-auto rounded-md text-white mx-4  px-2 pb-8
        "
        >
          <div className="h-1/4 flex flex-col justify-center items-center mt-8 gap-y-4">
            <h1 className="text-center text-3xl">Verify Email</h1>
            <p className="px-12 text-center">
              A verification code has been sent to you. Enter the code below
              within 5 minutes.
            </p>
          </div>
          <div className="h-2/4 flex justify-center">
            <div className="flex gap-x-6 justify-center items-center">
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                renderInput={(props) => (
                  <input
                    {...props}
                    style={{
                      boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                    }}
                    className="w-[48px] lg:w-[60px] border-0 bg-white rounded-[0.5rem] text-black aspect-square text-center focus:outline-0 text-xl"
                  />
                )}
                containerStyle={{
                  justifyContent: "space-between",
                  gap: "0 6px",
                }}
              />
              {/* <input
                type="text"
                className="h-[55px] w-[55px] rounded-md text-black text-center focus:outline-0 text-3xl text-semibold font-mono"
              />
              <input
                type="text"
                className="h-[55px] w-[55px] rounded-md text-black text-center focus:outline-0 text-3xl text-semibold font-mono"
              />
              <input
                type="text"
                className="h-[55px] w-[55px] rounded-md text-black text-center focus:outline-0 text-3xl text-semibold font-mono"
              />
              <input
                type="text"
                className="h-[55px] w-[55px] rounded-md text-black text-center focus:outline-0 text-3xl text-semibold font-mono"
              /> */}
            </div>
          </div>
          <div className="h-1/4  text-center">
            <button className="px-[20px] py-[15px] bg-white text-black rounded-xl text-xl text-semibold">
              Verify Otp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
