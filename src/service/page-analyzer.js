const validUrl = require('valid-url');

async function PageAnalyzer (req, res, next) {
  const {pageURL} = req.body;
  console.log(pageURL);
  if (!validUrl.isUri(pageURL)) {
    res.render('pages/error-page', {errorMessage: 'Given URL is not looking valid'});
  }
}

module.exports = PageAnalyzer;