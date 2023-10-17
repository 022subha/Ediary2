import jwt from "jsonwebtoken";
import { activationMail } from "../mails/activationMail.js";
import { User } from "../models/userModel.js";
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
      template: "activationMail.ejs",
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

export const createActivationToken = (user) => {
  try {
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    const token = jwt.sign({ user, otp }, process.env.ACTIVATION_SECRET, {
      expiresIn: "5m",
    });

    return { token, otp };
  } catch (error) {
    console.log(error);
  }
};
