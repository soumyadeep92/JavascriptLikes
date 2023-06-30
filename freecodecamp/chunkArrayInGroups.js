//Write a function that splits an array (first argument) into groups the length of size (second argument) 
//and returns them as a two-dimensional array.
function chunkArrayInGroups1(arr, size) {
    let temp = [];
    let result = [];
  
    for (let a = 0; a < arr.length; a++) {
      if (a % size !== size - 1) temp.push(arr[a]);
      else {
        temp.push(arr[a]);
        result.push(temp);
        temp = [];
      }
    }
  
    if (temp.length !== 0) result.push(temp);
    return result;
}
function chunkArrayInGroups2(arr, size) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += size) {
      newArr.push(arr.slice(i, i + size));
    }
    return newArr;
}
function chunkArrayInGroups3(arr, size) {
    // Break it up.
    let newArr = [];
    let i = 0;
  
    while (i < arr.length) {
      newArr.push(arr.slice(i, i + size));
      i += size;
    }
    return newArr;
}
function chunkArrayInGroups4(arr, size) {
    let newArr = [];
    while (arr.length > 0) {
      newArr.push(arr.splice(0, size));
    }
    return newArr;
}
function chunkArrayInGroups5(arr, size) {
    if (arr.length <= size) {
      return [arr];
    } else {
      return [arr.slice(0, size)].concat(
        chunkArrayInGroups(arr.slice(size), size)
      );
    }
}
console.log(chunkArrayInGroups1(["a", "b", "c", "d"], 2));