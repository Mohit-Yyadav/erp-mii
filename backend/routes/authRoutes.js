import express from "express"; // MySQL Connection
import { dashboard, loginUser, logoutUser, sendOTP, verifyOTP } from "../controllers/authController.js";

const router = express.Router();

// User Login
router.post("/login", loginUser);

// User Logout
router.post("/logout",logoutUser);

// otp 
router.post("/send-otp",sendOTP);

router.post("/verify-otp",verifyOTP);

// Check if User is Logged In
router.get("/me",dashboard);

export default router;
