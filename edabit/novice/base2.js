function base2(n)
{
    let k=0;
    let arr=[];
    while(n>0)
    {
        k=n%2;
        n=parseInt(n/2);
        arr.push(k);
    }
    let numb=0;
    for(let i=arr.length-1;i>=0;i--)
    {
        numb*=10;
        numb+=arr[i];
    }
    return numb;
}

console.log(base2(10));