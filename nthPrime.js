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
function nthPrime(n)
{
    let prime=[];
    let k=1;
    let pr=2;
    while(k<=n)
    {
        if(isPrime(pr)==true)
        {
            prime.push(pr);
            k+=1;
        }
        pr+=1;
    }
    return prime[prime.length-1];
}
console.log(nthPrime(10001));