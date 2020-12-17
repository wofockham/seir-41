// - Check your work! Try all your video links. Is there anything you need to change?
// - As a bonus, try to make the video watcher ```<div>``` fade in using jQuery.
// - Make sure that you use your browser developer tools to make debugging easier while working on this. Check for errors, and use console.log() to figure out how far your code makes it, and what the values of your variables are along the way.

const thumbnailify = function ($link) {
  const href = $link.attr('href'); // Variadic: getter

  const thumbnailURL = youtube.generateThumbnailUrl(href);
  const $image = $('<img>');
  $image.attr('src', thumbnailURL); // Variadic: setter

  $link.prepend($image);

  $link.on('click', function (event) {
    event.preventDefault(); // Don't follow the link.
    const embedURL = youtube.generateEmbedUrl(href);
    const embedHTML = `<iframe width="560" height="315" src="${ embedURL }" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    $('#player').hide().html(embedHTML).fadeIn(5000); // chaining: fluent interface
  });
}

const $links = $('a');

for (let i = 0; i < $links.length; i++) {
  thumbnailify($links.eq(i));
}
