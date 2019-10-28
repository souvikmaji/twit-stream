module.exports = function (io, twit) {
	var app = require("express");
	var router = app.Router();

	io.on("connection", function (socket) {
		console.log("A user connected");
		
		socket.on("subscribe", function (source) {
			console.log("message: " + source);
			var stream = twit.stream("statuses/filter", { track: [source] });
			console.log("came here");
			stream.on("tweet", function (tweet) {
				io.emit("tweet",tweet);
			});	
			
		});

		socket.on("disconnect", function () {
			console.log("user disconnected");
		});

	});

	return router;
};

const sendTweets = function (source, twit, res) {
	
};