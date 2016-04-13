var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.use('/api/posts', require('./posts.js'));
app.use('/', require('./static.js'));

app.listen(3000, function () {
	console.log('Server is on and listening', 3000);
});
