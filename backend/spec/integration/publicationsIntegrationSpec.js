'use strict';
const chai = require('chai'),
      config = require('config'),
      sinon = require('sinon');

let publicationParser;

describe('publication parser', () => {
  beforeEach(() => {
    let configStub = sinon.stub(config, 'get');
    configStub.withArgs('publications.file').returns('./spec/integration/resources/test.csv');
    publicationParser = require('../../src/parsers/publicationParser');
  });

  afterEach(() => {
    config.get.restore();
  });

  it('should parse the publication data', () => {
    const expectedPublications = {
      '2250': [{ 'title': 'Central Coast Express Advocate',
                 'email': 'advertising@expressadvocate.com.au',
                 'firstName': 'Geoff',
                 'lastName': 'Hawthorne',
                 'suburb': 'West Gosford'
               }, {
                 'title': 'The Advertiser',
                 'email': 'manager.cessadvertiser@ruralpress.com',
                 'suburb': 'Cessnock'
               }],
      '2564': [{
                'title': 'The Advertiser',
                'email': 'manager.cessadvertiser@ruralpress.com',
                'suburb': 'Cessnock'
              }]
    };

    chai.expect(publicationParser.publications).to.deep.equal(expectedPublications);
  });
});
