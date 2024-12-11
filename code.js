function insertionSortReverse(array) {
  if (array.length == 0 || array.length == 1) {
    return array;
  }
  for(var i = array.length - 1; i >= 0; i--) {
    var val = array[i];
    var j;
    for(j = i-1; j >= 0 && array[j] < val; j--) {
      array[j+1] = array[j];
    }
    array[j+1] = val;
  }
  return array;
}
