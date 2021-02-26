// Promises are an evolution of callbacks.
//   a way to handle or process data from an asynchronous process, whenever that process finishes.

const fs = require('fs'); // filesystem: standard Node.js

// fs.readFile is asynchronous and uses callbacks:
// fs.readFile('flintstones.txt', 'utf-8', (err, content) => { // error first pattern
//   if (err) {
//     throw err; // dramatic return
//   }
//
//   console.log(content);
// });

// A promise wrapper around fs.readFile
const readFile = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf-8', (err, content) => {
      if (err) {
        return reject(err); // boo
      }

      resolve(content); // yay
    })
  });
};

// readFile('flintstones.txt').then((fileContent) => {
//   console.log('yes it was successful', fileContent);
// }).catch((err) => {
//   console.error('wow something bad happen', err);
// });

const flintstonesPromise = readFile('flintstones.txt'); // returns a promise.

// 1000s of lines of code

flintstonesPromise.then((c) => {
  console.log(c);
});

// 1000s of lines of code

flintstonesPromise.then((c) => {
  console.log(c.toUpperCase());
});

setTimeout(() => {
  flintstonesPromise.then((moreFlintstones) => {
    console.log('here they are again (a bit later)', moreFlintstones);
  });
}, 7000);
