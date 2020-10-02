const express = require("express");
const bodyParser = require("body-parser");
let path = require('path');
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('views', path.join(__dirname, './views'));

app.get('/', function(req, res){
    res.render('home');
})

app.get('/stream', function(req, res){
    res.render('stream');
})

app.get('/youtubeStream', function(req, res){
    res.render('youtubeStream');
})

app.get('/test', function(req, res){
    res.render('test');
})

let port = process.env.PORT;
if(port ==null || port == "") {
    port = 3000;
};

app.listen(port, function(){
    console.log("Server Started Successfully");
});