const express = require("express")
const { Bugs } = require("../models/bug")

const bugRouter = express.Router()


bugRouter.get("/api/bugs/", async(req,res) => {

})

bugRouter.get("/api/bugs/:id", async(req,res) => {

})

bugRouter.post("/api/bugs/", async(req,res) => {

})

bugRouter.patch("/api/bugs/:id", async(req,res) => {

})

bugRouter.delete("/api/bugs/:id", async(req,res) => {

})

module.exports={
    bugRouter
}