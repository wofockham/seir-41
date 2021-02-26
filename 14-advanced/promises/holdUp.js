// setTimeout expects a callback -- it does not Promises
// task: wrap setTimeout in a Promise

// YOUR CODE HERE
const holdUp = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

// Make this code work:
holdUp(3000).then(() => {
  console.log('3 seconds has passed');
});
