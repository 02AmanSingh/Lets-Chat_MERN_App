import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import auth from "./routes/auth.js"
import message from "./routes/message.js"
import user from "./routes/user.js"

import connectMongodb from "./db/connectMongodb.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

// app.get("/", (req, res)=>{
//     res.send("Hello world");
// })

app.use("/api/auth", auth);
app.use("/api/messages", message);
app.use("/api/users", user);


//Listening Port
app.listen(PORT, () => {
    connectMongodb();
    console.log(`Backend Server running on http://localhost:${PORT}` )

});