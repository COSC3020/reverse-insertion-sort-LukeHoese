function insertionSortReverse(array) {
  if (array.length == 0 || array.length == 1) {
    return array;
  }
  for(var i = array.length - 1; i >=0 <; i--) {
    var val = array[i];
    for(j = i+1; j < array.length && array[j] < val; j++) {
      array[j-1] = array[j];
    }
    array[j-1] = val;
  }
  return array;
}
