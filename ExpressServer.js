var host = "127.0.0.1";
var port = 1337;
var express = require("express");
var stringHelper = require("./stringHelper.js");
var nodeSum = require("./nodeSum.js");
var app = express();

app.get("/", function(request, response) {
   response.send("Hello World!");
});

app.get("/hello/:thetext", function(request, response) {
   response.send("Hello "+stringHelper.upperCase(request.params.thetext)+"!");
});

app.get("/sum/:num1/:num2", function(request, response) {
   var a = request.params.num1;
   var b = request.params.num2;
   response.send("Sum " + a + " + " + b + " = " + nodeSum.sum(a, b) + "");
});


app.listen(port, host);
console.log('Express listening on host='+host+":"+port);
