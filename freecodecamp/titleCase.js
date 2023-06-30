//Title Case a Sentence. Return the provided string with the first letter of each word capitalized.
//Make sure the rest of the word is in lower case.
function titleCase1(str) {
    const newTitle = str.split(" ");
    const updatedTitle = [];
    for (let st in newTitle) {
      updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
    }
    return updatedTitle.join(" ");
}
function titleCase2(str) {
    return str
      .toLowerCase()
      .split(" ")
      .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
      .join(" ");
}
function titleCase3(str) {
    return str
      .toLowerCase()
      .replace(/(^|\s)\S/g, L => L.toUpperCase());
}
console.log(titleCase1("I'm a little tea pot"));