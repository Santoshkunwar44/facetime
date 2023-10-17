const express = require("express")
const app = express()
const cors = require("cors")
const cookieParser = require("cookie-parser")
const session = require("express-session")
const morgan = require("morgan")

app.use(cors({
    origin:[process.env.FRONTEND_URL,"http://localhost:8000","http://127.0.1:8000"],
    methods:["PUT","POST","GET","DELETE"],
    credentials:true
}))
app.use(morgan("dev"))
app.use(cookieParser())
app.use(session({
    name:"facetime.sid",
    secret:process.env.sessionSecret,
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:1000*60*30,
        httpOnly:true,
        secure:false,
    }
}))


app.listen(()=>console.log("server started..."))
