function isPrime(n)
{
    if(n==1)
    {
        return false;
    }
    if(n==2)
    {
        return true;
    }
    else
    {
        let k=2;
        while(n>=k)
        {
            if(n%k==0 && n!=k)
            {
                return false;
            }
            else
            {
                k++;
            }
            if(n==k)
            {
                return true;
            }
        }
    }
}
function sumOfPrimes(n)
{
    let sum=0;
    for(let i=1;i<n;i++)
    {
        if(isPrime(i)==true)
        {
            sum+=i;
        }
    }
    return sum;
}
console.log(sumOfPrimes(2001));