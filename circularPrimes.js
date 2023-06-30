function circularPrimes(n) 
{
    let i=2;
    let arr=[];
    let k_arr=[];
    while(i<=n)
    {
        k_arr=circularNum(i);
        let p=0;
        for(;p<k_arr.length;p++)
        {
            if(isPrime(k_arr[p])!=true)
            {
                break;
            }
        }
        if(p==k_arr.length)
        {
            arr.push(i);
        }
        i+=1;
    }
    return arr.length;
}
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
function circularNum(n1)
{
    let num=0;
    let arr=[];
    let n=n1;
    let rem=0;
    while(num!=n1)
    {
        num=0;
        rem=parseInt(n/10);
        num+=(n%10);
        num*=10**(digCount(n1)-1);
        num+=rem;
        n=num;
        arr.push(num);
    }
    return arr;
}
function digCount(n)
{
    let count=0;
    while(n>0)
    {
        n=parseInt(n/10);
        count++;
    }
    return count;
}
console.log(circularPrimes(100000));