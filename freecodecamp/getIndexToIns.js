//Where do I Belong. Return the lowest index at which a value (second argument) should be inserted into an 
//array (first argument) once it has been sorted. The returned value should be a number.
function getIndexToIns1(arr, num) {
    arr.sort((a, b) => a - b);
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= num)
        return i;
    }
  
    return arr.length;
}
function getIndexToIns2(arr, num) {
    return arr.filter(val => num > val).length;
}
function getIndexToIns3(arr, num) {
    let index = arr
      .sort((curr, next) => curr - next)
      .findIndex(currNum => num <= currNum);
    return index === -1 ? arr.length : index;
}
function getIndexToIns4(arr, num) {
    return arr
      .concat(num)
      .sort((a, b) => a - b)
      .indexOf(num);
}
console.log(getIndexToIns1([1, 3, 4], 2));