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
          <span class="tab-space"><i class="far fa-heart"></i>${tweet.favorite_count}</span>
          <span class="tab-space"><i class="fas fa-retweet"></i>${tweet.retweet_count}</span>
          <span class="tab-space">${tweet.created_at}</span>
        </div>
      </div>
       <br />`;
	};

	let socket = io();
	let oldSource = null;

	$("#source-form").submit(function (event) {
		event.preventDefault();	// prevent form submit

		$("#feed").empty(); 	// clear existing feed if any
		if(oldSource) {
			// stop old previous stream
			socket.emit("stopStream", oldSource);
		}

		// create new stream
		let newSource = $("#source").val();
		socket.emit("subscribe", newSource);

		// keep track of the current source, so that it can be cleared later
		oldSource = newSource;
		return false;
	});

	socket.on("tweet", function (tweet) {
		let cardContent =  newCard(tweet);

		$("#feed").prepend(cardContent);
	});

});
