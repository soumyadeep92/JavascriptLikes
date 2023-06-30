function steamrollArray1(arr) {
    const flattenedArray = [];
    // Loop over array contents
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        // Recursively flatten entries that are arrays
        //  and push into the flattenedArray
        flattenedArray.push(...steamrollArray(arr[i]));
      } else {
        // Copy contents that are not arrays
        flattenedArray.push(arr[i]);
      }
    }
    return flattenedArray;
};
  
  // test here
steamrollArray1([1, [2], [3, [[4]]]]);
function steamrollArray2(arr) {
    const flat = [].concat(...arr);
    return flat.some(Array.isArray) ? steamrollArray2(flat) : flat;
}
  
steamrollArray2([1, [2], [3, [[4]]]]);
function steamrollArray3(arr) {
    return arr
      .toString()
      .replace(",,", ",") // "1,2,,3" => "1,2,3"
      .split(",") // ['1','2','3']
      .map(function(v) {
        if (v == "[object Object]") {
          // bring back empty objects
          return {};
        } else if (isNaN(v)) {
          // if not a number (string)
          return v;
        } else {
          return parseInt(v); // if a number in a string, convert it
        }
      });
}
function steamrollArray4(val,flatArr=[]) {
    val.forEach(item => {
      if (Array.isArray(item)) steamrollArray4(item, flatArr);
      else flatArr.push(item);
    });
    return flatArr;
}
function steamrollArray5(arr, flatArr = []) {
    const elem = arr.pop();
    return elem
      ? !Array.isArray(elem)
        ? steamrollArray(arr, [elem, ...flatArr])
        : steamrollArray(arr.concat(elem), flatArr)
      : flatArr;
}