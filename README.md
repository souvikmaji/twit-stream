# twit-stream

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

## Example pages/APIs

* GET /tweets/?source=%23IndiaVsNZ
* GET /tweets/?source=%40TheTweetOfGod

## Techonologies Used

* ExpressJS
* Socket.io
* twit

For server to client communication, I initially tried Server Side events, with the topic being sent in a http get get request. But then I came across socket.io library. It uses a simple API for bi directional communication between server to client.

Configurations are fetched from the environment variables using `dotenv` npm package. Storing configuration in the environment separate from code is based on The [Twelve-Factor App methodology](https://12factor.net/config).

## TODO

* project structure
* project architecture
* good coding practices
* consistent coding style and formatting
* namings and naming conventions
* good use of comments
* lint warnings
* unit & integration tests
* Check with <https://www.npmjs.com/package/dependency-check> before delivery.
