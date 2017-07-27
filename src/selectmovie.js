const request = require('request');
const url = "";

function makeServerRequest(callback) {

  request(url, function(error, response, body) {
    if (error) {
      console.log('error:', error);
    } else {
      callback(body);
    }
  });

};
module.exports = makeServerRequest;
