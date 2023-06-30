//Return true if the string in the first element of the array contains all of the letters of the 
//string in the second element of the array.
function mutation1(arr) {
    let test = arr[1].toLowerCase();
    let target = arr[0].toLowerCase();
    for (let i = 0; i < test.length; i++) {
      if (target.indexOf(test[i]) < 0) return false;
    }
    return true;
}
function mutation2(arr) {
    return arr[1]
      .toLowerCase()
      .split("")
      .every(function(letter) {
        return arr[0].toLowerCase().indexOf(letter) !== -1;
      });
}
function mutation3([ target, test ], i = 0) {
    target = target.toLowerCase();
    test = test.toLowerCase();
    return i >= test.length
      ? true
      : !target.includes(test[i])
        ? false
        : mutation3([ target, test ], i + 1);
}
console.log(mutation1(["hello", "hey"]));