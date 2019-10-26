var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
	const twit = req.app.get("twit");
	
	const source = req.query.source;

	var stream = twit.stream("statuses/filter", { track: [source] });

	stream.on("tweet", function (tweet) {
		console.log(tweet);
	});
	

	res.send("respond with a resource");
});

module.exports = router;
