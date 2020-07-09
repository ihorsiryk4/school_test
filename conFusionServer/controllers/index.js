// GET home page.

// eslint-disable-next-line no-unused-vars
exports.indexGetHome = (req, res, next) => {
  res.render('index', { title: 'Express' });
};
