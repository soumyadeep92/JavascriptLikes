function makePlusFunction(num)
{
    return function calc(n)
    {
        return n+num;
    }
}
console.log(makePlusFunction(10)(2));