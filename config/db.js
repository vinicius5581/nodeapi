var db = require('mongoose');

db.connect('mongodb://<dbuser>:<dbpassword>@ds011429.mlab.com:11429/myworkouts');

//making db available for other modules to require db
module.exports = db;