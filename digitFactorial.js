function digitFactorial() 
{
    let n=3;
    let i=3;
    let sumfact=0;
    let arr=[];
    while(i<100000)
    {
        while(n>0)
        {
            sumfact+=factorial(n%10);
            n=parseInt(n/10);
        }
        if(sumfact==i)
        {
            arr.push(i);
        }
        i+=1;
        sumfact=0;
        n=i;
    }
    return arr[0]+arr[1];
}
function factorial(n)
{
    if(n==0 || n==1)
    {
        return 1;
    }
    else
    {
        let fact=1;
        while(n>0)
        {
            fact=fact*(n);
            n=n-1;
        }
        return fact;
    }
}
console.log(digitFactorial());