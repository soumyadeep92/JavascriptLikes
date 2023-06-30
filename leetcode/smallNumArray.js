//2605
var minNumber = function(nums1, nums2) {
    let a=Math.min.apply(0,nums1);
    let b=Math.min.apply(0,nums2);
    return a*10+b;
};
console.log(minNumber([4,1,3],[5,7]));