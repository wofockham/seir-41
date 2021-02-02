const fetchFact = function () {
  $.ajax('http://numbersapi.com/random/trivia?json').done(function (info) {
    $('<p>').text(info.text).appendTo('body');
  });
};

$(document).ready(function () {
  $('#fetch').on('click', fetchFact);
  fetchFact(); // First fact for free.
});
