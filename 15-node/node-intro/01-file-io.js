// recreate `cat` in JS

const fs = require('fs'); // No need to install: this is the builtin Node.js standard library.

// Synchronously: this is wrong
// const fileData = fs.readFileSync('flintstones.txt', 'utf-8'); // Blocking
// console.log(fileData);

// Asynchronous: callbacks
// Many asynchronous Node.js functions implement the Error First Pattern:
fs.readFile('flintstones.txt', 'utf-8', function (error, data) {
  if (error) {
    return console.error(error); // A bit wanky.
  }
  console.log(data);
});

console.log('Thanks');
