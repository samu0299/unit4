const express = require("express");
const app = express();

app.get("/",function(req,res){
    res.send("Hello");
});

app.listen(5000,()=>{
    console.log("listen 5000")
});

app.get("/books",function(req,res){
    res.send({book1:"Sorcerer's stone", book2:"chamber of secrets" , book3:"Prisoner of Azkaban" , book4:"Goblet of fire"});
});