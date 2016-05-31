'use strict';

const fs = require('fs'),
      config = require('config'),
      csvParser = require('csv-parse');

function parsePublication(record) {
  const publication = {
    title: record['Title'],
    email: record['Email']
  };
  if (record['FirstName'] != "") publication.firstName = record.FirstName;
  if (record['Surname'] != "") publication.lastName = record.Surname;
  return publication;
}

function parsePostCodes(record) {
  const postCodeString = record['Postcodes'];
  return postCodeString.split(",");
}

const publications = {},
      parser = csvParser({ 'columns':true });

parser.on('readable', function(){
  let record;
  while(record = parser.read()){
    let publication = parsePublication(record);
    let postCodes = parsePostCodes(record);
    postCodes.map(postCode => {
      if (publications[postCode]) {
        publications[postCode].push(publication);
      } else {
        publications[postCode] = [publication];
      }
    });
  }
});

let publicationData = fs.readFileSync(config.get('publications.file'), { encoding: 'utf8' });
parser.write(publicationData);
parser.end();

module.exports = {
  publications: publications
};
