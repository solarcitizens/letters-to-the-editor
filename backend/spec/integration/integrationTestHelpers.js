'use strict';

let makeLetter = () => {
  return {
    'personalDetails' : {
      'firstName': 'Donald',
      'lastName': 'Trump',
      'email': 'makeamericagreat@donaldjtrump.com',
      'phone': '123456789',
      'street': '725 5th Ave Trump Tower',
      'city': 'New York',
      'state': 'NY',
      'postCode': '10022'
    },
    'publications': ['New York Times', 'New York Post']
  }
}

let makeInvalidLetter = () => {
  return {
    'personalDetails' : {
      'firstName': 'Donald',
      'lastName': 'Trump',
      'email': 'makeamericagreat@donaldjtrump.com',
      'phone': '123456789',
      'street': '725 5th Ave Trump Tower',
      'city': 'New York',
      'state': 'NY',
      'postCode': '10022'
    }
  }
}

module.exports = {
  makeLetter: makeLetter,
  makeInvalidLetter: makeInvalidLetter
}
