(function() {


  var button = document.getElementById("js-submit_button");
  button.addEventListener('click', function(e) {
    e.preventDefault();
    var genre = document.getElementById('js-genre_input').value;
    var year = document.getElementById('year').value;
    var url = '/search?' + 'genre=' + genre + '&year=' + year;
    httpRequest(url, renderDom);
  })

  // make the api call to server
  function httpRequest(url, nextFunction) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var data = JSON.parse(xhr.responseText);
        nextFunction(data);
      }
    }
    xhr.open('GET', url, true);
    xhr.send();
  }

  var randomMov = document.getElementById("random_movie");
  var dom_title = document.getElementById("title");
  var dom_poster = document.getElementById("poster");
  var dom_releasedate = document.getElementById("releasedate");
  var dom_overview = document.getElementById("overview");


  function renderDom(data) {
    var posterPath = data.poster;
    randomMov.style = "display: block";
    dom_title.textContent = data.titleEn;
    dom_poster.src = "https://image.tmdb.org/t/p/w650" + posterPath;
    dom_releasedate.textContent = "Release date: "+ data.releaseDate;
    dom_overview.textContent = "Summary: " + data.overview;
  }
})();
