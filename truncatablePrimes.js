function truncatablePrimes(n) 
{
    let arr=[];
    let arr1=[];
    let arr2=[];
    let count=0,count_fin=0;
    let i=8;
    let num_count=0;
    while(num_count<n)
    {
        arr1=leftToRight(i);
        arr2=rightToLeft(i);
        for(let j=0;j<arr1.length;j++)
        {
            if(arr1[j]==true && arr2[j]==true)
            {
                count++;
            }
        }
        if(count==(arr1.length+arr2.length)/2)
        {
            count_fin++;
            num_count++;
            arr.push(i);
        }
        count=0;
        i+=1;
    }
    return arr;
}
function leftToRight(n)
{
    let arr=[];
    let i=1;
    let k=0;
    while(k!=n)
    {
        k=n%(10**i);
        if(isPrime(k)==true)
        {
            arr.push(true);
        }
        else
        {
            arr.push(false);
        }
        i=i+1;
    }
    return arr;
}
function rightToLeft(n)
{
    let arr=[];
    let i=0;
    let k=1;
    let c=digitCount(n);
    while(c>0)
    {
        k=parseInt(n/(10**i));
        if(isPrime(k)==true)
        {
            arr.push(true);
        }
        else
        {
            arr.push(false);
        }
        i=i+1;
        c=c-1;
    }
    return arr;
}
function digitCount(n)
{
    let count=0;
    while(n>0)
    {
        count++;
        n=parseInt(n/10);
    }
    return count;
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
console.log(truncatablePrimes(9));
