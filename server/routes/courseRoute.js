import express from "express";
import { showAllCategories } from "../controllers/categoryController.js";
import { createCourse } from "../controllers/courseController.js";
import { authLoginMiddleware } from "../middlewares/auth.js";

const router = express.Router();

router.route("/create-course").post(authLoginMiddleware, createCourse);
router.route("/show-all-categories").get(showAllCategories);

export default router;
