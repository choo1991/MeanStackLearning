var express = require('express');
var jwt = require('jwt-simple');
var bcrypt = require('bcrypt');
var app = express();
app.use(require('body-parser').json());
var User = require('./models/user.js');

var secretKey = 'supersecretkey';

app.post('/session', function (req, res, next) {
	// Look up user in db
	User.findOne({username: req.body.username}, function (err, user) {
		if (err) {
			return next(err);
		}
		if (!user) {
			return res.send(401);
		}
		// Compare password sent in to db password
		bcrypt.compare(req.body.password, user.password, function (err, valid) {
			if (err) {
				return next(err);
			}
			if (!valid) {
				return res.send(401);
			}
			// Build a JWT to send back to client
			var token = jwt.encode({username: user.username}, secretKey);
			res.json(token);
		});
	});
});

app.get('/user', function (req, res) {
	var token = req.headers['x-auth'];
	var auth = jwt.decode(token, secretKey);
	User.findOne({username: auth.username}, function (err, user) {
		res.json(user);
	});
});

app.post('/user', function (req, res, next) {
	var user = new User({username: req.body.username});
	bcrypt.hash(req.body.password, 10, function (err, hash) {
		user.password = hash;
		user.save(function (err, user) {
			if (err) {
				throw next(err);
			}
			res.send(201);
		});
	});
});

app.listen(3000);
