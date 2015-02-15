var express = require('express');
var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('index', 
  	{
  		title: 'Express Server', 
  		message: 'Basic Express server using Jade'
  	}
  )
});

app.get('/info', function(req,res){
	res.send('Info here...')
});

var server = app.listen(3333, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Express app listening at http://%s:%s', host, port)

});