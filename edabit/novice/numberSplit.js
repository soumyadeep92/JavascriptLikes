function splitNum(a){
    let half1=parseInt(a/2)
    let half2=Math.ceil(a/2);
    if(half1>half2) {
        return [half2,half1];
    } else {
        return [half1,half2];
    }
    
}
console.log(splitNum(1));
console.log(splitNum(10));