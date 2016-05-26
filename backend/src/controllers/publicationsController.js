'use strict';

const publicationService = require('../services/publicationService');


function get(req, res) {
  const postCode = req.params.postCode;
  const publications = publicationService.getPublications(postCode);

  res.status(200).send({publications: publications});
}

module.exports = {
  get: get
};
