function filterPosNums(arr){
    let filteredRes=arr.filter(e=>typeof(e)=='number');
    return filteredRes;
}
console.log(filterPosNums([1, 2, "a", "b"]));