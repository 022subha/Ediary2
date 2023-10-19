import jwt from "jsonwebtoken";
import { Profile } from "../models/profileModel.js";
import { User } from "../models/userModel.js";

export const googleLoginSuccess = async (req, res) => {
  const email = req?.user?.email;
  let user = await User.findOne({ email });

  if (!user) {
    const profileDetails = await Profile.create({
      gender: null,
      dateOfBirth: null,
      about: null,
      contactNumber: null,
    });

    user = await User.create({
      googleId: req?.user?.sub,
      firstName: req?.user?.given_name,
      lastName: req?.user?.family_name,
      email: req?.user?.email,
      additionalDetails: profileDetails._id,
      image: req?.user?.picture,
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
      role: user.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: "15d" }
  );

  const options = {
    expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: true,
  };

  return res
    .cookie("token", token, options)
    .redirect("http://localhost:3000/dashboard/my-profile");
};

export const googleLoginFailed = (req, res) => {
  return res.redirect("/");
};
