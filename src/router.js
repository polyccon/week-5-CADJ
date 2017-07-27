const fs = require('fs');
const path = require('path');



const router = (req, res) => {
  const endpoint = req.url;
  if (endpoint === '/') {
    const filePath = path.join(__dirname, "..", "public", "index.html");
    fs.readFile(filePath, (error, file) => {
      if (error) {
        res.writeHead(500, {
          "Content-type": "text/html"
        });
        res.end("<h1>So sorry, we've had a problem on our end.</h1>");

      } else {
        res.writeHead(200, {
          "Content-type": "text/html"
        });
        res.end();
      }
    });
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
