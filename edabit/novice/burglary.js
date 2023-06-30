const obj = { yourSignature: "", spouseSignature: "" };
function signYourName(a) {
    return a.yourSignature;
}
class Person {
    yourSignature;
    spouseSignature;
    constructor(yourSignature,spouseSignature) {
        this.yourSignature=yourSignature;
        this.spouseSignature=spouseSignature;
    }
}
let p1=new Person("Whatever","Nice try")
console.log(signYourName(p1));