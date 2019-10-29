$(document).ready(function () {

	const newCard = function (tweet) {
		return	`<div class="card card-md w-75 mx-auto mb-2">
        <div class="card-header bg-transparent">
          <h5 class="card-title">${tweet.user.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">@${tweet.user.screen_name}</h6>
        </div>
        <div class="card-body">
          <div class="card-text">${tweet.text}</div>
        </div>
        <div class="card-footer text-muted bg-transparent">
          <span><i class="far fa-heart"></i>${tweet.favorite_count}</span>
          <span><i class="fas fa-retweet"></i>${tweet.retweet_count}</span>
          <span>${tweet.created_at} </span>
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
		let cardContent =  newCard(tweet);

		$("#feed").prepend(cardContent);
	});

});
