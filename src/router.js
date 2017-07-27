const fs = require('fs');
const path = require('path');
const handlers = require('./handlers.js');

const router = (req, res) => {
  const routes = {
    '/': handlers.home,
    '/search' : handlers.search,
  }

  const endpoint = req.url;
  if (endpoint === '/') {

  } else if (endpoint === '/search') {
    res.writeHead(200, {
      "Content-type": "text/html"
    });
    res.end();
  } else {
    res.writeHead(404, {
      "Content-type": "text/html"
    });
    res.end("<h1>Sorry, this page doesn't exist</h1>");
  }
}

module.exports = router;
