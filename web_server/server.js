const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>{
    res.send("Hello");
});

app.get('/bad',(req,res)=>{
    res.send({
        errorMessage:"Sorry",
        statusCode : 400
    });
});

app.listen(3000,()=>{
    console.log("hi there server is on 3000");
});