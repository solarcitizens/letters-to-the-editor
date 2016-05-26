'use strict';

let get = (req, res) => {
  if (req.params.acmeToken === process.env['ACME_TOKEN']) {
    res.status(200).send(process.env['ACME_KEY']);
  } else {
    res.sendStatus(400);
  }
}

module.exports = {
  get: get
};
