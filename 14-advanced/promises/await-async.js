// Promises are an evolution of callbacks.
//   a way to handle or process data from an asynchronous process, whenever that process finishes.

const fs = require('fs'); // filesystem: standard Node.js

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

// async/await /////////////////////////////////////////////////////////////////
console.log('async/await example');

// readFile('flintstones.txt').then((data) => {
//   console.log(data);
// });

// async / await
const printFlintstones = async () => {
  const data = await readFile('flintstones.txt'); // Thennable (Promise)
  console.log(data);
};

printFlintstones();

// axios returns a Promise (.then)
const axios = require('axios');
// axios.get('http://numbersapi.com/random/trivia').then((result) => {
//   console.log('Number trivia', result.data);
// });

const numberFact = async () => {
  const result = await axios.get('http://numbersapi.com/random/trivia');
  console.log('Number trivia:', result.data);
};

numberFact();
