const mongoose = require("mongoose")
require("dotenv").config()

const url = process.env.URL

mongoose.connect(url,{
}).then(()=> console.log("connected to DB")).catch((err) => console.log("Error",err))