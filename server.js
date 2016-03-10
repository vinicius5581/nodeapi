var express = require('express');
var app = express();
var db = require('mongoose');


app.use('/test', function(req, res){
	res.send('hello world');
});

app.listen(3000,function(){
	console.log('app is listening on port 3000...');
});