var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

app.get('/', function build(request, response) {
  response.sendfile(__dirname + 'build/index.html');
}).listen(port, function log() {
  console.log('listening on port: ', port);
});
