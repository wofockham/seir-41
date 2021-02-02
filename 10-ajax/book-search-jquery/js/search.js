const fetchCover = function (event) {
  event.preventDefault(); // Don't leave this page.

  const title = $('#title').val();
  const url = `https://wwww.googleapis.com/books/v1/volumes?q=title:${ title }`;

  // Modern jQuery: Deferreds (=> Promises)
  $.ajax(url).done(function (result) {
    const cover = result.items[0].volumeInfo.imageLinks.thumbnail;
    $('#cover').attr('src', cover);
  }).fail(function () {
    alert('There was error!');
  });

  // Traditional flavour:
  // $.ajax(url, {
  //   success: function (result) {
  //     const cover = result.items[0].volumeInfo.imageLinks.thumbnail;
  //     $('#cover').attr('src', cover);
  //   }
  // });
};

$(document).ready(function () {
  $('#search-form').on('submit', fetchCover);
});
