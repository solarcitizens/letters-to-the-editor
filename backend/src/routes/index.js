'use strict';

const express = require('express'),
      lettersController = require('../controllers/lettersController');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('index', {title: 'Letters to the Editor'});
});

router.post('/letters', lettersController.send);

module.exports = router;
