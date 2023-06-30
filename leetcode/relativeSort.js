//1122
var relativeSortArray = function(arr1, arr2) {
    return arr1.sort((a,b) => (arr2.indexOf(a) === -1 ? arr1.length + a : arr2.indexOf(a)) - (arr2.indexOf(b) === -1 ? arr1.length + b : arr2.indexOf(b)));
};