var http = require("http");
http.createServer(function(request, response){

}).listen(8081);


var express = require('express');
var app = express();

app.listen(3000, function(){
	console.log('now listen on http://localhost: 3000');
})