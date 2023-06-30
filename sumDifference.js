function sumDifference(n)
{
    let sumsquare=0;
    let squaresum=0;
    for(let i=1;i<=n;i++)
    {
        squaresum+=(i*i);
        sumsquare+=i;
    }
    sumsquare=sumsquare**2;
    return sumsquare-squaresum;
}
console.log(sumDifference(20));