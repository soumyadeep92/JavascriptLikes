function sumFactorialDigits(n)
{
    let k=BigInt(factorial(n));
    let s=k.toString().split('');
    let sum=0;
    for(let i=0;i<s.length;i++)
    {
        sum+=parseInt(s[i]);
    }
    return sum;
}
function factorial(num)
{
    if(num==0 || num==1)
    {
        return BigInt(1);
    }
    else
    {
        return BigInt(num)*factorial(num-1);
    }
}
console.log(sumFactorialDigits(50));