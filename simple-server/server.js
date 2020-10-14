const express=require("express")
const app=express()
app.get("/ping",(req,res)=>{
    res.send("pong45")
    
})
app.listen("8080")