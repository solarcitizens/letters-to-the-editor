'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('index', {title: 'Letters to the Editor'});
});

module.exports = router;
