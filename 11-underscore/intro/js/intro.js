console.log( _.VERSION );

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// .each ///////////////////////////////////////////////////////////////////////
// es5 or greater: .forEach

_(nums).each(function (n, index, entireArray) {
  console.log(`n: ${ n }, index: ${ index }, entireArray: ${ entireArray }`);
});

// Alternative syntax (preferred in the documentation)
// _.each(nums, function (n) {
//   console.log(n);
// });

// .each for objects ///////////////////////////////////////////////////////////
const sales = {
  'January': 15,
  'February': 11,
  'March': 8
};

_(sales).each(function (total, month) {
  console.log( `${total} sales in ${month}.` );
});

// .map ////////////////////////////////////////////////////////////////////////
const byNineteen = function (n) {
  return n * 19;
}

const result = _(nums).map(byNineteen);
console.log( result );

// .map with objects ///////////////////////////////////////////////////////////
const salesInfo = _(sales).map(function (total, month) {
  return `${ month } has ${ total } sales.`;
});

// .reduce() ///////////////////////////////////////////////////////////////////
const total = _(nums).reduce(function (runningTotal, n) {
  // console.log(`runningTotal: ${ runningTotal }, n: ${ n }, returning: ${ runningTotal + n }`);
  return runningTotal + n;
});
console.log(total);

// .reduce() also works for objects ////////////////////////////////////////////

// .find() /////////////////////////////////////////////////////////////////////
const divisibleByFive = function (candidate) {
  console.log(`Considering: ${ candidate }, returning: ${ candidate % 5 === 0 }`);
  return candidate % 5 === 0;
}

const firstMultipleOfFive = _(nums).find( divisibleByFive );
console.log( firstMultipleOfFive );

// .filter() ///////////////////////////////////////////////////////////////////
const allMultiplesOfFive = _(nums).filter( divisibleByFive );
console.log(allMultiplesOfFive);

// .reject() ///////////////////////////////////////////////////////////////////
const notDivisibleByFive = _(nums).reject( divisibleByFive );
console.log( notDivisibleByFive );

// .pluck() ////////////////////////////////////////////////////////////////////
const bros = [
  {name: 'Groucho', instrument: 'guitar', disposition: 'surly'},
  {name: 'Harpo', instrument: 'harp', disposition: 'sweet'},
  {name: 'Chico', instrument: 'piano', disposition: 'sleazy'}
];

console.log( _(bros).pluck('disposition') );
