var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var path = require('path');
var ejs = require("ejs");

app.set('view engine', 'ejs', 'js');

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
    var today = new Date();

    
   var options = {
    weekday : "long",
    day: "numeric",
    month: "long"
   };

   var day = today.toLocaleDateString("tr-TR", options);
        
        res.render("list", { gunTuru: day });
    
   app.post("/", function (req,res) {
    var item = req.body.yeniOge;
    console.log(item);
   });
});


app.listen(3000, function (req, res) {
    console.log("server çalışıyor");
});