function pairElement1(str) {
    // Function to match each character with the base pair
    let matchWithBasePair = function(char, pairedArray) {
      switch (char) {
        case "A":
          pairedArray.push(["A", "T"]);
          break;
        case "T":
          pairedArray.push(["T", "A"]);
          break;
        case "C":
          pairedArray.push(["C", "G"]);
          break;
        case "G":
          pairedArray.push(["G", "C"]);
          break;
      }
    };
  
    // Find pair for every character in the string
    const paired = [];
    for (let i = 0; i < str.length; i++) {
      matchWithBasePair(str[i], paired);
    }
  
    return paired;
}
  
  // test here
pairElement1("GCG");
function pairElement2(str) {
    //create object for pair lookup
    var pairs = {
      A: "T",
      T: "A",
      C: "G",
      G: "C"
    };
    //split string into array of characters
    var arr = str.split("");
    //map character to array of character and matching pair
    return arr.map(x => [x, pairs[x]]);
}
  
  //test here
pairElement2("GCG");