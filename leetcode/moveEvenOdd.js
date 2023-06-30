//905
function moveArr(l) {
    let first;
    for(let i of l){
        let second;
        if(i%2==0) {
            second=i;
        }
        if(first<second && first && second) {
            let tempF=l.indexOf(first);
            let tempL=l.indexOf(second);
            let temp=l[tempF];
            l[tempF]=second;
            l[tempL]=temp;
        }
        if(i%2!=0) {
            first=i;
        }
    }
    return l;
}