//Falsy Bouncer. Remove all falsy values from an array. Falsy values in JavaScript are false, null, 
//0, "", undefined, and NaN.
function bouncer1(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) newArray.push(arr[i]);
    }
    return newArray;
}
function bouncer2(arr) {
    return arr.filter(Boolean);
}
console.log(bouncer1([7, "ate", "", false, 9]));