class Person {
    name;
    age;
    constructor(name,age) {
        this.name=name;
        this.age=age;
    }
    compareAge(p) {
        if(p.age>this.age) {
            console.log(`${p.name} is older than ${this.name}`)
        } else {
            console.log(`${this.name} is older than ${p.name}`)
        }
    }
}
let p1 = new Person("Samuel", 24);
let p2 = new Person("Joel", 36);
let p3 = new Person("Lily", 24);
p1.compareAge(p2)