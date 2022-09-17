const express = require('express');
const app = express();

app.get('/getData', (req,res) => {
    res.json({
        "Email":"vinod.20.pal@gmail.com",
        "Password":"Vinod123@"
    })
})

app.listen(3000, (req,res) => {
    console.log("Express API is running at port 3000");
})