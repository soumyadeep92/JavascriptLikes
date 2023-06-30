function gcd(num1,num2)
{
    let gcd=1;
    let x=2;
    if(num2%num1==0)
    {
            gcd=num1;
    }
    else
    {
        while(num1>1 && num2>1)
        {
            
            if(num1%x==0 && num2%x==0)
            {
                gcd=gcd*x;
                num1/=x;
                num2/=x;
            }
            else
            {
                x++;
            }
            if(x==num1 || x==num2)
            {
                break;
            }
        }
    }
    return gcd;
}
console.log(gcd(2,3));