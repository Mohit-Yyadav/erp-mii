import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config(); // Ensure .env is loaded

const mysqlPool = mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME
})

export default mysqlPool;