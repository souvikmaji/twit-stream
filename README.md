# twit-stream

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/deb85e8f8e6c45929d53a7a96c18621f)](https://www.codacy.com/manual/souvikmaji/twit-stream?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=souvikmaji/twit-stream&amp;utm_campaign=Badge_Grade)

A Web application with ability to stream tweets for a given hashtag or a specific twitter account.

Enduser should be able to view tweet in realtime.

## Prerequisites

* Node.js
* Register your app here. [twiiter](https://apps.twitter.com/app/new)
* Get API keys, access token and access token secrets from the keys and tokens tab of of app details page on twitter.
* Export them as environment variables or save them in a `.env` file in the project root. *(Omit the export keyword if .env file is used)*.

```sh
export CONSUMER_KEY=<consumer_key>
export CONSUMER_SECRET=<consuer_secret>
export ACCESS_TOKEN=<access_token>
export ACCESS_TOKEN_SECRET=<access_token_secret>
```

## Run instruction

```sh
# get the code
git clone https://github.com/souvikmaji/twit-stream.git
cd twit-stream

# install dependencies
npm i

# run
npm start
```

Visit: <http://127.0.0.1:8000>

The project is also live and hosted at <https://byju-twit-stream.herokuapp.com/>

## Example pages/APIs

* GET /tweets/?source=%23IndiaVsNZ
* GET /tweets/?source=%40TheTweetOfGod

## Techonologies Used

* ExpressJS
* Socket.io
* twit
* dotenv
* eslint

ExpressJS is used as a static file server. It serves our html pages and static assets.

Once a user has submitted a topic he want stream, server pushes new tweets to the client.

For server to client communication, I initially tried using Server Side events, with the topic being sent in a http get get request. But then I came across socket.io library. It uses a simple API for bi directional communication between server to client.

Configurations are fetched from the environment variables using `dotenv` npm package. Storing configuration in the environment separate from code is based on The [Twelve-Factor App methodology](https://12factor.net/config).

Eslint is used to lint JavaScript files.

## TODO

* unit & integration tests
