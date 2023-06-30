//2108
function isPalind(str) {
    let rs = "";
    for (let i = 0; i < str.length; i++) {
        rs += str.charAt(str.length - 1 - i);
    }
    return rs;
}

var firstPalindrome = function (words) {
    for (let i = 0; i < words.length; i++) {
        if (isPalind(words[i]) == words[i]) {
            return words[i]
        }
    }
    return "";
};

console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"]))