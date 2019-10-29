module.exports = function (io, twit) {
	const app = require("express");
	const router = app.Router();

	io.on("connection", function (socket) {

		socket.on("subscribe", function (source) {
			const stream = twit.stream("statuses/filter", { track: [source] });

			stream.on("tweet", function (tweet) {
				socket.emit("tweet",tweet);
			});

			socket.on("stopStream", function () {
				stream.stop();
			});

			socket.on("disconnect", function () {
				stream.stop();
			});
		});

	});

	return router;
};
