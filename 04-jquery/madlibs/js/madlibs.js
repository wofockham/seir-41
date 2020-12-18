$(document).ready(function () {
  const makeMadLib = function () {
    const noun = $('#noun').val();
    const adjective = $('#adjective').val();
    const name = $('#person').val();

    const story = `${ name } really likes ${ adjective } ${ noun }.`;

    $('#story').text(story);
  };

  $('#lib-button').on('click', makeMadLib);

  $('h1').funText(100, 'candy');
  $('li').funText(50, 'reverseRainbow');
});
