'use strict';

const letterService = require('../services/letterService'),
      emailService = require('../services/emailService'),
      stringify = require('csv-stringify'),
      fs = require('fs');

const tags = "solarcitizen";

const headers = ['First name','Last name','email','phone','address 1','City','State','Postcode','Opt in?','Tags','Timestamp'];

function letterToLine(letter) {
  let optedIn = letter.optedIn ? "TRUE" : "FALSE";
  return [letter.firstName, letter.lastName, letter.email, letter.phone, letter.street,
          letter.city, letter.state, letter.postCode, optedIn, tags, letter.createdAt];
}

function formatDataForCsv(letters) {
  let lines = letters.map(letter => (letterToLine(letter.dataValues)));
  lines.unshift(headers);
  return lines;
}

function exportUserData() {
  const userFields = ['firstName','lastName','email','phone','street','city','state','postCode','optedIn','createdAt'];
  const allLetters = letterService.getAllLetters(userFields);

  allLetters.then(letters => {
    let formattedData = formatDataForCsv(letters);

    stringify(formattedData, (err, output) => {
      const exportFileName = '/tmp/export.txt';
      fs.writeFileSync(exportFileName, output);
      emailService.sendUserDataExportEmail(exportFileName);
    });
  });
}

module.exports = { exportUserData };
