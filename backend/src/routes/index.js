'use strict';

const express = require('express'),
      lettersController = require('../controllers/lettersController'),
      publicationsController = require('../controllers/publicationsController');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('index', {title: 'Letters to the Editor'});
});

router.post('/letters', lettersController.send);

router.get('/publications/:postCode', publicationsController.get);

module.exports = router;
