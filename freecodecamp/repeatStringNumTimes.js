//Repeat a String Repeat a String. Repeat a given string str (first argument) for num times (second argument).
function repeatStringNumTimes1(str, num) {
    let accumulatedStr = "";
  
    for (let i = 0; i < num; i++) {
      accumulatedStr += str;
    }
  
    return accumulatedStr;
}
function repeatStringNumTimes2(str, num) {
    if (num < 1) {
      return "";
    } else {
      return str + repeatStringNumTimes2(str, num - 1);
    }
}
function repeatStringNumTimes3(str, num) {
    return num > 0 ? str + repeatStringNumTimes3(str, num - 1) : '';
}
console.log(repeatStringNumTimes1("abc", 3));