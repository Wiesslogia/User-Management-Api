import express from "express";
import router from "./routers/user.routes.js";

const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("User Management API is running");
})


app.use("/api/users", router);

export default app;