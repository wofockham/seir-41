function insertionSort (items) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    // preserve j in scope after the for loop block.
    for (var j = i-1; j >= 0 && items[j] > item; j--) {
      items[j+1] = items[j];
    }

    items[j+1] = item; // insertion
  }

  return items;
}

module.exports = insertionSort;
