var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.get('/info', function(req,res){
	res.send('Info here...')
});

var server = app.listen(3333, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

});