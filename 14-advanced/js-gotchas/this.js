// `this` lets us access the current object (from inside a method) without
// needing to know the name of the variable containing the object.

const groucho = {
  fullname: 'Groucho Marx',
  greeting: function () {
    return 'Good evening, my name is '  + this.fullname;
  }
};

console.log( 'method', groucho.greeting() );

// What if we remove the method from the object?
const unboundGreeting = groucho.greeting;
console.log( 'function/unbound', unboundGreeting() );

// bind() //////////////////////////////////////////////////////////////////////
const boundGreeting = groucho.greeting.bind(groucho);
console.log( 'function/bound', boundGreeting() ); // Can see the fullname.

const otherGreeting = groucho.greeting.bind({ fullname: 'Harpo Marx', residence: 'NYC' });
console.log( 'function/bound to a different object', otherGreeting() );

// call() //////////////////////////////////////////////////////////////////////
console.log( unboundGreeting.call(groucho) );
console.log( unboundGreeting.call( {fullname: 'Dame Judi Dench'}  ));

// apply() /////////////////////////////////////////////////////////////////////
console.log( unboundGreeting.apply(groucho) );
const numbers = [99, 88, 77, 66];

Math.max(numbers); // NaN

// Old fix:
Math.max.apply(Math, numbers); // 99

// ES6:
Math.max( ...numbers ); // spread operator
