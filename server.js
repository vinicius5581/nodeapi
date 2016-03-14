var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.json());


app.use((req, res, next) => {
	//Allow cross origin resources sharing
	res.header('access-control-allow-origin', '*');
	//Allowed http methods (Create, Updated, Fetch, Delete)
	res.header('access-control-allow-methods', 'GET, POST, PUT, DELETE');
	res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
	next();
});

app.use('/test', function(req, res){
	res.send('hello world');
});

app.use('/api/users', require('./routes/users')); 


app.listen(3000,function(){
	console.log('app is listening on port 3000...');
});