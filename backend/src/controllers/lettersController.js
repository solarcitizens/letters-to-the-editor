'use strict';

function parseLetter(req) {
  return {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      postCode: req.body.postCode
  };
}

function send(req, res) {
  console.log(req.body);
  let newLetter = parseLetter(req);

  return res.status(200);
}

module.exports = {
  send: send
};
