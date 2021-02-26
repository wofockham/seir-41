// let id = 0; // global: bad
// const nextID = function () {
//   return id++; // Post increment.
// };

// Higher Order Function:
// const helloMaker = function () {
//   const greeting = 'Hello'; // greeting persists through a closure.
//
//   return function () {
//     console.log(greeting);
//   }
// }
//
// const returnedFunction = helloMaker();
// returnedFunction(); // "Hello"
// console.log( greeting );

const nextIDMaker = function () {
  let id = 0; // persists through the closure.
  return function () {
    return id++;
  }
}

const nextID = nextIDMaker();

console.log( nextID() );
console.log( nextID() );
console.log( nextID() );
console.log( nextID() );

// HTML Tags (200 or so)
// const p = function (content) {
//   return '<p>' + content + '</p>';
// }
//
// const h1 = function (content) {
//   return '<h1>' + content + '</h1>';
// }
//
// const h2 = function (content) {
//   return '<h2>' + content + '</h2>';
// }

const tagMaker = function (tagName) {
  return function (content) {
    return `<${ tagName }>${ content }</${ tagName }>`;
  }
}

const p = tagMaker('p');
const h1 = tagMaker('h1');
const h2 = tagMaker('h2');

console.log( p('hotdogs') ); // <p>hotdogs</p>
