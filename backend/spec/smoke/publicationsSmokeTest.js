'use strict';

const chai = require('chai'),
      fs = require('fs'),
      csvParser = require('csv-parse');

const looksMoreOrLessLikeAnEmailAddress = /.+@.+\.[a-z]+(?:\.[a-z]+)?/;
const looksLikeSomePostCodes = /\d{4}(?:,\d{4})*/;

describe('The checked in publications file should contain only valid data.', () => {
  it('Each entry should contain title, email address and postcodes', () => {
    const parser = csvParser({ 'columns':true });

    parser.on('readable', function(){
      let record;
      while(record = parser.read()){
        const message = "Failing record: " + JSON.stringify(record);

        chai.expect(record['Title'], message).to.not.be.empty;
        chai.expect(record['Email'], message).to.match(looksMoreOrLessLikeAnEmailAddress);
        chai.expect(record['Postcodes'], message).to.match(looksLikeSomePostCodes);
      }
    });

     let publicationData = fs.readFileSync('publications.csv', { encoding: 'utf8' });
     parser.write(publicationData);
     parser.end();
   });
 });
