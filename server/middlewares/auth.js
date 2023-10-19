import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";

export const authLoginMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Please Login to use this resource.",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res
        .status(402)
        .json({ success: false, message: "Token is invalid." });
    }

    let user = await User.findOne({ email: decoded?.email }).populate(
      "additionalDetails"
    );

    if (!user) {
      return res
        .status(403)
        .json({ success: false, message: "User not found." });
    }
    user.password = undefined;
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const authRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user?.role)) {
      return res.status(400).json({
        success: false,
        message: `Role : ${req.user?.role} is not allowed to use this resource.`,
      });
    }

    next();
  };
};
