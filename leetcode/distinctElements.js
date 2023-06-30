//2670
var distinctDifferenceArray = function(nums) {
    let arr=[];
    for(let i=0;i<nums.length;i++) {
        let left=nums.slice(0,i+1);
        let right=nums.slice(i+1,nums.length);
        let leftSet=new Set(left);
        let rightSet=new Set(right);
        let rightCount=rightSet.size;
        let leftCount=leftSet.size;
        let count=leftCount-rightCount;
        arr.push(count);
    }
    return arr;
};
console.log(distinctDifferenceArray([3,2,3,4,2]));