import express from "express"
import dotenv from "dotenv"
import { corsMiddleware } from "./middleware/corsMiddleware.js";
import {mainRoutes,mainEmp,startupRoutes,mettingSchedule,
mainMentor,mainMetric,investorRoutes,metricTracking,milestone,taskCreation}from './routes/index.js'
import mysqlPool from "./config/db.js";
import sessionConfig from "./config/sessionConfig.js";
import { authMiddleware } from "./middleware/authMiddleware.js";
import authRoutes from "./routes/authRoutes.js"
// import investorRoutes from "./routes/investerRoute.js";

// configure dotenev
dotenv.config();

// rest object
const app = express()

// middleware 

app.use(express.json());
app.use(corsMiddleware);
app.use(sessionConfig); 


// session
// Public routes (Login, Register, Logout) should NOT require authentication

const publicRoutes = ["/api/auth/login", 
    "/api/mainform/insert-data",
    "/api/mainform/update-data/:id",
    "/api/mainform/delete-data/:id",
    "/api/mainform/get-edit/:id",
    "/api/mainform/get-data",
    "/api/auth/register",
     "/api/auth/logout",
     "/api/auth/send-otp",
     "/api/auth/verify-otp", 
     "/test" ,
    "/api/startupform/insert_data",
    "/api/startupform/update_data",
    "/api/startupProfile/delete-start",


    "/api/investorform/insert-data",
    "/api/investorform/update-data/:id",
    "/api/investorform/delete-data/:id",
    "/api/investorform/getDataEidt/:id",
    "/api/investorform/get_data",

    "/api/mentor/insert-profile",
    "/api/mentor/insert-profile1/:id",
    "/api/mentor/insert-profile2/:id",
    "/api/mentor/get-mentor",
    "/api/mentor/get-mentorEdit",

    "/api/mettingSchedule/scheduleMeeting",

    "/api/emp_data/emp_insert",
    "/api/emp_data/update-data/:id",
    "/api/emp_data/delete-data/:id",
    "/api/emp_data/get-data",
    "/api/emp_data/edit-data/:id",

    "/api/metric/insert-Metric",
    "/api/metric/update-Metric",
    "/api/metric/delete-Metric",
    "/api/metric/insert-MetricTracking",
    "/api/metric/update-MetricTracking",
    "/api/metric/delete-MetricTracking",
    "/api/milestone/insert-milestone",
    "/api/milestone/update-milestone",
    "/api/milestone/delete-milestone",
    "/api/taskCreation/insert-taskCreation",
    "/api/taskCreation/update-taskCreation",
    "/api/taskCreation/delete-taskCreation",
];


// Apply Auth Middleware to all routes except public routes
app.use((req, res, next) => {
    const isPublic = publicRoutes.some(route => req.path.startsWith(route));
    if (isPublic) {
        return next(); // Allow public access
    }
    authMiddleware(req, res, next);
});

//routes
app.use("/api/",mainRoutes)
app.use("/api/",mainEmp)
app.use("/api/auth",authRoutes)
app.use("/api/",investorRoutes)
app.use("/api/",startupRoutes)
app.use("/api/", mainMentor);
app.use("/api/", mettingSchedule);
app.use("/api/", mainMetric);
app.use("/api/", metricTracking);
app.use("/api/", milestone);
app.use("/api/", taskCreation);


app.get('/test', (req, res) => {
    res.status(200).send("<h1>Express app</h1>");
});

//port 
const PORT = process.env.PORT || 8000;

//listen
mysqlPool.query("select 1")
    .then(() => {
        console.log("MySQL Connected");
        app.listen(PORT, () => {
            console.log(`http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.log("DB Error: ", error);
    });