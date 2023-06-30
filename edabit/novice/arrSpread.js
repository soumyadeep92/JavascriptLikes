function insertMiddle(a, ...arr) {
    let mid = a.length / 2;
    let first = [];
    for (let i = 0; i < mid; i++) {
        first.push(a[i]);
    }
    let a1 = [...arr];
    for (let j = 0; j < a1[0].length; j++) {
        first.push(a1[0][j]);
    }
    for (let k = mid; k < a.length; k++) {
        first.push(a[k]);
    }
    return first;
}
console.log(insertMiddle([[1, 2], [5, 6]], [[3, 4]]));