function multiplesOf3and5(n)
{
    let i=1;
    let sum=0;
    while(i<n)
    {
        if(i%3==0 || i%5==0)
        {
            sum+=i;
        }
        i+=1;
    }
    return sum;
}
console.log(multiplesOf3and5(10));
console.log(multiplesOf3and5(49));