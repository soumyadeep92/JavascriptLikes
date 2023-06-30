function countDivisors(n)
{
    let count=0;
    let i=1;
    while(i<=n)
    {
        if(n%i==0)
        {
            count+=1;
        }
        i++;
    }
    return count;
}
function divisorTriangularNumber(n)
{
    let num=1;
    let count=0;
    let nn=1;
    let sum=1;
    while(count<n)
    {
        nn=1;
        count=0;
        let p=1;
        while(nn<=num)
        {
            count=countDivisors(sum);
            nn++;
        }
        sum+=nn;
        num++;
    }
    return sum-num;
}
console.log(divisorTriangularNumber(23));