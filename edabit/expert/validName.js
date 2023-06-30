let validName = (string) => {
    let firstName = "";
    let middleName = "";
    let lastName = "";
    let spacecount = 0;
    let dotcount = 0;
    let e = "";
    //let f = true;
    for (let i = 0; i < string.length; i++) {
      if (string[i] === ".") {
        dotcount += 1;
      }
      if (string[i] === " ") {
        spacecount += 1;
      }
      if (spacecount === 0) {
        firstName += string[i];
      } else
      if (spacecount === 1) {
        if (string[i] !== " ") {
          middleName += string[i];
        }
      } else 
      if (spacecount === 2) {
        if (string[i] !== " ") {
          lastName += string[i];
        }
      }
    }
    if (string[string.length - 1] === ".") {
        dotcount -= 1;
    }
    //console.log("spacecount: " + spacecount);
    //console.log("firstName: " + firstName);
    //console.log("middleName: " + middleName);
    //console.log("lastName: " + lastName);
    let firstNameRegex = /^[A-Z][a-zA-Z]+$|^[A-Z]\W$/g;
    let a = firstNameRegex.test(firstName);
    let a1 = firstName.match(firstNameRegex);
    //console.log("a: " + a);
    //console.log("a1: " + a1);
    let middleNameRegex = /^[A-Z][a-zA-Z]+$|^[A-Z]\W$/g;
    let b = middleNameRegex.test(middleName);
    let b1 = middleName.match(middleNameRegex);
    //console.log("b: " + b);
    //console.log("b1: " + b1);
    let lastNameRegex = /^[A-Z][a-zA-Z]+$/g;
    let c = lastNameRegex.test(lastName);
    let c1 = lastName.match(lastNameRegex);
    //console.log("c: " + c);
    //console.log("c1: " + c1);
    //console.log("dotcount: " + dotcount);
      if (a === true && b === true && c === true && spacecount === 2
          && (dotcount === 0 || dotcount === 2)) {
        e = true;
      } else
      if (a === true && b === true && c === true && spacecount === 2 
          && (middleName[middleName.length - 1] === ".")) {
        e = true;
      } else
      if (a === true && b === true && spacecount === 1) {
        e = true; 
      } else
      e = false;
        //console.log("e: " + e);
        let fullName = firstName + " " + middleName + " " + lastName
        //console.log(fullName);
      return e;
};
  
console.log(validName("Herbert George Wells"));
console.log(validName("Herbert G. Wells"));
console.log(validName("H. Wells"));
console.log(validName("H. G. Wells"));
console.log(validName("Herbert"));
console.log(validName("h. Wells"));
console.log(validName("H Wells"));
console.log(validName("H. George Wells"));
console.log(validName("H. George W."));
console.log(validName("Herb. George Wells"));
console.log(validName("H. G Wells"));
console.log(validName("h. g. Wells"));
console.log(validName("H. G. W."));
console.log(validName("Herb. G. Wells"));
//console.log(validName(""));
//console.log(validName(""));