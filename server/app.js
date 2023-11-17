import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import expressFileUpload from "express-fileupload";
import session from "express-session";
import passport from "passport";
import { connectDB } from "./config/db.js";
import passportSetup from "./config/passport.js";
import authRoutes from "./routes/authRoutes.js";
import courseRoutes from "./routes/courseRoute.js";
import googleRoutes from "./routes/googleRoutes.js";
export const app = express();
dotenv.config();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: process.env.ORIGIN, credentials: true }));
app.use(cookieParser());
app.use(
  session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(
  expressFileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/auth/google", googleRoutes);
app.use("/api/v1/course", courseRoutes);

app.get("/", (req, res) => {
  res.send("API is working fine.");
});
