function strFix(s){
    let arr=s.split(' ');
    let first=arr[2];
    let third=arr[0];
    let temp=first;
    arr[2]=third;
    arr[0]=temp;
    let second=arr[1];
    let fourth=arr[3];
    let temp2=second;
    arr[1]=fourth;
    arr[3]=temp2;
    let strFixed=arr.join(' ');
    return strFixed;
}
console.log(strFix('import object from module_name'))