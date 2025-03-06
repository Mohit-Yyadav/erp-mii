import cors from "cors"

export const corsMiddleware = ()=>{
   return cors({
        origin: "http://localhost:5173", // Frontend Port (React)
        methods: "GET,POST,PUT,DELETE", 
        credentials: true // Allow Cookies or Auth Headers if needed
    })
}