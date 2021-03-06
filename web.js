var fs = require('fs');
var infile = "index.html";
var buf = new Buffer(256);
var express = require('express');

buf = fs.readFileSync(infile);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buf.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
