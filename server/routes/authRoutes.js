import express from "express";
import { register, verifyEmail } from "../controllers/authControllers.js";
const router = express.Router();

router.route("/register").post(register);
router.route("/verify-email").post(verifyEmail);

export default router;
