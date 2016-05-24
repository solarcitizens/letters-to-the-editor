function get(req, res) {
  res.status(200).send({publications: ['The Indi Chronicles', 'The Wangaratta Warbler', 'The Sydney Snitch']});
}

module.exports = {
  get: get
};
