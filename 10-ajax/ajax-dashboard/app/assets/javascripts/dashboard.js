$(document).ready(function () {
  setInterval(function () {
    $.getJSON('/info').done(function (data) {
      $('#brother').text(data.brother);
      $('#time').text(data.time);
      $('#uptime').text(data.uptime);
    });
  }, 1000);

  // setInterval(function () {
  //   $.get('/brother').done(function (name) {
  //     $('#brother').text(name);
  //   });
  // }, 4000);
  //
  // setInterval(function () {
  //   $.get('/time').done(function (output) {
  //     $('#time').text(output);
  //   });
  // }, 1000);
  //
  // setInterval(function () {
  //   $('#uptime').load('/uptime');
  // }, 1500);
});
