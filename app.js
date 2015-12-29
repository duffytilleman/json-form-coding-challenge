var express = require('express');
var schema = require('./schema');
var app = express();

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.use('/static', express.static('public'));

app.get('/schema', function(req, res) {
  res.send(schema);
});

var server = app.listen(3333, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Server listening at http://%s:%s', host, port);
});
