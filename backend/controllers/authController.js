import db from "../config/db.js";
import bcrypt from "bcryptjs";
import { generateOTP, sendEmailOTP } from "../utils/otpHandler.js";

export const loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const [users] = await db.query("SELECT * FROM login WHERE username = ?", [username]);

        if (users.length === 0) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const user = users[0];

        // Compare password with hashed password in DB
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        const [roles] = await db.query("SELECT role_name FROM roles WHERE id = ? LIMIT 1", [user.role_id])
        const role = roles[0]// check what role came // check session exists
        req.session.role = {role_name:role.role_name};
        res.json({ message: "Login successful", user: { id: user.id, email: user.email } });

    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

export const logoutUser = (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({ message: "Logout failed" });
        }
        res.clearCookie("user_sid"); // Clear session cookie
        res.json({ message: "Logout successful" });
    });
};

export const dashboard = (req, res) => {
    if (req.session && req.session.user && req.session.role) {
        return res.json({ user: req.session.user, role:req.session.role});
    }

};


export const sendOTP = async (req, res) => {
    const { id, email } = req.body;
    const otp = generateOTP();
    const expiry = new Date(Date.now() + 5 * 60 * 1000); // OTP expires in 5 minutes
    try {
        await sendEmailOTP(email, otp);

        // Store OTP in database
        const result = await db.query("INSERT INTO otp (user_id, otp, otp_expire_at) VALUES (?, ?, ?)",
            [id, otp, expiry]);

        if (result) {
            res.json({ message: "OTP sent successfully" });
        } else {
            res.status(500).json({ error: "Database error" });
        }
    } catch (error) {
        res.status(500).json({ error: "Error sending OTP" });
    }
};

export const verifyOTP = async (req, res) => {
    const { id, otp } = req.body;
    try {
        const [results] = await db.query("SELECT * FROM otp WHERE user_id = ? ORDER BY otp_expire_at DESC LIMIT 1", [id])

        if (results) {
            const {id , is_verify }= results[0];
            const storedOtp = results[0].otp;
            const expiry = new Date(results[0].expiry);

            if (storedOtp != otp) {
                return res.status(400).json({ error: "Invalid OTP" })
            }
            if (expiry < new Date()) {
                return res.status(400).json({ error: "OTP expired" })
            }
            if(is_verify){
                return res.status(400).json({ error: "OTP already used" })
            }

            const otp_result = results[0];
            // Store only user ID in session
            req.session.user = { id: otp_result.user_id };
            await db.query("UPDATE otp SET is_verify = true WHERE id = ?",[id])
            res.json({ message: "OTP verified successfully", user: { id: otp_result.user_id}, role:{role_name:req.session.role} });

        }
        else {
            return res.status(400).json({ error: "Invalid User" });
        }
    } catch (error) {
        return res.status(500).json({ error: "Database error" });
    }
}