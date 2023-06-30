function evenFibonacci(n)
{
    let evensum=0;
    let sum=0;
    let num=1;
    let x=0;
    let y=1;
    while(sum<=n-x)
    {
        if(num==1)
        {
            sum=1;
        }
        else
        {
            y=sum;
            sum=x+y;
            x=y;
            if(sum%2==0)
            {
                evensum+=sum;
            }
        }
        num+=1;
    }
    return evensum;
}
console.log(evenFibonacci(34));