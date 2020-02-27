var express = require('express');
var router = express.Router();

var weather = require('../kaisaniemi.json');

router.route('/').get((req, res) => {
    res.send(weather);
})

module.exports = router;