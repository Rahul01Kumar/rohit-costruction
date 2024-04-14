const express = require("express");
 const app = express();
 const path = require("path");
 const hbs = require("hbs");
const collection= require("./mongodb")

 const templatePath=path.join(__dirname,'../templates')

app.use(express.json())
app.set("view engine","hbs")
app.set("views",templatePath)

 app.get("*",(req,res)=>{
    res.render("contactus")
 })
 app.post("/contactus",async(req,res)=>{
    const data={
        name:req.body.name,
        name:req.body.email,
        name:req.body.phone,
        name:req.body.message
    }

    await collection.insertMany([data])
    res.render("home");

 })

 app.listen(3005,()=>{
    console.log("port connected");
 })
