'use strict';
const chai = require('chai');
const expect = chai.expect;
const publicationService = require('../../src/services/publicationService');

describe('publication service', () => {
  it('should get the info for a list of publications', () => {
    const expectedPublications = [
          {
             'title': 'New York Post',
             'email': 'manager.cessadvertiser@ruralpress.com'
           }];

    expect(publicationService.findByNameAndPostCode('10022', ['New York Post', 'I do not exist'])).to.deep.equal(expectedPublications);
  });

  it('should return an empty list if no titles to find provided', () => {
    expect(publicationService.findByNameAndPostCode('10022', null)).to.be.empty;
  });

  it('should return an empty list if no postcode provided', () => {
    expect(publicationService.findByNameAndPostCode(null, ['New York Post'])).to.be.empty;
  });

});
