function largestFunction(f,g)
{
    if(f()>g())
    {
        return f();
    }
    return g();
}
console.log(largestFunction(()=>52,()=>21));