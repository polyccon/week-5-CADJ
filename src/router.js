const fs = require('fs');
const path = require('path');
const apiCall = require("./selectmovie.js")


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
    apiCall(function (body){
      //var arr = Object.keys(body);
      const respObject = JSON.parse(body);
      const title = respObject["results"][0].title;
      const overview = respObject["results"][0].overview;
      const releaseDate = respObject["results"][0].release_date;
      const poster = respObject["results"][0].poster_path;
      
      console.log(title);
      res.end(title);
  });

  } else {
    res.writeHead(404, {
      "Content-type": "text/html"
    });
    res.end("<h1>Sorry, this page doesn't exist</h1>");
  }
}

module.exports = router;
