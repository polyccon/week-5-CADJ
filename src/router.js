const handlers = require('./handler.js');
const url = require('url');

const router = (req, res) => {
  const routes = {
    '/': handlers.home,
    '/search': handlers.search,
    '/style.css': handlers.assets,
    '/index.js': handlers.assets,
    '/dom.js': handlers.assets,
  }

  const endpoint = url.parse(req.url).pathname;
  if (routes[endpoint]) {
    routes[endpoint](req, res);
  } else {
    handlers.notFound(req, res);
  }
}

module.exports = router;
