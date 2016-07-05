'use strict';

const fs = require('fs'),
      config = require('config'),
      csvParser = require('csv-parse');

function parsePublication(record) {
  const publication = {
    title: record['Title'].trim(),
    email: record['Email'].trim()
  };
  if (record['FirstName'] != "") publication.firstName = record.FirstName;
  if (record['Surname'] != "") publication.lastName = record.Surname;
  return publication;
}

function parsePostCodes(record) {
  const postCodeString = record['Postcodes'];
  let postCodes = postCodeString.split(",");
  postCodes = postCodes.map(postCode => {
    postCode = postCode.trim()
    return (postCode.length === 3)
      ? postCode = "0" + postCode
      : postCode
  })
  return postCodes;
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
