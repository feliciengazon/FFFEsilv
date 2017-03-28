var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();

app.use(cookieParser());

app.get('/cookie',function(req, res){
     res.cookie(cookie_name , 'cookie_value').send('Cookie is set');
});

app.get('/', function (req, res) {
  res.send('Hello World!');
  res.cookie(name , 'value', {expire : new Date() + 9999});
    console.log("Cookies :  ", req.cookies);
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
