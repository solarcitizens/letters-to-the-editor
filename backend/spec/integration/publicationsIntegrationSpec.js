'use strict';
const chai = require('chai'),
      publicationParser = require('../../src/parsers/publicationParser');

describe('publication parser', () => {
  it('should parse the publication data', () => {
    const expectedPublications = {
      '2250': [{ 'title': 'Central Coast Express Advocate',
                 'email': 'advertising@expressadvocate.com.au',
                 'firstName': 'Geoff',
                 'lastName': 'Hawthorne'
               }, {
                 'title': 'The Advertiser',
                 'email': 'manager.cessadvertiser@ruralpress.com'
               }],
      '2564': [{
                'title': 'The Advertiser',
                'email': 'manager.cessadvertiser@ruralpress.com'
              }]
    };

    chai.expect(publicationParser.publications).to.deep.equal(expectedPublications);
  });
});
