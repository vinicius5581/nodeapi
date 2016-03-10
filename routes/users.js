var router = require('express').Router();
var bcrypt = require('bcrypt.js');
var User = require('../models/user');

//res comes from express.router
router.post('/', (req, res) => {
	//new user object based on the model
	// user = {username: 'foo', email: 'blah@cheese.com', pwd: 'blah'}
	var user = new User({
		username: req.body.user.username,
		email: req.body.user.email,
		passhash: bcrypt, hashSync(req.body.user.pwd, 10)
	});

	user.save().then(
		(newuser) => {
			res.json({
				user:newuser,
				message: 'sucess'
			})
		},
		(err) => {
			res.send(500, err.message);
		}
	)
});

module.exports = router;
