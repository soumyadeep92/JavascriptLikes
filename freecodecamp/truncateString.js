//Truncate a String. Truncate a string (first argument) if it is longer than the given maximum string length
//(second argument). Return the truncated string with a ... ending
function truncateString1(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
}
function truncateString2(str, num) {
    return str.length > num ? str.slice(0, num) + "..." : str;
}
console.log("A-tisket a-tasket A green and yellow basket", 8);