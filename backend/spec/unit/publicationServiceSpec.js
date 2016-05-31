'use strict';
const chai = require('chai');
const expect = chai.expect;
const publicationService = require('../../src/services/publicationService');

describe('publication service', () => {
  it('should get the info for a list of publications', () => {
    const expectedPublications = [
          {
             'title': 'The Advertiser',
             'email': 'manager.cessadvertiser@ruralpress.com',
             'suburb': 'Cessnock'
           }];

    expect(publicationService.findByNameAndPostCode('2250', ['The Advertiser', 'I do not exist'])).to.deep.equal(expectedPublications);
  });

  it('should return an empty list if no titles to find provided', () => {
    expect(publicationService.findByNameAndPostCode('2250', null)).to.be.empty;
  });

  it('should return an empty list if no postcode provided', () => {
    expect(publicationService.findByNameAndPostCode(null, ['The Advertiser'])).to.be.empty;
  });

});
