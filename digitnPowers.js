function isDigitPower(power)
{
    let sum=0;
    let arr=[];
    let j=0;
    for(let k=2**power;k<10**(power+1);k++)
    {
        j=k;
        while(j>0)
        {
            sum+=((j%10)**power);
            j=parseInt(j/10);
        }
        if(sum==k)
        {
            arr.push(k);
        }
        sum=0;
    }
    let sum_fin=0;
    for(let r=0;r<arr.length;r++)
    {
        sum_fin+=arr[r];
    }
    return sum_fin;
}
console.log(isDigitPower(4));
