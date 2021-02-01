// Callbacks Review ////////////////////////////////////////////////////////////

// A callback function is a function PASSED TO another function.
// The passed functions gets called for you, later, at some point in time.

// Javascript is asynchronous.

// Timers: A,C,B
console.log('A');
setTimeout(function () {
  console.log('B: time has passed');
}, 4000);
console.log('C');

// jQuery's document ready: I, III, II
console.log('I');
$(document).ready(function () {
  console.log('II: The document is ready');
});
console.log('III');

// Event handlers: 'Groucho', 'Chico' AND THEN MAYBE 'Harpo' (and maybe repeatedly)
console.log('Groucho');
$(document).on('click', function () {
  console.log('Harpo: click');
});
console.log('Chico');

// YOU ARE NOT EXPECTED TO UNDERSTAND THIS (yet)

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// colors.each do |c|
//   puts c
// end

// for (let i = 0; i < colors.length; i++) {
//   console.log( colors[i] );
// }

const each = function (someArray, callbackFunction) {
  for (let i = 0; i < someArray.length; i++) {
    callbackFunction( someArray[i] );
  }
};

each(colors, function (c) {
  console.log( c );
});

each(colors, function (item) {
  console.log( item.toUpperCase() );
});

each(['Groucho', 'Harpo', 'Chico'], function (brother) {
  console.log( brother + ' Marx');
});

// This is now part of ES5.1.
colors.forEach(function (color) {
  console.log( color.toUpperCase() + '!!!' );
});
