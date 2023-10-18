import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { activationMail } from "../mails/activationMail.js";
import { Profile } from "../models/profileModel.js";
import { User } from "../models/userModel.js";
import { createActivationToken } from "../utils/createActivationToken.js";
import { sendMail } from "../utils/sendMail.js";

export const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    if (!(firstName && lastName && email && password)) {
      return res
        .status(403)
        .json({ success: false, message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists. Please Sign In to continue.",
      });
    }

    const user = { firstName, lastName, email, password };
    const activationToken = createActivationToken(user);
    const { token, otp } = activationToken;
    const data = { user: { name: user.firstName }, otp };

    await sendMail({
      email: user.email,
      subject: "Verify your email",
      body: activationMail(data),
    });

    return res.status(200).json({
      success: true,
      message: `Please check your email: ${user.email} to activate your account`,
      activationToken: token,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

export const verifyEmail = async (req, res) => {
  try {
    const { activation_token, otp } = req.body;

    const userInfo = jwt.verify(
      activation_token,
      process.env.ACTIVATION_SECRET
    );

    if (userInfo.otp !== otp) {
      return res.status(401).json({ success: false, message: "Invalid OTP." });
    }

    const { firstName, lastName, email, password } = userInfo.user;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const profileDetails = await Profile.create({
      gender: null,
      dateOfBirth: null,
      about: null,
      contactNumber: null,
    });

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      additionalDetails: profileDetails._id,
    });

    return res
      .status(200)
      .json({ success: true, user, message: "User Verified Successfully." });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};
