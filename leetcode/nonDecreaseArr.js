//665
function checkDecrease(arr) {
    let count=0;
    for(let i=0;i<arr.length-2;i++) {
        let a=arr[i];
        let b=arr[i+1];
        let c=arr[i+2];
        if(a>b) {
            if(b>c) {
                return false;
            } else {
                count=count+1;
                continue;
            }
        }
        if(a<b) {
            if(b>c) {
                count=count+1;
            } else {
                continue;
            }
        }
        if(count>1) {
            return false;
        }
    }
    return true;
}
console.log(checkDecrease([1,2,3,4,6]));

