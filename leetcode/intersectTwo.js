//350
function intersect(arr1,arr2) {
    let result=[];
    for(let i of arr1) {
        if(arr2.indexOf(i)!=-1) {
            result.push(i);
        }
    }
    return result;
}