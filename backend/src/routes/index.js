'use strict';

const express = require('express'),
      config = require('config'),
      campaignConfig = require(__dirname + '/../../config/campaigns.json'),
      lettersController = require('../controllers/lettersController'),
      letsEncryptController = require('../controllers/letsEncryptController'),
      publicationsController = require('../controllers/publicationsController');
var router = express.Router();

router.get('/campaigns/:campaignName', function (req, res) {
  res.render('index');
});

router.post('/letters', lettersController.send);

router.get('/publications/:postCode', publicationsController.get);

router.get('/.well-known/acme-challenge/:acmeToken', letsEncryptController.get);

router.get('/config/:campaignName', (req, res) => {
  let campaign = campaignConfig[req.params.campaignName];
  if (campaign) {
    res.status(200).send({ confirmationPageUrl: config.get('confirmationPageUrl'),
                           campaign: campaign
                        });
  } else {
    res.sendStatus(404);
  }
});

router.get('/confirmation', (req, res) => {
  res.render('confirmation.html');
})


module.exports = router;
