const PageAnalyzer = require("./page-analyzer");

async function ServiceFactory(req, res, next) {
  const route = req.url;
  switch (route) {
    case '/analyze-webpage':
      await PageAnalyzer(req, res, next);
  }
}

module.exports = ServiceFactory;