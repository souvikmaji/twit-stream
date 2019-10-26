# twit-stream

A Web application with ability to stream tweets for a given hashtag or a specific twitter account.

Enduser should be able to view tweet in realtime.

## Prerequisites

* Node.js
* Register your app here. [twiiter](https://apps.twitter.com/app/new)
* Get API keys, access token and access token secrets from the keys and tokens tab of of app details page on twitter.
* Export them as environment variables or save them in a `.env` file in the project root. *(Omit the export keyword if .env file is used)*.

```sh
export CONSUMER_KEY=ke0eqhjPudOSdzqFdaeCXAIdC
export CONSUMER_SECRET=VHWDWkwxIJFjBU870IxqUcNQCVa38bJZNIxFKX4baQHAUi5lmg
export ACCESS_TOKEN=891672990026301440-9OVH61NxcJc2fWVEU3O90dCCpI86Gsb
export ACCESS_TOKEN_SECRET=r50ih0PYleRpiQHYkHIsZEYFtFQx6I1R3kww8s2nPyQG5
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
