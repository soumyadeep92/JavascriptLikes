//Confirm the Ending. Check if a string (first argument, str) ends with the given target string (second argument, target).
function confirmEnding1(str, target) {
    return str.slice(str.length - target.length) === target;
}
function confirmEnding2(str, target) {
    let re = new RegExp(target + "$", "i");
  
    return re.test(str);
}
function confirmEnding3(str, target) {
    return str.slice(-target.length) === target
}
console.log(confirmEnding1("He has to give me a new name", "name"));