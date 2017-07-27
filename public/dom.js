(function() {
  

  var button = document.getElementById("js-submit_button");
  button.addEventListener('click', function(e) {
    e.preventDefault();
    var genre = document.getElementById('js-genre_input').value;
    var year = document.getElementById('year').value;
    // /search/?genre=action&year=2015
    var url = '/search/?' + 'genre=' + genre + '&year=' + year;

    // make the api call to server
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {

      }
    }
    xhr.open("GET", url, true);
    xhr.send();
    console.log(genre, year);
  });
})();
