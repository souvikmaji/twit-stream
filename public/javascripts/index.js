$(document).ready(function () {	
	var socket = io();
	$("#source-form").submit(function (event) {	
		event.preventDefault();
		socket.emit("subscribe", $("#source").val());
		return false;
	}); 

	socket.on("tweet", function (tweet) {
		console.log(tweet);
		
	});

});