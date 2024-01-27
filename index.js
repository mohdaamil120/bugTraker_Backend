const express = require("express")
const cors = require("cors")
const Users = require("./models/user")
const { userRouter } = require("./routes/userRoutes")
const { bugRouter } = require("./routes/bugRoutes")
// const { Socket } = require("socket.io")
require("./db/connection")
const io = require("socket.io")(8080,{
    cors:{
        origin:"http://localhost:3002"
    }
})

const app = express()
app.use(cors())
app.use(express.json())
// app.use(express.urlencoded({extended:false}));

const port = process.env.PORT || 8000


app.use("/users",userRouter)
app.use("/api",bugRouter)

// socket.io
io.on("connection", socket => {
    socket.on("addUser", userId =>{
        socket.userId = userId
    });

    io.emit("getUsers", socket.userId)
})

// app.get("/", (req,res)=>{
//     res.send("welcome")
// })

app.listen(port, ()=>{
    console.log(`listing on port ${port}`)
})