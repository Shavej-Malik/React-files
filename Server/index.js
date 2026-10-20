// push this with Class13-Day-81
const express = require('express')
const app = express()
app.get('./',(req,res)=>{
    res.send('Hello friends')
})
app.listen(8000,()=>{
    console.log("Server is Running at 8000...........")
})