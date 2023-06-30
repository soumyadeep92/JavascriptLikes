function nameScoreCalc(word) {
    let sum = 0;
    let alphabets = ["", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    for (let i = 0 ; i < word.length; i++)
      sum += alphabets.indexOf(word[i].toLowerCase());
    return sum;
}
function namesScores(arr) {
    arr = [...arr].sort();
    arr.unshift('');
    let total = 0;
    for (let i = 1 ; i < arr.length; i++)
      total += nameScoreCalc(arr[i]) * i;
    return total;
}
const test1 = ['THIS', 'IS', 'ONLY', 'A', 'TEST'];
console.log(namesScores(test1));