'use strict';

const publications = require('../parsers/publicationParser').publications;
const _ = require('underscore');

let getPublications = postCode => {
  const publicationsForPostCode = publications[postCode];

  return (publicationsForPostCode) ? publicationsForPostCode.map(pub => (pub.title)) : [];
}

let findByNameAndPostCode = (postCode, titlesToFind) => {
  const publicationsForPostCode = publications[postCode];
  return _.filter(publicationsForPostCode, (publication) => {
    return _.contains(titlesToFind, publication.title);
  });
};

module.exports = {
  getPublications: getPublications,
  findByNameAndPostCode: findByNameAndPostCode
}
