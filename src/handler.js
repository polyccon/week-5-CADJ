const fs = require('fs');
const path = require('path');
const apiCall = require("./selectmovie.js");
const url = require("url");

const contentTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.ico': 'image/x-icon',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
};

const handlers = {
  home: (req, res) => {
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
        res.end(file);
      }
    });
  },
  assets: (req, res) => {
    const url = req.url;
    const extension = path.extname(url);
    const filePath = path.join(__dirname, "..", "public", req.url);
    fs.readFile(filePath, (error, file) => {
      if (error) {
        res.writeHead(500, {
          "Content-type": "text/html"
        });
        res.end("<h1>So sorry, we've had a problem on our end.</h1>");

      } else {
        res.writeHead(200, {
          "Content-type": contentTypes[extension],
        });
        res.end(file);
      }
    });

  },
  search: (req, res) => {
    const urlObj = url.parse(req.url, true);
    const queries = urlObj.query;

    res.writeHead(200, {
      "Content-type": "text/html"
    });
    apiCall(queries.genre, queries.year, (body) => {
      const respObject = JSON.parse(body);
      let number = Math.floor(Math.random() * respObject.results.length);
      const titleEn = respObject.results[number].title;
      const overview = respObject.results[number].overview;
      const releaseDate = respObject.results[number].release_date;
      const poster = respObject.results[number].poster_path;
      const result = JSON.stringify({
        titleEn,
        overview,
        releaseDate,
        poster
      });

      res.end(result);
    });
  },
  notFound: (req, res) => {
    res.writeHead(404, {
      "Content-type": "text/html"
    });
    res.end("<h1>Sorry, this page doesn't exist</h1>");
  }
}

module.exports = handlers;
