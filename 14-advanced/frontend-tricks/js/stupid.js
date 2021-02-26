$(document).ready(() => {
  // Parallax //////////////////////////////////////////////////////////////////
  const $kitty = $('.kitty-js'); // Cacheing.
  const $body = $('body');

  $(window).on('scroll', () => {
    const scrollTop = $(window).scrollTop();
    $kitty.css('background-position-y', -scrollTop / 2);
    $body.css('background-position-y', -scrollTop / 5);
  });

  // Bubbles ///////////////////////////////////////////////////////////////////
  $(window).on('mousemove', (e) => {
    const {pageX:x, pageY:y} = e; // Destructuring with renaming.

    const size = Math.random() * 10;

    const $bubble = $('<div class="bubble">').css({
      left: x,
      top: y,
      width: size + 'em',
      height: size + 'em'
    });

    $bubble.appendTo('body');

    $bubble.animate({top: -200}, 2500, () => {
      $bubble.remove(); // this callback runs when the animation is complete.
    });
  })
});
