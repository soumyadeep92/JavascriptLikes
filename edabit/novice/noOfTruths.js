function noOfTruths(n)
{
    let count=0;
    if(n.length===0) {
        return 'THe array input is empty';
    }
    else {
        n.forEach(obj=>{
            if(obj===true)
            {
                count++;
            }
        })
    }
    return count;
}
console.log(noOfTruths([true, false, false, true, false]));