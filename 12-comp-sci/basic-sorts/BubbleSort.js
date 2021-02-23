function bubbleSort(array) {
  let swapped = true; // Assume the worst.

  let end = array.length - 1;

  while (swapped === true) {
    swapped = false; // We haven't yet swapped anything in this iteration.
    for (let i = 0; i < end; i++) {
      if (array[i] > array[i+1]) {
        [ array[i], array[i+1] ] = [ array[i+1], array[i] ]; // Destructuring for parallel assignment.
        swapped = true;
      }
    }
    end--;
  }

  return array; // Everything is now sorted.
}

module.exports = bubbleSort;
