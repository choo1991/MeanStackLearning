/* static.js
Routes static content like page template depending on url
*/

var express = require('express');
var path = require('path');
var router = express.Router();

router.use(express.static(__dirname + '/../assets'));

router.get('/', function (req, res) {
	res.sendFile('posts.html', {"root": path.join(__dirname, '../layout/')});
});

module.exports = router;
