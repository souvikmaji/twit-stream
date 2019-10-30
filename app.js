const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const http = require("http");
const socket_io = require("socket.io");
const Twit = require("twit");

// setup dotenv: read from environment variables or from .env file
require("dotenv").config();

const config = require("./config");

const app = express();

const twit = new Twit(config);

app.disable("x-powered-by"); // disable the X-Powered-By header

app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	const err = new Error("Not Found");
	err.status = 404;
	next(err);
});

// error handler
app.use(function (err, req, res) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.send("error");
});


// Create HTTP server using app
const server = http.Server(app);

// bind server with socker.io
const io = socket_io();
io.attach(server);

require("./routes/tweets")(io, twit);

// export both app and server to be used by www
module.exports = {app: app, server: server};
