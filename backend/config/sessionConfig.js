import session from "express-session";
import mysqlPool from "./db.js"; // Import MySQL connection
import dotenv from "dotenv";

dotenv.config(); // Load .env variables

// Import `express-mysql-session` properly
import mysqlSession from "express-mysql-session";

// Initialize `MySQLStore` correctly by passing `session`
const MySQLStore = mysqlSession(session);

// MySQL session store options
const sessionStore = new MySQLStore(
    {
        clearExpired: true, // Auto-remove expired sessions
        checkExpirationInterval: 900000, // Check expiration every 15 min
        expiration: 86400000, // Sessions expire in 24 hours
        createDatabaseTable: true, // Automatically create sessions table if not exists
    },
    mysqlPool // Pass MySQL pool here
);

// Configure session middleware
const sessionConfig = session({
    key: "user_sid", // Cookie name
    secret: process.env.SESSION_SECRET || "default_secret",
    resave: false,
    saveUninitialized: false,
    store: sessionStore, // Store session in MySQL
    cookie: {
        maxAge: 24 * 60 * 60 * 1000, // 1 day
        secure: process.env.NODE_ENV === "production", // Use secure cookies in production
        httpOnly: true, // Prevent client-side JS from accessing cookies
        sameSite: "strict", // Prevent CSRF attacks
    },
});

export default sessionConfig;
