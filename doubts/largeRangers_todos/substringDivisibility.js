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
function isSubstrDivisible(n)
{
    let s=n.toString().split('');
    let knum=0;
    let d=1;
    let arr_prime=[];
    for(let r=1;r<s.length-2;)
    {
        if(isPrime(d)===true)
        {
            arr_prime.push(d);
            r++;
        }
        d++;
    }
    for(let i=1;i<s.length-2;i+=1)
    {
        knum=s[i]+s[i+1]+s[i+2];
        if(knum%arr_prime[i-1]===0)
        {
            continue;
        }
        else
        {
            return false;
        }
    }
    return true;
}
console.log(isSubstrDivisible(1406357289));