var fs = require('fs');
var infile = "index.html";
var buf = new Buffer(256);
var express = require('express');

buf = fs.readFileSync(infile);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buf);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
