$(document).ready(function () {	

	const newCard = function (tweet) {
		return	`<div class="card card-md w-75 mx-auto">
			<div class="card-body">
				<div class="card-header">
					<h5>${tweet.user.screen_name}</h5>
				</div>
				<div class="card-body">
					<div class="card-text">${tweet.text}</div>
				</div>

			</div>
		</div>
			<br />`;
	};

	var socket = io();

	$("#source-form").submit(function (event) {	
		event.preventDefault();
		$("#feed").empty();
		socket.emit("subscribe", $("#source").val());
		return false;
	}); 

	socket.on("tweet", function (tweet) {
		console.log(tweet);	
		let cardContent =  newCard(tweet);

		$("#feed").prepend(cardContent);
	});

});