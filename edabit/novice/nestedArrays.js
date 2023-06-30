function nestedArrays(a,b)
{
    let min_a=Math.min.apply(null,a);
    let max_a=Math.max.apply(null,a);
    let min_b=Math.min.apply(null,b);
    let max_b=Math.max.apply(null,b);
    if(min_a>min_b && max_a<max_b)
    {
        return true;
    }
    return false;
}
console.log(nestedArrays([1, 2, 3, 4], [0, 6]));