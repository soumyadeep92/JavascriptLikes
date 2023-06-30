function sumOfResistors(n)
{
    let sum=0.0;
    for(let i=0;i<n.length;i++)
    {
        sum+=n[i];
    }
    return sum;
}
console.log(sumOfResistors([16, 3.5, 6]));
function spreadSum(a,...b)
{
    let c=[...b,a];
    console.log(c);
}
spreadSum(2,3,4,5);