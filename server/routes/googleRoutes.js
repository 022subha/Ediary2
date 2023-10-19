import express from "express";
import passport from "passport";
import {
  googleLoginFailed,
  googleLoginSuccess,
} from "../controllers/googleControllers.js";

const router = express.Router();

router.route("/callback").get(
  passport.authenticate("google", {
    successRedirect: "http://localhost:5000/api/v1/auth/google/login/success",
    failureRedirect: "http://localhost:500/api/v1/auth/google/login/failed",
  })
);

router.route("/login/success").get(googleLoginSuccess);
router.route("/login/failed").get(googleLoginFailed);

export default router;
