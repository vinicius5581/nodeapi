var router = require('express').Router();
var bcrypt = require('bcryptjs');
var User = require('../models/user');
var jwt = require('jsonwebtoken');
var constants = require('../config/constants');

//res comes from express.router
router.post('/', (req, res) => {
	//new user object based on the model
	// user = {username: 'foo', email: 'blah@cheese.com', pwd: 'blah'}
	var user = new User({
		username: req.body.user.username,
		email: req.body.user.email,
		passhash: bcrypt.hashSync(req.body.user.pwd, 10)
	});

	user.save().then(
		(newuser) => {
			var sessionToken = jwt.sign(newuser._id, constants.JWT_SECRET, {
				expiresIn: 60 * 60 * 24
			});
			res.json({
				user: newuser,
				message: 'sucess',
				sessionToken: sessionToken
			});
		},
		(err) => {
			res.send(500, err.message);
		}
	);
});

module.exports = router;
