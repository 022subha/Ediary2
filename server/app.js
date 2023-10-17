import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/db.js";
import userRoute from "./routes/userRoute.js";

export const app = express();
dotenv.config();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: process.env.ORIGIN }));

app.use("/api/v1/user", userRoute);

app.get("/", (req, res) => {
  res.send("API is working fine.");
});
