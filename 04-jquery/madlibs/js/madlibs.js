const makeMadLib = function () {
  const noun = $('#noun').val();
  const adjective = $('#adjective').val();
  const name = $('#person').val();

  const story = `${ name } really likes ${ adjective } ${ noun }.`;

  $('#story').text(story);
};

$('#lib-button').on('click', makeMadLib);
