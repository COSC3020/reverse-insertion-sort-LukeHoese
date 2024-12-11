function insertionSortReverse(array) {
  // if base case (0 or 1 elements) array is already sorted, return array
  if (array.length == 0 || array.length == 1) {
    return array;
  }
  // loop over array starting at highest index and iterating to 0 index
  for(var i = array.length - 1; i >= 0; i--) {
    // initialize our current value
    var val = array[i];
    // loop over elements indexed above current value. if current element of inner loop iteration is smaller than current value, shift it to the left
    for(j = i+1; j < array.length && array[j] < val; j++) {
      array[j-1] = array[j];
    }
    // place value in its correct position
    array[j-1] = val;
  }
  return array;
}
