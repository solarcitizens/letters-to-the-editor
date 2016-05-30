'use strict';

const testHelpers = require('../testHelpers');
const letterTransformer = require('../../src/parsers/letterTransformer');
const chai = require('chai');
const expect = chai.expect;

describe('lettre transformer', () => {
  it('should add a signature to the body', () => {
    let letter = letterTransformer.transformLetter(testHelpers.makeLetter());
    expect(letter.body).to.contain(`\n\n--\nDonald Trump\nmakeamericagreat@donaldjtrump.com\n123456789\n725 5th Ave Trump Tower, New York, NY 10022`);
  });
});


