function isPalindrome(n)
{
    let k=0;
    let num=n;
    while(n!=0)
    {
        k*=10;
        k+=n%10;
        n=parseInt(n/10);
    }
    if(k==num)
    {
        return true;
    }
    else
    {
        return false;
    }
}
function largestPalindrome(n)
{
    let num=0;
    let max=0;
    for(let i=10**(n-1);i<10**n;i++)
    {
        for(let j=10**(n-1);j<10**n;j++)
        {
            num=i*j;
            if(isPalindrome(num)==true)
            {
                if(num>max)
                {
                    max=num;
                }
            }
        }
    }
    return max;
}
console.log(largestPalindrome(3));