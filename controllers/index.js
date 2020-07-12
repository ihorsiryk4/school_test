// GET home page.

// eslint-disable-next-line no-unused-vars
exports.indexGetHome = (req, res, next) => {
  res.status(200).send({ title: 'Express' });
};
