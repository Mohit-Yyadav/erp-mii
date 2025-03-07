import express from "express"
import dotenv from "dotenv"
import { corsMiddleware } from "./middleware/corsMiddleware.js";
import mainRoutes from './routes/mainRoutes.js'
import mysqlPool from "./config/db.js";

// configure dotenev
dotenv.config();

// rest object
const app = express()

// middleware 

app.use(corsMiddleware);

app.use(express.json());

//routes
app.use("/api/",mainRoutes)

app.get('/', (req, res) => {
    res.status(200).send("<h1>Express app</h1>");
});

//port 
const PORT = process.env.PORT || 8000;

//listen
mysqlPool.query("select 1")
    .then(() => {
        console.log("MySQL Connected");
        app.listen(PORT, () => {
            console.log(`Server running on PORT ${PORT}`);
        });
    })
    .catch((error) => {
        console.log("DB Error: ", error);
    });