

var express = require('express');

var app = express();

// __dirname = project root
app.set('views', __dirname);

app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

// req = request object, res = response object
app.get('*', function(req, res){
  res.render('index'); // Render a view we will be calling index
});

// Tell app to listen for requests. 3000 = Port. But becuase were using cloud nine we do process.etc. http://c9.io
//app.listen(process.env.PORT, process.env.IP);
app.listen(3000);






