const fs = require('fs');
const path = require('path');
const handlers = require('./handler.js');

const router = (req, res) => {
  const routes = {
    '/': handlers.home,
    '/search' : handlers.search,
    '/style.css': handlers.assets,
    '/index.js': handlers.assets,
    '/dom.js': handlers.assets,
  }

  const endpoint = req.url;
  if (routes[endpoint]) {
    routes[endpoint](req, res);
  }
  else {
    handlers.notFound(req, res);
  }
}

module.exports = router;
