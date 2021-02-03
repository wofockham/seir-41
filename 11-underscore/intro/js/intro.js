console.log( _.VERSION );

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
// const result = [];
// _(nums).each(function (n) {
//   result.push( 19 * n );
// });
//
// console.log( result );

const result = _(nums).map(function (n) {
  return 19 * n;
});
console.log( result );
