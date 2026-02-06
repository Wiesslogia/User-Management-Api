import express from "express";
import router from "./routers/user.routes.js";
import dotenv from "dotenv"
import connectDB from "./config/db.js"


const app = express();

dotenv.config();
connectDB();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("User Management API is running");
})


app.use("/api/users", router);

export default app;