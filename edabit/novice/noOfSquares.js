function noOfSquares(n)
{
    let first=0;
    for(let i=0;i<=n;i++)
    {
        if(i<=1)
        {
            first=first+i;
        }
        if(i>1)
        {
            first=first+Math.pow(i,2);
        }
    }
    return first;
}
console.log(noOfSquares(3));
console.log(noOfSquares(4));