const request = require('request');
const https = require("https");
const apikey = process.env.API_KEY;

function movieApi(genre, year, callback) {
  var url =
  "http://api.themoviedb.org/3/discover/movie?api_key="+apikey+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=";
  url += genre + "&year=" + year;
  request(url, function(error, response, body) {

    if (error) {
      callback(error);
    } else {
      callback(null, body);
    }
  });

};

module.exports = movieApi;
