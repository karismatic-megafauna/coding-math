var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

app.get('/', function build(request, response) {
  app.use('/build', express.static(__dirname + '/build'));
  response.sendFile(__dirname + '/build/index.html');
}).listen(port, function log() {
  console.log('listening on port: ', port);
});
