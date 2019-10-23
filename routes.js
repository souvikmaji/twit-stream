const express = require('express');
var router = express.Router();

// Home page route
router.get('/', function (req, res) {
    res.send('Hello World!');
});

module.exports = router;