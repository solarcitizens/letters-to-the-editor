'use strict';

const publications = require('../parsers/publicationParser').publications;

let getPublications = postCode => {
  const publicationsForPostCode = publications[postCode];

  return (publicationsForPostCode) ? publicationsForPostCode.map(pub => (pub.title)) : [];
}

module.exports = {
  getPublications: getPublications
}
