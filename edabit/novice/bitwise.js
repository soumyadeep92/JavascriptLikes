function bitwiseAnd(x,y)
{
    return x & y;
}
function bitwiseOr(x,y)
{
    return x | y;
}
function bitwiseXor(x,y)
{
    return x ^ y;
}
function bitwise(x,y)
{
    console.log(bitwiseAnd(x,y));
    console.log(bitwiseOr(x,y));
    console.log(bitwiseXor(x,y));
}
bitwise(7,12);