const express = require('express');
const app = express();
var routes = require('./routes.js');

const hostname = "127.0.0.1";
const port = 8000;

app.use('/', routes);

// Prints a log once the server starts listening
app.listen(port, function() {
    console.log(`Example app started on http://${hostname}:${port}!`);
});
