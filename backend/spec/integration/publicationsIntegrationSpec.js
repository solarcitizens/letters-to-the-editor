'use strict';
const chai = require('chai'),
      publicationParser = require('../../src/parsers/publicationParser');

describe('publication parser', () => {
  it('should parse the publication data', () => {
    const expectedPublications = {
      '10022': [{ 'title': 'New York Times',
                 'email': 'advertising@expressadvocate.com.au',
                 'firstName': 'Geoff',
                 'lastName': 'Hawthorne'
               }, {
                 'title': 'New York Post',
                 'email': 'manager.cessadvertiser@ruralpress.com'
               }],
      '2564': [{
                 'title': 'New York Post',
                 'email': 'manager.cessadvertiser@ruralpress.com',
               }]
    };

    chai.expect(publicationParser.publications).to.deep.equal(expectedPublications);
  });
});
