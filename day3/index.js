const express = require("express");
const app=express();

app.use(logger);

app.get("/books",(req,res)=>{
    res.send("Featuring All Books");
});

app.get("/books/:name",(req,res)=>{
    res.send({book1:"Rich dad poor dad", book2:"wings of fire"});
});

function logger(req,res,next){
    console.log("abc");
    next();
}

app.listen(3000);