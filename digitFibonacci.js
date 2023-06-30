function countDigits(n)
{
    let count=0;
    while(n>0)
    {
        count++;
        n=parseInt(n/10);
    }
    return count;
}
function digitFibonacci(n)
{
    let x=1;
    let y=1;
    let sum=1;
    let count=2;
    while(countDigits(sum)<=n)
    {
        if(n==1)
        {
            return 1;
        }
        else
        {
            sum=x+y;
            x=y;
            y=sum;
            count++;
        }
        if(n==countDigits(sum))
        {
            return count;
        }
    }
}
console.log(digitFibonacci(5));