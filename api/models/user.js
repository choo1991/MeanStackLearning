var db = require('../db.js');

var user = db.Schema({
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true,
		select: false
	},
	email: {
		type: String,
		required: true,
		validate: function (email) {
			return /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
		}
	}
});

module.exports = db.model('User', user);
