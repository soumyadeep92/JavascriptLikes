function dropElements1(arr, func) {
    while (arr.length > 0 && !func(arr[0])) {
      arr.shift();
    }
    return arr;
}
  
  // test here
dropElements1([1, 2, 3, 4], function(n) {
    return n >= 3;
});
function dropElements2(arr, func) {
    let sliceIndex = arr.findIndex(func);
    return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length);
}
  
  // test here
dropElements2([1, 2, 3, 4], function(n) {
    return n >= 3;
});
function dropElements3(arr, func) {
    // drop them elements.
    let originalLen = arr.length;
    for (let i = 0; i < originalLen; i++) {
      if (func(arr[0])) {
        break;
      } else {
        arr.shift();
      }
    }
    return arr;
}
  
  // test here
dropElements3([1, 2, 3, 4], function(n) {
    return n >= 3;
});
function dropElements4(arr, func, i = 0) {
    return i < arr.length && !func(arr[i])
      ? (dropElements4(arr.slice(i + 1), func, i))
      : arr;
}
  
  // test here
dropElements4([1, 2, 3, 4], function(n) {
    return n >= 3;
});