// const $links = $('a');
//
// for (let i = 0; i < $links.length; i++) {
//   const $link = $links.eq(i); // .eq() access via an index to individual elements but retain jQuery
//   const href = $link.attr('href'); // Variadic: getter
//
//   const thumbnailURL = youtube.generateThumbnailUrl(href);
//   const $image = $('<img>');
//   $image.attr('src', thumbnailURL); // Variadic: setter
//
//   $link.prepend($image);
// }

// Aim for this:
$('a').each(function () {
  const href = $(this).attr('href');
  const thumbnail = youtube.generateThumbnailUrl(href);
  $('<img>').attr('src', thumbnail).prependTo(this);
});

// Probably too clever for now:
// $('a').each(function () {
//   $(this).prepend(
//     $('<img>').attr('src', youtube.generateThumbnailUrl( $(this).attr('href') ))
//   )
// });
