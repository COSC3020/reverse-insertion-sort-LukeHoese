function insertionSortReverse(array) {
  for(var i = array.length; i >= 0; i--) {
    var val = arr[i];
    var j;
    for(j = i; j > 0 && array[j-1] > val; j--) {
      array[j] = array[j-1];
    }
    array[j] = val;
  }
  return array;
}
