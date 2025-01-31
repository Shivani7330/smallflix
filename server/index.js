import express from "express"
import cookieparser from "cookie-parser"
import cors from "cors"
import http from "http"
import mongoose from "mongoose"
import "dotenv/config"

const app =express()
app.use(cors())

// app.use(cors({
//     origin: "https://smallflix.onrender.com", // Change this to your frontend URL
//     methods: "GET,POST,PUT,DELETE",
//     credentials: true
//   }));

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieparser())

const port =process.env.port ||5000
const server = http.createServer(app)
mongoose.connect(process.env.MONGODB_URL).then(()=>{
   console.log("mongodb connected");
    server.listen(port, ()=>{
        console.log('server is listening on port', process.env.port )
    })
}).catch((err) =>{
    console.log({err})
    process.exit(1);
});



// dbConnects().then(()=>{app.listen(process.env.PORT),
//     ()=>{console.log("server is listening at port", process.env.PORT)