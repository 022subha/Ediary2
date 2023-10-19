import express from "express";

import {
  login,
  logout,
  profileDetails,
  register,
  verifyEmail,
} from "../controllers/authControllers.js";
import { authLoginMiddleware } from "../middlewares/auth.js";
const router = express.Router();

router.route("/register").post(register);
router.route("/verify-email").post(verifyEmail);
router.route("/login").post(login);
router.route("/user-info").get(profileDetails);
router.route("/logout").delete(authLoginMiddleware, logout);

export default router;
