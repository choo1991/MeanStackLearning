/* server.js
Single entry point for "server." Routes to relevant
files depending on URL passed in.
*/

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.use('/api/posts', require('./controllers/api/posts.js'));
app.use('/', require('./controllers/static.js'));
app.use('/api/sessions', require('./controllers/api/sessions.js'));
app.use('/api/users', require('./controllers/api/users.js'));

app.listen(3000, function () {
	console.log('Server is on and listening', 3000);
});
