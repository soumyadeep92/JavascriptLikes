function sumOfDivisors(n)
{
    let sum=0;
    let i=1;
    while(i<n)
    {
        if(n%i==0)
        {
            sum+=i;
        }
        i+=1;
    }
    return sum;
}
function isAmicable(n)
{
    if(n==sumOfDivisors(sumOfDivisors(n)) && sumOfDivisors(n)!=n)
    {
        return true;
    }
    else
    {
        return false;
    }
}
function sumAmicableNum(n)
{
    let sum=0;
    for(let i=1;i<=n;i++)
    {
        if(isAmicable(i)==true)
        {
            sum+=i;
        }
    }
    return sum;
}
console.log(sumAmicableNum(2000));