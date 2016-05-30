'use strict';

const express = require('express'),
      config = require('config'),
      lettersController = require('../controllers/lettersController'),
      letsEncryptController = require('../controllers/letsEncryptController'),
      publicationsController = require('../controllers/publicationsController');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('index', {title: 'Letters to the Editor'});
});

router.post('/letters', lettersController.send);

router.get('/publications/:postCode', publicationsController.get);

router.get('/.well-known/acme-challenge/:acmeToken', letsEncryptController.get);

router.get('/config', (req, res) => {
  res.status(200).send({ confirmationPageUrl: config.get('confirmationPageUrl') });
});

router.get('/confirmation', (req, res) => {
  res.render('confirmation.html');
})

module.exports = router;
