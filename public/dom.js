(function() {
  var button = document.getElementById("js-submit_button");
  button.addEventListener('click', function(e) {
    e.preventDefault();
    var genre = document.getElementById('js-genre_input').value;
    var year = document.getElementById('year').value;
    console.log(genre, year);
  });
})();
