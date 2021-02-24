const state = {
  nextPage: 1,
  lastPageReached: false
};

const searchFlickr = function (keywords) {
  if (state.lastPageReached) {
    return; // Get out.
  }

  console.log(`Searching Flickr for ${ keywords }!!!`);

  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?'; // JSONP

  $.getJSON(flickrURL, {
    method: 'flickr.photos.search', // not to be confused with HTTP methods like GET/POST
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: keywords,
    format: 'json',
    page: state.nextPage++,
  }).done(showImages).done(function (info) {
    if (info.photos.page >= info.photos.pages) {
      state.lastPageReached = true;
    }
    console.log(info);
    console.log(state);
  });
};

const showImages = function (results) {
  _(results.photos.photo).each(function (photo) {
    const thumbnailURL = generateURL(photo);
    const $img = $('<img>', {src: thumbnailURL}); // .attr('src', thumbnailURL);
    $img.appendTo('#images'); // $('#images').append($img);
  });
};

const generateURL = function (p) {
  return [
    'http://farm',
    p.farm,
    '.static.flickr.com/',
    p.server,
    '/',
    p.id,
    '_',
    p.secret,
    '_q.jpg' // Change 'q' to something else for different sizes (see docs)
  ].join('');
};

$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault(); // disable the form being submitted to "the server".

    // Reset:
    state.nextPage = 1;
    state.lastPageReached = false;
    $('#images').empty();

    const searchTerms = $('#query').val();
    searchFlickr(searchTerms);
  });

  const chillSearchFlickr = _.debounce( searchFlickr, 4000, true );

  // Very twitchy:
  $(window).on('scroll', function () {
    const scrollBottom = $(document).height() - $(document).scrollTop() - $(window).height();
    if (scrollBottom < 500) {
      const searchTerms = $('#query').val();
      chillSearchFlickr(searchTerms); // getting page 1 again.
    }
  });
});
