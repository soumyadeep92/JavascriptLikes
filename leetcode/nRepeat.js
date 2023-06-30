//961
var repeatedNTimes = function(nums) {
    let d=[]
    for(let i of nums) {
        if(d.includes(i)) {
            return i;
        } else {
            d.push(i);
        }
    }
}
console.log(repeatedNTimes([2,4,2,5,4,2]));