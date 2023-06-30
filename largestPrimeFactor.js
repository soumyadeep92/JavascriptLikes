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
function largestPrimeFactor(n)
{
    let arr=[];
    let k=1;
    while(k<=n)
    {
        if(n%k==0)
        {
            if(isPrime(k)==true)
            {
                arr.push(k);
            }
            n/=k;
        }
        k++;
    }
    return arr[arr.length-1];
}
console.log(largestPrimeFactor(600851475143));