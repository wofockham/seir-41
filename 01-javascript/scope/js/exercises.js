// Scopes

// Global scope ////////////////////////////////////////////////////////////////
const globalMessage = 'Hello World';

const showGlobalMessage = function () {
  console.log( globalMessage ); // globalMessage is in the global scope.
};

showGlobalMessage(); // works
console.log('Still in scope', globalMessage);

// Function scope //////////////////////////////////////////////////////////////
const showLocalMessage = function () {
  const localMessage = 'Goobye Cruel World';
  console.log( localMessage ); // works
};

showLocalMessage();
// console.log('Still in scope', localMessage); // doesn't work

// var inside a block //////////////////////////////////////////////////////////
if (100 > 1) {
  var hotdogs = 999; // global scoped
  console.log( hotdogs );
}

// let inside a block //////////////////////////////////////////////////////////
if (200 > 1) {
  let goldfish = 777; // block scoped
  console.log( goldfish );
}
// console.log( goldfish ); // out of scope

////////////////////////////////////////////////////////////////////////////////
const bros = ['groucho', 'harpo', 'chico'];
for (let i = 0; i < bros.length; i++) {
  console.log( bros[i] );
}

// console.log( i );

// const inside a block ////////////////////////////////////////////////////////
// const has the same block scope as let
if (300 > 1) {
  const password = 'swordfish'; // block scope
  console.log( password );
}

// console.log( password );

// const greeting = function () {
//   const message = 'Hello cutie';
//   return message;
// }
//
// greeting();
// console.log( message );
//
// const result = greeting(); // 'Hello cutie'
// console.log( result );
//
// console.log( greeting()  );
