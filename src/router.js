const fs = require('fs');
const path = require('path');

const router = (req, res) => {
  const endpoint = req.url;
  if (endpoint === '/') {
    const filePath = path.join(__dirname, '..', 'public', 'index.html');
    fs.readFile(filePath, (err, file) => {
    });
     
  }
  else if (endpoint === '/search') {
  }
  
}

module.exports = router;
