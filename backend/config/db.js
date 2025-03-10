import mysql from "mysql2/promise";



const mysqlPool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"erp"
})

export default mysqlPool;